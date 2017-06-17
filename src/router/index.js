import Vue from 'vue'
import Router from 'vue-router'

import Hello from '@/components/pages/Hello/Hello'
import Message from '@/components/pages/Message/Message'
import Comment from '@/components/pages/Message/Content/Comment/Comment'
import Chat from '@/components/pages/Message/Content/Chat/Chat'
import Request from '@/components/pages/Message/Content/Request/Request'
import Love from '@/components/pages/Message/Content/Love/Love'
import Follow from '@/components/pages/Message/Content/Follow/Follow'
import Given from '@/components/pages/Message/Content/Given/Given'
import Other from '@/components/pages/Message/Content/Other/Other'

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
      mode: 'history',
      children: [
        {
          path: '/message/comments',
          component: Comment
        },
        {
          path: '/message/chats',
          component: Chat
        },
        {
          path: '/message/requests',
          component: Request
        },
        {
          path: '/message/loves',
          component: Love
        },
        {
          path: '/message/follows',
          component: Follow
        },
        {
          path: '/message/givens',
          component: Given
        },
        {
          path: '/message/others',
          component: Other
        }
      ]
    }
  ]
})
