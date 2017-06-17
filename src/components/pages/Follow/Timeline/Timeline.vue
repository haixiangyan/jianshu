<template>
  <div class="jian-follow-timeline">
      <jian-timeline-item v-for="(passage, index) in timeline" :passage="passage" :key="index" ></jian-timeline-item>
  </div>
</template>

<script>
import JianTimelineItem from '@/components/pages/Hello/Content/Passage/Passage'
export default {
  data() {
    return {
        timeline: []
    }  
  },
  components: {
      'jian-timeline-item': JianTimelineItem
  },
  beforeMount() {
      // 发送请求，获取评论
        this.$axios.get('/timeline')
            .then((res) => {
                // 获取分类
                this.timeline = res.data.data;
            })
            .catch((err) => {
                console.log('axios err', err);
            });
  }
}
</script>

<style scoped>

</style>
