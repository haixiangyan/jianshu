<template>
    <el-row class="jian-hello-content-wrapper">
        <!--内容栏的左侧-->
        <el-col class="jian-passages-catalog" :span="16">
    
            <!--分类标题-->
            <div class="jian-content-catalog-title jian-backup-show">热门专题</div>
    
            <!--分类-->
            <el-row class="jian-catalog jian-origin-show">
                <jian-catalog-item class="jian-catalog-item-display" v-for="(catalogItem, index) in catalog" :key="index" :catalogItem="catalogItem"></jian-catalog-item>
                <a href="#" class="jian-catalog-more">
                    更多热门专题
                    <i class="el-icon-arrow-right"></i>
                </a>
            </el-row>
            <el-row class="jian-catalog jian-backup-show">
                <jian-backup-catalog-item class="jian-backup-catalog-item" v-for="(catalogItem, index) in catalog" :key="index" :catalogItem="catalogItem"></jian-backup-catalog-item>
            </el-row>
            <!--分割线-->
            <div class="jian-content-split"></div>
            <!--全部文章-->
            <el-row class="jian-passages">
                <jian-passage v-for="(passage, index) in passages" :key="index" :passage="passage"></jian-passage>
                <jian-loading v-show="isLoading"></jian-loading>
                <!--更多文章的按钮-->
                <el-button @click="morePassage" class="jian-passages-more" type="primary">阅读更多</el-button>
                <el-button @click="morePassage" class="jian-backup-passages-more" type="text">
                    展开更多文章
                    <i class="fa fa-angle-down"></i>
                </el-button>
            </el-row>
        </el-col>
    
        <!--内容栏的右侧-->
        <el-col class="jian-recommend jian-origin-show" :span="8">
            <!--热门话题-->
            <el-row class="jian-hot-topics">
                <jian-hot-topics-item v-for="(hotTopicsItem, index) in hotTopcs" :key="index" :hotTopicsItem="hotTopicsItem"></jian-hot-topics-item>
            </el-row>
            <!--下载 App-->
            <el-row class="jian-hot-topics">
                <jian-download-app></jian-download-app>
            </el-row>
            <!--推荐的作者-->
            <el-row class="jian-re-writers">
                <jian-re-writer-wrapper></jian-re-writer-wrapper>
            </el-row>
        </el-col>
    </el-row>
</template>

<script>
import JianCatalogItem from '@/components/pages/Hello/Content/CatalogItem/CatalogItem'
import JianBackupCatalogItem from '@/components/pages/Hello/Content/CatalogItem/BackupCatalogItem'
import JianHotTopicsItem from '@/components/pages/Hello/Content/HotTopicsItem/HotTopicsItem'
import JianDownloadApp from '@/components/pages/Hello/Content/DownloadApp/DownloadApp'
import JianReWriterWrapper from '@/components/pages/Hello/Content/ReWriterWrapper/ReWriterWrapper'
import JianPassage from '@/components/pages/Hello/Content/Passage/Passage'
import JianLoading from '@/components/pages/Hello/Content/Passage/Loading/Loading'

export default {
    data() {
        return {
            catalog: [],
            hotTopcs: [],
            passages: [],
            isLoading: false
        }
    },
    components: {
        'jian-catalog-item': JianCatalogItem,
        'jian-backup-catalog-item': JianBackupCatalogItem,
        'jian-hot-topics-item': JianHotTopicsItem,
        'jian-download-app': JianDownloadApp,
        'jian-re-writer-wrapper': JianReWriterWrapper,
        'jian-passage': JianPassage,
        'jian-loading': JianLoading
    },
    methods: {
        morePassage() {
            // 发送请求，获取更多文章
            this.isLoading = true;
            setTimeout(() => {
                this.$axios.get('/more-passage')
                    .then((res) => {
                        // 获取分类
                        this.passages = Array.of(...this.passages, ...res.data.data);
                        this.isLoading = false;
                    })
                    .catch((err) => {
                        console.log('axios err', err);
                    });
                this.isLoading = false
            }, 3000);

        }
    },
    beforeMount() {
        // 发送请求，获取分类
        this.$axios.get('/catalog')
            .then((res) => {
                // 获取分类
                this.catalog = res.data.data;
            })
            .catch((err) => {
                console.log('axios err', err);
            });

        // 发送请求，获取热门话题
        this.$axios.get('/hot-topics')
            .then((res) => {
                // 获取分类
                this.hotTopcs = res.data.data;
            })
            .catch((err) => {
                console.log('axios err', err);
            });

        // 发送请求，获取文章
        this.$axios.get('/passage')
            .then((res) => {
                // 获取分类
                this.passages = res.data.data;
            })
            .catch((err) => {
                console.log('axios err', err);
            });
    }
}
</script>

<style scoped>
/*媒体查询*/

@media screen and (min-width: 1280px) {
    .jian-hello-content-wrapper {
        width: 1280px;
    }
}

@media screen and (max-width: 960px) {
    /*总体布局*/
    .jian-hello-content-wrapper {
        width: 90%;
    }

    .jian-origin-show {
        display: none;
    }

    .jian-backup-show {
        display: block;
    }

    /*文章和分类*/
    .jian-passages-catalog {
        margin: 0 auto;
        width: 100%;
        padding: 0;
    }

    .jian-backup-bg {
        background: #EFF2F7;
    }

    .jian-backup-catalog-item {
        display: inline-block;
        margin: 0 15px 15px 0;
        font-size: 13px;
        padding: 7px;
    }

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
    .jian-hello-content-wrapper {
        width: 75%;
    }

    .jian-origin-show {
        display: block;
    }

    .jian-backup-show {
        display: none;
    }

    .jian-passages-catalog {
        padding-right: 20px;
    }

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


/*主要内容的样式*/

.jian-hello-content-wrapper {
    margin: 0 auto;
}


/*左侧侧栏*/


/*更多专题*/

.jian-catalog-more {
    display: inline-block;
    margin-top: 9px;
    vertical-align: top;
    text-decoration: none;
    color: #787878;
    font-size: 14px;
}


/*文章分类*/

.jian-content-catalog-title {
    padding-top: 20px;
}

.jian-catalog {
    margin-top: 40px;
    margin-bottom: 20px;
}


/*分割线*/

.jian-content-split {
    border-top: 1px solid rgb(240, 240, 240);
    margin-bottom: 15px;
}


/*推荐样式*/

.jian-recommend {
    margin-top: 40px;
    padding-left: 20px;
}
</style>
