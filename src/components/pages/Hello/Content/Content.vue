<template>
    <el-row class="jian-hello-content-wrapper">
        <!--内容栏的左侧-->
        <el-col class="jian-passages-catalog jian-backup-width" :span="16">

            <!--分类标题-->
            <div class="jian-content-catalog-title">热门专题</div>

            <!--分类-->
            <el-row class="jian-catalog jian-origin-show">
                <jian-catalog-item class="jian-catalog-item-display" v-for="(catalogItem, index) in catalog" :key="index" :catalogItem="catalogItem"></jian-catalog-item>
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
        <el-col class="jian-recommend jian-origin" :span="8">
            <div> Recommend </div>
        </el-col>
    </el-row>
</template>

<script>
import JianCatalogItem from '@/components/pages/Hello/Content/CatalogItem/CatalogItem'
import JianBackupCatalogItem from '@/components/pages/Hello/Content/CatalogItem/BackupCatalogItem'

export default {
    data() {
        return {
            catalog: []
        }
    },
    components: {
        'jian-catalog-item': JianCatalogItem,
        'jian-backup-catalog-item': JianBackupCatalogItem
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
}
</style>
