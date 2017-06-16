<template>
  <div class="jian-hello">
    <!--首页头部-->
    <jian-header></jian-header>
    <!--首页轮播图-->
    <jian-carousel></jian-carousel>
    <!--首页的主要内容-->
    <jian-hello-content></jian-hello-content>
    <!--首页的脚注-->
    
  </div>
</template>

<script>

// 引入 header 头部
import JianHeader from '@/components/commons/Header/Header'
import JianCarousel from '@/components/pages/Hello/Carousel/Carousel'
import JianHelloContent from '@/components/pages/Hello/Content/Content'

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
    'jian-header': JianHeader,
    'jian-carousel': JianCarousel,
    'jian-hello-content': JianHelloContent
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
