<template>
  <v-app>
    <Navbar/>
    <v-main>
      <HelloWorld/>
    </v-main>

    <v-footer grey>
      <div>
          <p> Mon Github : <a href="https://github.com/christmknd">Christ Mbombo Mokonda</a> </p>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Navbar from "@/components/Navbar";

export default {
  name: 'App',

  components: {
    HelloWorld, Navbar
  },

  data: () => ({
    //
  }),
};
</script>
