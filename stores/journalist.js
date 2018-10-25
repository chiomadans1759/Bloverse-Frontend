import Api from '../src/utils/Api';
import axios from 'axios';

export default {
  state: {
    posts: null,
    post: { keyPoints: [] }

  },
  actions: {
    async processPost({commit, rootState, state, dispatch}, params){
      if(params.shouldUploadImage){
        let newUrl = await dispatch('doUpload');
        commit('setPost', {imageUrl: newUrl});
      }
        
      let userId = rootState.auth.loggedInUser.id;
      // if(state.post.categories == 7){
      //   let { location: location, duration: duration, deviceType: device_type, category, country, body } = state.post;
      //   let payload = { location, duration, device_type, category, country, body, is_published: params.shouldPublish};
      //   console.log(payload)
      // }else{ 
      let payload;
      let { id, title, body, keyPoints: keypoint, imageUrl: image_url, category, country } = state.post;
      if (state.post.categories == 7) {
        let { location: location, duration: duration, deviceType: device_type, category, country, body } = state.post;
        payload = {  location, duration, device_type, category, country, body, is_published: params.shouldPublish};
        console.log(payload)
      }else{
      payload = { id, keypoint, image_url, title, body, category, country, is_published: params.shouldPublish };
      console.log(payload)
      }
      let response;
      if(id){
       let payload = { id, keypoint, image_url, title, body, is_published: params.shouldPublish } 
        response = await Api.put('journalists/' + userId + '/posts/' + id, payload, true);
      }else{
        response = await Api.post('journalists/' + userId + '/posts/', payload, true);
      }
      
      switch(response.statusCode){
        case 200:
        case 201:
          let { id, title, body, keypoint: keyPoints, image_url: imageUrl, category, country, is_published:isPublished=false, slug } = response.data.post;
          let updatedPost = { id, keyPoints, imageUrl, title, body, category, country, isPublished, slug };
          commit('setPost', updatedPost);
          return true;
        default:
          return false;
      }

    },
    async doUpload({state}){
      const cloudinary = {
        uploadPreset: 'pspvcsig',
        apiKey: '967987814344437',
        cloudName: 'naera'
      };
      const clUrl = `https://api.cloudinary.com/v1_1/${cloudinary.cloudName}/upload`;
      const formData = new FormData()
      formData.append('file', state.post.imageUrl);
      formData.append('upload_preset', cloudinary.uploadPreset);
      formData.append('folder', 'bloverse');
      const resp = await axios.post(clUrl, formData);
      console.log(resp.data.secure_url);
      return resp.data.secure_url;
    },
    async getMyPosts({commit, rootState}){
      let userId = rootState.auth.loggedInUser.id;
      commit('setLoading', true, { root: true });
      let response = await Api.get('journalists/' + userId + '/posts/', true);
      commit('setPosts', response.data.posts) ;
      commit('setLoading', false, { root: true });

    }
  },
  mutations: {
    setPost(state, props){
      state.post = {...state.post, ...props};
    },
    setPosts(state, props){
      state.posts = props
    },
    clearPost(state){
      state.post = { keyPoints: [], imageUrl: "https://res.cloudinary.com/naera/image/upload/v1532594342/945_S_fuswub.png"}
    }
  },
  getters: {
    isCreatingPost(state){
      return state.post.title || state.post.body || state.post.keyPoints.length > 0
    }
  }
}
