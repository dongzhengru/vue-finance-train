<template>
  <div>
    <el-container>
      <el-header class="header-content" height="80px" style="display: flex; justify-content: space-between; align-items: center;">
        <div class="logo" style="margin-left: 25px;width: 149px; height: 60px;">
          <img src="../assets/logo.png" alt="Logo" style="max-width: 100%; height: 100%;">
        </div>
        <div class="nav">
          <el-menu default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">首页</el-menu-item>
            <el-menu-item index="2">课程中心</el-menu-item>
            <el-menu-item index="3">互动广场</el-menu-item>
            <el-menu-item index="4">个人中心</el-menu-item>
          </el-menu>
        </div>
        <div class="login-register">
          <a href="#" style="margin-right: 25px;">登录/注册</a>
        </div>
      </el-header>
      <el-main class="el-main">
        <router-view/>
      </el-main>
      <el-footer class="el-footer" style="height: 300px;background-color: #f9fafc;margin-top: 100px">
        <div class="footer-content">
          <div class="footer-container">
            <div class="footer-section">
              <h3>友情链接</h3>
              <ul class="footer-links" style="list-style: none;">
                <li><a href="#">Gitee</a></li>
                <li><a href="#">GitHub</a></li>
              </ul>
            </div>
            <div class="footer-section">
              <h3>帮助中心</h3>
              <ul class="footer-info" style="list-style: none;">
                <li><a href="#">联系我们</a></li>
                <li><a href="#">关于我们</a></li>
                <li><a href="#">网站地图</a></li>
              </ul>
            </div>
            <div class="footer-section">
              <h3>联系方式</h3>
              <ul class="footer-contact" style="list-style: none;">
                <li><p>微信公众号</p></li>
                <li><p>Email：admin@fwwb.com</p></li>
              </ul>
            </div>
          </div>
          <div class="footer-copyright">
            <p>Copyright © 2023-2023 税友软件集团股份有限公司 版权所有</p>
            <p>Powered by 打倒俞狗队</p>
            <p>浙ICP备2023000001号</p>
          </div>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>

export default {
  name: 'Layout'
}
</script>

<style scoped>

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0;
    background-color: #f8fafc;
  }

  .logo {
    font-size: 24px;
    font-weight: bold;
  }

  .el-menu-demo {
    border-bottom: none;
    background-color: transparent;
  }

  .el-menu-demo::after {
    content: none;
  }

  .nav ul {
    list-style: none;
    display: flex;
  }

  .nav li {
    margin: 0 10px;
  }

  .login-register a {
    text-decoration: none;
    color: #333;
  }

  .login-register a:hover {
    text-decoration: underline;
  }

  .footer-content {
    margin: 0 auto;
    padding: 20px 0;
    width: 800px;
    text-align: center;
    font-family: Arial, sans-serif;
    color: rgba(102, 102, 102, 1);
  }

  .footer-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .footer-section {
    flex: 1;
    margin: 10px;
    text-align: left;
  }

  .footer-section h3 {
    font-size: 18px;
    margin-bottom: 10px;
    color: #1da2e3;
    margin-left: 38px;
  }

  .footer-links ul,
  .footer-info ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .footer-links a,
  .footer-info a {
    text-decoration: none;
    color: rgba(102, 102, 102, 1);
    display: block;
    margin: 5px 0;
    transition: color 0.3s;
  }

  .footer-links a:hover,
  .footer-info a:hover {
    color: #1da2e3;
  }

  .footer-contact p {
    margin: 5px 0;
  }

  .footer-copyright p {
    margin: 10px 0;
    font-size: 14px;
  }
</style>
