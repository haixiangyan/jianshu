<template>
    <el-row class="jian-re-writer">
        <el-col class="jian-re-writer-avatar" :span="5">
            <a href="#">
                <img :src="reWriter.src" alt="">
            </a>
        </el-col>
        <el-col class="jian-re-writer-des" :span="15">
            <a href="#">
                <p>{{reWriter.name}}</p>
            </a>
            <p>
                写了{{(reWriter.words > 1000) ? `${reWriter.words/1000}K` : reWriter.words}}字· {{(reWriter.love > 1000) ? `${reWriter.love/1000}K` : reWriter.love}}喜欢
            </p>
        </el-col>
        <el-col class="jian-re-writer-follow" :span="4">
            <a href="#">
                <i class="fa fa-plus"></i>
                <span>关注</span>
            </a>
        </el-col>
    </el-row>
</template>

<script>
export default {
    props: ['reWriter'],
    data() {
        return {
        }
    }
}
</script>

<style scoped>
.jian-re-writer {
    margin: 10px 0;
}

/*作者头像样式*/
.jian-re-writer-avatar a {
    display: block;
}

.jian-re-writer-avatar img {
    max-width: 48px;
    border-radius: 50%;
    border: 1px solid #ddd;
}


/*作者介绍*/

.jian-re-writer-des a {
    display: block;
    padding-top: 5px;
    text-decoration: none;
    font-weight: bold;
    color: rgb(51, 51, 51);
    font-size: 13px;
}

.jian-re-writer-des>p {
    width: 100%;
    margin-top: 5px;
    font-size: 12px;
    color: rgb(150, 150, 150);
    line-height: 20px;
}


/*关注作者*/

.jian-re-writer-follow a {
    text-decoration: none;
    color: rgb(66, 192, 46);
    font-size: 12px;
}
</style>
