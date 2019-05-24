<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import sideBar from "@/components/sideBar.vue";
import Header from "@/components/Header.vue";
export default {
 
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
body {
  margin: 0;
}

.el-header {
  padding: 0;
}

.el-container {
  height: 100vh;
  /* overflow: hidden; */
}
</style>
