<template>
  <section id="hero" class="light-text">
    <main>
      <div id="hero-content">
        <div>
          <h1 class="header-animation tb-title">IoTSharp</h1>
          <h1 class="header-animation tb-title">Open-source IoT Platform</h1>
          <h4 class="header-animation tb-sub-title">设备管理、数据手机、处理和可视化你的IoT解决方案</h4>
        </div>
      </div>
    </main>
  </section>
</template>

<script>
export default {
  name: "index"
}
</script>

<style lang="scss" scoped>
#hero {
  background-image: linear-gradient(0deg, rgba(0,0,0,1), rgba(0,0,0,0.6)), url("~images/banner.png")!important;
  background-position: 50% 50%;
  display: flex;
  #hero-content {
    background-color: transparent!important;
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
