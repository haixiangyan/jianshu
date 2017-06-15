<template>
  <a class="jian-download-app">
    <img src="/static/image/jian-download-app/download-bg.png" alt="">
    <div class="jian-download-btns">
      <el-button class="jian-download-qrcode-btn" type="primary">
        <i class="fa fa-qrcode"></i>
        <span>扫码</span>
      </el-button>
      <el-button class="jian-download-android-btn" type="primary">
        <i class="fa fa-android"></i>
        <span>安卓</span>
      </el-button>
      <el-button class="jian-download-apple-btn" type="primary">
        <i class="fa fa-apple"></i>
        <span>IOS</span>
      </el-button>
    </div>
  </a>
</template>

<script>
export default {

}
</script>

<style scoped>
.jian-download-app {
  display: block;
  height: 140px;
  margin: 10px 0;
}

.jian-download-app img {
  max-width: 100%;
}

/*按钮组*/
.jian-download-btns {
  position: relative;
  top: -60px;
  display: flex;
  justify-content: space-around;
  padding: 0 10px;
}

.jian-download-qrcode-btn {
  background: #a5a5a5;
  border: none;
}

.jian-download-android-btn {
  background: rgb(139, 196, 83);
  border: none;
}

.jian-download-apple-btn {
  background: rgb(109, 172, 244);
  border: none;
}
</style>
