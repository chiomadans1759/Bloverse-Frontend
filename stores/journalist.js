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
      
      let payload = { keypoint, image_url, title, body, category, country, isPublished: params.shouldPublish };

      let response;
      if(id){
        response = await Api.put('journalists/' + userId + '/posts/' + id, payload, true);
      }else{
        response = await Api.post('journalists/' + userId + '/posts/', payload, true);
      }
      
      switch(response.statusCode){
        case 200:
        case 201:
          let { id, title, body, keypoint: keyPoints, image_url: imageUrl, category, country, is_published:isPublished=false } = response.data.post;
          let updatedPost = { id, keyPoints, imageUrl, title, body, category, country, isPublished };
          commit('setPost', updatedPost);
          return true;
        default:
          return false;
      }

    },
  },
  mutations: {
    setPost(state, props){
      state.post = {...state.post, ...props};
    },
  },
  getters: {
    isCreatingPost(state){
      return state.post.title || state.post.body || state.post.keyPoints.length > 0
    }
  }
}
