<template>
  <div class="jian-backup-footer">
      <!--头像部分-->
      <div class="jian-backup-footer-img">
          <a href="/"<img src="/static/image/jian-header/avatar.jpg" alt="头像"></a>
          <a href="/">退出</a>
      </div>

      <!--下载部分-->
      <div class="jian-backup-footer-download">
          <el-button type="success">
              <i class="fa fa-download"></i>
              下载简书，创作你的创作
          </el-button>
      </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.jian-backup-footer {
    text-align: center;
}

/*备选脚注的头像部分*/
.jian-backup-footer-img {
    display: table;
    margin: 0 auto;
}

.jian-backup-footer-img img {
    max-width: 40px;
    border: 1px solid #a5a5a5;
    border-radius: 50%;
}

.jian-backup-footer-img a {
    display: table-cell;
    vertical-align: middle;
    padding-left: 10px;
    color: #a5a5a5;
    text-decoration: none;
    font-size: 14px;
}

/*下载部分*/
.jian-backup-footer-download {
    margin: 20px 0;
}

.jian-backup-footer-download button {
    width: 90%;
}
</style>
