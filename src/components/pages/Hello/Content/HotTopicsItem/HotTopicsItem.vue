<template>
  <a href="#" class="jian-hot-topics-item">
    <img :src="hotTopicsItem.src" alt="">
  </a>
</template>

<script>
export default {
  props: ['hotTopicsItem'],
  data() {
      return {

      }
  }
}
</script>

<style scoped>
.jian-hot-topics-item {
    display: block;
}

.jian-hot-topics-item img {
    max-width: 100%;
}
</style>
