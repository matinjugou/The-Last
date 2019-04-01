import api from './index';

export default {
  get_dataset_collection() {
    return api.get('/dataset/list', {
      headers: {
        'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiVVNFUjQ0YzJmMDg3MTFlODhkNDkzNGUxMmRkMDdjMDcifQ.tTreGqT37IMNgOGqnLLa3ylFjRN-7K-pfmnzgvReNdY',
      },
    });
  },
};
