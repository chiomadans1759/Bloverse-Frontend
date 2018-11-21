import axios from 'axios';
import Api from '../src/utils/Api';

export default {
  state: {
    posts: null,
    post: { keyPoints: [{ index: 1, value: '', }, { index: 2, value: '' }, { index: 3, value: '' }] },
    metrics: {},

  },
  actions: {
    async processPost({ commit, rootState, state, dispatch }, params) {
      if (params.shouldUploadImage) {
        let newUrl = await dispatch('doUpload');
        commit('setPost', { imageUrl: newUrl });
      }
      // The commented codes on this section are for implementing travelCompetition posts
      let userId = rootState.auth.loggedInUser.id;
      let payload;

      let postId;

      if (state.post.category === 7) {
        let { id, title, location, duration, deviceType: device_type, imageUrl: image_url, category, country, body } = state.post;
        postId = id;
        payload = { id, title, location, duration, device_type, image_url, category, country, body, is_published: params.shouldPublish };
      } else {
        let { id, title, body, keyPoints: keypoint, imageUrl: image_url, category, country } = state.post;
        postId = id;
        payload = { id, keypoint: keypoint.map(point => point.value), image_url, title, body, category, country, is_published: params.shouldPublish };
      }

      let response;
      if (state.post.id) {
        //let payload = { keypoint, image_url, title, body, is_published: params.shouldPublish } 
        response = await Api.put('journalists/' + userId + '/posts/' + postId, payload, true);
      } else {
        response = await Api.post('journalists/' + userId + '/posts/', payload, true);
      }

      switch (response.statusCode) {
      case 200:
      case 201:{
        let {
          id,
          title,
          body,
          keypoint: keyPoints,
          image_url: imageUrl,
          category,
          country,
          is_published: isPublished = false,
          slug,
          location,
          duration,
          device_type
        } = response.data.post;
        let updatedPost = {
          id,
          keyPoints,
          imageUrl,
          title,
          body,
          category,
          country,
          isPublished,
          slug,
          location,
          duration,
          device_type
        };
        
        commit('setPost', updatedPost);

        return true;
      }
      default:
        return false;
      
      }
    },
    async doUpload({ state }) {
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
      // console.log(resp.data.secure_url);
      return resp.data.secure_url;
    },
    async getMyPosts({ commit, rootState }) {
      let userId = rootState.auth.loggedInUser.id;
      commit('setLoading', true, {
        root: true
      });
      let response = await Api.get('journalists/' + userId + '/posts/', true);
      commit('setPosts', response.data.posts);
      commit('setLoading', false, { root: true });

    },
    async getMyMetrics({ commit, rootState }) {
      let userId = rootState.auth.loggedInUser.id;
      commit('setLoading', true, {
        root: true
      });
      let response = await Api.get(`metrics/journalists/${userId}`);
      commit('setMyMetrics', response.data);
      commit('setLoading', false, {
        root: true
      });
    }
  },
  mutations: {
    setPost(state, props) {
      state.post = { ...state.post, ...props };
    },
    setPosts(state, props) {
      state.posts = props
    },
    clearPost(state) {
      state.post = {
        keyPoints: [{ index: 1, value: '', }, { index: 2, value: '' }, { index: 3, value: '' }],
        body: '',
        title: '',
        imageUrl: ''
      }
    },
    setMyMetrics(state, metrics) {
      state.metrics = metrics;
    }
  },
  getters: {
    isCreatingBasicPost(state) {
      return (state.post.title || state.post.body) && state.post.keyPoints.length > 0
    },
    isCreatingTravelPost(state) {
      return (state.post.title || state.post.body) && state.post.deviceType
    },
    views(state) {
      return state.metrics && state.metrics.views;
    },
    articles(state) {
      return state.metrics && state.metrics.publishedArticles;
    }
    // countries(state){
    //   return state.metrics.country;
    // }
  }
}
