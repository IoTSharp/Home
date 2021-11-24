<template>
  <section id="products">
    <main>
      <div class="background">
        <div class="products"></div>
        <div class="small7"></div>
        <div class="small8"></div>
      </div>
      <h3 class="product-title">边缘计算</h3>
      <div class="product-list">
        <div>
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
        <div class="main">
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
        <div>
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
    </main>
  </section>
</template>

<script>
export default {
  name: "index",
};
</script>

<style lang="scss" scoped>
</style>
