<template>
    <div class="jian-requests-wrapper">
        <!--标题-->
        <div class="jian-requests-title">
            全部投稿信息
        </div>
        <!--评论列表-->
        <div class="jian-requests-list">
            <img src="/static/image/jian-request/request.png" alt="">
            <p>投稿都处理完啦~休息一下吧</p>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            requests: []
        }
    }
}
</script>

<style scoped>
/*标题*/

.jian-requests-title {
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgb(240, 240, 240);
    color: rgb(51, 51, 51);
    font-size: 14px;
    font-weight: bold;
    line-height: 20px;
}

.jian-requests-list {
    margin-top: 150px;
    text-align: center;
}

.jian-requests-list img {
    max-width: 100px;
}

.jian-requests-list p {
    margin-top: 20px;
    font-size: 14px;
    font-weight: bold;
    line-height: 20px;
    color: rgb(51, 51, 51);
}
</style>
