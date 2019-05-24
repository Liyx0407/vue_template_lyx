<template>
  <div class="systemMange">
    <div class="main_con">
      <div class="bottom">
        <div class="left_con borderR">
          <organize-tree :showChecked="true" @getId="getId" :type="1"/>
        </div>
        <div class="right_con">
          <my-form/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import form from "../form/form.vue";
import organizeTree from "@/components/System/organizeTree";

export default {
  components: {
    "my-form": form,
    "organize-tree": organizeTree
  },
  data() {
    return {
      currentPage: 1,
      tableData: [
        {
          seqid: "主键", //
          orgcode: "机构编号", //
          orgname: "机构名称", //机构名称
          appname: "应用名称", //	应用名称
          appcode: "应用编号", //	应用编号
          appips: "应用IP", //应用IP
          onoff: true, //启用禁用
          appdefault: "默认主页url", //默认主页url
          appdomain: "应用域" //应用域
        },
        {
          seqid: "主键", //
          orgcode: "机构编号", //
          orgname: "机构名称", //机构名称
          appname: "应用名称", //	应用名称
          appcode: "应用编号", //	应用编号
          appips: "应用IP", //应用IP
          onoff: false, //启用禁用
          appdefault: "默认主页url", //默认主页url
          appdomain: "应用域" //应用域
        }
      ]
    };
  },
  methods: {
        getId(v){
      console.log(v);
      
    },
  }
};
</script>

<style lang="scss">

.card{
  min-height: 86%;

}
.systemMange {
  width: 100%;
  height: 100%;
  .main_con {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90%;
  }
  .bottom {
    flex: 1;
    display: flex;
    .left_con {
      flex: 1;
    }
    .right_con {
      padding-left: 20px;
      flex: 3;
      border: none;
    }
  }
}
</style>
