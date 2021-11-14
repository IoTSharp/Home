<template>
  <div class="iotsharp-manage">
    <div class="main-top"></div>
    <div class="main-bottom"></div>
    <div class="block">
      <div class="des">
        <h2>Provision and manage devices and assets</h2>
        <p>Provision, monitor and control your IoT entities in secure way using rich server-side APIs. Define relations between your devices, assets, customers or any other entities.</p>
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
        <h2>Provision and manage devices and assets</h2>
        <p>Provision, monitor and control your IoT entities in secure way using rich server-side APIs. Define relations between your devices, assets, customers or any other entities.</p>
      </div>
    </div>
    <div class="block">
      <div class="des white">
        <h2>Provision and manage devices and assets</h2>
        <p>Provision, monitor and control your IoT entities in secure way using rich server-side APIs. Define relations between your devices, assets, customers or any other entities.</p>
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
        <h2>Provision and manage devices and assets</h2>
        <p>Provision, monitor and control your IoT entities in secure way using rich server-side APIs. Define relations between your devices, assets, customers or any other entities.</p>
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
