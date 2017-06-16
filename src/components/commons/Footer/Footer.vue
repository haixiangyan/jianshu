<template>
  <div class="jian-footer-wrapper">
    <!--脚注部分的 Item-->
    <div class="jian-footer-item-wrapper">
        <a href="/">关于简书</a>
        <em> · </em>
        <a href="/">联系我们</a>
        <em> · </em>
        <a href="/">加入我们</a>
        <em> · </em>
        <a href="/">作者成书计划</a>
        <em> · </em>
        <a href="/">合作伙伴</a>
    </div>

    <!--脚注部分的授权-->
    <div class="jian-footer-authority">
        <p>
            ©2012-2017 上海佰集信息科技有限公司 / Tel:021-61995350 / 简书 / 沪ICP备11018329号-5 
            <a href="/">沪公网安备31010602000064号</a>
        /</p>
    </div>

    <!--脚注图片-->
    <div class="jian-footer-img">
        <img src="/static/image/jian-footer/footer-brand.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        text: '关于我们'
    }
  }
}
</script>

<style scoped>
.jian-footer-wrapper {
    margin: 0 auto;
    width: 75%;
}

/*脚注 Item 的样式*/
.jian-footer-item-wrapper a,
.jian-footer-item-wrapper em {
    display: inline-block;
    color: rgb(150, 150, 150);
    font-size: 14px;
    text-decoration: none;
}

.jian-footer-item-wrapper a:hover,
.jian-footer-authority a:hover {
    color: #2f2f2f;
}

/*脚注的授权部分*/
.jian-footer-authority {
    margin-top: 10px;
}

.jian-footer-authority p,
.jian-footer-authority a {
    color: #c8c8c8;
    font-size: 13px;
    text-decoration: none;
}

/*脚注的图片*/
.jian-footer-img img {
    max-width: 60px;
}
</style>
