import axios from 'axios';
import Api from '../src/utils/Api'

export default {
  state: {
    tinyMiceValue: "",
    categories: null,
    countries: null,
    activeCategory: {
      id: '',
      name: 'All'
    },
    activeFeedLayout: 'grid',
    applicants: [],
    publishedPosts: [],
    publishedPostsLoading: false,
    postsPagingData: {
      next: null,
      previous: null
    },
    draftPosts: [],
    trendingPost: [],
    currentPost: {},
    journalists: [],
    loading: false,
    metrics: {},
    modal: { show: false, currentComponent: null },
    relatedPosts: {},
  },
  actions: {
    async setGeneralData({ commit }) {
      let response, categories, countries;

      response = await Api.get('categories/');

      switch (response.statusCode) {
      case 200:
        categories = response.data && response.data.categories;
        //Adds an object to select all categories to array 
        categories.unshift({
          id: '',
          name: 'All'
        });

        categories = categories.sort((a, b) => {
          if (a.name > b.name) return 1;
          if (a.name == b.name) return 0;
          if (a.name < b.name) return -1;
        })

        response = await Api.get('countries/');
        countries = response.data && response.data.countries;
        //Adds an object to select all countries array 
        countries.unshift({
          id: '',
          name: 'All'
        });
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
    async getGeneralMetrics({
      commit
    }) {
      const response = await Api.get('metrics/general/');
      let {
        data
      } = response;
      commit('setMetrics', data);
    },
    async getAllApplicants({
      commit
    }) {
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
    async doUpload(params, imageUrl) {
      const cloudinary = {
        uploadPreset: process.env.VUE_APP_CL_UPLOAD_PRESET,
        apiKey: process.env.VUE_APP_CL_API_KEY,
        cloudName: process.env.VUE_APP_CL_CLOUD_NAME,
        folder: process.env.VUE_APP_CL_FOLDER
      };
      const clUrl = `https://api.cloudinary.com/v1_1/${cloudinary.cloudName}/upload`;
      const formData = new FormData()
      formData.append('file', imageUrl);
      formData.append('upload_preset', cloudinary.uploadPreset);
      formData.append('folder', cloudinary.folder);
      const resp = await axios.post(clUrl, formData);
      return resp.data.secure_url;
    },
    async getAllJournalists({
      commit
    }) {
      let response;
      response = await Api.get('journalists/');
      switch (response.statusCode) {
      case 200:
        commit('setJournalists', response.data.journalists);
        return true;
      }

      return false;
    },
    async rejectAcceptApplicants({dispatch}, applicants) {
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
      let response = await Api.put('applicants/' + id + '/', {status}, true);
      return response.statusCode === 200;   
    },
    async getAllPublishedPosts({ commit, state }, { category = "", country = "" }) {
      try {
        if(state.postsPagingData.next === null) {
          commit('setPublishedPostsLoading', true);
          let response = await Api.get(`posts?is_published=true&category=${category}&country=${country}`);
          commit('setPostsPagingData', response.data.pagination);
          commit('setPublishedPosts', response.data.posts);
          commit('setPublishedPostsLoading', false);
        }else {
          let response = await axios.get(state.postsPagingData.next);
          commit('setPostsPagingData', response.data.data.pagination);
          response.data.data.posts.forEach((data) => {
            commit('addPublishedPosts', data);
          })
        }
      } catch (error) {
        alert('Posts feed empty'); 
      }
    },
    async getAllDraftPosts({ commit }, { category = "", country = "" }) {
      let response = await Api.get(`posts?is_published=false&category=${category}&country=${country}`);
      commit('setDraftPosts', response.data.posts);
    },
    async getAllTrendingPosts({ commit }) {
      let response = await Api.get(`posts/trending/`);
      commit('setTrendingPost', response.data.post);
    },
    async getPostBySlug({
      commit
    }, {
      slug
    }) {
      let response = await Api.get(`posts?slug=${slug}`)
      commit('setCurrentPost', response.data.posts[0]);
    },
    async getSimilarPosts({ commit }, { post_id, threshold }) {
      let response = await Api.get(`posts/${post_id}/similar/?threshold=${threshold}`);
      commit('setRelatedPosts', response.data.posts);
    },
    publishedPostsIsLoading({ commit }, loading) {
      commit('setPublishedPostsLoading', loading);
    }
  },
  mutations: {
    setTinyMiceValue(state, value) {
      state.tinyMiceValue = value;
    },
    setModal(state, modal) {
      state.modal = modal
    },
    setCategories(state, categories) {
      state.categories = categories;
    },
    setCountries(state, countries) {
      state.countries = countries;
    },
    setApplicants(state, applicants) {
      state.applicants = applicants;
    },
    setPublishedPostsLoading(state, loading) {
      state.publishedPostsLoading = loading;
    },
    setPublishedPosts(state, posts) {
      state.publishedPosts = posts;
    },
    addPublishedPosts(state, posts) {
      state.publishedPosts.push(posts)
    },
    setPostsPagingData(state, payload) {
      state.postsPagingData = payload;
    },
    setDraftPosts(state, posts) {
      state.draftPosts = posts;
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
    },
    setTrendingPost(state, trending) {
      state.trendingPost = trending
    },
    setRelatedPosts(state, posts) {
      state.relatedPosts = posts
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
