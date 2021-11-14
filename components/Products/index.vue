<template>
  <div class="iotsharp-products">
    <div class="main-top"></div>
    <div class="content">
      <div class="title">边缘计算</div>
      <div class="product-list">
        <div class="item">
          <h2>RT-Thread</h2>
          <p>
            针对RT-Thread， 我们通过<a
              href="https://github.com/IoTSharp/IoTSharp.Edge.RT-Thread"
            >
              IoTSharp.Edge.RT-Thread </a
            >来演示了使用 RT-Thread IoT-Board SDK 的IoTSharp对接协议实现，
            项目基于 STM32L4 + Wi-Fi, 陀螺仪、温度、湿度传感器， lcd 等等。
          </p>
          <!-- 图片需要自动缩放 <img src="~images/IoT_Board.png"> -->
        </div>
        <div class="item">
          <h2>.NET NANOFRAMEWORK</h2>
          <p>
            针对.Net nanoFramework 我们通过<a
              href="https://github.com/IoTSharp/IoTSharp.Edge.nanoFramework"
            >
              IoTSharp.Edge.nanoFramework</a
            >来演示了在 ST NUCLEO-F746ZG 向 的IoTSharp发送遥测数据。
            关于如何使用.Net nano 请了解点击<a
              href="https://www.cnblogs.com/MysticBoy/p/13159648.html"
            >
              使用C#编写STM32对接物联网平台IoTSharp发送遥测数据</a
            >
            和文章
            <a href="https://www.cnblogs.com/MysticBoy/p/13153333.html">
              用C#在STM32上写第一个Hello world</a
            >
            来了解更多。
          </p>
        </div>
        <div class="item">
          <h2>针对Java和其他语言</h2>
          <p>
            针对Java 我们通过<a
              href="https://github.com/IoTSharp/IoTSharp.Sdks.Java"
            >
              IoTSharp.Sdks.Java</a
            >来演示了如何通过Java连接IoTSharp 针对C语言， 我们通过<a
              href="https://github.com/IoTSharp/IoTSharp.Sdks.MQTT-C"
            >
              IoTSharp.Sdks.MQTT-C</a
            >来演示了如何通过MQTT-C连接IoTSharp
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
};
</script>

<style lang="scss" scoped>
.iotsharp-products {
  color: #212529;
  padding: 140px 30px 56px;
  position: relative;
  .main-top {
    top: 0;
    width: 2560px;
    height: 200px;
    left: 0;
    position: absolute;
    transform: skewY(-6deg);
    background-color: #305680;
  }
  .content {
    position: relative;
    .title {
      color: #fff;
      text-align: center;
      margin-bottom: 72px;
      font-size: 42px;
      font-weight: 600;
      line-height: 63px;
    }
    .product-list {
      margin: 0 60px;
      display: flex;
      align-items: center;
      .item {
        color: #212529;
        background-color: #fff;
        box-shadow: 0 50px 50px -20px rgb(0 0 0 / 15%),
          0 0 30px 0 rgb(0 0 0 / 5%);
        border-radius: 6px;
        padding: 20px;
        min-height: 520px;
        margin-right: 20px;
        text-align: center;
        flex: 1;
        margin-bottom: 40px;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
