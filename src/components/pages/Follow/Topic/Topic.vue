<template>
    <div class="jian-follow-topic">
        <!--话题的头部-->
        <jian-topic-header :id="id"></jian-topic-header>
        <!--话题的 tab 组件-->
        <el-tabs v-model="tab" class="jian-follow-tabs" type="card">
            <!--最新收录的文章-->
            <el-tab-pane label="最新收录" name="new-get">
                <jian-topic-passage v-for="(passage, index) in passages" :key="index" :passage="passage"></jian-topic-passage>
                <!--更多文章的按钮-->
                <el-button @click="getMoreNewPassages" class="jian-passages-more" type="primary">阅读更多</el-button>
                <el-button @click="getMoreNewPassages" class="jian-backup-passages-more" type="text">
                    展开更多文章
                    <i class="fa fa-angle-down"></i>
                </el-button>
            </el-tab-pane>
            <!--最新评论的文章-->
            <el-tab-pane label="最新评论" name="new-comment">
                <jian-topic-passage v-for="(passage, index) in newPassages" :key="index" :passage="passage"></jian-topic-passage>
                <!--更多文章的按钮-->
                <el-button @click="getMoreCommentPassages" class="jian-passages-more" type="primary">阅读更多</el-button>
                <el-button @click="getMoreCommentPassages" class="jian-backup-passages-more" type="text">
                    展开更多文章
                    <i class="fa fa-angle-down"></i>
                </el-button>
            </el-tab-pane>
            <!--热门的文章-->
            <el-tab-pane label="热门" name="hot">
                <jian-topic-passage v-for="(passage, index) in hotPassages" :key="index" :passage="passage"></jian-topic-passage>
                <!--更多文章的按钮-->
                <el-button @click="getMoreHotPassages" class="jian-passages-more" type="primary">阅读更多</el-button>
                <el-button @click="getMoreHotPassages" class="jian-backup-passages-more" type="text">
                    展开更多文章
                    <i class="fa fa-angle-down"></i>
                </el-button>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import JianTopicHeader from '@/components/pages/Follow/Topic/TopicHeader/TopicHeader'
import JianTopicPassage from '@/components/pages/Hello/Content/Passage/Passage'

export default {
    data() {
        return {
            id: -1,
            tab: 'new-get',
            passages: [],
            newPassages: [],
            hotPassages: []
        }
    },
    components: {
        'jian-topic-header': JianTopicHeader,
        'jian-topic-passage': JianTopicPassage
    },
    methods: {
        getMoreNewPassages() {
            // 发送请求，获取更多文章
            this.$axios.get('/more-passage')
                .then((res) => {
                    // 获取分类
                    this.passages = Array.of(...this.passages, ...res.data.data);
                })
                .catch((err) => {
                    console.log('axios err', err);
                });
        },
        getMoreCommentPassages() {
            // 发送请求，获取更多文章
            this.$axios.get('/more-passage')
                .then((res) => {
                    // 获取分类
                    this.newPassages = Array.of(...this.newPassages, ...res.data.data);
                })
                .catch((err) => {
                    console.log('axios err', err);
                });
        },
        getMoreHotPassages() {
            // 发送请求，获取更多文章
            this.$axios.get('/more-passage')
                .then((res) => {
                    // 获取分类
                    this.hotPassages = Array.of(...this.hotPassages, ...res.data.data);
                })
                .catch((err) => {
                    console.log('axios err', err);
                });
        },
        init() {
            // 获取 id
            this.id = this.$route.params.id;

            // 发送请求，获取文章
            this.$axios.get('/passage')
                .then((res) => {
                    // 获取分类
                    this.passages = res.data.data;
                })
                .catch((err) => {
                    console.log('axios err', err);
                });

            // 发送请求，获取文章
            this.$axios.get('/passage')
                .then((res) => {
                    // 获取分类
                    this.newPassages = res.data.data;
                })
                .catch((err) => {
                    console.log('axios err', err);
                });

            // 发送请求，获取文章
            this.$axios.get('/passage')
                .then((res) => {
                    // 获取分类
                    this.hotPassages = res.data.data;
                })
                .catch((err) => {
                    console.log('axios err', err);
                });
        }
    },
    beforeMount() {
        this.init()
    },
    beforeRouteUpdate(to, from, next) {
        // 获取不同的数据
        this.id = to.params.id;
        this.init();
        next();
    },
}
</script>

<style scoped>
@media screen and (max-width: 960px) {
    /*更多文章的按钮*/
    .jian-backup-passages-more {
        display: block;
        width: 100%;
        margin: 10px 0;
        color: #a5a5a5;
    }

    .jian-passages-more {
        display: none;
    }
}

@media screen and (min-width: 960px) {
    /*更多文章*/
    .jian-passages-more {
        display: block;
        margin: 30px 0 60px;
        width: 100%;
        background: #a5a5a5;
        border: none;
    }

    .jian-passages-more:hover {
        background: rgb(155, 155, 155);
    }

    .jian-backup-passages-more {
        display: none;
    }
}



/*tab 标签页*/

.jian-follow-tabs {
    padding: 13px 0;
}
</style>