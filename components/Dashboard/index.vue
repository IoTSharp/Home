<template>
  <section id="dashboard_description">
    <main>
      <div class="background">
        <div class="dashboards"></div>
        <div class="small9"></div>
        <div class="small10"></div>
      </div>
      <h3>数字孪生</h3>
      <div class="demo-dashboards-carousel slick-initialized slick-slider slick-dotted" role="toolbar">
        <div aria-live="polite" class="slick-list draggable">
          <div class="slick-track">
            <div class="dashboard-item slick-slide slick-cloned">
              <div class="item-description">
                <h2>设备管理</h2>
                <p>你可以随时点开设备查看实时变化的遥测数据、规则链绑定、以及修改和增加服务侧的属性或者查看设备侧属性</p>
              </div>
              <div class="item-image-container">
                <img src="~images/1.png" alt="" class="item-image">
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </section>
</template>

<script>
export default {
  name: "index"
}
</script>

<style lang="scss">
</style>
