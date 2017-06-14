<template>
  <div class="jian-hello">
    <jian-header></jian-header>
  </div>
</template>

<script>

// 引入 header 头部
import JianHeader from '@/components/commons/Header/Header'

export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {

  },
  components: {
    'jian-header': JianHeader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
