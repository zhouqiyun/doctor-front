<template>
  <div class="login">
    <div class="register-logo">
      <img src="../assets/hospital-logo.png" alt="">
      <h3>口腔诊所</h3>
      <h6>做您贴心的口腔诊所管家</h6>
    </div>
    <div class="register-information">
      <div class="title">登录</div>
      <div class="detail">
        <el-input
          placeholder="请输入手机号"
          prefix-icon="el-icon-mobile-phone"
          v-model="registerPhone">
        </el-input>
      </div>
      <div class="detail">
        <el-input
          placeholder="密码"
          prefix-icon="el-icon-picture-outline"
          v-model="authCode">
        </el-input>
        <span class="forget-password" @click="forgetPassword">忘记密码</span>
      </div>
      <el-button @click="loginUser" :loading="registerLoading" class="login-btn" type="primary">登录</el-button>
      <el-button @click="registerUser" :loading="registerLoading" class="register-btn" type="primary">注册</el-button>
    </div>
  </div>
</template>
<script>
// import serverApi from '../utils/serverApi.js'
import { mapGetters } from 'vuex'
export default {
  name: 'login',
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
    username: {
      handler: function (val, oldVal) {
      },
      immediate: true
    }
  },
  computed: {
    // 获取vuex里的值
    ...mapGetters({
      username: 'getUsername'
    })
  },
  methods: {
    registerUser: function () {
      this.$router.push('/register')
    },
    loginUser: function () {
      this.$router.push('/')
    },
    forgetPassword: function () {
      this.$router.push('/resetpassword')
    }
  },
  created () {
    // 修改vuex的值
    this.$store.dispatch('updateUsername', '修改后的名字')
  },
  mounted () {
  }
}
</script>
<style lang="less">
.login {
  width: 100%;
  height: 100%;
  background-color: #f7fafa;
  .register-logo {
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
      .forget-password {
        position: relative;
        left: 40%;
        top: 0px;
        color: #409EFF;
        cursor: pointer;
      }
    }
    .login-btn {
      width: 80%;
      margin: 0 auto;
      border-radius: 20px;
      margin-top: 20px;
    }
    .register-btn {
      width: 80%;
      margin: 20px auto;
      border-radius: 20px;
      background-color: #fff;
      color: #409EFF;
      &:hover {
        background-color: #409EFF;
        color: #fff;
      }
    }
  }
}
</style>
