import Api from '../src/utils/Api'

export default {
  state: {
    categories: null,
    countries: null,
    applicants: null,
    publishedPosts: null,
    loading: false
  },
  actions: {
    async setGeneralData ({commit}) {
      let response, categories, countries;
      
      response = await Api.get('categories/');
      
      switch(response.statusCode){
        case 200:
          categories = response.data && response.data.categories;
          response = await Api.get('countries/');
          countries = response.data && response.data.countries;
          commit('setCountries', countries);
          commit('setCategories', categories);
          return true;
      }
      return false;
      //commit('setState', { categories, countries });
    },
    async getAllApplicants({commit}){
      let response, applicants;
      commit('setLoading', true);
      response = await Api.get('applicants/', true);
      switch(response.statusCode){
        case 200:
          //removes admin from applicants
          let onlyApplicants = response.data.applicants.filter(applicant=> applicant.id !== 1);

          commit('setApplicants', onlyApplicants);
          commit('setLoading', false);
          return true;
      }

      return false;
    },
    async rejectAcceptApplicants({dispatch}, applicants){
      let processedUsers = [];
      applicants.forEach(async applicant=> {

        if(applicant.status === 1)
          return;
        const statusUpdated = await dispatch('processApplicant', applicant);
        if (statusUpdated) {
          processedUsers.push(applicant);
        }
      })
      await dispatch('getAllApplicants');
      return processedUsers;
    },
    async processApplicant(context, applicant){
      let { id, status } = applicant;
      let response = await Api.put('applicants/'+id +'/', { status }, true);
      return response.statusCode === 200;
    },
    async getAllPublishedPosts({commit}){
      commit('setLoading', true);
      let response = await Api.get('posts?is_published=true')     
      commit('setPublishedPosts', response.data.posts);
      commit('setLoading', false);
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
    },
    setApplicants(state, applicants){
      state.applicants = applicants;
    },
    setPublishedPosts(state, posts){
      state.publishedPosts = posts;
    },
    setLoading(state, loading){
      state.loading = loading;
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
