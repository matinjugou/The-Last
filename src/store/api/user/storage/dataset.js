import api from './index';

export default {
  get_dataset_collection() {
    return api.get('/dataset/list', {
      headers: {
        'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiVVNFUjQ0YzJmMDg3MTFlODhkNDkzNGUxMmRkMDdjMDcifQ.tTreGqT37IMNgOGqnLLa3ylFjRN-7K-pfmnzgvReNdY',
      },
    });
  },
  create_dataset(configs) {
    const data = new FormData();
    data.append('name', configs.name);
    data.append('description', configs.description);
    data.append('visibility', configs.visibility);
    data.append('filename', configs.file.name);
    data.append('owner', 'USER44ccl2f08711e88d4934e12dd07c07');
    return api.post('/dataset/upload',
    data,
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiVVNFUjQ0YzJmMDg3MTFlODhkNDkzNGUxMmRkMDdjMDcifQ.tTreGqT37IMNgOGqnLLa3ylFjRN-7K-pfmnzgvReNdY',
      },
    }).then((res)=>{
      // eslint-disable-next-line
      console.log("Phase 1 res", res);
      const megabytes = 1024 * 1000;
      const chunk_size = 2 * megabytes;
      let data_start = 0;
      let data_end = data_start + chunk_size;
      if (data_end > configs.file.size) {
        data_end = configs.file.size;
      }
      let chunk_num = 0;
      const file_id = res.data.file_id;
      let chunk_file = null;
      const upload_chunk_file = (chunk_start, chunk_end) => {
        chunk_file = configs.file.slice(chunk_start, chunk_end);
        const chunk_data = new FormData();
        chunk_data.append('file', chunk_file);
        chunk_data.append('file_id', file_id);
        chunk_data.append('chunk', String(chunk_num));
        return api.post('/upload', chunk_data,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiVVNFUjQ0YzJmMDg3MTFlODhkNDkzNGUxMmRkMDdjMDcifQ.tTreGqT37IMNgOGqnLLa3ylFjRN-7K-pfmnzgvReNdY',
          },
        }).then((res) => {
          // eslint-disable-next-line
          console.log("Phase 2 res", res);
          chunk_num += 1;
          chunk_start += chunk_size;
          chunk_end += chunk_size;
          if (chunk_start > configs.file.size) {
            chunk_start = configs.file.size;
          }
          if (chunk_end > configs.file.size) {
            chunk_end = configs.file.size;
          }
          if (chunk_start < chunk_end) return upload_chunk_file(chunk_start, chunk_end);
          else return res;
        }).catch((err)=>{
          // eslint-disable-next-line
          console.error(err);
        });
      }
      return upload_chunk_file(data_start, data_end).then(()=>{
        const finish_data = new FormData();
        finish_data.append('file_id', file_id);
        return api.post('/upload_finish', finish_data,
        {
          headers: {
            // 'Content-Type': 'application/x-www-form-urlencoded',
            'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiVVNFUjQ0YzJmMDg3MTFlODhkNDkzNGUxMmRkMDdjMDcifQ.tTreGqT37IMNgOGqnLLa3ylFjRN-7K-pfmnzgvReNdY',
          },
        }).then((res)=>{
          return res;
        })
      });
    });
  }
};
