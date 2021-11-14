<template>
  <div class="iotsharp-features">
    <h3>IoTSharp Features</h3>
    <div class="card">
      <a-row :gutter="40">
        <a-col :span="12">
          <div class="block">
            <img src="~images/icon.png" />
            <div>
              <div class="title">Telemetry Data Collection</div>
              <p>Collect and store telemetry data in reliable way, surviving network and hardware failures. Access collected data using customizable web dashboards or server-side APIs.</p>
            </div>
          </div>
        </a-col>
        <a-col :span="12">
          <div class="block">
            <img src="~images/icon.png" />
            <div>
              <div class="title">Telemetry Data Collection</div>
              <p>Collect and store telemetry data in reliable way, surviving network and hardware failures. Access collected data using customizable web dashboards or server-side APIs.</p>
            </div>
          </div>
        </a-col>
        <a-col :span="12">
          <div class="block">
            <img src="~images/icon.png" />
            <div>
              <div class="title">Telemetry Data Collection</div>
              <p>Collect and store telemetry data in reliable way, surviving network and hardware failures. Access collected data using customizable web dashboards or server-side APIs.</p>
            </div>
          </div>
        </a-col>
        <a-col :span="12">
          <div class="block">
            <img src="~images/icon.png" />
            <div>
              <div class="title">Telemetry Data Collection</div>
              <p>Collect and store telemetry data in reliable way, surviving network and hardware failures. Access collected data using customizable web dashboards or server-side APIs.</p>
            </div>
          </div>
        </a-col>
        <a-col :span="12">
          <div class="block">
            <img src="~images/icon.png" />
            <div>
              <div class="title">Telemetry Data Collection</div>
              <p>Collect and store telemetry data in reliable way, surviving network and hardware failures. Access collected data using customizable web dashboards or server-side APIs.</p>
            </div>
          </div>
        </a-col>
        <a-col :span="12">
          <div class="block">
            <img src="~images/icon.png" />
            <div>
              <div class="title">Telemetry Data Collection</div>
              <p>Collect and store telemetry data in reliable way, surviving network and hardware failures. Access collected data using customizable web dashboards or server-side APIs.</p>
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