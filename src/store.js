import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    direction: 'forward'
  },
  mutations: {
    UPDATE_DIRECTION (state, direction) {
      state.direction = direction
    }
  }
})
