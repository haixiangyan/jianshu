<template>
    <el-row class="jian-passage">
    
        <!--作者介绍-->
        <div class="jian-author-des">
            <a href="#">
                <img :src="passage.avatar" alt="">
            </a>
            <a href="#">
                {{passage.name}}
            </a>
            <span>{{passage.time}}</span>
        </div>
    
        <!--显示文章左侧-->
        <el-col class="jian-passage-des" :span="17">
    
            <!--文章标题-->
            <div class="jian-passage-title">
                <a href="#">{{passage.title}}</a>
            </div>
    
            <!--文章的内容-->
            <div class="jian-passage-content">
                <p>{{passage.content.length >= 90 ? `${passage.content.slice(0, 90)}...`: passage.content}}</p>
            </div>
    
            <!--文章的附属功能-->
            <div class="jian-passage-meta-wrapper">
                <jian-passage-label class="jian-passage-label" :catalogItem="{title: passage.label}"></jian-passage-label>
                <jian-passage-meta class="jian-passage-meta" :meta="meta[0]" :num="passage.view"></jian-passage-meta>
                <jian-passage-meta class="jian-passage-meta" :meta="meta[1]" :num="passage.comment"></jian-passage-meta>
                <jian-passage-meta class="jian-passage-meta" :meta="meta[2]" :num="passage.love"></jian-passage-meta>
                <jian-passage-meta v-if="passage.pay!==0" class="jian-passage-meta" :meta="meta[3]" :num="passage.pay"></jian-passage-meta>
            </div>
        </el-col>
    
        <!--显示文章的图片-->
        <el-col class="jian-passage-img" :span="7">
            <a href="#">
                <img :src="passage.img" alt="">
            </a>
        </el-col>
    </el-row>
</template>

<script>
import JianPassageLabel from '@/components/pages/Hello/Content/CatalogItem/BackupCatalogItem'
import JianPassageMeta from '@/components/pages/Hello/Content/Passage/PassageMeta/PassageMeta'

export default {
    props: ['passage'],
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
@media screen and (max-width: 960px) {
    .jian-passage-content,
    .jian-passage-label {
        display: none;
    }

    .jian-author-des a {
        font-size: 8px
    }

    .jian-passage-content a {
        font-size: 12px;
    }
}

@media screen and (min-width: 960px) {
    .jian-passage-content,
    .jian-passage-label {
        display: inline-block;
    }
}

.jian-passage {
    padding: 17px 0;
    border-bottom: 1px solid rgb(240, 240, 240);
}


/*作者的详情*/

.jian-author-des {
    height: 40px;
}

.jian-author-des img {
    max-width: 40px;
    border-radius: 50%;
}

.jian-author-des a {
    display: inline-block;
    vertical-align: top;
    line-height: 40px;
    color: #2f2f2f;
    text-decoration: none;
    font-size: 15px;
}

.jian-author-des span {
    display: inline-block;
    vertical-align: top;
    line-height: 40px;
    color: rgb(150, 150, 150);
    font-size: 14px;
}


/*文章的标题*/

.jian-passage-title a {
    display: inline-block;
    margin: 10px 0;
    color: rgb(51, 51, 51);
    font-size: 18px;
    font-weight: bold;
    text-decoration: none;
}

.jian-passage-title a:hover {
    text-decoration: underline;
}


/*文章内容*/

.jian-passage-content p {
    padding-right: 10px;
    color: rgb(51, 51, 51);
    font-size: 13px;
    line-height: 24px;
}


/*文章附属内容*/

.jian-passage-meta-wrapper {
    margin: 8px 0;
}

.jian-passage-meta {
    margin-left: 8px;
}

.jian-passage-label {
    font-size: 12px;
    padding: 3px 7px;
}


/*文章图片*/

.jian-passage-img {
    display: flex;
    justify-content: center;
    align-items: center;
}

.jian-passage-img a {
    text-align: center;
}

.jian-passage-img img {
    max-width: 90%;
    border-radius: 5px;
    box-shadow: 0 0 8px -3px;
}
</style>
