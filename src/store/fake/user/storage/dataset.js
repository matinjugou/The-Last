/* eslint-disable */
export default {
  data: {
    dataset_collection: [
      {
        "id": "DSET20180620205314211",
        "name": "天远测试数据",
        "description": "用于模型训练过程中测试用的数据",
        "upload_time": "2019-01-15 08:25:22",
        "size": 22,
        "visibility": 3,
        "status": 3,
      },
    ],
  },
  getDatasetCollection() {
    const data = this.data.dataset_collection;
    return new Promise(function (resolve) {
      resolve({
        data: {
          status: 200,
          data: data
        }
      })
    })
  },
};
