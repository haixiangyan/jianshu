<template>
    <el-row class="jian-passage">
    
        <!--作者介绍-->
        <div class="jian-author-des">
            <!--头像-->
            <a href="/">
            </a>
    
            <span></span>
        </div>
    
        <!--显示文章左侧-->
        <el-col class="jian-passage-des" :span="17">
    
            <!--文章标题-->
            <div class="jian-passage-title">
                <a href="/"></a>
            </div>
    
            <!--文章的内容-->
            <div class="jian-passage-content">
                <p></p>
            </div>
    
            <!--文章的附属功能-->
            <div class="jian-passage-meta-wrapper">
    
            </div>
        </el-col>
    </el-row>
</template>

<script>
import JianPassageLabel from '@/components/pages/Hello/Content/CatalogItem/BackupCatalogItem'
import JianPassageMeta from '@/components/pages/Hello/Content/Passage/PassageMeta/PassageMeta'

export default {
    data() {
        return {
            meta: [
                'fa fa-eye',
                'fa fa-comment',
                'fa fa-heart',
                'fa fa-cny'
            ]
        }
    },
    components: {
        'jian-passage-label': JianPassageLabel,
        'jian-passage-meta': JianPassageMeta
    }
}
</script>

<style scoped>
@keyframes loading-1 {
    from {
        width: 30%;
    }
    to {
        width: 60%;
    }
}

@keyframes loading-2 {
    from {
        width: 90%;
    }
    to {
        width: 30%;
    }
}

@keyframes loading-3 {
    from {
        width: 30%;
    }
    to {
        width: 90%;
    }
}

.jian-passage { 
    padding: 17px 0;
}

.jian-author-des {
    display: flex;
    align-items: center;
}

.jian-author-des a {
    display: inline-block;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background: #ddd;
}

.jian-author-des span {
    display: inline-block;
    margin-left: 10px;
    height: 20px;
    width: 200px;
    background: #ddd;
}

.jian-passage-title {
    margin-top: 10px;
    height: 20px;
    width: 220px;
    background: #ddd;
    animation: 0.7s loading-1 infinite alternate ease-in-out;
}

.jian-passage-content {
    margin-top: 10px;
    height: 20px;
    width: 500px;
    background: #ddd;
    animation: 0.7s loading-2 infinite alternate ease-in-out;
}

.jian-passage-meta-wrapper {
    margin-top: 10px;
    height: 20px;
    width: 300px;
    background: #ddd;
    animation: 0.7s loading-3 infinite alternate ease-in-out;
}
</style>
