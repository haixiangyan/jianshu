<template>
  <div class="jian-comments-wrapper">
      <!--标题-->
      <div class="jian-comments-title">
          收到的评论
      </div>
      <!--评论列表-->
      <div class="jian-comments-list">
        <jian-comment-item></jian-comment-item>
      </div>
  </div>
</template>

<script>
import JianCommentItem from '@/components/pages/Message/Content/Comment/CommentItem/CommentItem'

export default {
  components: {
      'jian-comment-item': JianCommentItem
  }
}
</script>

<style scoped>
/*标题*/
.jian-comments-title {
    margin-bottom: 20px;
    color: rgb(51, 51, 51);
    font-size: 14px;
    font-weight: bold;
    line-height: 20px;
}
</style>
