<template>
  <nav class="navbar is-light" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="logo.png" width="112" height="28">
      </a>
      <!-- スマホ用ハンバーガー   -->
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <!-- navbar -->
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-light">
            肉体錬成
            </a>            
            <a class="button is-light">
            精神錬成
            </a>
            <a class="button is-light">
            ABOUT
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  document.addEventListener('DOMContentLoaded', function () { //①

    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0); //②

    if ($navbarBurgers.length > 0) {

      $navbarBurgers.forEach(function ($el) {
        $el.addEventListener('click', function () { //③

          var target = $el.dataset.target; //④
          var $target = document.getElementById(target); //④

          $el.classList.toggle('is-active'); //⑤
          $target.classList.toggle('is-active'); //⑤

        });
      });
    }
  });
  export default {
    data() {
      return {
      };
    },
}
</script>

<style>

</style>