<template>
  <div id="app">
    <Calculatrice></Calculatrice>
  </div>
</template>

<script>
import Calculatrice from './components/Calculatrice.vue'

export default {
  name: 'App',
  components: {
    Calculatrice
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
