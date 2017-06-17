<template>
    <div class="jian-givens-wrapper">
        <!--标题-->
        <div class="jian-givens-title">
            收到的赞赏
        </div>
        <!--评论列表-->
        <div class="jian-givens-list">
            <img src="/static/image/jian-request/request.png" alt="">
            <p>这里还木有内容哦~</p>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            givens: []
        }
    }
}
</script>

<style scoped>
/*标题*/

.jian-givens-title {
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgb(240, 240, 240);
    color: rgb(51, 51, 51);
    font-size: 14px;
    font-weight: bold;
    line-height: 20px;
}

.jian-givens-list {
    margin-top: 150px;
    text-align: center;
}

.jian-givens-list img {
    max-width: 100px;
}

.jian-givens-list p {
    margin-top: 20px;
    font-size: 14px;
    font-weight: bold;
    line-height: 20px;
    color: rgb(51, 51, 51);
}
</style>
