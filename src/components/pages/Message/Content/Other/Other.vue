<template>
    <div class="jian-others-wrapper">
        <!--标题-->
        <div class="jian-others-title">
            收到的喜欢和赞
        </div>
        <!--评论列表-->
        <div class="jian-others-list">
            <jian-other-item v-for="(other, index) in others" :other="other" :key="index"></jian-other-item>
        </div>
    </div>
</template>

<script>
import JianOtherItem from '@/components/pages/Message/Content/Other/OtherItem/OtherItem'

export default {
    data() {
        return {
            others: []
        }
    },
    components: {
        'jian-other-item': JianOtherItem
    },
    beforeMount() {
        // 发送请求，获取评论
        this.$axios.get('/other')
            .then((res) => {
                // 获取分类
                this.others = res.data.data;
            })
            .catch((err) => {
                console.log('axios err', err);
            });
    }
}
</script>

<style scoped>
/*标题*/

.jian-others-title {
    margin-bottom: 20px;
    color: rgb(51, 51, 51);
    font-size: 14px;
    font-weight: bold;
    line-height: 20px;
}
</style>
