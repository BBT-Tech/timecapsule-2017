<template>
  <div id="app">
    <div class="background"></div>
    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
html {
    height: 100%;
    width: 100%;
    font-size: 18px;
    font-family: "Microsoft YaHei";

}
body {
    margin: 0;
    height: 100%;
    width: 100%;
}

.background {
    position: fixed;
    z-index: -1;
    height: 100%;
    width: 100%;
    background-image: url(./assets/bg.png);
    background-size: cover;
    background-position: bottom;
}
#app {
  height: 100%;
  width: 100%;
}
</style>
