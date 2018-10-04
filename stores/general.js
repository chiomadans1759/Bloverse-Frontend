import Api from '../src/Api'

export default {
  state: {
    categories: null,
    countries: null
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
    }
  }
}
