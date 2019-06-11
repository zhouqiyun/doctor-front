<template>
  <div class="patient">
    <div class="patient-title">患者管理</div>
    <div class="patient-filter">
      <el-button class="filter-btn" type="primary">高级筛选<i class="el-icon-data-analysis el-icon--right"></i></el-button>
      <el-input
        placeholder="姓名/病例/手机号"
        suffix-icon="el-icon-search"
        v-model="filterSearch">
      </el-input>
      <el-button class="create-patient" type="primary">新增患者</el-button>
    </div>
    <div class="filter-content">
      <div class="detail-top"></div>
      <div class="filter-detail">
        <el-form ref="form" label-width="80px">
          <el-form-item label="医生">
            <el-radio-group v-model="selectDoctor" size="medium">
              <el-radio-button label="all">全部</el-radio-button>
              <el-radio-button label="doctorY">杨医生</el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="患者地址">
            <el-radio-group v-model="selectAddress" size="medium">
              <el-radio-button label="all">全部</el-radio-button>
              <el-radio-button label="doctorY">杨医生</el-radio-button>
            </el-radio-group>
          </el-form-item>
        </el-form>
        <div class="lable">医生</div>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'patient',
  data () {
    return {
      filterSearch: 'all',
      selectAddress: 'all',
      selected: 'select0',
      list: [
        { name: '全部' },
        { name: '已绑卡' },
        { name: '已就诊' }
      ],
      selectDoctor: ''
    }
  },
  components: {
  },
  watch: {
  },
  computed: {
  },
  methods: {
    tabChange: function (tabItem) {
      this.selected = tabItem
    }
  },
  created () {
  },
  mounted () {
  }
}
</script>
<style lang="less">
.patient {
  width: 100%;
  height: 100%;
  padding: 20px;
  .patient-title {
    line-height: 48px;
    text-align: left;
  }
  .patient-filter {
    overflow: hidden;
    .filter-btn.el-button {
      width: 118px;
      height: 40px;
      line-height: 40px;
      padding: 0;
      float: left;
      margin-right: 10px;
      border-radius: 0;
    }
    .el-input {
      float: left;
      width: 220px;
    }
    .create-patient {
      float: right;
    }
  }
  .filter-content {
    position: relative;
    .detail-top {
      width: 118px;
      height: 20px;
      background-color: #D9ECFF;
    }
  }
}
</style>
