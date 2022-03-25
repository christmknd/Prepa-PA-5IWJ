<template>
<nav>
  <v-app-bar>
    <v-app-bar-nav-icon class="grey--text" @click="drawer =true"></v-app-bar-nav-icon>
    <v-app-bar-title>
      <span class="font-weight-light">Vuetify App</span>
    </v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn flat color="grey">
      <span> Sign out</span>
      <v-icon x-small right>mdi-logout</v-icon>
    </v-btn>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" app class="indigo">
    <v-list>
      <v-list-item-group
          v-model="group"
          active-class="grey--text text--accent-4">
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Account</v-list-item-title>
        </v-list-item>

      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>

</nav>
</template>

<script>
export default {
  data() {
    return {
      drawer:false,
      group: null,
    }
  }
}
</script>

<style scoped>

</style>
