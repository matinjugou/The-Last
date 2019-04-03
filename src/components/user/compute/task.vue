<template>
  <v-container fluid grid-list-xs style="margin: 0">
    <v-layout align-center style="margin-bottom: 7px">
      <h1>任务列表</h1>
      <v-spacer></v-spacer>
      <v-dialog v-model="new_task_dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
        <template v-slot:activator="{ on }">
          <v-btn color="info" style="margin: 0" v-on="on">新建任务</v-btn>
        </template>
        <v-card>
          <v-toolbar dark color="amber darken-1">
            <v-btn icon dark @click="new_task_dialog = false">
              <v-icon>close</v-icon>
            </v-btn>
            <v-toolbar-title>新建任务</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn dark flat @click="submit_new_task">新建</v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <v-list three-line subheader>
            <v-form dense>
              <v-container fluid>
                <h3>任务元信息</h3>
                <v-layout wrap>
                  <v-flex xs6>
                    <v-text-field v-model="new_task_form.name"
                                  dense
                                  :counter="false"
                                  label="任务名称"
                                  required></v-text-field>
                  </v-flex>
                  <v-flex xs6>
                    <v-text-field v-model="new_task_form.image"
                                  dense
                                  :counter="false"
                                  label="任务镜像"
                                  required></v-text-field>
                  </v-flex>
                  <v-flex xs6>
                    <v-text-field v-model="new_task_form.gpu"
                                  dense
                                  :counter="false"
                                  label="GPU资源数"
                                  required></v-text-field>
                  </v-flex>
                  <v-flex xs6>
                    <v-text-field v-model="new_task_form.entrance"
                                  dense
                                  :counter="false"
                                  label="执行入口"
                                  required></v-text-field>
                  </v-flex>
                  <v-flex xs6>
                    <v-select dense
                        v-model="new_task_form.main_algorithm"
                        :items="algorithm_collection.map(
                        (v)=>{return `${v.id}:${v.name}`})"
                        attach
                        chips
                        label="主函数"
                    ></v-select>
                  </v-flex>
                  <v-flex xs6>
                    <v-radio-group label="可见性"
                                   dense
                                   :column="false"
                                   v-model="new_task_form.visibility">
                      <v-radio label="仅自己"
                               :value="1"></v-radio>
                      <v-radio label="群组"
                               :value="2"></v-radio>
                      <v-radio label="所有人"
                               :value="3"></v-radio>
                    </v-radio-group>
                  </v-flex>
                  <v-flex xs12>
                    <v-textarea v-model="new_task_form.description"
                                dense
                                label="任务描述"
                                required
                    ></v-textarea>
                  </v-flex>
                </v-layout>
              </v-container>
              <v-container fluid>
                <h3>所需文件</h3>
                <v-layout wrap>
                  <v-flex xs6>
                    <v-select
                        dense
                        small-chips
                        clearable
                        v-model="new_task_form.algorithms"
                        :items="algorithm_collection.map(
                        (v)=>{return `${v.id}:${v.name}`})"
                        attach
                        chips
                        label="算法"
                        multiple
                    ></v-select>
                  </v-flex>
                  <v-flex xs6>
                    <v-select
                        dense
                        small-chips
                        clearable
                        v-model="new_task_form.datasets"
                        :items="dataset_collection.map(
                        (v)=>{return `${v.id}:${v.name}`})"
                        attach
                        chips
                        label="数据"
                        multiple
                    ></v-select>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-form>
          </v-list>
        </v-card>
      </v-dialog>
    </v-layout>
    <v-layout>
      <v-flex xs12>
        <v-data-table class="elevation-1"
                      :headers="headers"
                      :rows-per-page-items="[10, 20]"
                      rows-per-page-text="每页记录数"
                      :items="task_collection">
          <template v-slot:items="props">
            <td>
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <span v-on="on">{{ props.item.id }}</span>
                </template>
                <span>{{ props.item.description }}</span>
              </v-tooltip>
            </td>
            <td>{{ props.item.name }}</td>
            <td>{{ props.item.entrance }}</td>
            <td>{{ props.item.upload_time }}</td>
            <td>{{ props.item.status }}</td>
            <td>
              <v-icon small
                      class="mr-2"
                      @click="editItem(props.item)">
                edit
              </v-icon>
              <v-icon small
                      @click="deleteItem(props.item)">
                delete
              </v-icon>
            </td>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import { mapState, mapActions } from 'vuex';
  export default {
    name: "task",
    data() {
      return {
        new_task_form: {},
        
        new_task_dialog: false,
      }
    },
    computed: {
      ...mapState('user_storage_algorithm', [
        'algorithm_collection',
      ]),
      ...mapState('user_storage_dataset', [
        'dataset_collection',
      ])
    },
    methods: {
      ...mapActions('user_storage_algorithm', [
        'get_algorithm_collection',
      ]),
      ...mapActions('user_storage_dataset', [
        'get_dataset_collection',
      ]),
      submit_new_task() {
      },
    },
    mounted() {
      this.get_algorithm_collection();
      this.get_dataset_collection();
    }
  }
</script>

<style scoped>

</style>