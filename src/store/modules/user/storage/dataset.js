/* eslint-disable */
import api from '../../../api/user/storage/dataset';
import utils from '../../../utils';
import types from '../../../mutation-types';

const state = {
  loading: false,
  dataset_collection: [],
};

const actions = {
  get_dataset_collection({ commit }) {
    return utils.wrapLoading(commit, api.get_dataset_collection())
    .then((res) => {
      commit(types.SET_DATA, { dataset_collection: res.data });
      return res;
    }).catch((err) => {
      console.error(err);
    });
  },
  create_dataset({ commit }, configs) {
    return utils.wrapLoading(commit, api.create_dataset(configs))
    .then((res) => {
      return res;
    }).catch((err) => {
      console.error(err);
    });
  },
};

const setData = (oState, nState) => {
  state.dataset_collection = utils.getItem(nState, oState, 'dataset_collection');
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
