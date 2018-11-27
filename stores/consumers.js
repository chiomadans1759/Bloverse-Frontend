import axios from 'axios';

export default {
  state: {
    selectedCountries: [],
    selectedCategories: [],
    feedCategories: {},
    recentlyReadFeeds: {},
    RecentComments: {},
    postsFeed: {}
  },
  mutations: {
    setConsumerCountry(state, payload) {
      if (state.selectedCountries.includes(payload)) {
        let filtered = state.selectedCountries.filter((item) => {
          return item !== payload;
        })
        state.selectedCountries = filtered;
      } else {
        state.selectedCountries.push(payload);
      }
    },

    setConsumerCategory(state, payload) {
      if (state.selectedCategories.includes(payload)) {
        let filtered = state.selectedCategories.filter((item) => {
          return item !== payload;
        })
        state.selectedCategories = filtered;
      } else {
        state.selectedCategories.push(payload);
      }
    },

    async setFeedCategories(state) {
      try {
        let res = await axios.get('http://demo4155374.mockable.io/categories');
        state.feedCategories = res.data
      } catch (e) {
        // console.log(e);
      }
    },

    setRecentComments() {

    },

    setRecentlyReads() {

    },

    setRecentlyCommented() {

    }
  },
  actions: {
    addToCountries(context, payload) {
      context.commit('setConsumerCountry', payload);
    },

    addToCategories(context, payload) {
      context.commit('setConsumerCategory', payload);
    },

    getFeedCategories(context) {
      context.commit('setFeedCategories');
    },

    getRecentComments(context) {
      context.commit('setRecentComments');
    },

    getRecentlyReads(context) {
      context.commit('setRecentlyReads');
    },

    getRecentlyCommented(context) {
      context.commit('setRecentlyCommented');
    }
  }
}
