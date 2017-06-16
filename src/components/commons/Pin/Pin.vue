<template>
    <div class="jian-pin jian-origin-show">
        <el-button @click="returnTop" class="jian-pin-btn">
            <i class="fa fa-angle-up fa-2x"></i>
        </el-button>
    </div>
</template>

<script>
export default {
    methods: {
        returnTop() {
            let self = this, sdelay = 0;
            window.scrollBy(0, -100);//Only for y vertical-axis
            if (document.body.scrollTop > 0) {
                sdelay = setTimeout(self.returnTop, 10);
            }
        }
    }
}
</script>

<style scoped>
/*媒体查询*/
@media screen and (max-width: 960px) {
    /*小屏幕显示*/
    .jian-origin-show {
      display: none;
    }
}

@media screen and (min-width: 960px) {
    /*大屏幕显示*/
    .jian-origin-footer {
      display: block;
    }

}

.jian-pin {
    position: fixed;
    right: 50px;
    bottom: 50px;
    font-size: 50px;
    width: 50px;
    height: 50px;
    z-index: 3;
}

.jian-pin-btn {
    height: 50px;
    width: 50px;
    border: 1px solid rgb(220, 220, 220);
    color: rgb(51, 51, 51);
}

.jian-pin-btn:hover {
    background-color: hsla(0,0%,71%,.1);
}
</style>
