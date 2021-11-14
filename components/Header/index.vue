<template>
  <div class="iotsharp-header">
    <div class="left">
      <div><img src="~images/logo.png" alt="" class="logo"></div>
      <div class="title">IoTSharp</div>
      <div class="container-tag">
        <a-tag>
          <a href="https://twitter.com/nuxt_js" target="_blank">
            <a-icon type="github" />
            <span>Star</span>
            <span class="number">129</span>
          </a>
        </a-tag>
      </div>
    </div>
    <div class="right">
      <a-button type="primary">
        Try it now
      </a-button>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss">
  .iotsharp-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
      display: flex;
      align-content: center;
      .logo {
        width: 90px;
      }
      .ant-tag {
        height: 20px;
      }
      .title {
        margin-left: 5px;
        color: #ffffff;
        font-weight: 600;
        font-size: 36px;
      }
      .container-tag {
        margin-left: 15px;
        span {
          font-size: 12px;
          font-weight: 600;
          margin-left: 5px;
        }
        .number {
          border-left: 1px solid rgba(27,31,36,.15);
          padding-left: 5px;
        }
      }
    }
  }
</style>
