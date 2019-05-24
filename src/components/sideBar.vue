
<template>
  <div class="sidebar">
    <el-menu
      theme="dark"
      :collapse-transition="true"
      :default-active="activeIndex"
      class="el-menu"
      @select="handleSelect"
    >
      <template v-for="(item,index) in menuList">
        <el-submenu :index="item.index" :key="index" v-if="!item.isContent">
          <template slot="title">
            <!-- <i class="el-icon-menu"></i> -->
            <img src="../../static/images/icon.png" alt srcset class="icon">
            <span slot="title">{{ item.name }}</span>
          </template>
          <tree-menu :data="item.list"></tree-menu>
        </el-submenu>

        <el-menu-item :index="item.index" :key="index" v-else>
          <img src="../../static/images/icon.png" alt srcset class="icon">
          {{item.name}}
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
import treeMenu from "./treeMenu.vue";
export default {
  components: {
    treeMenu
  },
  data() {
    return {
      activeIndex: "organization",
      menuList: [
        {
          name: "首页",
          index: "appSystem",
          isContent: true,
          icon: "",
          list: []
        }
      ]
    };
  },
  mounted() {
    let activeIndex = this.$store.state.system.activeIndex;
    if (activeIndex) {
      this.activeIndex = activeIndex;
      console.log(activeIndex, this.$store.state);
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.$store.dispatch("addActiveIndex", key);
      this.$router.push({ path: `/${key}` });
    }
  }
};
</script>

<style lang="scss">
.sidebar {
  height: 90%;

  .icon {
    width: 20px;
    height: 20px;
  }
  .el-menu {
    height: 100%;
    .el-menu-item {
      border-bottom: 1px solid #ccc;
    }
  }
}
</style>
