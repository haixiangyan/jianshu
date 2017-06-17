<template>
  <div class="jian-hello-page">
    <!--关注页头部-->
    <jian-header :activeIndex="`3`"></jian-header>
    <!--关注页内容-->
    <jian-follow-content></jian-follow-content>
  </div>
</template>

<script>
import JianHeader from '@/components/commons/Header/Header'
import JianFollowContent from '@/components/pages/Follow/Content/Content'

export default {
  name: 'follow',
  data() {
    return {
    }
  },
  methods: {

  },
  components: {
    'jian-header': JianHeader,
    'jian-follow-content': JianFollowContent
  }
}
</script>

<style scoped>
</style>
