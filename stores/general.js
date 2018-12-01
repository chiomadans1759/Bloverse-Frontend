import Api from '../src/utils/Api'

export default {
  state: {
    categories: null,
    countries: null,
    applicants: [],
    publishedPosts: [],
    currentPost: {},
    journalists: [],
    loading: false,
    metrics: {}
  },
  actions: {
    async setGeneralData({ commit }) {
      let response, categories, countries;

      response = await Api.get('categories/');

      switch (response.statusCode) {
      case 200:
        categories = response.data && response.data.categories;
        //Adds an object to select all categories to array 
        categories.unshift({id:'',name:'All'});

        categories = categories.sort((a, b) => {
          if (a.name > b.name) return 1;
          if (a.name == b.name) return 0;
          if (a.name < b.name) return -1;
        })

        response = await Api.get('countries/');
        countries = response.data && response.data.countries;
        //Adds an object to select all countries array 
        countries.unshift({id:'',name:'All'});
        countries = countries.sort((a, b) => {
          if (a.name > b.name) return 1;
          if (a.name == b.name) return 0;
          if (a.name < b.name) return -1;
        })
        commit('setCountries', countries);
        commit('setCategories', categories);
        return true;
      }
      return false;
    },
    async getGeneralMetrics({ commit }) {
      const response = await Api.get('metrics/general/');
      let { data } = response;
      commit('setMetrics', data);
    },
    async getAllApplicants({ commit }) {
      let response;
      response = await Api.get('applicants/', true);
      switch (response.statusCode) {
      case 200: // eslint-disable-line no-case-declarations
        //removes admin from applicants
        let onlyApplicants = response.data.applicants.filter(applicant => applicant.id !== 1);
        commit('setApplicants', onlyApplicants);
        return true;
      }

      return false;
    },

    async getAllJournalists({ commit }) {
      let response;
      response = await Api.get('journalists/');
      switch (response.statusCode) {
      case 200:
        commit('setJournalists', response.data.journalists);
        return true;
      }

      return false;
    },
    async rejectAcceptApplicants({ dispatch }, applicants) {
      let processedUsers = [];
      applicants.forEach(async applicant => {

        if (applicant.status === 1)
          return;
        const statusUpdated = await dispatch('processApplicant', applicant);
        if (statusUpdated) {
          processedUsers.push(applicant);
        }
      })
      await dispatch('getAllApplicants');
      return processedUsers;
    },
    async processApplicant(context, applicant) {
      let { id, status } = applicant;
      let response = await Api.put('applicants/' + id + '/', { status }, true);
      return response.statusCode === 200;
    },
    async getAllPublishedPosts({ commit }, { category, country }) {
      let response = await Api.get(`posts?is_published=true&category=${category}&country=${country}`);
      commit('setPublishedPosts', response.data.posts); 
    },
    async getPostBySlug({ commit }, { slug }) {
      let response = await Api.get(`posts?slug=${slug}`)
      commit('setCurrentPost', response.data.posts[0]);
    }
  },
  mutations: {
    /*setState(state, params){
      state = {...state, ...params}
    }*/

    setCategories(state, categories) {
      state.categories = categories;
    },
    setCountries(state, countries) {
      state.countries = countries;
    },
    setApplicants(state, applicants) {
      state.applicants = applicants;
    },
    setPublishedPosts(state, posts) {
      state.publishedPosts = posts;
    },
    setJournalists(state, journalists) {
      state.journalists = journalists;
    },
    setLoading(state, loading) {
      state.loading = loading;
    },
    setCurrentPost(state, post) {
      state.currentPost = post;
    },
    setMetrics(state, metrics) {
      state.metrics = metrics
    }
  },
  getters: {
    acceptedApplicants(state) {
      // Filter accepted applicants
      return state.applicants.filter(applicant => applicant.status === 2);
    },
    pendingApplicants(state) {
      // Filter pending applicants
      return state.applicants.filter(applicant => applicant.status === 1);
    },
    rejectedApplicants(state) {
      // Filter rejected applicants
      return state.applicants.filter(applicant => applicant.status === 3);
    },
    journalistCount(state) {
      return state.journalists.length;
    },
    postCount(state) {
      return state.publishedPosts.length;
    }
  }
}
