<template>
    <a href="/" class="jian-passage-item">
        <i :class="meta"></i>
        <span>{{num > 1000 ? (num/1000).toFixed(1) : num}}</span>
    </a>
</template>

<script>
export default {
    props: ['meta', 'num']
}
</script>

<style scoped>
.jian-passage-item {
    color: rgb(180, 180, 180);
    font-size: 13px;
    text-decoration: none;
}

.jian-passage-item:hover {
    color: #787878;
}
</style>
