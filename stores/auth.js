import Api from '../src/Api';

export default {
  state: {
    jwt: null,
    newUser: {},
    applicant: { articles: [] },
    loggedInUser: null
  },
  actions: {
    login ({commit}, params) {
      //let reponse = await Api.post('authentication')
    },
    async apply ({commit, state}){
      let response = await Api.post('applicants', state.applicant)
      switch(response.statusCode){
        case 201:
          return true;
        default:
          return {errors: response.data};
      }
    }
  },
  mutations: {
    setApplicant(state, props){
      state.applicant = {...state.applicant, ...props};
    },
    setNewUser(state, props){
      state.newUser = {...state.newUser, ...props};
    },
    setJwt(state, jwt){
      state.jwt = jwt
    },
    setCurrentUser(state, user){
      state.user = user;
    }
  }
}
