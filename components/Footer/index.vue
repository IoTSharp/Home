<template>
  <footer>
    <main class="light-text">
      <div class="deeper">
        <a href="/" class="footer-logo"></a>
      </div>
      <div class="deepmost">
        <div class="copyright">© 2021 The IoTSharp Authors</div>
        <div class="social">
          <a href="https://github.com/IoTSharp/IoTSharp" class="github">
            <a-icon type="github" />
          </a>
        </div>
      </div>
    </main>
  </footer>
</template>

<script>
  export default {
    name: 'index'
  }
</script>
<style lang="scss" scope>
  .footer-logo {
    background-image: url("~images/logo.png")!important;
  }
  .social {
    color: #847989!important;
    font-size: 20px!important;
  }
</style>
