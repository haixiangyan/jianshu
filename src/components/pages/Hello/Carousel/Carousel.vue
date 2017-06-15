<template>
    <div class="jian-carousel-wrapper">
        <el-carousel class="jian-carousel" :interval="4000" type="card" height="250px">
            <el-carousel-item v-for="item in carouselImages" :key="item">
                <img :src="item.src" alt="Carousel Image">
            </el-carousel-item>
        </el-carousel>
    
        <div class="jian-backup-img-wrapper">
            <img class="jian-backup-img" src="/static/image/jian-carousel/banner-4.jpg" alt="">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            carouselImages: [
                { src: '/static/image/jian-carousel/banner-1.jpg' },
                { src: '/static/image/jian-carousel/banner-2.png' },
                { src: '/static/image/jian-carousel/banner-3.png' },
                { src: '/static/image/jian-carousel/banner-4.jpg' }
            ]
        }
    }
}
</script>

<style scoped>
/*媒体查询*/
@media screen and (max-width: 960px) {

    .jian-carousel {
        display: none;
    }

    .jian-backup-img-wrapper {
        display: block;
    }
}

@media screen and (min-width: 960px) {
    .jian-carousel {
        display: block;
    }

    .jian-backup-img-wrapper {
        display: none;
    }
}

.jian-carousel-wrapper {
    margin: 0 auto;
    width: 75%;
}

/*轮播图的图片*/

.jian-carousel img {
    max-width: 100%;
    height: auto;
    width: auto\9;
}

/*备选图*/

.jian-backup-img {
    max-width: 100%;
    height: auto;
    width: auto\9;
}
</style>
