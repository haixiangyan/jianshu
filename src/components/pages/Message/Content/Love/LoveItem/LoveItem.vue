<template>
    <div href="/config" class="jian-love-item-wrapper">
        <!--作者简介-->
        <el-row>
            <el-col class="jian-love-avatar" :span="2">
                <img :src="love.avatar" alt="头像">
            </el-col>
            <el-col class="jian-love-header" :span="22">
                <el-row>
                    <el-col class="jian-love-intro" :span="24">
                        <a class="jian-love-author" href="/">{{love.name}}</a>
                        喜欢了你的文章
                        <a class="jian-love-passage" href="/">《{{love.passage}}》</a>
                        <div class="jian-love-datetime">
                            {{love.datetime}}
                        </div>
                    </el-col>
                </el-row>
    
            </el-col>
        </el-row>
    
    </div>
</template>

<script>

export default {
    props: ['love'],
    data() {
        return {

        }
    }
}
</script>

<style scoped>
@media screen and (max-width: 960px) {
    .jian-love-header {
        padding-left: 10%;
    }
}

.jian-love-item-wrapper {
    display: block;
    padding: 20px;
    border-top: 1px solid rgb(240, 240, 240);
}

.jian-love-item-wrapper a {
    text-decoration: none;
}

/*头像部分*/

.jian-love-avatar img {
    max-width: 42px;
    border-radius: 50%;
    border: 1px solid #ddd;
}

/*作者简介*/

.jian-love-intro {
    font-size: 15px;
    line-height: 25.5px;
    color: rgb(51, 51, 51);
}

.jian-love-author {
    color: rgb(51, 51, 51);
}

.jian-love-passage,
.jian-love-at {
    color: rgb(49, 148, 208);
}

.jian-love-datetime {
    margin-top: 2px;
    color: rgb(150, 150, 150);
    font-size: 12px;
    line-height: 1;
}
</style>
