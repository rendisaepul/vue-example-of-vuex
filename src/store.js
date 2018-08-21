import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(Vuex);
Vue.use(VueAxios, axios);

export default new Vuex.Store({
  state: {
    datas: [],
    loading: false,
  },
  actions: {
    fetchData({ commit }) {
      commit('SET_LOADING', true);
      axios.get('https://jsonplaceholder.typicode.com/comments?postId=1')
        .then((response) => {
          commit('SET_LOADING', false);
          commit('SET_DATAS', response.data);
        })
        .catch((error) => {
          console.log('error', error);
          commit('SET_LOADING', false);
        });
    },
  },
  mutations: {
    SET_LOADING(state, actions) {
      state.loading = actions;
    },
    SET_DATAS(state, actions) {
      state.datas = actions;
    },
  },
});
