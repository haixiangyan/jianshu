<template>
    <el-row class="jian-topic-header">
        <!--专栏的头像-->
        <el-col class="jian-topic-avatar" :span="4">
            <a href="/">
                <img :src="avatarSrc" alt="">
            </a>
        </el-col>
        <!--专栏的简介-->
        <el-col class="jian-topic-intro" :span="12">
            <div>
                <a class="jian-topic-title" href="/">{{Random.ctitle()}}</a>                
            </div>
            <div>
                <a class="jian-topic-founder" href="/">{{Random.cname()}}</a>
                <span class="jian-topic-meta">编 · 收录了 {{Random.natural(2000, 3000)}} 篇文章 · {{Random.natural(200, 400)}} 人关注 </span>
            </div>
        </el-col>
        <!--功能按钮-->
        <el-col class="jian-topic-function" :span="8">
            <el-button class="jian-topic-function-btn">投稿</el-button>
            <el-button class="jian-topic-function-btn">
                专题主页
                <i class="fa fa-angle-right"></i>
            </el-button>
        </el-col>
    </el-row>
</template>

<script>
import Mock from 'mockjs'

export default {
    props: ['id'],
    data() {
        return {
            Random: Mock.Random
        }
    },
    computed: {
        avatarSrc() {
            return `/static/image/jian-re-writer/writer-${this.id}.jpg`
        }
    },
}
</script>

<style scoped>
@media screen and (max-width: 960px) {
    /*功能按钮*/
    .jian-topic-function,
    .jian-topic-avatar {
        display: none;
    }
}

@media screen and (min-width: 960px) {
    /*功能按钮*/
    .jian-topic-function,
    .jian-topic-avatar {
        display: block;
    }
}

/*头像*/
.jian-topic-avatar a {
    display: inline-block;
}

.jian-topic-avatar img {
    max-width: 80px;
    border-radius: 4px;
    box-shadow: 0 0 12px -4px black;
}

/*专栏标题*/
.jian-topic-title {
    display: inline-block;
    padding: 10px 0;
    color: rgb(51, 51, 51);
    text-decoration: none;
    line-height: 30px;
    font-size: 21px;
    font-weight: bold;
}

/*专栏的简介*/
.jian-topic-founder {
    color: rgb(49, 148, 208);
    font-size: 14px;
    text-decoration: none;
    line-height: 20px;
}

.jian-topic-meta {
    color: rgb(150, 150, 150);
    font-size: 14px;
    line-height: 20px;
}

/*功能按钮*/
.jian-topic-function-btn {
    margin: 23px 0 23px 20px;
    border: 1px solid rgba(59, 194, 29, 0.7);
    color: rgba(59, 194, 29, 0.7);
    border-radius: 100px;
}

.jian-topic-function-btn:hover {
    background: rgba(59,194,29,.05);
}
</style>
