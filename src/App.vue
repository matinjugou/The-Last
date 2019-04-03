<template>
  <v-app>
    <v-toolbar color="amber darken-1" app tabs prominent>
      <v-toolbar-side-icon @click.stop="main_drawer=!main_drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="headline">
        <span><b>CLUSTER</b></span>
        <span class="font-weight-light"></span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-slot:extension>
        <v-tabs v-model="main_tab"
                dark
                grow
                centered
                slider-color="amber lighten-2"
        >
          <v-tab ripple>
            计算
          </v-tab>
          <v-tab ripple>
            存储
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>
    <v-navigation-drawer
            v-model="main_drawer"
            absolute
            temporary
            app
    >

      <v-list class="pa-0">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>John Leider</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0">
        <v-divider></v-divider>

        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>主页</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-content>
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