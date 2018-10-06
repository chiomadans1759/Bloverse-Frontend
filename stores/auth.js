import Api from '../src/Api';

export default {
  state: {
    jwt: null,
    newUser: {},
    applicant: { articles: [] },
    loggedInUser: null
  },
  actions: {
    async login ({commit}, params) {
      let response = await Api.post('authentication/', params)
      switch(response.statusCode){
        case 201:
          commit('setJwt', response.data.token);
          commit('setLoggedInUser', response.data.user)
          //localStorage.setItem('admin', JSON.stringify(data.data));
          return true;
        default:
          return { errors: response.data };
      }
    },
    async apply ({state}){
      let response = await Api.post('applicants/', state.applicant)
      switch(response.statusCode){
        case 201:
          return true;
        default:
          return { errors: response.data };
      }
    },
    async getApplicantById({commit},id){
      let response = await Api.get('applicants/'+id + '/')
      switch(response.statusCode){
        case 200:
          commit('setApplicant', response.data.applicant);
          break;
        case 404:
          commit('clearApplicant');
          break;
        default:
          return { errors: response.data };
      }
    },
    async applicantHasRegistered({state}){
      //Checks if an applicant had previously setup account as user
      let response = await Api.get('journalists?applicant='+state.applicant.id)
      return response.data.journalists.length > 0;
    },
  },
  mutations: {
    setApplicant(state, props){
      state.applicant = {...state.applicant, ...props};
    },
    clearApplicant(state){
      state.applicant = null;
    },
    setNewUser(state, props){
      state.newUser = {...state.newUser, ...props};
    },
    setJwt(state, jwt){
      state.jwt = jwt
    },
    setLoggedInUser(state, user){
      state.loggedInUser = user;
    }
  }
}
