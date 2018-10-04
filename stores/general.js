import Api from '../src/Api'

export default {
  state: {
    categories: null,
    countries: null,
    applicants: null,
  },
  actions: {
    async setGeneralData ({commit}) {
      let response, categories, countries;

      response = await Api.get('categories');
      categories = response.data && response.data.categories;

      response = await Api.get('countries');
      countries = response.data && response.data.countries;

      commit('setCountries', countries);
      commit('setCategories', categories);
      //commit('setState', { categories, countries });
    },
    async getAllApplicants({commit}){
      let response, applicants;

      response = await Api.get('applicants', true);
      commit('setApplicants', response.data.applicants);
    }
  },
  mutations: {
    /*setState(state, params){
      state = {...state, ...params}
    }*/

    setCategories(state, categories){
      state.categories = categories;
    },
    setCountries(state, countries){
      state.countries = countries;
      console.log(state);
    },
    setApplicants(state, applicants){
      state.applicants = applicants;
    }
  },
  getters: {
    acceptedApplicants(state) {
      // Filter accepted applicants
      return state.applicants.filter(applicant=> applicant.status === 2);
    },
    pendingApplicants(state) {
      // Filter pending applicants
      return state.applicants.filter(applicant=> applicant.status === 1);
    },
    rejectedApplicants(state){
      // Filter rejected applicants
      return state.applicants.filter(applicant=> applicant.status === 3);
    }
  }
}
