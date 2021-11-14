<template>
  <div class="iotsharp-features">
    <h3>IoTSharp Features</h3>
    <div class="card">
      <a-row :gutter="40">
        <a-col :span="12">
          <div class="block">
            <img src="~images/icon.png" />
            <div>
              <div class="title">多租户</div>
              <p>基于多租户的物联网资产管理，更易于建立属于自己的物联网私有云.</p>
            </div>
          </div>
        </a-col>
        <a-col :span="12">
          <div class="block">
            <img src="~images/icon.png" />
            <div>
              <div class="title">规则链</div>
              <p>支持多达五种语言脚本、动态Linq表达式、极具扩展能力的规则引擎.</p>
            </div>
          </div>
        </a-col>
        <a-col :span="12">
          <div class="block">
            <img src="~images/icon.png" />
            <div>
              <div class="title">网关设计器</div>
              <p>通过可视化设计器对网关参数进行配置， 简易、直观.</p>
            </div>
          </div>
        </a-col>
        <a-col :span="12">
          <div class="block">
            <img src="~images/icon.png" />
            <div>
              <div class="title">跨平台</div>
              <p>鉴于.Net 的跨平台特性， 无论是MacOS、Linux、Windows我们无一例外的支持， 甚至于我们在龙芯的CPU上也能成功部署和运行</p>
            </div>
          </div>
        </a-col>
        <a-col :span="12">
          <div class="block">
            <img src="~images/icon.png" />
            <div>
              <div class="title">安全的通讯保障</div>
              <p>通过自签发的X509可以确保所有数据通讯和控制是安全的, 于此同时， 我们将服务器的基本信息和设备的ID信息写入在为整数办法的证书当中， 使得身份和激活更简单，这对于网关来说更加可靠，因为一个网关负责了多个设备， 设备的安全性无可置疑是最终于熬的。 未来， 我们将会支持国密以确保自主可控。 。          
              </p>
            </div>
          </div>
        </a-col>
        <a-col :span="12">
          <div class="block">
            <img src="~images/icon.png" />
            <div>
              <div class="title">数据库和中间件生态多样性</div>
              <p>我们的消息数据可以通过多种流行的消息中间件(RabbitMQ、RabbitMQ、Kafka、ZeroMQ)进行处理、也支持多种时序数据库（InfluxDB、Taos、TimescaleDB）存储和处理遥测数据。基础数据我们支持多种关系型数据库(MySQl、PostgreSQL、Oracle、Sql Server、Sqlite) </p>
            </div>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style lang="scss" scoped>
.iotsharp-features {
  margin-top: 100px;
  padding: 0 30px;
  h3 {
    font-size: 42px;
    font-weight: 600;
    line-height: 63px;
  }
  .block {
    padding: 48px;
    background: #fff;
    border-radius: 6px;
    box-shadow: 0 50px 50px -20px rgb(0 0 0 / 15%);
    display: flex;
    text-align: center;
    align-items: center;
    margin-bottom: 40px;
    div {
      width: calc(100% - 122px);
      .title {
        color: #2a7dec;
        font-size: 24px;
        font-weight: 500;
        margin-bottom: 6px;
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