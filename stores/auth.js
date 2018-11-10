import Api from '../src/utils/Api';

export default {
  state: {
    jwt: null,
    newUser: { imageUrl: 'http://res.cloudinary.com/naera/image/upload/v1532107032/bloverse/hndx2wy0k2y2nykqcixu.jpg' },
    applicant: { articles: [] },
    loggedInUser: null,
    shouldRegister: false
  },
  actions: {
    async login ({commit, state}, params) {
      let response = await Api.post('authentication/', params)
      switch(response.statusCode){
        case 201:
          commit('setJwt', response.data.token);
          commit('setLoggedInUser', response.data.user)
          return true;
        default:
          return { errors: response.data };
      }
    },
    async apply ({state, commit}){
      let phone = state.applicant.phoneCode + state.applicant.phoneNumber;
      commit('setApplicant', {phone});
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
    async registerJournalist({state}){
      let response = await Api.post('journalists/', state.newUser);
      switch(response.statusCode){
        case 201:
          return true;
        default:
          return { errors: response.data };
      }
    },
    clearSession({commit}) {
      commit('setJwt', null);
      commit('setLoggedInUser', null);
      return true;
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
      if(jwt) 
        localStorage.setItem('jwt', jwt);
      else
        localStorage.removeItem('jwt');
    },
    setLoggedInUser(state, user){
      state.loggedInUser = user;
      if(user)
        localStorage.setItem('loggedInUser', JSON.stringify(user));
      else
        localStorage.removeItem('loggedInUser');
    },
    setUsername(state){
      state.newUser.username = `${state.newUser.firstName}.${state.newUser.lastName}`.toLowerCase();
    },
    setShouldRegister(state, value){
      state.shouldRegister = value;
      localStorage.setItem('shouldRegister', value);
    }
  },
  getters: {
    isAuthenticated(state){
      return state.loggedInUser !== null;
    },
    isAnAdmin(state){
      return state.loggedInUser.type === 'Admin';
    },
    isAJournalist(state){
      return state.loggedInUser.type === 'journalist';
    },
    allowedToRegister(state){
      return state.shouldRegister;
    }
  }
}
