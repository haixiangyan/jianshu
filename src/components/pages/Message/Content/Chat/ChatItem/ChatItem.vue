<template>
    <a href="/config" class="jian-chat-item-wrapper">
        <!--作者简介-->
        <el-row>
            <el-col class="jian-chat-avatar" :span="2">
                <img :src="chat.avatar" alt="头像">
            </el-col>
            <el-col class="jian-chat-header" :span="22">
                <el-row>
                    <el-col class="jian-chat-intro" :span="12">
                        <a class="jian-commet-author" href="/">{{chat.name}}</a>
                    </el-col>
                    <el-col class="jian-chat-datetime" :span="12">
                        {{chat.datetime}}
                    </el-col>
                </el-row>
    
                <!--简信正文-->
                <p class="jian-chat-content">
                    {{(chat.chat.length > 40) ? `${chat.chat.slice(0, 40)}...` : chat.chat}}
                </p>
            </el-col>
        </el-row>
    
    </a>
</template>

<script>

export default {
    props: ['chat'],
    data() {
        return {
            metas: [
                {
                    meta: 'fa fa-chat-o',
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
            isShowchat: false
        }
    },
    computed: {
        form() {
            return {
                chat: `@${this.chat.name} `
            }
        },
    },
    methods: {
        showchat() {
            this.isShowchat = !this.isShowchat;
        },
        send() {
            this.$message({
                message: '发送成功',
                type: 'success'
            });
            this.isShowchat = !this.isShowchat;
        }
    }
}
</script>

<style scoped>
@media screen and (max-width: 960px) {
    .jian-chat-header {
        padding-left: 10%;
    }
}

.jian-chat-item-wrapper {
    display: block;
    padding: 20px;
    border-top: 1px solid rgb(240, 240, 240);
}

.jian-chat-item-wrapper a {
    text-decoration: none;
}

/*头像部分*/

.jian-chat-avatar img {
    max-width: 42px;
    border-radius: 50%;
    border: 1px solid #ddd;
}

/*作者简介*/

.jian-chat-intro,
.jian-chat-intro a:first-of-type {
    font-size: 15px;
    line-height: 25.5px;
    color: rgb(51, 51, 51);
}

.jian-chat-author {
    color: rgb(51, 51, 51);
}

.jian-chat-passage,
.jian-chat-at {
    color: rgb(49, 148, 208);
}

.jian-chat-datetime {
    color: rgb(150, 150, 150);
    font-size: 12px;
    text-align: right;
}

/*评论正文*/

.jian-chat-content {
    margin-top: 3px;
    color: #999;
    font-size: 12px;
}
</style>
