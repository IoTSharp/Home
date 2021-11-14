<template>
  <div class="iotsharp-manage">
    <div class="main-top"></div>
    <div class="main-bottom"></div>
    <div class="block">
      <div class="des">
        <h2>租户管理</h2>
        <p>利用租户管理， 你可以为您的客户建立IoTSharp的私有云， 无需租用额外的服务器，一套系统负担所有客户。而不是一对一浪费更多资源。</p>
      </div>
      <div class="img-box">
        <img src="~images/example.png" alt="">
      </div>
    </div>
    <div class="block">
      <div class="img-box">
        <img src="~images/example.png" alt="">
      </div>
      <div class="des">
        <h2>资产管理（未来）</h2>
        <p>未来， IoTSharp针对设备和网关管理的同时，我们更要针对无数个设备和规则链组成的一套系统， 这套系统可能一栋大厦， 也可能是一套产品系统。</p>
      </div>
    </div>
    <div class="block">
      <div class="des white">
        <h2>预测未来（未来）</h2>
        <p>未来， IoTSharp 将引入ML.net 利用遥测数据提供基于时序的预测，这意味着我们可以为你的资产提供更多的数据参考。</p>
      </div>
      <div class="img-box">
        <img src="~images/example.png" alt="">
      </div>
    </div>
    <div class="block">
      <div class="img-box">
        <img src="~images/example.png" alt="">
      </div>
      <div class="des">
        <h2>事件和订阅</h2>
        <p>事件和订阅，让你准确掌握物联网设备状态和数据动向，未来，可以通过规则链更加灵活和简易的控制你所掌握的一切.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style lang="scss" scoped>
  .iotsharp-manage {
    color: #212529;
    padding-right: 30px;
    padding-left: 30px;
    position: relative;
    .main-top {
      top: -130px;
      width: 2560px;
      height: 525px;
      left: 0;
      position: absolute;
      transform: skewY(-6deg);
      background-color: #f7f9fc;
    }
    .main-bottom {
      bottom: 615px;
      width: 2560px;
      height: 525px;
      left: 0;
      position: absolute;
      transform: skewY(-6deg);
      background-color: #252628;
    }
    .block {
      justify-content: space-between;
      display: flex;
      align-items: center;
      position: relative;
      .img-box {
        width: calc(50% - 80px);
        border-radius: 6px;
        box-shadow: 0 50px 50px -20px rgb(0 0 0 / 15%), 0 0 30px 0 rgb(0 0 0 / 5%);
        img {
          width: 100%;
        }
      }
      .white {
        h2 {
          color: #ffffff;
        }
      }
      .des {
        width: calc(50% - 80px);
        h2 {
          font-weight: 500;
          line-height: 54px;
          font-size: 36px;
        }
        p {
          color: #75767c;
          font-size: 18px;
          font-weight: 400;
          line-height: 27px;
          margin: 4px 0 18px;
        }
      }
    }
  }
</style>
