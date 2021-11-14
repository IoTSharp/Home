<template>
  <div class="iotsharp-dashboard">
    <div class="main-top"></div>
    <div class="content">
      <h3>支持五种脚本和动态表达式的规则链</h3>
      <p> </p>
      <a-carousel arrows>
        <div class="block">
          <div class="img-box">
            <img src="~images/example.png" alt="">
          </div>
          <div class="des">
            <h2>支持三处规则链挂载点</h2>
            <p>你可以通过规则链的各种脚本在未知的mqtt topic 和属性、遥测数据入库时进行规则处理，以触发预警事件并推送预警结果等。 </p>
          </div>
        </div>
        <div class="block">
          <div class="img-box">
            <img src="~images/example.png" alt="">
          </div>
          <div class="des">
            <h2>透传</h2>
            <p>通过规则链的TaskAction以实现透传设备数据处理</p>
          </div>
        </div>
        <div class="block">
          <div class="img-box">
            <img src="~images/example.png" alt="">
          </div>
          <div class="des">
            <h2>TaskAction</h2>
            <p>通过TaskAction可以实现丰富的预警和特殊处理、入发送邮件、发送短信、发送rpc控制等.</p>
          </div>
        </div>
      </a-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style lang="scss">
.iotsharp-dashboard {
  overflow: hidden;
  color: #212529;
  position: relative;
  padding: 140px 30px 50px;
  .main-top {
    top: -50px;
    width: 2560px;
    height: 845px;
    left: 0;
    position: absolute;
    transform: skewY(-6deg);
    background-color: #f7f9fc;
  }
  .content {
    position: relative;
  }
  h3 {
    font-size: 42px;
    font-weight: 600;
    line-height: 63px;
  }
  p {
    color: #75767c;
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    margin: 4px 0 18px;
  }
  .block {
    justify-content: space-between;
    display: flex!important;
    align-items: center;
    position: relative;
    .img-box {
      width: calc(50% - 80px);
      border-radius: 6px;
      box-shadow: 0 50px 50px -20px rgb(0 0 0 / 15%), 0 0 30px 0 rgb(0 0 0 / 5%);
      img {
        width: 100%;
        height: 400px;
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
  .ant-carousel {
    margin: 78px auto;
  }
  .ant-carousel .slick-dots li button {
    width: 72px;
    height: 4px;
    border-radius: 4px;
    background: #e0e1e2;
    margin: 8px 0;
  }
  .ant-carousel >>> .slick-slide {
    text-align: center;
    height: 445px;
    line-height: 160px;
    background: #364d79;
    overflow: hidden;
  }

 .ant-carousel .slick-list {
   height: 450px;
 }

  .ant-carousel >>> .custom-slick-arrow {
    width: 25px;
    height: 25px;
    font-size: 25px;
    color: #fff;
    background-color: rgba(31, 45, 61, 0.11);
    opacity: 0.3;
  }
  .ant-carousel >>> .custom-slick-arrow:before {
    display: none;
  }
  .ant-carousel >>> .custom-slick-arrow:hover {
    opacity: 0.5;
  }

  .ant-carousel >>> .slick-slide h3 {
    color: #fff;
  }
}
</style>
