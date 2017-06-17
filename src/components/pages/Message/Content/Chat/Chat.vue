<template>
    <div class="jian-chats-wrapper">
        <!--标题-->
        <div class="jian-chats-title">
            全部简信
        </div>
        <!--评论列表-->
        <div class="jian-chats-list">
            <jian-chat-item v-for="(chat, index) in chats" :chat="chat" :key="index"></jian-chat-item>
        </div>
    </div>
</template>

<script>
import JianChatItem from '@/components/pages/Message/Content/Chat/ChatItem/ChatItem'

export default {
    data() {
        return {
            chats: []
        }
    },
    components: {
        'jian-chat-item': JianChatItem
    },
    beforeMount() {
        // 发送请求，获取聊天
        this.$axios.get('/chat')
            .then((res) => {
                // 获取分类
                this.chats = res.data.data;
            })
            .catch((err) => {
                console.log('axios err', err);
            });
    }
}
</script>

<style scoped>
/*标题*/

.jian-chats-title {
    margin-bottom: 20px;
    color: rgb(51, 51, 51);
    font-size: 14px;
    font-weight: bold;
    line-height: 20px;
}
</style>
