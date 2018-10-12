import Api from '../src/Api';

export default {
  state: {
    posts: null,
    post: { keyPoints: [], imageUrl: "https://res.cloudinary.com/naera/image/upload/v1532594342/945_S_fuswub.png"}

  },
  actions: {
    async processPost({commit, rootState, state}, params){
      let userId = rootState.auth.loggedInUser.id;
      let { id, title, body, keyPoints: keypoint, imageUrl: image_url, category, country } = state.post;
      
      let payload = { keypoint, image_url, title, body, category, country, is_published: params.shouldPublish };

      let response;
      if(id){
        payload = { keypoint, image_url, title, body, is_published: params.shouldPublish };
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
    async getMyPost({commit, rootState}){
      let userId = rootState.auth.loggedInUser.id;
      let response = await Api.get('journalists/' + userId + '/posts/', true);
      commit('setPosts', response.data.posts) ;
    }
  },
  mutations: {
    setPost(state, props){
      state.post = {...state.post, ...props};
    },
    setPosts(state, props){
      state.posts = props
    }
  },
  getters: {
    isCreatingPost(state){
      return state.post.title || state.post.body || state.post.keyPoints.length > 0
    }
  }
}
