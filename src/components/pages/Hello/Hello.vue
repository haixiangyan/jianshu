<template>
  <div class="jian-hello-page">
    <!--固定返回头部-->
    <jian-pin></jian-pin>
    <!--首页头部-->
    <jian-header></jian-header>
    <!--首页轮播图-->
    <jian-carousel></jian-carousel>
    <!--首页的主要内容-->
    <jian-hello-content></jian-hello-content>
    <!--首页的脚注-->
    <jian-footer class="jian-origin-show"></jian-footer>
    <jian-backup-footer class="jian-backup-show"></jian-backup-footer>
  </div>
</template>

<script>
import JianHeader from '@/components/commons/Header/Header'
import JianCarousel from '@/components/pages/Hello/Carousel/Carousel'
import JianHelloContent from '@/components/pages/Hello/Content/Content'
import JianFooter from '@/components/commons/Footer/Footer'
import JianBackupFooter from '@/components/commons/Footer/BackupFooter/BackupFooter'
import JianPin from '@/components/commons/Pin/Pin'

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
    'jian-hello-content': JianHelloContent,
    'jian-footer': JianFooter,
    'jian-backup-footer':JianBackupFooter,
    'jian-pin': JianPin
  }
}
</script>

<style scoped>
/*媒体查询*/
@media screen and (max-width: 960px) {
    /*小屏幕显示*/
    .jian-origin-show {
      display: none;
    }

    .jian-backup-show {
      display: block;
    }
}

@media screen and (min-width: 960px) {
    /*大屏幕显示*/
    .jian-origin-footer {
      display: block;
    }

    .jian-backup-show {
      display: none;
    }
}

.jian-passage {
    padding: 17px 0;
    border-bottom: 1px solid rgb(240, 240, 240);
}
</style>
