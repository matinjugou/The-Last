<template>
  <v-container fill-height fluid>
    <v-navigation-drawer
      width="160px"
      permanent
      style="z-index: 0"
    >
      <v-list dense>
        <v-list-tile @click="chosen_tab=0">
            <v-list-tile-action>
                <v-icon>dns</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title>计算任务</v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="chosen_tab=1">
            <v-list-tile-action>
                <v-icon>description</v-icon>
            </v-list-tile-action>
          <v-list-tile-content>
              <v-list-tile-title>即时计算</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-container fill-height style="padding: 0; background-color: white" fluid>
        <v-layout align-start>
            <Task v-if="chosen_tab===0"></Task>
            <Notebook v-if="chosen_tab===1"></Notebook>
        </v-layout>
    </v-container>
  </v-container>
</template>

<script>
import Task from './task'
import Notebook from './notebook'

export default {
  name: "main-compute",
  components: {Notebook, Task},
  data() {
    return {
      chosen_tab: 0,
    }
  }
}
</script>

<style scoped>

</style>