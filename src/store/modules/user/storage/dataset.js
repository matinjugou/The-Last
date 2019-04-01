/* eslint-disable */
import api from '../../../fake/user/storage/dataset';
import utils from '../../../utils';
import types from '../../../mutation-types';

const state = {
  loading: false,
  dataset_collection: [],
};

const actions = {
  getDatasetCollection({ commit }) {
    return utils.wrapLoading(commit, api.getDatasetCollection())
    .then((res) => {
      res.data.data.sort(function (a, b) {
        if (a.name < b.name) return -1;
        return 1;
      });
      commit(types.SET_DATA, { dataset_collection: res.data.data });
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
