<template>
  <a href="#" class="jian-backup-catalog-wrapper">
    {{ catalogItem.title }}
  </a>
</template>

<script>
export default {
  props: ['catalogItem']
}
</script>

<style scoped>

.jian-backup-catalog-wrapper {
    display: inline-block;
    padding: 7px;
    margin: 0 15px 15px 0;
    text-decoration: none;
    color: rgb(234, 111, 90);
    font-size: 13px;
    border-radius: 4px;
    border: 1px solid rgb(234, 111, 90);
}

</style>
