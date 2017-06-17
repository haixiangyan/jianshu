<template>
    <div href="/config" class="jian-follow-item-wrapper">
        <!--作者简介-->
        <el-row>
            <el-col class="jian-follow-avatar" :span="2">
                <img :src="follow.avatar" alt="头像">
            </el-col>
            <el-col class="jian-follow-header" :span="17">
                <el-row>
                    <el-col class="jian-follow-intro" :span="24">
                        <a class="jian-follow-author" href="/">{{follow.name}}</a>
                        关注了你
                        <div class="jian-follow-datetime">
                            {{follow.datetime}}
                        </div>
                    </el-col>
                </el-row>
            </el-col>
            <el-col class="jian-follow-btn-wrapper" :span="5">
                <el-button class="jian-follow-btn"  type="success">
                    <i class="fa fa-plus"></i>
                    关注
                </el-button>
            </el-col>
        </el-row>
    
    </div>
</template>

<script>

export default {
    props: ['follow'],
    data() {
        return {

        }
    }
}
</script>

<style scoped>
@media screen and (max-width: 960px) {
    .jian-follow-header {
        padding-left: 10%;
    }
}

.jian-follow-item-wrapper {
    display: block;
    padding: 20px;
    border-top: 1px solid rgb(240, 240, 240);
}

.jian-follow-item-wrapper a {
    text-decoration: none;
}

/*头像部分*/

.jian-follow-avatar img {
    max-width: 42px;
    border-radius: 50%;
    border: 1px solid #ddd;
}

/*作者简介*/

.jian-follow-intro {
    font-size: 15px;
    line-height: 25.5px;
    color: rgb(51, 51, 51);
}

.jian-follow-author {
    color: rgb(51, 51, 51);
}

.jian-follow-datetime {
    margin-top: 2px;
    color: rgb(150, 150, 150);
    font-size: 12px;
    line-height: 1;
}

/*关注按钮*/
.jian-follow-btn-wrapper {
    text-align: right;
}

.jian-follow-btn {
    width: 80%;
    border-radius: 100px;
}


</style>
