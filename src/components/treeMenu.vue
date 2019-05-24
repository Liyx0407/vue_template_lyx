<template>
  <div>
    <template v-for="(menu,index) in data">
      <el-submenu :index="menu.index" v-if="!menu.isContent" :key="index">
        <template slot="title">
          <!-- <i class="el-icon-plus"></i> -->
          {{menu.name}}
        </template>
        <tree-menu :data="menu.list"></tree-menu>
      </el-submenu>
      <el-menu-item v-else :index="menu.index" :key="index">{{menu.name}}</el-menu-item>
    </template>
  </div>
</template>

<script>
import treeMenu from "./treeMenu.vue";

export default {
    name:"treeMenu",
  components: {
    treeMenu
  },
  props: {
    data: {
      type: Array
    }
  }
};
</script>

<style>
</style>
