<template>
  <div class="iotsharp-intro">
    <h1>IoTSharp is an open-source IoT platform for data collection, processing, visualization, and device management</h1>
    <h1 class="second">It enables device connectivity via industry standard IoT protocols - MQTT, CoAP and HTTP and supports both cloud and on-premises deployments. ThingsBoard combines scalability, fault-tolerance and performance so you will never lose your data.</h1>
  </div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style lang="scss" scoped>
  .iotsharp-intro {
    margin-bottom: 178px;
    padding: 88px 30px 0;
    color: #212529;
    text-align: center;
    h1 {
      font-weight: 600;
      text-align: center;
      font-size: 32px;
      line-height: 52px;
    }
    .second {
      margin-top: 48px;
      color: #899aab;
      font-size: 20px;
      line-height: 1.5em;
      font-weight: 400;
    }
  }
</style>
