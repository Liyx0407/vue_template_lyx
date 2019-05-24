<template>
  <div class="header">
    <div class="left">
      <img src="../../static/images/header.jpg" alt class="header_Img" srcset>
      <el-dropdown>
        <span>admin</span>
        <i class="el-icon-caret-bottom"></i>
        <el-dropdown-menu slot="dropdown" trigger="click">
          <el-dropdown-item @click.native="toUpdate">
            <i class="el-icon-edit"></i>
            修改资料
          </el-dropdown-item>
          <el-dropdown-item @click.native="logOut">
            <i class="el-icon-right"></i>
            退出登录
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logOut() {
      this.$router.push({ path: "/login" });
    },
    selectMenu(v) {
      console.log(v);
    },
    toUpdate() {
      this.$router.push("/updateInfo");
    }
  }
};
</script>

<style lang="scss">
.header {
  background: #034c90;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #fff;
  box-sizing: border-box;
  padding: 0 28px;
  .left {
    display: flex;
    align-items: center;
  }
  .header_Img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 20px;
  }
  .el-dropdown {
    color: #fff;
    cursor: pointer;
  }
}
</style>
