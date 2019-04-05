<template>
    <v-container fill-height style="padding: 0;" fluid>
       <v-layout>
           <v-navigation-drawer width="160px"
                                temporary
                                absolute
                                v-model="left_draw">
               <v-list dense>
                   <v-list-tile @click="change_tab(0)">
                       <v-list-tile-action>
                           <v-icon>code</v-icon>
                       </v-list-tile-action>
                       <v-list-tile-content>
                           <v-list-tile-title>算法</v-list-tile-title>
                       </v-list-tile-content>
                   </v-list-tile>
                   <v-list-tile @click="change_tab(1)">
                       <v-list-tile-action>
                           <v-icon>timeline</v-icon>
                       </v-list-tile-action>
                       <v-list-tile-content>
                           <v-list-tile-title>数据</v-list-tile-title>
                       </v-list-tile-content>
                   </v-list-tile>
                   <v-list-tile @click="change_tab(2)">
                       <v-list-tile-action>
                           <v-icon>library_books</v-icon>
                       </v-list-tile-action>
                       <v-list-tile-content>
                           <v-list-tile-title>模型</v-list-tile-title>
                       </v-list-tile-content>
                   </v-list-tile>
                   <v-list-tile @click="change_tab(3)">
                       <v-list-tile-action>
                           <v-icon>file_copy</v-icon>
                       </v-list-tile-action>
                       <v-list-tile-content>
                           <v-list-tile-title>文件</v-list-tile-title>
                       </v-list-tile-content>
                   </v-list-tile>
               </v-list>
           </v-navigation-drawer>
           <v-container style="padding: 0; background-color: white" fill-height fluid>
               <v-layout align-start>
                   <Algorithm v-if="chosen_tab===0" v-bind:left_draw.sync="left_draw"></Algorithm>
                   <Dataset v-if="chosen_tab===1" v-bind:left_draw.sync="left_draw"></Dataset>
               </v-layout>
           </v-container>
       </v-layout>
    </v-container>
</template>

<script>
import Algorithm from '@/components/user/storage/algorithm'
import Dataset from '@/components/user/storage/dataset'

export default {
  name: "storagemain",
  components: {
    Algorithm,
    Dataset
  },
  data() {
    return {
      left_draw: false,
      chosen_tab: 0,
      mini: false,
    }
  },
  methods: {
    change_tab(idx) {
      this.chosen_tab = idx;
      this.left_draw = false;
    }
  }
}
</script>

<style scoped>

</style>