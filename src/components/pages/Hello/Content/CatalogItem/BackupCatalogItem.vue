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
    text-decoration: none;
    color: rgb(234, 111, 90);
    border-radius: 4px;
    border: 1px solid rgb(234, 111, 90);
}

.jian-backup-catalog-wrapper:hover {
  background: rgba(236,97,73,.05);
}

</style>
