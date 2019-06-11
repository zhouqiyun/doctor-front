<template>
  <div class="register">
    <div class="register-logo">
      <img src="../assets/hospital-logo.png" alt="">
      <h3>口腔诊所</h3>
      <h6>做您贴心的口腔诊所管家</h6>
    </div>
    <div class="register-information">
      <div class="title">注册</div>
      <div class="detail">
        <el-input
          placeholder="请输入手机号"
          prefix-icon="el-icon-mobile-phone"
          v-model="registerPhone">
        </el-input>
      </div>
      <div class="detail">
        <el-input
          placeholder="验证码"
          prefix-icon="el-icon-picture-outline"
          v-model="authCode">
        </el-input>
      </div>
      <div class="detail">
        <el-input
          placeholder="短信验证"
          prefix-icon="el-icon-chat-line-square"
          v-model="messageCode">
        </el-input>
      </div>
      <div class="detail">
        <el-input
          placeholder="请输入6~16位密码"
          prefix-icon="el-icon-mouse"
          v-model="registerPassword">
        </el-input>
      </div>
      <div class="detail">
        <el-input
          placeholder="联系人姓名"
          v-model="registerName">
        </el-input>
      </div>
      <div class="detail">
        <el-input
          placeholder="请输入诊所名称"
          v-model="registerHospital">
        </el-input>
      </div>
      <div class="detail">
        <el-input
          placeholder="请输入详细地址"
          v-model="registerAddress">
        </el-input>
      </div>
      <el-button @click="registerUser" :loading="registerLoading" class="register-btn" type="primary">立即注册</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'register',
  data () {
    return {
      registerPhone: '',
      authCode: '',
      messageCode: '',
      registerPassword: '',
      registerName: '',
      registerHospital: '',
      registerAddress: '',
      registerLoading: false
    }
  },
  components: {
  },
  watch: {
  },
  computed: {
  },
  methods: {
    registerUser: function () {
      this.$router.push('/')
    }
  },
  created () {
  },
  mounted () {
  }
}
</script>
<style lang="less">
.register {
  width: 100%;
  height: 100%;
  background-color: #f7fafa;
  .register-logo {
    padding-top: 60px;
    img {
      width: 50px;
      height: 50px;
    }
    h3 {
      font-weight: normal;
      color: #606266;
    }
    h6 {
      font-weight: normal;
      font-size: 16px;
      margin: 20px auto;
      color: #909399;
    }
  }
  .register-information {
    width: 432px;
    margin: 20px auto;
    padding: 36px 50px;
    background-color: #fff;
    .title {
      font-size: 22px;
      margin-bottom: 20px;
      color: #409EFF;
    }
    .detail {
      margin-bottom: 10px;
      .el-input__inner {
        border-top: none;
        border-left: none;
        border-right: none;
        border-radius: 0;
      }
      .el-input__icon {
        color: #409EFF;
        font-size: 16px;
      }
    }
    .register-btn {
      width: 80%;
      margin: 20px auto;
      border-radius: 20px;
    }
  }
}
</style>
