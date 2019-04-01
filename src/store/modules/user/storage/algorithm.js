/* eslint-disable */
import api from '../../../api/user/storage/algorithm';
import utils from '../../../utils';
import types from '../../../mutation-types';

const state = {
  loading: false,
  algorithm_collection: [],
};

const actions = {
  get_algorithm_collection({ commit }) {
    return utils.wrapLoading(commit, api.get_algorithm_collection())
    .then((res) => {
      console.log(res);
      commit(types.SET_DATA, { algorithm_collection: res.data });
      return res;
    }).catch((err) => {
      console.error(err);
    });
  },
  create_algorithm({ commit }, configs) {
    return utils.wrapLoading(commit, api.create_algorithm(configs))
    .then((res) => {
      return res;
    }).catch((err) => {
      console.error(err);
    });
  },
};

const setData = (oState, nState) => {
  state.algorithm_collection = utils.getItem(nState, oState, 'algorithm_collection');
  state.loading = utils.getItem(nState, oState, 'loading');
};

const mutations = {
  [types.SET_DATA](oState, nState) {
    setData(oState, nState);
  },
  [types.SET_LOADING] (state, loading = true) {
    state.loading = loading
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
