<template>
  <div id="app">
    <vueCity></vueCity>
  </div>
</template>

<script>
import vueCity from './lib//vueCity.vue'
export default {
    components:{
        vueCity
    }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
