import Vue from 'vue'
import Router from 'vue-router'

import Hello from '@/components/pages/Hello/Hello'
import Message from '@/components/pages/Message/Message'
import Comment from '@/components/pages/Message/Content/Comment/Comment'
import Chat from '@/components/pages/Message/Content/Chat/Chat'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // 首页
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    // 消息页
    {
      path: '/message',
      name: 'Message',
      redirect: '/message/comments',
      component: Message,
      children: [
        {
          path: '/message/comments',
          component: Comment
        },
        {
          path: '/message/chats',
          component: Chat
        }
      ]
    }
  ]
})
