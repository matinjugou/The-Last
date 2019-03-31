<template>
  <v-app>
    <v-toolbar color="amber darken-1" app>
      <v-toolbar-title class="headline">
        <span>CLUSTER</span>
        <span class="font-weight-light"></span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-content>
      <v-tabs v-model="main_tab"
              dark
              grow
              centered
              slider-color="amber darken-1"
      >
        <v-tab ripple>
          计算
        </v-tab>
        <v-tab ripple>
          存储
        </v-tab>
      </v-tabs>
      <ComputeMain v-if="main_tab===0"></ComputeMain>
      <StorageMain v-if="main_tab===1"></StorageMain>
    </v-content>
  </v-app>
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