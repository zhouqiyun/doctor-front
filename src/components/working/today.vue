<template>
  <div class="today">
    <div class="title">今日工作</div>
    <div class="card-box">
      <div class="box-list">
        <div class="list-item">
          <div class="item-title">今日新增患者</div>
          <div class="item-num"><span class="num">0</span>人</div>
        </div>
        <div class="list-item">
          <div class="item-title">今日就诊</div>
          <div class="item-num"><span class="num">0</span>人</div>
        </div>
        <div class="list-item">
          <div class="item-title">今日预约</div>
          <div class="item-num"><span class="num">0</span>人</div>
        </div>
        <div class="list-item">
          <div class="item-title">今日实收金额</div>
          <div class="item-num"><span class="num">￥0.00</span></div>
        </div>
        <div class="list-item">
          <div class="item-title">今日回访</div>
          <div class="item-num"><span class="num">0</span>人</div>
        </div>
      </div>
      <div class="today-detail">
        <div class="detail-left">
          <ul class="today-list">
            <li class="list-li" :class="{active:index === selectNum}" :key='index' v-for="(item,index) in todayList" @click="changeTab(item.name,index)">
              <span class="list-name">{{item.name}}</span>
              <span v-if="item.num !== ''" class="list-num">({{item.num}})</span>
            </li>
          </ul>
        </div>
        <div class="detail-right" v-if="selectNum === 0">
          <div class="detail-right-title">
            <el-button type="primary">新增挂号</el-button>
            <el-button type="primary">新增患者</el-button>
          </div>
          <div class="detail-right-table">
            <el-table
              :data="tableData"
              style="width: 100%">
              <el-table-column
                prop="name"
                label="姓名"
                align='center'
                width="65">
              </el-table-column>
              <el-table-column
                prop="type"
                label="病历号"
                align='center'
                width="100">
              </el-table-column>
              <el-table-column
                prop="gender"
                label="性别|年龄"
                align='center'
                width="110">
              </el-table-column>
              <el-table-column
                prop="name"
                label="手机号"
                align='center'
                width="110">
              </el-table-column>
              <el-table-column
                prop="name"
                label="医生"
                align='center'
                width="70">
              </el-table-column>
              <el-table-column
                prop="name"
                label="类型"
                align='center'
                width="85">
              </el-table-column>
              <el-table-column
                prop="name"
                label="就诊事项"
                align='center'
                width="85">
              </el-table-column>
              <el-table-column
                prop="name"
                label="时间"
                align='center'
                width="85">
              </el-table-column>
              <el-table-column
                prop="name"
                align='center'
                label="状态">
              </el-table-column>
            </el-table>
          </div>
        </div>
        <div class="detail-right" v-if="selectNum === 1">
          <div class="detail-right-title">
            <el-button type="primary">新增收费单</el-button>
          </div>
          <div class="detail-right-table">
            <el-table
              :data="tableData"
              style="width: 100%">
              <el-table-column
                prop="name"
                label="姓名"
                align='center'
                width="160">
              </el-table-column>
              <el-table-column
                prop="type"
                label="单号"
                align='center'
                width="100">
              </el-table-column>
              <el-table-column
                prop="gender"
                label="医生"
                align='center'
                width="110">
              </el-table-column>
              <el-table-column
                prop="name"
                label="账单时间"
                align='center'
                width="200">
              </el-table-column>
              <el-table-column
                prop="name"
                label="账单金额"
                align='center'
                width="100">
              </el-table-column>
              <el-table-column
                prop="name"
                align='center'
                label="操作">
              </el-table-column>
            </el-table>
          </div>
        </div>
        <div class="detail-right" v-if="selectNum === 2">
          <div class="detail-right-title">
            <el-button type="primary">新增收费单</el-button>
          </div>
          <div class="detail-right-table">
            <el-table
              :data="tableData"
              style="width: 100%">
              <el-table-column
                prop="name"
                label="姓名"
                align='center'
                width="160">
              </el-table-column>
              <el-table-column
                prop="type"
                label="单号"
                align='center'
                width="100">
              </el-table-column>
              <el-table-column
                prop="gender"
                label="医生"
                align='center'
                width="110">
              </el-table-column>
              <el-table-column
                prop="name"
                label="收费时间"
                align='center'
                width="200">
              </el-table-column>
              <el-table-column
                prop="name"
                label="账单金额"
                align='center'>
              </el-table-column>
            </el-table>
          </div>
        </div>
        <div class="detail-right" v-if="selectNum === 3">
          <div class="detail-right-title">
            <el-button type="primary">新增充值</el-button>
          </div>
          <div class="detail-right-table">
            <el-table
              :data="tableData"
              style="width: 100%">
              <el-table-column
                prop="name"
                label="充值时间"
                align='center'
                width="200">
              </el-table-column>
              <el-table-column
                prop="type"
                label="单号"
                align='center'
                width="100">
              </el-table-column>
              <el-table-column
                prop="gender"
                label="姓名"
                align='center'
                width="100">
              </el-table-column>
              <el-table-column
                prop="name"
                label="实充金额"
                align='center'
                width="100">
              </el-table-column>
              <el-table-column
                prop="name"
                label="赠送金额"
                align='center'
                width="100">
              </el-table-column>
              <el-table-column
                prop="name"
                label="支付方式"
                align='center'
                width="100">
              </el-table-column>
              <el-table-column
                prop="name"
                label="推荐人"
                align='center'
                width="100">
              </el-table-column>
              <el-table-column
                prop="name"
                label="状态"
                align='center'>
              </el-table-column>
            </el-table>
          </div>
        </div>
        <div class="detail-right" v-if="selectNum === 4">
          <div class="detail-right-table">
            <el-table
              :data="tableData"
              style="width: 100%">
              <el-table-column
                prop="name"
                label="时间"
                align='center'
                width="200">
              </el-table-column>
              <el-table-column
                prop="type"
                label="操作人"
                align='center'
                width="100">
              </el-table-column>
              <el-table-column
                prop="gender"
                label="账户"
                align='center'
                width="100">
              </el-table-column>
              <el-table-column
                prop="name"
                label="类别"
                align='center'
                width="100">
              </el-table-column>
              <el-table-column
                prop="name"
                label="金额"
                align='center'>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'today',
  data () {
    return {
      selectNum: 0,
      todayList: [
        {
          name: '今日挂号',
          num: 0
        },
        {
          name: '代收费',
          num: 0
        },
        {
          name: '已付清',
          num: 0
        },
        {
          name: '今日充值',
          num: 0
        },
        {
          name: '收银对账',
          num: ''
        },
        {
          name: '明日预约',
          num: 0
        },
        {
          name: '今日回访',
          num: 1
        },
        {
          name: '生日提醒',
          num: 0
        },
        {
          name: '库存报警',
          num: 0
        }
      ],
      tableData: [
      ]
    }
  },
  components: {
  },
  watch: {
  },
  computed: {
  },
  methods: {
    changeTab: function (name, index) {
      console.log(index)
      this.selectNum = index
    }
  },
  created () {
  },
  mounted () {
  }
}
</script>
<style lang="less" scoped>
.today {
  width: 100%;
  height: 100%;
  .title {
    text-align: left;
    font-size: 18px;
    line-height: 60px;
    padding-left: 20px;
    color: #333;
    border-bottom: 1px solid #dbdbdb;
  }
  .card-box {
    padding: 20px;
    .box-list {
      width: 100%;
      padding: 20px;
      color: #999;
      border: 1px solid #e6e7f3;
      overflow: hidden;
      .list-item {
        float: left;
        text-align: left;
        margin-right: 48px;
        .item-title {
          margin-bottom: 10px;
        }
        .item-num {
          height: 28px;
          line-height: 28px;
          color: #000;
          .num {
            font-size: 24px;
            color: #7a80fa;
            margin-right: 4px;
          }
        }
        &:last-child {
          margin-right: 0;
        }
      }
    }
    .today-detail {
      margin-top: 20px;
      width: 100%;
      border: 1px solid #e6e7f3;
      overflow: hidden;
      .detail-left {
        width: 260px;
        float: left;
        padding: 20px;
        color: #333;
        border-right: 1px solid #e6e7f3;
        .today-list {
          width: 100%;
          margin: 0;
          padding: 0;
          list-style: none;
          text-align: left;
          .list-li {
            list-style: none;
            width: 100%;
            box-sizing: border-box;
            padding-left: 10px;
            height: 40px;
            line-height: 40px;
            cursor: pointer;
            &:hover {
              color: #605bf5;
            }
          }
          .list-li.active {
            background-color: #f0f0ff;
          }
        }
      }
      .detail-right {
        float: right;
        width: calc(100% - 260px);
        .detail-right-title {
          padding: 10px;
          text-align: right;
        }
      }
    }
  }
}
</style>
