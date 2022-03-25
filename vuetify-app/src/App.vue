<template>
  <v-app>
    <Navbar/>
    <v-spacer></v-spacer>
    <v-main>
      <Calculatrice/>
    </v-main>

    <v-footer grey>
      <div>
          <p> Mon Github : <a href="https://github.com/christmknd">Christ Mbombo Mokonda</a> </p>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
import Calculatrice from "@/components/Calculatrice";

export default {
  name: 'App',

  components: {
    Calculatrice, Navbar
  },

  data: () => ({
    //
  }),
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
