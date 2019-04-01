<template>
  <v-container fill-height fluid>
    <v-navigation-drawer
      width="200"
      permanent
    >
      <v-list>
        <v-list-tile @click="">
            <v-list-tile-action>
                <v-icon>dns</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title>计算任务</v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
            <v-list-tile-action>
                <v-icon>description</v-icon>
            </v-list-tile-action>
          <v-list-tile-content>
              <v-list-tile-title>即时计算</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-container fill-height style="padding: 0;" fluid></v-container>
  </v-container>
</template>

<script>
export default {
  name: "main-compute",
  data() {
    return {
    }
  }
}
</script>

<style scoped>

</style>