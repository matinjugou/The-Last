<template>
  <router-view></router-view>
</template>

<script>
import ComputeMain from '@/components/user/compute/computemain'
import StorageMain from '@/components/user/storage/storagemain'

export default {
  name: 'App',
  components: {
    ComputeMain,
    StorageMain,
  },
  data () {
    return {
      main_tab: null,
      main_drawer: false,
    }
  }
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
</style>