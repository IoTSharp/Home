<template>
  <div class="iotsharp-products">
    <div class="main-top"></div>
    <div class="content">
      <div class="title">Products</div>
      <div class="product-list">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
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
        box-shadow: 0 50px 50px -20px rgb(0 0 0 / 15%), 0 0 30px 0 rgb(0 0 0 / 5%);
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
