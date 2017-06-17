<template>
    <div class="jian-follows-wrapper">
        <!--标题-->
        <div class="jian-follows-title">
            全部关注
        </div>
        <!--评论列表-->
        <div class="jian-follows-list">
            <jian-follow-item v-for="(follow, index) in follows" :follow="follow" :key="index"></jian-follow-item>
        </div>
    </div>
</template>

<script>
import JianFollowItem from '@/components/pages/Message/Content/Follow/FollowItem/FollowItem'

export default {
    data() {
        return {
            follows: []
        }
    },
    components: {
        'jian-follow-item': JianFollowItem
    },
    beforeMount() {
        // 发送请求，获取评论
        this.$axios.get('/follow')
            .then((res) => {
                // 获取分类
                this.follows = res.data.data;
            })
            .catch((err) => {
                console.log('axios err', err);
            });
    }
}
</script>

<style scoped>
/*标题*/

.jian-follows-title {
    margin-bottom: 20px;
    color: rgb(51, 51, 51);
    font-size: 14px;
    font-weight: bold;
    line-height: 20px;
}
</style>
