import Vue from 'vue'
import Vuex from 'vuex'

import user_storage_algorithm from './modules/user/storage/algorithm'
import user_storage_dataset from './modules/user/storage/dataset'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user_storage_algorithm,
    user_storage_dataset,
  }
})
