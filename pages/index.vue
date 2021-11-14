<template>
  <a-layout>
    <a-layout-header>
      <Header></Header>
    </a-layout-header>
    <a-layout-content>
      <Banner></Banner>
      <Intro></Intro>
      <Manage></Manage>
      <Products></Products>
      <Dashboard></Dashboard>
      <RuleEngine></RuleEngine>
      <Features></Features>
    </a-layout-content>
    <a-layout-footer>
      <Footer></Footer>
    </a-layout-footer>
  </a-layout>
</template>

<script>
export default {}
</script>

<style lang="scss">
.ant-layout {
  overflow: hidden;
}
.ant-layout-content {
  background-color: #ffffff;
}
.ant-layout-header {
  height: 90px;
  line-height: 90px;
  width: 100%;
  background-color: unset;
  position: fixed;
  top: 0;
  z-index: 999;
}
#overflow {
  overflow: hidden;
  .background {
    z-index: -1;
    position: absolute;
    top: 524px;
    left: 50%;
    div {
      position: absolute;
      -ms-transform: skewY(-6deg);
      transform: skewY(-6deg);
      width: 436px;
      height: 90px;
    }
    div.main1 {
      top: -572px;
      width: 2560px;
      height: 525px;
      left: -1280 px;
      background-color: #f7f9fc;
    }
    div.small1 {
      top: -528 px;
      right: 646px;
      background-color: #305680;
    }
    div.small2 {
      top: -590 px;
      right: 408px;
      background-color: #2a7dec;
    }
    div.small3 {
      top: -715px;
      left: 789px;
      border: 4px solid #2a7dec;
    }
    div.small4 {
      top: 22px;
      right: 814px;
      border: 2px solid #0d2743;
    }
  }
}
</style>
