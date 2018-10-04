import Vuex from 'vuex'
import Vue from 'vue'
import auth from './auth'
import general from './general'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    general
  }
})
