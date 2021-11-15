<template>
  <div id="app">
    <div>
        <router-link :to="{name: 'Home'}">
            <el-link>首页</el-link>
        </router-link>
        <router-link :to="{name: 'Tsingsee'}">
            <el-link>EasyPlayer</el-link>
        </router-link>
        <router-link :to="{name: 'JsmpegPlayer'}">
            <el-link>JsmpegPlayer</el-link>
        </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
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