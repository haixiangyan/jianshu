<template>
    <el-row class="jian-follow-content-wrapper">
        <!--关注页的左侧-->
        <el-col class="jian-follow-menu-wrapper jian-origin-show" :span="7">
            <el-row class="jian-follow-menu-header">
                <el-col :span="12">
                    <el-dropdown @command="chooseType">
                        <span class="jian-follow-dropdown-title">
                            全部关注
                            <i class="el-icon-caret-bottom el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="1" class="jian-follow-dropdown">全部关注</el-dropdown-item>
                            <el-dropdown-item command="2" class="jian-follow-dropdown">只看作者</el-dropdown-item>
                            <el-dropdown-item command="3" class="jian-follow-dropdown">只看专题</el-dropdown-item>
                            <el-dropdown-item command="4" class="jian-follow-dropdown">只看文集</el-dropdown-item>
                            <el-dropdown-item command="5" class="jian-follow-dropdown">只看推送更新</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-col>
                <el-col class="jian-follow-add" :span="12">
                    <a href="/">
                        <i class="fa fa-user-plus"></i>
                        <span>添加关注</span>
                    </a>
                </el-col>
            </el-row>
            <!--菜单-->
            <el-menu class="jian-follow-menu">
                <el-menu-item class="jian-follow-menu-item" index="0">
                    <router-link to="/follow/timeline">
                        <img src="/static/image/jian-follow/friends.png"></img>
                        <span>简友圈</span>
                    </router-link>
                </el-menu-item>
                <el-menu-item v-for="(topic, index) in topicsData" :key="index" :topic="topic" class="jian-follow-menu-item" :index="`${index+1}`">
                    <router-link :to="topic.route">
                        <img :src="topic.avatar"></img>
                        <span>{{topic.name}}</span>
                    </router-link>
                </el-menu-item>
            </el-menu>
        </el-col>
        <el-col class="jian-follow-list" :span="17">
            <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">>
                <router-view></router-view>
            </transition>
        </el-col>
    </el-row>
</template>

<script>
export default {
    data() {
        return {
            followTopics: [],
            topicsData: []
        }
    },
    beforeMount() {
        // 发送请求，获取评论
        this.$axios.get('/follow/topics')
            .then((res) => {
                // 获取分类
                this.followTopics = res.data.data;
                this.topicsData = this.followTopics;
            })
            .catch((err) => {
                console.log('axios err', err);
            });
    },
    methods: {
        chooseType(command) {
            if (command === '1') {
                this.topicsData = this.followTopics;
                return ;
            }

            this.topicsData = this.followTopics.filter((elem) => {
                return elem.type.includes(`${command}`);
            })
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
    .jian-follow-content-wrapper {
        width: 90%;
    }

    .jian-follows {
        width: 100%;
    }

    .jian-follow-list {
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
    .jian-follow-content-wrapper {
        width: 75%;
    }

    /*消息列表*/
    .jian-follow-list {
        padding-left: 30px;
    }
}

/*主要内容区块*/

.jian-follow-content-wrapper {
    margin: 0 auto;
    padding: 30px 0;
}

/*菜单的头部*/
.jian-follow-menu-header {
    padding: 10px 20px;
    border-bottom: 1px solid #ddd;
    border-right: 1px solid #ddd;
}

.jian-follow-dropdown {
    text-align: center;
}

.jian-follow-add {
    text-align: right;
}

.jian-follow-add a {
    font-size: 14px;
    color: rgb(72, 87, 106);
    text-decoration: none;
}

/*关注菜单区块*/

.jian-follow-menu {
    background: #fff;
    border-right: 1px solid #ddd;
}

.jian-follow-menu-item {
    padding: 7px 25px;
    display: flex;
    align-items: center;
    border-radius: 5px;
}

.is-active {
    background: #f0f0f0;
    color: rgb(72, 87, 106);
}

.jian-follow-menu-item a {
    display: flex;
    align-items: center;
    width: 100%;
    font-size: 16px;
    text-decoration: none;
    color: rgb(72, 87, 106);
}

.jian-follow-menu-item img {
    max-width: 40px;
    border-radius: 5px;
}

.jian-follow-menu-item span {
    padding-left: 10px;
}
</style>
