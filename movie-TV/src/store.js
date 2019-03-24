import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    readAPI: []
  },
  mutations: {
    SET_READ_API: (state, payload) => {
      state.readAPI = payload.readAPI;
    }
  },
  actions: {
    setReadAPI: (store, payload) => {
      store.commit('SET_READ_API', payload);
    }
  },
  getters: {
    getReadAPI(state){
      return state.readAPI;
    }
  }  
})
