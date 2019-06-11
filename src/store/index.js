import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './action'
import * as mutations from './mutations'

Vue.use(Vuex)

const state = {
  username: ''
}
const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

export default store
