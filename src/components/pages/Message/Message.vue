<template>
    <div class="jian-message-page">
        <!--消息页头部-->
        <jian-header></jian-header>

        <!--消息页内容-->
        <jian-message-content></jian-message-content>
    </div>
</template>

<script>
import JianHeader from '@/components/commons/Header/Header'
import JianMessageContent from '@/components/pages/Message/Content/Content'

export default {
    components: {
        'jian-header': JianHeader,
        'jian-message-content': JianMessageContent
    }
}
</script>

<style scoped>
/*媒体查询*/
@media screen and (max-width: 960px) {
    /*小屏幕显示*/
    .jian-origin-show {
      display: none;
    }

    .jian-backup-show {
      display: block;
    }
}

@media screen and (min-width: 960px) {
    /*大屏幕显示*/
    .jian-origin-footer {
      display: block;
    }

    .jian-backup-show {
      display: none;
    }
}
</style>
