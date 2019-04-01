import types from './mutation-types';

export default {
  wrapLoading(commit, promise) {
    commit(types.SET_LOADING, true);
    if (promise instanceof Function) {
      // eslint-disable-next-line
      promise = promise();
    }
    return promise.finally(() => {
      commit(types.SET_LOADING, false);
    });
  },
  getItem(obj, oObj, key, dft = null) {
    if (obj[key] != null) return obj[key];
    if (oObj[key] != null) return oObj[key];
    return dft;
  },
};
