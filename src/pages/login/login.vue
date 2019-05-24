<template>
  <div class="login_wrapper">
    <div class="login">
      <p class="login_title title">SSO单点登录系统</p>
      <el-form :model="formLogin" ref="ruleform" :rules="rules">
        <el-form-item prop="userid">
          <el-input v-model="formLogin.userid" placeholder="请输入用户名">
            <i slot="prefix" class="el-icon-user-solid"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="Password">
          <el-input v-model="formLogin.Password" type="password" placeholder="请输入密码">
            <i slot="prefix" class="el-icon-lock"></i>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="checked">记住密码</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="dologin()">登陆</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
// import reqLogin from "@/api/security/login";
export default {
  name: "login",
  data() {
    return {
      formLogin: {
        //表单对象
        browerfp: "",
        userid: "",
        Password: ""
      },
      vehicleList: [],
      checked: false,
      yhsdp: null,
      rules: {
        userid: [{ required: true, message: "请输入账号", trigger: "blur" }],
        Password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  mounted() {
    let user = localStorage.getItem("userPwd");
    if (user) {
      this.formLogin.userid = JSON.parse(user).name;
      this.formLogin.Password = JSON.parse(user).pwd;
      this.checked = true;
    }

    document.onkeydown = event => {
      var router = this.$route.path;
      var e = event || window.event || arguments.callee.caller.arguments[0];
      if (e && e.keyCode == 13 && this.$route.path == "/login") {
        // enter 键
        this.dologin();
      }
    };
  },
  methods: {
    // 登录
    dologin() {
      let data = {
        userid: this.formLogin.userid,
        passwd: this.formLogin.Password
      };
      reqLogin(data).then(res => {
        if (res.rtndesc === "success") {
          this.$router.push({ path: "/index" });
        }
      });

    }
  }
};
</script>



<style lang="scss" >
$input_width: 300px;
.login_wrapper {
  height: 100vh;
  box-sizing: border-box;
  width: 100%;
  background: url("/static/images/login_bg.jpg") no-repeat;
  background-size: 100% 100%;
  background-size: cover;
  // padding-top: 200px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .title {
    text-align: center;
    color: #66b1ff;
    width: 100%;
    font-size: 30px;
    font-weight: 400;
  }

  .login {
    width: 504px;
    height: 574px;
    background: #ffff;
    opacity: 0.9;
    border-radius: 20px;
    margin-right: 200px;
    box-sizing: border-box;
    padding: 20px;
    box-shadow: 0px 0px 20px rgba(102, 177, 255, 0.5);

    .login_title {
      font-size: 28px;
      margin-top: 30px;
      font-weight: 700;
      padding-bottom: 20px;
      border-bottom: 1px solid #66b1ff;
    }
    .el-button,
    .el-input {
      width: 100%;
    }

    .el-form {
      margin: 0 auto;
      margin-top: 80px;
      width: 80%;

      // text-align: center;
      .error {
        display: block;
        text-align: center;
        color: red;
      }
    }
  }
}
.recover {
  position: absolute;
  bottom: 0px;
  cursor: pointer;
  color: #e6a23c;
  display: none;
}
.bei {
  position: absolute;
  bottom: 20px;
  cursor: pointer;
  color: #505458;
}
</style>

