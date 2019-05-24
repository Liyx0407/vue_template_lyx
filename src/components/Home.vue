<template>
  <div class="home">
    <el-container style="height: 100%; border: 1px solid #eee">
      <el-aside>
        <div class="left">
          <img src="../../static/images/header.jpg" alt srcset class="header_Img">
          后台管理系统
        </div>
        <side-bar/>
      </el-aside>
      <el-container>
        <el-header>
          <my-header/>
        </el-header>
        <el-main>
          <div class="title">
            {{title}}
          </div>
          <my-card>
          <router-view/>
          </my-card>
        </el-main>
        <my-footer/>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import sideBar from "@/components/sideBar.vue";
import Header from "@/components/Header.vue";
import Card from "@/components/Card.vue";
import Footer from "@/components/Footer.vue";


export default {
  components: {
    "side-bar": sideBar,
    "my-header": Header,
    "my-card": Card,
    "my-footer":Footer
  },
  data() {
    return {
      title: ""
    };
  },
  watch: {
    $route(v) {
      this.title = v.meta.title;
    }
  },
  mounted() {
    this.title = this.$route.meta.title;
    // console.log(navigator);
    
  }
};
</script>

<style lang="scss">
.home {
  .el-aside{
    border-right: 1px solid #ccc;
    // box-shadow: 4px 0 5px -3px green;  

  }
  .left {
    display: flex;
    align-items: center;
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid #ccc;
    box-sizing: border-box;
  }
  .header_Img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 20px;
  }
  .el-main {
    box-sizing: content-box;
    overflow-x:scroll;
    .title{
      margin-bottom: 20px;
      color: #4394F5;
    }
    background: #f2f2f2;
  }
}
</style>
