<template>
  <div class="home">
    <v-sidebar></v-sidebar>
    <div class="hospital-right">
      <router-view/>
    </div>
  </div>
</template>
<script>
import vSidebar from '../components/sidebar'
export default {
  name: 'home',
  data () {
    return {
    }
  },
  components: {
    vSidebar
  },
  watch: {
  },
  computed: {
  },
  methods: {
  },
  created () {
  },
  mounted () {
  }
}
</script>
<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
  .hospital-right {
    float: left;
    width: calc(100% - 200px);
    height: 100%;
  }
}
</style>
