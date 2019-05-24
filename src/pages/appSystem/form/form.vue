<template>
  <div class="form">
    <el-form
      :model="form"
      status-icon
      :rules="rules"
      label-position="left"
      ref="form"
      label-width="120px"
      class="demo-form"
    >
      <el-form-item label="应用类型" prop="type">
        <el-radio-group v-model="form.type">
          <el-radio :label="v" v-for="(v,i) in typeArr" :key="i">{{v}}</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="嵌套应用" prop="app">
        <el-checkbox-group v-model="form.app">
          <el-checkbox v-for="(v,i) in appArr" :label="v" :key="i">{{v}}</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="代号" prop="orgcode">
        <el-input type="text" v-model="form.orgcode"></el-input>
      </el-form-item>
      <el-form-item label="系统名称" prop="orgname">
        <el-input type="text" v-model="form.orgname"></el-input>
      </el-form-item>
      <el-form-item label="服务器IP" prop="appips">
        <el-input type="text" v-model="form.appips"></el-input>
      </el-form-item>
      <el-form-item label="系统主页" prop="appdefault">
        <el-input type="text" v-model="form.appdefault"></el-input>
      </el-form-item>
      <el-form-item label="web应用域" prop="appdomain">
        <el-input type="text" v-model="form.appdomain"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="SecretMd5" v-model="form.checkPass"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="submitForm('form')">提交</el-button>
        <!-- <el-button @click="resetForm('form')">重置</el-button> -->
        <el-button type="success" plain @click="exist">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import rule from "@/assets/js/rules.js";

import { checkInputName } from "@/assets/js/utils";
let ruleList = rule;

export default {
  data() {
    let validateOrgcode = (rule, value, callback) => {
      if (!value) {
        callback(new Error("不能为空"));
      } else {
        //获取代号是否唯一
      }
    };
    //系统名称验证
    let validateOrgname = (rule, value, callback) => {
      if (!checkInputName(value)) {
        callback(new Error("格式输入有误,不能输入纯字符"));
      }
      //在此调取后台接口验证代号是否存在
    };

    let validatePass = (rule, value, callback) => {
      if (rule) {
        this.$refs.ruleForm.validateField("checkPass");
      }
    };
    let validatePass2 = (rule, value, callback) => {
      if (value !== this.form.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      typeArr: ["web应用", "移动端"],
      appArr: ["应用1", "应用2"],
      form: {
        type:"web应用",
        app:[],
        orgcode: "",
        orgname: "",
        appname: "",
        appcode: "",
        appips: "",
        appdefault: "",
        appdomain: "",
        SecretMd5: ""
      },
      rules: {
        orgcode: [
          { required: true, message: "请填写代号", trigger: "blur" },
          { validator: validateOrgcode, trigger: "blur" }
        ],
        type: { required: true, message: "请选择应用类型", trigger: "blur" },

        orgname: [
          { required: true, message: "请填写系统名称", trigger: "blur" },
          { validator: validateOrgname, trigger: "blur" }
        ],
        appips: [
          { required: true, message: "不能为空", trigger: "blur" }
          // { validator: validateLoginName, trigger: "blur" }
        ],
        appdefault: [
          { required: true, message: "不能为空", trigger: "blur" }
          // { validator: validatePass, trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { validator: validatePass, trigger: "blur" }
        ],
        checkPass: [
          { required: true, message: "不能为空", trigger: "blur" },
          { validator: validatePass2, trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    //获取应用类型

    getAppType() {
      //  请求成功获取嵌套应用
    },
    //获取嵌套应用
    getAppArr() {},
    getLoginName() {
      this.form.loginName = vuePy.chineseToPinYin(this.form.userName);
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    exist() {
      this.$router.go(-1);
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="scss">
.form {
  width: 100%;
  height: 100%;
  .el-input {
    width: 400px;
  }
}
</style>
