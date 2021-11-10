<template>
  <div id="app">
    <!-- <EasyPlayerBox /> -->
    <EasyWasmPlayerBox />
  </div>
</template>

<script>
  import EasyPlayerBox from './components/EasyPlayerBox'
  import EasyWasmPlayerBox from './components/EasyWasmPlayerBox'
  export default {
    components: {
      EasyPlayerBox,
      EasyWasmPlayerBox
    },
    data() {
      return {
      }
    },
    mounted() {

    },
    methods: {

    }
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    // text-align: center;
    color: #2c3e50;
  }
</style>