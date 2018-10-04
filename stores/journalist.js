import Api from '../src/Api';

export default {
  state: {
    posts: null,
    post: null
  },
  actions: {
    login ({commit}, params) {
      //let reponse = await Api.post('authentication')
    },
  },
  mutations: {
    setPost(state, props){
      state.post = {...state.post, ...props};
    },
  }
}
