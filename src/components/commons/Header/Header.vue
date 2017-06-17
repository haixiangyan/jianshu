<template>
    <div class="jian-header-wrapper">
        <!--免费下载-->
        <div class="jian-backup-header-download">
            <el-row>
                <el-col class="jian-backup-download-logo" :span="3">
                    <img src="/static/image/jian-header/logo.png" alt="">
                </el-col>
                <el-col class="jian-backup-download-text" :span="14">
                    创作你的创作
                </el-col>
                <el-col class="jian-backup-download-free" :span="7">
                    <el-button type="primary">免费下载</el-button>
                </el-col>
            </el-row>
        </div>
    
        <!--小设备的空格-->
        <div class="jian-backup-space"></div>
    
        <!--优先选择此 Header-->
        <el-menu :default-active="activeIndex" class="jian-header-menu jian-main-header" mode="horizontal" @select="handleSelect">
            <el-menu-item class="jian-header-logo-wrapper" index="1">
                <img src="/static/image/jian-header/logo.png" alt="">
            </el-menu-item>
            <el-menu-item style="margin-left: 50px;" index="2">
                <a href="/">
                    <i class="fa fa-compass">发现</i>
                </a>
            </el-menu-item>
            <el-menu-item index="3">
                <a href="/follow">
                    <i class="fa fa-book">关注</i>
                </a>
            </el-menu-item>
            <el-submenu class="jian-header-sub-menu" index="4">
                <template slot="title">
                    <i class="fa fa-bell-o">消息</i>
                </template>
                <el-menu-item index="4-1">
                    <a href="/message/comments">
                        <i class="fa fa-comment-o fa-2x"></i>
                        <span> 评论 </span>
                    </a>
                </el-menu-item>
                <el-menu-item index="4-2">
                    <a href="/message/chats">
                        <i class="fa fa-envelope-o"></i>
                        <span> 简信 </span>
                    </a>
                </el-menu-item>
                <el-menu-item index="4-3">
                    <a href="/message/requests">
                        <i class="fa fa-upload"></i>
                        <span> 投稿 </span>
                    </a>
                </el-menu-item>
                <el-menu-item index="4-4">
                    <a href="/message/loves">
                        <i class="fa fa-heart-o"></i>
                        <span> 喜欢和赞 </span>
                    </a>
                </el-menu-item>
                <el-menu-item index="4-5">
                    <a href="/message/givens">
                        <i class="fa fa-money"></i>
                        <span> 赞赏 </span>
                    </a>
                </el-menu-item>
                <el-menu-item index="4-5">
                    <a href="/message/others">
                        <i class="fa fa-bars"></i>
                        <span> 其他 </span>
                    </a>
                </el-menu-item>
            </el-submenu>
    
            <el-popover ref="text-setting" placement="bottom" width="250" trigger="hover" class="jian-text-setting-popover">
                <el-row class="jian-text-setting-item">
                    <el-col class="jian-night-setting" :span="12">
                        <span>
                            <i class="fa fa-moon-o"></i>夜间模式</span>
                    </el-col>
                    <el-col :span="12">
                        <el-switch v-model="isNight" on-text="夜间" off-text="日间">
                        </el-switch>
                    </el-col>
                </el-row>
                <el-row class="jian-text-setting-item">
                    <el-col :span="12">
                        <el-switch v-model="isSong" on-text="宋体" off-text="黑体">
                        </el-switch>
                    </el-col>
                    <el-col class="jian-night-setting" :span="12">
                        <span>
                            <i class="fa fa-font"></i>字体模式</span>
                    </el-col>
                </el-row>
                <el-row class="jian-text-setting-item">
                    <el-col class="jian-night-setting" :span="12">
                        <span>
                            <i class="fa fa-chain"></i>简繁模式</span>
                    </el-col>
                    <el-col :span="12">
                        <span>
                            <el-switch v-model="isJian" on-text="简体" off-text="繁体">
                            </el-switch>
                        </span>
                    </el-col>
                </el-row>
            </el-popover>
    
            <el-menu-item class="jian-header-text-setting" index="5">
                <span v-popover:text-setting>Aa</span>
            </el-menu-item>
    
            <el-submenu class="jian-header-user jian-header-sub-menu" index="6">
                <template slot="title">
                    <img src="/static/image/jian-header/avatar.jpg" alt="">
                </template>
                <el-menu-item index="6-1">
                    <i class="fa fa-user"></i>
                    <span> 我的主页 </span>
                </el-menu-item>
                <el-menu-item index="6-2">
                    <i class="fa fa-bookmark"></i>
                    <span> 收藏的文章 </span>
                </el-menu-item>
                <el-menu-item index="6-3">
                    <i class="fa fa-heart"></i>
                    <span> 喜欢的文章 </span>
                </el-menu-item>
                <el-menu-item index="6-4">
                    <i class="fa fa-money"></i>
                    <span> 我的钱包 </span>
                </el-menu-item>
                <el-menu-item index="6-5">
                    <i class="fa fa-cog"></i>
                    <span> 设置 </span>
                </el-menu-item>
                <el-menu-item index="6-6">
                    <i class="fa fa-comment"></i>
                    <span> 帮肋和反馈 </span>
                </el-menu-item>
                <el-menu-item index="6-7">
                    <i class="fa fa-sign-out"></i>
                    <span> 退出 </span>
                </el-menu-item>
            </el-submenu>
    
            <el-menu-item class="jian-no-hover-item jian-write-wrapper" index="7">
                <el-button icon="edit" class="jian-write-btn">写文章</el-button>
            </el-menu-item>
        </el-menu>
    
        <!--缩小后的 Header-->
        <el-menu :default-active="activeIndex" class="jian-header-menu jian-backup-header" mode="horizontal" @select="handleSelect">
    
            <el-submenu class="jian-header-sub-menu jian-backup-header-body" index="2">
                <template slot="title">
                    <i class="el-icon-more"></i>
                </template>
                <el-menu-item index="2-1">
                    <a href="/message">
                        <i class="fa fa-compass"></i>
                        <span> 发现 </span>
                    </a>
    
                </el-menu-item>
                <el-menu-item index="2-2">
                    <a href="/message">
                        <i class="fa fa-book"></i>
                        <span> 关注 </span>
                    </a>
    
                </el-menu-item>
                <el-menu-item index="2-3">
                    <a href="/message">
                        <i class="fa fa-bell-o"></i>
                        <span> 消息 </span>
                    </a>
    
                </el-menu-item>
            </el-submenu>
        </el-menu>
    
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: '2',
            searchForm: {
                search: ''
            },
            isZoom: null,
            isNight: false,
            isSong: false,
            isJian: true
        }
    },
    methods: {
        handleSelect(key, keyPath) {
        },
        search() {
            console.log('search' + this.searchForm.search);
        }
    }
}
</script>

<style scoped>
/*媒体查询*/

@media screen and (max-width: 960px) {

    .jian-main-header {
        display: none;
    }

    .jian-backup-header {
        display: block;
    }

    .jian-backup-header-download {
        position: fixed;
        top: 0;
        left: 0;
        box-shadow: 0 4px 8px -4px rgb(150, 150, 150);
        width: 100%;
        background: white;
        z-index: 2;
    }

    .jian-backup-download-logo {
        display: flex;
        align-items: center;
        height: 50px;
        padding-left: 20px;
    }

    .jian-backup-download-logo img {
        max-width: 50px;
    }

    .jian-backup-download-text {
        padding-left: 40px;
        line-height: 50px;
    }

    .jian-backup-download-free {
        padding-right: 20px;
        line-height: 50px;
        text-align: right;
    }

    .jian-backup-download-free button {
        background: rgb(234, 111, 90);
        border: none;
    }

    .jian-backup-space {
        margin-top: 50px;
    }
}

@media screen and (min-width: 960px) {
    .jian-main-header {
        display: block;
    }

    .jian-backup-header {
        display: none;
    }

    .jian-backup-header-download {
        display: none;
    }
}


/*头部样式*/

.jian-header-wrapper {
    border-bottom: 1px solid rgb(240, 240, 240);
}

.jian-header-wrapper ul {
    background: white;
}

.jian-header-wrapper i,
.jian-header-wrapper li {
    font-size: 17px;
}

.jian-header-menu>li:hover {
    border-bottom-color: rgb(234, 111, 90);
}

.is-active {
    color: rgb(234, 111, 90);
}
/*备选头部样式*/

.jian-backup-header-logo,
.jian-backup-header-body {
    width: 100%;
    text-align: center;
}

.jian-backup-header-logo>img {
    margin: 0 auto;
}

/*头部 logo 样式*/

.jian-header-logo-wrapper {
    display: flex;
    align-items: center;
}

.jian-header-logo-wrapper img {
    max-height: 26px;
}

/*头部子菜单样式*/

.jian-header-sub-menu li i {
    color: rgb(234, 111, 90);
}

.jian-header-sub-menu li span {
    white-space: pre;
}

.jian-header-sub-menu li a {
    text-decoration: none;
}

.jian-header-sub-menu li {
    margin: 15px;
}

.jian-header-sub-menu img {
    max-width: 35px;
    max-height: 35px;
    border-radius: 50%;
    border: 1px solid silver;
    transform: translateY(29%);
}

.jian-header-text-setting {
    margin-left: 40%;
}

/*夜间模式气泡*/

.jian-text-setting-item {
    padding: 20px;
    font-size: 17px;
}

.jian-text-setting-item div {
    display: flex;
    justify-content: center;
    text-align: center;
}

/*写文章按钮*/

.jian-write-btn {
    background: rgb(234, 111, 90);
    border: none;
    color: white;
}

.jian-no-hover-item:hover {
    background: white;
    border-bottom: none;
}
/*搜索框*/
</style>
