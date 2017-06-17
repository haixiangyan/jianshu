<template>
    <div class="jian-comment-item-wrapper">
        <!--作者简介-->
        <el-row>
            <el-col class="jian-comment-avatar" :span="2">
                <img :src="comment.avatar" alt="头像">
            </el-col>
            <el-col class="jian-comment-header" :span="22">
                <p class="jian-comment-intro">
                    <a class="jian-commet-author" href="/">{{comment.name}}</a>
                    在文章
                    <a class="jian-comment-passage" href="/">《{{comment.passage}}》</a>
                    中写了一条新评论
                </p>
                <div class="jian-comment-datetime">
                    {{comment.datetime}}
                </div>
            </el-col>
        </el-row>
        <!--评论正文-->
        <div class="jian-comment-content">
            <p>
                <a class="jian-comment-at" href="/">@{{comment.at}} </a>
                {{(comment.comment.length > 90) ? `${comment.comment.slice(0, 90)}...` : comment.comment}}
            </p>
        </div>
        <!--评论 Meta-->
        <div class="jian-comment-meta-wrapper">
            <jian-comment-meta v-on:showComment="showComment" class="jian-comment-meta" :text="metas[0].text" :meta="metas[0].meta" :route="metas[0].route"></jian-comment-meta>
            <jian-comment-meta class="jian-comment-meta" :text="metas[1].text" :meta="metas[1].meta" :route="metas[1].route"></jian-comment-meta>
            <jian-comment-meta class="jian-comment-meta" :text="metas[2].text" :meta="metas[2].meta" :route="metas[2].route"></jian-comment-meta>
        </div>
    
        <!--评论的表单-->
        <transition enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp">
            <div v-show="isShowComment" class="jian-comment-hide">
                <el-form ref="commentForm" :model="form">
                    <el-form-item>
                        <el-input type="textarea" :rows="3" v-model="form.comment" placeholder="写下你的评论..."></el-input>
                    </el-form-item>
                </el-form>
    
                <el-row class="jian-comment-function">
                    <el-button @click="showComment" class="jian-comment-cancel" type="text">取消</el-button>
                    <el-button @click="send" type="success">确定</el-button>
                </el-row>
            </div>
        </transition>
    
    </div>
</template>

<script>
import JianCommentMeta from '@/components/pages/Message/Content/Comment/CommentMeta/CommentMeta'

export default {
    props: ['comment'],
    data() {
        return {
            metas: [
                {
                    meta: 'fa fa-comment-o',
                    text: '回复',
                    route: ''
                },
                {
                    meta: 'fa fa-angle-right',
                    text: '查看对话',
                    route: '/'
                },
                {
                    meta: '',
                    text: '举报',
                    route: '/'
                }
            ],
            isShowComment: false
        }
    },
    computed: {
        form() {
            return {
                comment: `@${this.comment.name} `
            }
        },
    },
    components: {
        'jian-comment-meta': JianCommentMeta
    },
    methods: {
        showComment() {
            this.isShowComment = !this.isShowComment;
        },
        send() {
            this.$message({
                message: '发送成功',
                type: 'success'
            });
            this.isShowComment = !this.isShowComment;
        }
    }
}
</script>

<style scoped>
@media screen and (max-width: 960px) {
    .jian-comment-header {
        padding-left: 10%;
    }
}

.jian-comment-item-wrapper {
    padding: 20px;
    border-top: 1px solid rgb(240, 240, 240);
}

.jian-comment-item-wrapper a {
    text-decoration: none;
}


/*头像部分*/
.jian-comment-avatar img {
    max-width: 42px;
    border-radius: 50%;
    border: 1px solid #ddd;
}


/*作者简介*/

.jian-comment-intro,
.jian-comment-intro a:first-of-type,
.jian-comment-content p {
    font-size: 15px;
    line-height: 25.5px;
    color: rgb(51, 51, 51);
}

.jian-comment-author {
    color: rgb(51, 51, 51);
}

.jian-comment-passage,
.jian-comment-at {
    color: rgb(49, 148, 208);
}

.jian-comment-datetime {
    color: rgb(150, 150, 150);
    font-size: 12px;
}


/*评论正文*/

.jian-comment-content {
    margin: 10px 0;
    color: rgb(51, 51, 51);
}

.jian-comment-meta {
    margin-right: 10px;
}


/*隐藏的评论*/

.jian-comment-hide {
    margin-top: 20px;
}

.jian-comment-cancel {
    color: rgb(150, 150, 150);
}

.jian-comment-function {
    text-align: right;
}
</style>
