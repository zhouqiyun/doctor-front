<template>
  <div class="login">
    员工登录
  </div>
</template>
<script>
// import serverApi from '../utils/serverApi.js'
import { mapGetters } from 'vuex'
export default {
  name: 'login',
  data () {
    return {
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
  },
  created () {
    // 修改vuex的值
    this.$store.dispatch('updateUsername', '修改后的名字')
  },
  mounted () {
  }
}
</script>
<style lang="less" scoped>
</style>
