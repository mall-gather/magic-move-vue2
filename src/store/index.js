import Vue from 'vue'
import Vuex from 'vuex'

import persistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {},
    token: '',
    orderConfirm: [],
  },
  mutations: {
    userInfo(state, payload) {
      state.userInfo = payload
    },
    token(state, payload) {
      state.token = payload
    },
    removeData(state) {
      state.userInfo = {}
      state.token = ''
    },
    orderConfirm(state, payload) {
      payload.forEach(element => {
        state.orderConfirm.push(element)
      });
    },
  },
  actions: {
    userInfo(context, products) {
      context.commit('userInfo', products)
    },
    token(context, products) {
      context.commit('token', products)
    },
    removeData(context) {
      context.commit('removeData')
    },
    orderConfirm(context, products) {
      context.state.orderConfirm = []
      context.commit('orderConfirm', products)
    },
  },
  getters: {
    orderConfirm: state => {
      return state.orderConfirm;
    },
    userInfo: state => {
      return state.userInfo;
    }
  },
  modules: {},
  plugins: [persistedState({
    storage: window.localStorage,
    key: 'forward-data',
    render(state) {
      return {
        ...state
      }
    }
  })]
})