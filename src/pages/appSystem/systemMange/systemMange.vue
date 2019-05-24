<template>
  <div class="systemMange">
    <el-button type="primary" class="btn" @click="toAdd">新增</el-button>
    <div class="main_con">
      <div class="bottom">
        <div class="left_con borderR">
          <organize-tree :showcheckbox="true" @getIdArr="getIdArr" :type="1"/>
        </div>
        <div class="right_con">
          <my-table :data="tableData"/>
        </div>
      </div>
      <div class="pagination">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import table from "../table/table.vue";
import organizeTree from "@/components/System/organizeTree";
export default {
  components: {
    "my-table": table,
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
    getIdArr(v){
      console.log(v);
      
    },
    toAdd(){
      this.$router.push('/addSystem');
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>

<style lang="scss">
.systemMange {
  width: 100%;
  height: 100%;
  .main_con {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
  .bottom {
    flex: 1;
    display: flex;
    .left_con {
      flex: 1;
    }
    .right_con {
      flex: 3;
      border: none;
    }
  }
}
</style>
