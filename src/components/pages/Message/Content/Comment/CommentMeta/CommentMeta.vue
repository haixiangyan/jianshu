<template>
    <a v-on:click.prevent="showComment" :href="route" class="jian-comment-meta">
        <i :class="meta"></i>
        <span>{{text}}</span>
    </a>
</template>

<script>
export default {
    props: ['route', 'meta', 'text'],
    methods: {
        showComment() {
            this.$emit('showComment');
        }
    }
}
</script>

<style scoped>
.jian-comment-meta {
    color: rgb(180, 180, 180);
    font-size: 13px;
    text-decoration: none;
}

.jian-comment-meta:hover {
    color: #787878;
}
</style>
