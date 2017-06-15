<template>
    <el-row class="jian-hello-content-wrapper">
        <el-col class="jian-passages-catalog" :span="16">
            <el-row class="jian-catalog">
                <jian-catalog-item v-for="(catalogItem, index) in catalog" :key="index" :catalogItem="catalogItem"></jian-catalog-item>
            </el-row>
            <el-row class="jian-passages">
                Passges
            </el-row>
        </el-col>
        <el-col class="jian-recommend" :span="8">
            <div> Recommend </div>
        </el-col>
    </el-row>
</template>

<script>
import JianCatalogItem from '@/components/pages/Hello/Content/CatalogItem/CatalogItem'

export default {
    data() {
        return {
            catalog: []
        }
    },
    components: {
        'jian-catalog-item': JianCatalogItem
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
/*主要内容的样式*/

.jian-hello-content-wrapper {
    margin: 0 auto;
    width: 75%;
}
</style>
