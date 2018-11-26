export default {
  state: {
    selectedCountries: [],
    selectedCategories: []
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
    }
  },
  actions: {
    addToCountries(context, payload) {
      context.commit('setConsumerCountry', payload);
    },

    addToCategories(context, payload) {
      context.commit('setConsumerCategory', payload);
    }
  }
}
