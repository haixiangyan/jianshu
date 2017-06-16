<template>
  <a href="/" class="jian-hot-topics-item">
    <img :src="hotTopicsItem.src" alt="">
  </a>
</template>

<script>
export default {
  props: ['hotTopicsItem']
}
</script>

<style scoped>
.jian-hot-topics-item {
  position: relative;
  top: 0;
  display: block;
  border-radius: 5px;
}

.jian-hot-topics-item:hover {
  top: -10px;
  box-shadow: 0px 4px 8px -4px #48576a;
  transition: .5s top ease;
}

.jian-hot-topics-item img {
  max-width: 100%;
  
}
</style>
