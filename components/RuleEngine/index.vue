<template>
  <div class="iotsharp-ruleEngine">
    <div class="block">
      <div class="des">
        <h2>规则链引擎</h2>
        <p>通过规则链， 你可以监视遥测数据、熟悉数据，并允许你使用规则链通过数字孪生控制远在千里之外的物联网资产。
          与此同时， IoTSharp 允许你通过C#、Lua、Python、SQL 等脚本在规则链的节点中处理输入的数据， 与之配合时通过动态Linq表达式处理节点与节点之间的走向。
          当然， IoTSharp 也允许你通过C#进行扩展。我们称之为TaskAction， 利用mqtt topic和属性、遥测数据入库时的三个挂载点进行规则处理，以触发预警事件并推送预警结果等等。</p>
      </div>
      <div class="img-box">
        <img src="~images/ruleEngine.png" alt="">
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
  .iotsharp-ruleEngine {
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
      bottom: 438px;
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
