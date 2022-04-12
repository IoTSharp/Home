<template>
  <div class="banner">
    <header>
      <div class="logo-burger">
        <a href="/" class="logo"></a>
        <!--      <span>IoTSharp</span>-->
      </div>
      <nav class="head-menu">
        <ul>
          <li class="nav-products" data-submenu-id="nav-products">
            <a href="https://docs.iotsharp.net" target="_blank">文档</a>
          </li>
          <li class="nav-services" data-submenu-id="nav-services">
            <a href="https://github.com/IoTSharp/IoTSharp" target="_blank">源码</a>
          </li>
        </ul>
      </nav>
      <div class="btn-operation">
        <a href="https://github.com/IoTSharp/IoTSharp" target="_blank" class="n-button try">Try it now</a>
      </div>
    </header>
    <section
      id="hero"
      class="light-text"
      data-vide-bg="mp4: ~images/iotsharp.mp4"
      data-vide-options="bgColor: #000000, loop: true, muted: true, posterType: jpg">
      <div style="position: absolute; z-index: -1; inset: 0px; overflow: hidden; background-size: cover; background-color: rgb(0, 0, 0); background-repeat: no-repeat; background-position: 50% 50%; background-image: none;">
        <video autoplay="" loop="" preload="auto" muted="" style="height: 100%; margin: auto; position: absolute; z-index: -1; top: 50%; left: 50%; transform: translate(-50%, -50%); visibility: visible; opacity: 1;" class="md-opjjpmhoiojifppkkcdabiobhakljdgm">
          <source src="~images/iotsharp.mp4" type="video/mp4" class="md-opjjpmhoiojifppkkcdabiobhakljdgm">
          Your browser does not support the video tag.
        </video>
      </div>
      <div class="video-cover"></div>
      <div id="hero-content">
        <h1 class="header-animation tb-title">IoTSharp</h1>
        <h1 class="header-animation tb-title">Open-source IoT Platform</h1>
        <h4 class="header-animation tb-sub-title">设备管理、数据存储和处理以及可视化你的IoT解决方案</h4>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  position: relative;
  overflow: hidden;
}
.btn-operation {
  width: 200px;
}
header, #thingsboard-paas header, #thingsboard-pe header, #trendz header, #thingsboard-edge header {
  background-color: unset;
  box-shadow: unset;
}

.logo {
  background-image: url("~images/logo.png")!important;
}

@media screen and (min-width: 750px) {
  header {
    height: 80px;
  }
}

@media screen and (min-width: 750px) {
  section, header {
    padding-left: 30px;
    padding-right: 30px;
  }
}
@media screen and (max-width: 1500px) {
  header {
    margin: unset;
    width: 100%;
  }
}

header {
  position: absolute;
  top: 0;
  padding: 0 40px;
  left: 0;
  transition-duration: .3s;
  z-index: 8888;
  box-shadow: 0 0 20px rgb(0 0 0 / 10%), 0 0 40px rgb(0 0 0 / 10%);
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
#hero {
  height: 100vh;
  padding-top: 0;
  position: relative;
  overflow: hidden;
  background: 0 0;
  #hero-content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    background-color: rgba(0,0,0,.72);
  }
  .video-cover {
    position: absolute;
    z-index: -2;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
    background-size: cover;
    background-color: #000;
    background-repeat: no-repeat;
    background-position: 50% 50%;
  }
  main {
    margin: 0 auto;
  }
  .tb-title {
    color: #ffffff!important;
  }
  .tb-sub-title {
    color: #ffffff!important;
  }
}
</style>
