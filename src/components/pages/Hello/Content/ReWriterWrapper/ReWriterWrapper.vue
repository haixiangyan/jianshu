<template>
    <div class="jian-re-writer-wrapper">
        <!--推荐作者头部-->
        <div class="jian-re-writer-header">
            <span class="jian-re-writer-header-text">推荐作者</span>
    
            <span class="jian-re-writer-header-text">{{currentPage+1}}/{{Math.ceil(totalPage/5)}}</span>
            <el-pagination class="jian-re-writer-pagination" @current-change="changePage" small layout="prev, next" :page-size="5" :total="totalPage">
            </el-pagination>
        </div>
    
        <!--推荐作者内容-->
        <div class="jian-re-writer-content">
            <jian-re-writer v-for="(reWriter, index) in showReWriters" :reWriter="reWriter" :key="index"></jian-re-writer>
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
import JianReWriter from '@/components/pages/Hello/Content/ReWriterWrapper/ReWriter/ReWriter'

export default {
    data() {
        return {
            currentPage: 0,
            reWriters: []
        }
    },
    computed: {
        totalPage() {
            return this.reWriters.length;
        },
        showReWriters() {
            return this.reWriters.slice(this.currentPage*5, this.currentPage*5+5);
        }
    },
    components: {
        'jian-re-writer': JianReWriter
    },
    methods: {
        // 监听改变分页的事件
        changePage(currentPage) {
            this.currentPage = currentPage-1;
        }
    },
    beforeMount() {
        // 发送请求，获取作者
        this.$axios.get('/re-writer')
            .then((res) => {
                // 获取分类
                this.reWriters = res.data.data;
            })
            .catch((err) => {
                console.log('axios err', err);
            });
    }
}
</script>

<style scoped>
.jian-re-writer-wrapper {
    margin-top: 20%;
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

