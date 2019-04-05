<template>
    <v-container fluid grid-list-xs style="margin: 0">
        <v-layout align-center style="margin-bottom: 7px">
          <v-btn flat style="margin: 0" icon @click.stop="$emit('update:left_draw', true)">
            <v-icon>menu</v-icon>
          </v-btn>
          <h1>数据列表</h1>
          <v-spacer></v-spacer>
            <v-dialog v-model="new_dataset_dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
                <template v-slot:activator="{ on }">
                    <v-btn color="info" style="margin: 0" v-on="on">新建数据</v-btn>
                </template>
                <v-card>
                    <v-toolbar dark color="amber darken-1">
                        <v-btn icon dark @click="new_dataset_dialog = false">
                            <v-icon>close</v-icon>
                        </v-btn>
                        <v-toolbar-title>新建数据</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-toolbar-items>
                            <v-btn dark flat @click="submit_new_dataset">新建</v-btn>
                        </v-toolbar-items>
                    </v-toolbar>
                    <v-list three-line subheader>
                        <v-form dense>
                            <v-container fluid>
                                <h3>数据元信息</h3>
                                <v-layout wrap>
                                    <v-flex xs12 md4 lg3>
                                        <v-text-field v-model="new_dataset_form.name"
                                                      :counter="false"
                                                      label="数据名称"
                                                      required></v-text-field>
                                    </v-flex>
                                    <v-flex xs12>
                                        <v-textarea v-model="new_dataset_form.description"
                                                    label="数据描述"
                                                    required
                                        ></v-textarea>
                                    </v-flex>
                                    <v-flex xs12>
                                        <v-radio-group label="可见性"
                                                       dense
                                                       :column="false"
                                                       v-model="new_dataset_form.visibility">
                                            <v-radio label="仅自己可见"
                                                     :value="1"></v-radio>
                                            <v-radio label="群组可见"
                                                     :value="2"></v-radio>
                                            <v-radio label="所有人可见"
                                                     :value="3"></v-radio>
                                        </v-radio-group>
                                    </v-flex>
                                    <v-flex xs12>
                                        <v-text-field @click.native="$refs.dataset_file_upload_input.click()"
                                                      :readonly="true"
                                                      :value="new_dataset_form.file?
                                                       new_dataset_form.file.name: ''"
                                                      label="数据文件">
                                        </v-text-field>
                                        <input type="file"
                                               ref="dataset_file_upload_input"
                                               style="visibility: hidden"
                                               @change="(e)=>{new_dataset_form.file =  e.target.files[0]}">
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
                            :items="dataset_collection">
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
  name: "dataset",
  data() {
    return {
      headers: [
        { text: 'ID', value: 'id', width: 200 },
        { text: '名称', value: 'name', width: 200 },
        { text: '创建日期', value: 'upload_time', with: 200 },
        { text: '状态', value: 'status', with: 200 },
        { text: '操作', value: 'actions', width:200 },
      ],
      new_dataset_dialog: false,

      new_dataset_form: {
        name: '',
        entrance: '',
        description: '',
        visibility: 3,
        file: null,
      }
    }
  },
  props: [
    'left_draw',
  ],
  methods: {
    ...mapActions('user_storage_dataset', [
      'get_dataset_collection',
      'create_dataset'
    ]),
    submit_new_dataset() {
      const self = this;
      this.create_dataset({
        name: self.new_dataset_form.name,
        description: self.new_dataset_form.description,
        visibility: self.new_dataset_form.visibility,
        file: self.new_dataset_form.file,
      }).then(() => {
        /*
        this.$message({
          message: '算法新建成功',
          type: 'success',
        });
        */
        this.get_dataset_collection();
        this.new_dataset_dialog = false;
      }).catch((err)=>{
        console.error(err);
      });
    },
  },
  computed: {
    ...mapState('user_storage_dataset', [
      'dataset_collection',
    ])
  },
  mounted() {
    this.get_dataset_collection();
  }
}
</script>

<style scoped>

</style>