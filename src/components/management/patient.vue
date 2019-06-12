<template>
  <div class="patient">
    <div class="patient-title">患者管理</div>
    <div class="patient-filter">
      <el-button class="filter-btn" type="primary" @click="changeFilter">高级筛选<i class="el-icon-data-analysis el-icon--right"></i></el-button>
      <el-input
        placeholder="姓名/病例/手机号"
        suffix-icon="el-icon-search"
        v-model="filterSearch">
      </el-input>
      <el-button class="create-patient" type="primary">新增患者</el-button>
    </div>
    <div class="filter-content" v-if="showFilter === true">
      <el-form ref="form" :model='formData' label-position='left' label-width="100px">
        <el-form-item label="医生">
          <el-radio-group v-model="formData.doctor" size="mini">
            <el-radio-button label="01">全部</el-radio-button>
            <el-radio-button label="02">杨医生</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="患者地址">
          <el-radio-group v-model="formData.address" size="mini">
            <el-radio-button label="01">全部</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="就诊日期">
          <el-radio-group v-model="formData.date" size="mini">
            <el-radio-button label="01">全部</el-radio-button>
            <el-radio-button label="02">一周内</el-radio-button>
            <el-radio-button label="03">一月内</el-radio-button>
            <el-radio-button label="04">三月内</el-radio-button>
            <el-radio-button label="05">半年内</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="患者分类">
          <el-radio-group v-model="formData.type" size="mini">
            <el-radio-button label="01">全部</el-radio-button>
            <el-radio-button label="02">重要患者</el-radio-button>
            <el-radio-button label="02">欠费患者</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="会员等级">
          <el-radio-group v-model="formData.grade" size="mini">
            <el-radio-button label="01">全部</el-radio-button>
            <el-radio-button label="02">普通会员</el-radio-button>
            <el-radio-button label="03">银牌会员</el-radio-button>
            <el-radio-button label="04">金牌会员</el-radio-button>
            <el-radio-button label="05">钻石会员</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="患者生日">
          <el-radio-group v-model="formData.birth" size="mini">
            <el-radio-button label="01">全部</el-radio-button>
            <el-radio-button label="02">今日生日</el-radio-button>
            <el-radio-button label="03">近7日生日</el-radio-button>
            <el-radio-button label="04">近30日生日</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="患者来源">
          <el-radio-group v-model="formData.source" size="mini">
            <el-radio-button label="01">全部</el-radio-button>
            <el-radio-button label="02">亲友介绍</el-radio-button>
            <el-radio-button label="03">户外广告</el-radio-button>
            <el-radio-button label="04">社区活动</el-radio-button>
            <el-radio-button label="05">杂志</el-radio-button>
            <el-radio-button label="06">电台</el-radio-button>
            <el-radio-button label="07">网站</el-radio-button>
            <el-radio-button label="08">电视台</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="就诊事项">
          <el-radio-group v-model="formData.matters" size="mini">
            <el-radio-button label="01">全部</el-radio-button>
            <el-radio-button label="02">根管预备</el-radio-button>
            <el-radio-button label="03">换药</el-radio-button>
            <el-radio-button label="04">补牙</el-radio-button>
            <el-radio-button label="05">戴牙</el-radio-button>
            <el-radio-button label="06">拔牙</el-radio-button>
            <el-radio-button label="07">加力</el-radio-button>
            <el-radio-button label="08">拆线</el-radio-button>
            <el-radio-button label="09">手术</el-radio-button>
            <el-radio-button label="10">试戴义齿</el-radio-button>
            <el-radio-button label="11">试内冠</el-radio-button>
          </el-radio-group>
          <el-radio-group v-model="formData.matters" size="mini">
            <el-radio-button label="12">种植</el-radio-button>
            <el-radio-button label="13">检查</el-radio-button>
            <el-radio-button label="14">正畸</el-radio-button>
            <el-radio-button label="15">牙周上药</el-radio-button>
            <el-radio-button label="16">根充</el-radio-button>
            <el-radio-button label="17">试支架</el-radio-button>
            <el-radio-button label="18">备牙</el-radio-button>
            <el-radio-button label="19">牙周刮治</el-radio-button>
            <el-radio-button label="20">洁治</el-radio-button>
            <el-radio-button label="21">修义齿</el-radio-button>
            <el-radio-button label="22">根管治疗</el-radio-button>
          </el-radio-group>
        </el-form-item>
      </el-form>
    </div>
    <div class="box-card">
      <div class="box-card-list">
        <div class="left-user">
          <img src="../../assets/user-logo.png" alt="">
        </div>
        <div class="right-user">
          <div class="name">周女士</div>
          <el-breadcrumb separator="|">
            <el-breadcrumb-item>女</el-breadcrumb-item>
            <el-breadcrumb-item>29岁</el-breadcrumb-item>
            <el-breadcrumb-item>No.10000111</el-breadcrumb-item>
          </el-breadcrumb>
          <div class="phone">18322606056</div>
          <div class="recent-date">最近就诊：2019-06-10</div>
        </div>
        <div class="bottom-user">
          <el-button class="user-operate" type="primary">预约</el-button>
          <el-button class="user-operate" type="primary">回访</el-button>
          <el-button class="user-operate" type="primary">发短信</el-button>
        </div>
      </div>
      <div class="box-card-list">
        <div class="left-user">
          <img src="../../assets/user-logo.png" alt="">
        </div>
        <div class="right-user">
          <div class="name">周女士</div>
          <el-breadcrumb separator="|">
            <el-breadcrumb-item>女</el-breadcrumb-item>
            <el-breadcrumb-item>29岁</el-breadcrumb-item>
            <el-breadcrumb-item>No.10000111</el-breadcrumb-item>
          </el-breadcrumb>
          <div class="phone">18322606056</div>
          <div class="recent-date">最近就诊：2019-06-10</div>
        </div>
        <div class="bottom-user">
          <el-button class="user-operate" type="primary">预约</el-button>
          <el-button class="user-operate" type="primary">回访</el-button>
          <el-button class="user-operate" type="primary">发短信</el-button>
        </div>
      </div>
      <div class="box-card-list">
        <div class="left-user">
          <img src="../../assets/user-logo.png" alt="">
        </div>
        <div class="right-user">
          <div class="name">周女士</div>
          <el-breadcrumb separator="|">
            <el-breadcrumb-item>女</el-breadcrumb-item>
            <el-breadcrumb-item>29岁</el-breadcrumb-item>
            <el-breadcrumb-item>No.10000111</el-breadcrumb-item>
          </el-breadcrumb>
          <div class="phone">18322606056</div>
          <div class="recent-date">最近就诊：2019-06-10</div>
        </div>
        <div class="bottom-user">
          <el-button class="user-operate" type="primary">预约</el-button>
          <el-button class="user-operate" type="primary">回访</el-button>
          <el-button class="user-operate" type="primary">发短信</el-button>
        </div>
      </div>
      <div class="box-card-list">
        <div class="left-user">
          <img src="../../assets/user-logo.png" alt="">
        </div>
        <div class="right-user">
          <div class="name">周女士</div>
          <el-breadcrumb separator="|">
            <el-breadcrumb-item>女</el-breadcrumb-item>
            <el-breadcrumb-item>29岁</el-breadcrumb-item>
            <el-breadcrumb-item>No.10000111</el-breadcrumb-item>
          </el-breadcrumb>
          <div class="phone">18322606056</div>
          <div class="recent-date">最近就诊：2019-06-10</div>
        </div>
        <div class="bottom-user">
          <el-button class="user-operate" type="primary">预约</el-button>
          <el-button class="user-operate" type="primary">回访</el-button>
          <el-button class="user-operate" type="primary">发短信</el-button>
        </div>
      </div>
      <div class="box-card-list">
        <div class="left-user">
          <img src="../../assets/user-logo.png" alt="">
        </div>
        <div class="right-user">
          <div class="name">周女士</div>
          <el-breadcrumb separator="|">
            <el-breadcrumb-item>女</el-breadcrumb-item>
            <el-breadcrumb-item>29岁</el-breadcrumb-item>
            <el-breadcrumb-item>No.10000111</el-breadcrumb-item>
          </el-breadcrumb>
          <div class="phone">18322606056</div>
          <div class="recent-date">最近就诊：2019-06-10</div>
        </div>
        <div class="bottom-user">
          <el-button class="user-operate" type="primary">预约</el-button>
          <el-button class="user-operate" type="primary">回访</el-button>
          <el-button class="user-operate" type="primary">发短信</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'patient',
  data () {
    return {
      filterSearch: '',
      selected: 'select0',
      list: [
        { name: '全部' },
        { name: '已绑卡' },
        { name: '已就诊' }
      ],
      formData: {
        doctor: '01',
        address: '01',
        date: '01',
        type: '01',
        grade: '01',
        birth: '01',
        source: '01',
        matters: '01'
      },
      showFilter: false
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
    },
    changeFilter: function () {
      this.showFilter = !this.showFilter
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
  .patient-title {
    width: 100%;
    height: 48px;
    padding-left: 15px;
    line-height: 48px;
    text-align: left;
    border-bottom: 1px solid #dbdbdb;
  }
  .patient-filter {
    padding: 10px 20px;
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
    margin: 10px 20px;
    padding: 10px 20px;
    border: 1px solid #dbdbdb;
    text-align: left;
  }
  .box-card {
    width: 100%;
    padding: 10px 20px;
    overflow: hidden;
    .box-card-list {
      float: left;
      width: calc(33.333% - 13.333px);
      margin-right: 20px;
      margin-bottom: 20px;
      padding-top: 30px;
      border: 1px solid #dbdbdb;
      &:nth-child(3n) {
        margin-right: 0;
      }
      .left-user {
        display: inline-block;
        width: 120px;
        box-sizing: border-box;
        img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
        }
      }
      .right-user {
        display: inline-block;
        width: calc(100% - 120px);
        font-size: 12px;
        text-align: left;
        color: #666;
        .name {
          color: #333;
          font-weight: bold;
          font-size: 16px;
          margin-bottom: 6px;
        }
        .phone {
          margin: 6px 0;
        }
        .recent-date {
          margin-bottom: 6px;
        }
      }
      .bottom-user {
        width: 100%;
        border-top: 1px dashed #dbdbdb;
        .user-operate {
          background-color: #fff;
          color: #409EFF;
          border: none;
          width: 30%;
          border-radius: 0;
          border-right: 1px solid #dbdbdb;
          &:last-child {
            border-right: none;
          }
        }
      }
    }
  }
}
</style>
