<template>
    <el-row class="jian-message-content-wrapper">
        <el-col class="jian-message-menu-wrapper jian-origin-show" :span="7">
            <el-menu class="jian-message-menu">
                <el-menu-item class="jian-message-menu-item" index="1">
                    <a href="/message/comments">
                        <i class="fa fa-comment-o"></i>
                        <span>评论</span>
                    </a>
                </el-menu-item>
                <el-menu-item class="jian-message-menu-item" index="2">
                    <a href="/message/chats">
                        <i class="fa fa-envelope-o"></i>
                        <span>简信</span>
                    </a>
                </el-menu-item>
                <el-menu-item class="jian-message-menu-item" index="3">
                    <a href="/message/requests">
                        <i class="fa fa-upload"></i>
                        <span>投稿请求</span>
                    </a>
                </el-menu-item>
                <el-menu-item class="jian-message-menu-item" index="4">
                    <a href="/message/loves">
                        <i class="fa fa-heart-o"></i>
                        <span>喜欢和赞</span>
                    </a>
                </el-menu-item>
                <el-menu-item class="jian-message-menu-item" index="5">
                    <a href="/message/follows">
                        <i class="fa fa-user-o"></i>
                        <span>关注</span>
                    </a>
                </el-menu-item>
                <el-menu-item class="jian-message-menu-item" index="6">
                    <a href="/message/givens">
                        <i class="fa fa-money"></i>
                        <span>赞赏</span>
                    </a>
                </el-menu-item>
                <el-menu-item class="jian-message-menu-item" index="7">
                    <a href="/message/others">
                        <i class="fa fa-bars"></i>
                        <span>其他消息</span>
                    </a>
                </el-menu-item>
            </el-menu>
        </el-col>
        <el-col class="jian-message-list" :span="17">
            <router-view></router-view>
        </el-col>
    </el-row>
</template>

<script>
export default {
    data() {
        return {
        }
    }
}
</script>

<style scoped>
@media screen and (max-width: 960px) {
    /*小屏幕显示*/
    .jian-origin-show {
        display: none;
    }

    .jian-backup-show {
        display: block;
    }

    /*次宽度*/
    .jian-message-content-wrapper {
        width: 90%;
    }

    .jian-messages {
        width: 100%;
    }

    .jian-message-list {
        width: 100%;        
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

    /*主宽度*/
    .jian-message-content-wrapper {
        width: 75%;
    }

    /*消息列表*/
    .jian-message-list {
        padding-left: 30px;
    }
}

/*主要内容区块*/

.jian-message-content-wrapper {
    margin: 0 auto;
    padding: 30px 0;
}

/*消息菜单区块*/

.jian-message-menu {
    background: #fff;
}

.jian-message-menu-item {
    padding: 7px 25px;
    display: flex;
    align-items: center;
    border-radius: 5px;
}

.is-active {
    background: #f0f0f0;
    color: rgb(72, 87, 106);
}

.jian-message-menu-item a {
    display: block;
    width: 100%;
}

.jian-message-menu-item>span,
.jian-message-menu-item a {
    font-size: 16px;
    text-decoration: none;
    color: rgb(72, 87, 106);
}

.jian-message-menu-item i {
    margin-right: 15px;
    font-size: 22px;
    color: rgb(234, 111, 90);
}
</style>
