<template>
    <div class="jian-re-writer-wrapper">
        <!--推荐作者头部-->
        <div class="jian-re-writer-header">
            <span class="jian-re-writer-header-text">推荐作者</span>
    
            <span class="jian-re-writer-header-text">{{currentPage}}/{{totalPage}}</span>
            <el-pagination class="jian-re-writer-pagination" small layout="prev, next" :total="50">
            </el-pagination>
        </div>
        
        <!--推荐作者内容-->
        <div class="jian-re-writer-content">
            content
        </div>

        <!--推荐作者脚注-->
        <div class="jian-re-writer-footer">
            <el-button class="jian-re-writer-more" type="primary">
                查看全部
                <i class="el-icon-arrow-right"></i>
            </el-button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentPage: 1,
            totalPage: 50
        }
    }
}
</script>

<style scoped>
.jian-re-writer-wrapper {
    margin-top: 15px;
}

/*分页头部*/
.jian-re-writer-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.jian-re-writer-header-right {
    display: flex;
    align-content: center;
}

.jian-re-writer-header-text {
    font-size: 15px;
    color: #969696;
}

.jian-re-writer-pagination {
    display: inline-block;
}

/*推荐作者脚注*/
.jian-re-writer-more {
    width: 100%;
    color: #787878;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
}
</style>

