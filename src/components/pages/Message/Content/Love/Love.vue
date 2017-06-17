<template>
    <div class="jian-loves-wrapper">
        <!--标题-->
        <div class="jian-loves-title">
            收到的喜欢和赞
        </div>
        <!--评论列表-->
        <div class="jian-loves-list">
            <jian-love-item v-for="(love, index) in loves" :love="love" :key="index"></jian-love-item>
        </div>
    </div>
</template>

<script>
import JianLoveItem from '@/components/pages/Message/Content/Love/LoveItem/LoveItem'

export default {
    data() {
        return {
            loves: []
        }
    },
    components: {
        'jian-love-item': JianLoveItem
    },
    beforeMount() {
        // 发送请求，获取评论
        this.$axios.get('/love')
            .then((res) => {
                // 获取分类
                this.loves = res.data.data;
            })
            .catch((err) => {
                console.log('axios err', err);
            });
    }
}
</script>

<style scoped>
/*标题*/

.jian-loves-title {
    margin-bottom: 20px;
    color: rgb(51, 51, 51);
    font-size: 14px;
    font-weight: bold;
    line-height: 20px;
}
</style>
