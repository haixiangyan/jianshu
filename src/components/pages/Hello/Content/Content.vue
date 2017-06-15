<template>
    <el-row class="jian-hello-content-wrapper">
        <!--内容栏的左侧-->
        <el-col class="jian-passages-catalog jian-backup-width" :span="16">
    
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
                <jian-backup-catalog-item v-for="(catalogItem, index) in catalog" :key="index" :catalogItem="catalogItem"></jian-backup-catalog-item>
            </el-row>
            <!--分割线-->
            <div class="jian-content-split"></div>
            <!--全部文章-->
            <el-row class="jian-passages">
                Passges
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

export default {
    data() {
        return {
            catalog: [],
            hotTopcs: []
        }
    },
    components: {
        'jian-catalog-item': JianCatalogItem,
        'jian-backup-catalog-item': JianBackupCatalogItem,
        'jian-hot-topics-item': JianHotTopicsItem,
        'jian-download-app': JianDownloadApp,
        'jian-re-writer-wrapper': JianReWriterWrapper
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
    }
}
</script>

<style scoped>
/*媒体查询*/

@media screen and (max-width: 960px) {

    .jian-origin-show {
        display: none;
    }

    .jian-backup-show {
        display: block;
    }

    .jian-backup-width {
        width: 100%;
    }

    .jian-backup-bg {
        background: #EFF2F7;
    }
}

@media screen and (min-width: 960px) {
    .jian-origin-show {
        display: block;
    }

    .jian-backup-show {
        display: none;
    }
}


/*主要内容的样式*/

.jian-hello-content-wrapper {
    margin: 0 auto;
    width: 75%;
}


/*左侧侧栏*/

.jian-passages-catalog {
    padding-right: 20px;
}


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
