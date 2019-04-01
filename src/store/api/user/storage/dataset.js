import api from './index';

export default {
  getDatasetCollection() {
    return api.get('/dataset/list');
  },
  getDatasetDetail(id) {
    return api.get(`/dataset/${id}`);
  },
  getDatasetTreeNode(id) {
    if (id === null) return api.get('/dataset/tree/root');
    return api.get(`/dataset/tree/${id}/child`);
  },
};
