<template>
    <div href="/config" class="jian-other-item-wrapper">
        <!--作者简介-->
        <el-row>
            <el-col class="jian-other-icon" :span="1">
                <i v-show="other.type === 'subscribe'" class="fa fa-signal"></i>
                <i v-show="other.type === 'success'" class="fa fa-trophy"></i>
                <i v-show="other.type === 'fail'" class="fa fa-frown-o"></i>
            </el-col>
            <el-col class="jian-other-header" :span="23">
                <el-row>
                    <el-col class="jian-other-intro" :span="24">
                        <!--订阅部分-->
                        <div v-show="other.type === 'subscribe'">
                            <a class="jian-other-author" href="/">{{other.name}}</a>
                            <span>订阅了你的文章</span>
                            <a class="jian-other-passage" href="/">《{{other.passage}}》</a>
                        </div>
                        <!--成功投稿部分-->
                        <div v-show="other.type === 'success'">
                            <span>你投稿的文章</span>
                            <a class="jian-other-passage" href="/">《{{other.passage}}》</a>
                            已被加入专题
                            <a class="jian-other-passage" href="/">《{{other.topic}}》</a>
                        </div>
                        <!--失败投稿部分-->
                        <div v-show="other.type === 'fail'">
                            <span>你的文章</span>
                            <a class="jian-other-passage" href="/">《{{other.passage}}》</a>
                            未能入选专题
                            <a class="jian-other-passage" href="/">《{{other.topic}}》</a>
                            ，继续加油~
                        </div>
                    </el-col>
                </el-row>
            </el-col>

        </el-row>
        <div class="jian-other-datetime">
            {{other.datetime}}
        </div>
    </div>
</template>

<script>

export default {
    props: ['other'],
    data() {
        return {

        }
    }
}
</script>

<style scoped>
@media screen and (max-width: 960px) {
    .jian-other-header {
        padding-left: 10%;
    }
}

.jian-other-item-wrapper {
    display: block;
    padding: 20px;
    border-top: 1px solid rgb(240, 240, 240);
}

.jian-other-item-wrapper a {
    text-decoration: none;
}


/*头像部分*/

.jian-other-icon i {
    line-height: 25.5px;
    color: #ea6f5a;
}


/*作者简介*/

.jian-other-intro {
    font-size: 15px;
    line-height: 25.5px;
    color: rgb(51, 51, 51);
}

.jian-other-passage,
.jian-other-author {
    color: rgb(49, 148, 208);
}

.jian-other-datetime {
    margin-top: 2px;
    color: rgb(150, 150, 150);
    font-size: 12px;
    line-height: 1;
}
</style>
