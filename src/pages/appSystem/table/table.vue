<template>
  <el-table :data="data" border style="width: 100%">
    <el-table-column  type="index" width="100" label="序号"></el-table-column>
    <el-table-column prop="orgcode" label="代号"></el-table-column>
    <el-table-column prop="appname" label="应用系统"></el-table-column>
    <el-table-column prop="appdefault" label="地址"></el-table-column>
    <el-table-column prop="appdomain" label="Web应用域"></el-table-column>
    <!-- <el-table-column prop="zip" label="邮编"></el-table-column> -->
    <el-table-column fixed="right" label="操作">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">修改</el-button>
        <el-button type="text" size="small">
          {{scope.row.onoff?"禁用":"启用"}}
        </el-button>
        <!-- <el-button type="text" size="small">禁用</el-button> -->
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  props: {
    data: {
      type: Array
    }
  },
  methods: {
    handleClick(row) {
      this.$router.push({
        name:"editSystem",
        query:{
          id:row.seqid
        }
      })
    }
  },

  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
</style>
