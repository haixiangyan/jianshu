<template>
    <a href="#" class="jian-catalog-wrapper">
        <div class="jian-catalog-flex">
            <div class="jian-catalog-avater">
                <img :src="catalogItem.src" alt="">
            </div>
            <div class="jian-catalog-title">
                {{ catalogItem.title }}
            </div>
        </div>
    </a>
</template>

<script>
export default {
    props: [
        'catalogItem'
    ],
    data() {
        return {
        }
    }
}
</script>

<style scoped>
/*分类的总布局*/
.jian-catalog-wrapper {
    display: inline-block;
    height: 32px;
    margin: 0 18px 18px 0;
    background: rgb(247, 247, 247);
    border-radius: 4px;
    border: 1px solid rgb(220, 220, 220); 
    text-decoration: none;
    color: rgb(51, 51, 51);   
}

.jian-catalog-flex {
    display: flex;
    align-items: center;
}

/*分类的图标*/
.jian-catalog-title {
    padding: 0 11px 0 6px;
    font-size: 14px;
}

.jian-catalog-avater img {
    max-width: 32px;
    width: auto\9;
    border-radius: 10% 0 0 10%;
}
</style>
