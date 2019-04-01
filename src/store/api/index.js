import axios from 'axios';

axios.defaults.baseURL = 'http://192.168.10.22:31524';

/*
import router from '../../router/index';


const CODE_UNAUTHORIZED = 401;

const checkAuthorization = (data) => {
  if (data.code === CODE_UNAUTHORIZED) {
    setTimeout(() => {
      if (router.currentRoute.name !== 'Login') {
        router.replace({
          name: 'Login',
          query: {
            from: router.currentRoute.fullPath,
          },
        });
      }
    });
  }
};

axios.interceptors.response.use((resp) => {
  const data = resp.data;
  checkAuthorization(data);
  if (data.code >= 400) {
    return Promise.reject(data);
  }
  return data.data;
}, (error) => {
  const data = error.response.data;
  checkAuthorization(data);
  throw data;
});
*/

export default axios;
