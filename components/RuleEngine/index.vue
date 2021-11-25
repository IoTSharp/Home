<template>
  <section id="rule-engine">
    <main>
      <div class="rule">
        <div class="rule-button img-button">
          <img src="~images/ruleEngine.png" alt="">
        </div>
        <div class="des">
          <h3>规则链引擎</h3>
          <p>通过规则链， 你可以监视遥测数据、熟悉数据，并允许你使用规则链通过数字孪生控制远在千里之外的物联网资产。
            与此同时， IoTSharp 允许你通过C#、Lua、Python、SQL 等脚本在规则链的节点中处理输入的数据， 与之配合时通过动态Linq表达式处理节点与节点之间的走向。
            当然， IoTSharp 也允许你通过C#进行扩展。我们称之为TaskAction， 利用mqtt topic和属性、遥测数据入库时的三个挂载点进行规则处理，以触发预警事件并推送预警结果等等。</p>
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

<style lang="scss" scoped>
</style>
