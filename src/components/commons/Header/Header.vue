<template>
    <div class="jian-header-wrapper">
    
        <!--<div class="line"></div>-->
        <el-menu :default-active="activeIndex" class="jian-header-menu" mode="horizontal" @select="handleSelect">
            <el-menu-item class="jian-header-logo-wrapper" index="1">
                <img src="/static/image/jian-header/logo.png" alt="">
            </el-menu-item>
            <el-menu-item style="margin-left: 50px;" index="2">
                <i class="fa fa-compass">发现</i>
            </el-menu-item>
            <el-menu-item index="3">
                <i class="fa fa-book">关注</i>
            </el-menu-item>
            <el-submenu class="jian-header-sub-menu" index="4">
                <template slot="title">
                    <i class="fa fa-bell-o">消息</i>
                </template>
                <el-menu-item index="4-1">
                    <i class="fa fa-comment-o fa-2x"></i>
                    <span> 评论 </span>
                </el-menu-item>
                <el-menu-item index="4-2">
                    <i class="fa fa-envelope-o"></i>
                    <span> 简信 </span>
                </el-menu-item>
                <el-menu-item index="4-3">
                    <i class="fa fa-upload"></i>
                    <span> 投稿 </span>
                </el-menu-item>
                <el-menu-item index="4-4">
                    <i class="fa fa-heart-o"></i>
                    <span> 喜欢和赞 </span>
                </el-menu-item>
                <el-menu-item index="4-5">
                    <i class="fa fa-money"></i>
                    <span> 赞赏 </span>
                </el-menu-item>
            </el-submenu>
    
            <el-submenu class="jian-header-user jian-header-sub-menu" index="5">
                <template slot="title">
                   <img src="/static/image/jian-header/avatar.jpg" alt="">
                   <!--<i class="fa fa-money"></i>-->
                    <!--<span> 赞赏 </span>-->
                </template>
                <el-menu-item index="5-1">
                    <i class="fa fa-user"></i>
                    <span> 我的主页 </span>
                </el-menu-item>
                <el-menu-item index="5-2">
                    <i class="fa fa-bookmark"></i>
                    <span> 收藏的文章 </span>
                </el-menu-item>
                <el-menu-item index="5-3">
                    <i class="fa fa-heart"></i>
                    <span> 喜欢的文章 </span>
                </el-menu-item>
                <el-menu-item index="5-4">
                    <i class="fa fa-money"></i>
                    <span> 我的钱包 </span>
                </el-menu-item>
                <el-menu-item index="5-5">
                    <i class="fa fa-cog"></i>
                    <span> 设置 </span>
                </el-menu-item>
                <el-menu-item index="5-6">
                    <i class="fa fa-comment"></i>
                    <span> 帮肋和反馈 </span>
                </el-menu-item>
                <el-menu-item index="5-7">
                    <i class="fa fa-sign-out"></i>
                    <span> 退出 </span>
                </el-menu-item>
            </el-submenu>
    
            <el-menu-item class="jian-no-hover-item jian-write-wrapper" index="6">
                <el-button icon="edit" class="jian-write-btn">写文章</el-button>
            </el-menu-item>
    
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
            isZoom: null
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        search() {
            console.log('search' + this.searchForm.search);
        }
    }
}
</script>

<style scoped>
/*部样式*/

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

.jian-header-user,
.jian-write-wrapper {
    position: relative;
    left: 40%;
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
