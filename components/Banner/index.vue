<template>
  <div class="iotsharp-banner" data-vide-bg="mp4: ~images/iotsharp.mp4,                  
                       poster: ~images/img.png"
       data-vide-options="bgColor: #000000, loop: true, muted: true, posterType: jpg">
    <div class="video-cover"></div>
    <div class="content">
      <h1 class="title">IoTSharp</h1>
      <h1 class="title">Open-source IoT Platform</h1>
      <h4 class="subtitle">Device management, data collection, processing and visualization for your IoT solution</h4>
       <h4 class="subtitle">设备管理、数据手机、处理和可视化你的IoT解决方案</h4>
    </div>
    <div class="arrow">
      <a-icon type="down" />
    </div>
  </div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style lang="scss" scoped>
  .iotsharp-banner {
    height: calc(100vh);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    position: relative;
    background-color: rgba(0,0,0,.72);
    .video-cover {
      position: absolute;
      height: 100%;
      top: 0;
      z-index: -2;
      left: 0;
      background-image: url("~images/img.png");
    }
    .arrow {
      position: absolute;
      bottom: 40px;
      font-size: 40px;
      color: #ffffff;
    }
    .content {
      margin: 0 auto;
      color: #ffffff;
      .title {
        text-align: center;
        margin-bottom: 20px;
        font-size: 36px;
        font-weight: 400;
        color: #ffffff;
        text-shadow: 0 0 18px rgb(0 0 0 / 66%);
      }
      .subtitle {
        text-align: center;
        font-size: 20px;
        font-weight: 400;
        color: #ffffff;
        text-shadow: 0 0 18px rgb(0 0 0 / 66%);
      }
    }
  }
</style>
