<template>
  <div class="sidebar-left">
    <!-- <img src="../assets/hospital-logo.png" alt=""> -->
    <el-menu :default-active="$route.path" @select="handleSelect" class="el-menu-vertical-demo" :collapse="isCollapse">
      <el-menu-item index="/login">
        <i class="el-icon-s-custom"></i>
        <span slot="title">员工登录</span>
      </el-menu-item>
      <el-submenu index="/working">
        <template slot="title">
          <i class="el-icon-s-platform"></i>
          <span slot="title">我的工作</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/working/today">今日工作</el-menu-item>
          <el-menu-item index="/working/date">工作日历</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="/order">
        <i class="el-icon-date"></i>
        <span slot="title">预约管理</span>
      </el-menu-item>
      <el-submenu index="/management">
        <template slot="title">
          <i class="el-icon-s-check"></i>
          <span slot="title">诊疗服务</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/management/patient">患者管理</el-menu-item>
          <el-menu-item index="/management/case">病例管理</el-menu-item>
          <el-menu-item index="/management/payment">付费管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="/service">
        <template slot="title">
          <i class="el-icon-office-building"></i>
          <span slot="title">关爱服务</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/service/message">消息模板</el-menu-item>
          <el-menu-item index="/service/remind">关爱提醒</el-menu-item>
          <el-menu-item index="/service/message/logging">消息记录</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="/marketing">
        <template slot="title">
          <i class="el-icon-receiving"></i>
          <span slot="title">营销管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/management/vouchers">代金券</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="/management/internal">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">内部管理</span>
        </template>
        <el-menu-item-group>
          <el-submenu index="/management/employee">
            <span slot="title">员工管理</span>
            <el-menu-item index="/management/merits">员工绩效</el-menu-item>
            <el-menu-item index="/management/authority">权限管理</el-menu-item>
          </el-submenu>
          <el-menu-item index="/management/tripartite">三方管理</el-menu-item>
          <el-menu-item index="/management/paymentItems">付费项目</el-menu-item>
          <el-menu-item index="/management/branch">分店管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
       <el-menu-item index="/messageCenter">
        <i class="el-icon-message"></i>
        <span slot="title">消息中心</span>
      </el-menu-item>
    </el-menu>
    <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group> -->
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      onRoutes: '/login',
      isCollapse: false
    }
  },
  watch: {
  },
  computed: {
  },
  methods: {
    handleSelect: function (index, indexPath) {
      this.onRoutes = index
      this.$router.push(index)
    }
  },
  created () {
  },
  mounted () {
  }
}
</script>
<style lang="less">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.sidebar-left {
  float: left;
  width: 200px;
  height: 100%;
  border-right: solid 1px #e6e6e6;
  .el-menu-item-group__title {
    padding: 0;
  }
}
</style>
