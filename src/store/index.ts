import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: JSON.parse(window.localStorage.getItem('user') || 'null') // 当前登录用户状态
  },
  mutations: {
    setUser (state, payLoad) {
      state.user = JSON.parse(payLoad)

      window.localStorage.setItem('user', payLoad)
    }
  },
  actions: {
  },
  modules: {
  }
})
