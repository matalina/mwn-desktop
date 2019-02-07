<template>
  <div id="app">
    <mwn-menu></mwn-menu>
    <router-view class="container-fluid"></router-view>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Menu from './components/Menu'

  Vue.component('mwn-menu', Menu)

  export default {
    name: 'my-writing-notebook'
  }
</script>

<style lang="scss">
  /* https://coolors.co/122d29-ec5800-fff9f7-385652-2d2d2d */
  $primary: #122D29;
  $secondary: #EC5800;
  $info: #385652;
  $light: #FFF9F7;
  $dark: #2D2D2D;

  $body-bg: $light;
  $body-color: $dark;

  @import "../../node_modules/bootstrap/scss/bootstrap";
</style>
