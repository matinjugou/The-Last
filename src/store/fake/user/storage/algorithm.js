/* eslint-disable */
export default {
  data: {
    algorithm_collection: [
      {
        "id": "AW20180620205314211",
        "name": "PAS测试",
        "description": "PAS测试算法",
        "upload_time": "2019-01-15 08:25:22",
        "size": 22,
        "visibility": 3,
        "status": 3,
        "entrance": "main.train",
      },
    ],
  },
  get_algorithm_collection() {
    const data = this.data.algorithm_collection;
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
