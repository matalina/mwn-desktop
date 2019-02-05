<template>
  <div id="wrapper">
    <h1>My Writing Notebook</h1>
    <p><router-link to="settings">Settings</router-link></p>
  </div>
</template>

<script>
  export default {
    name: 'landing-page'
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { font-family: 'Source Sans Pro', sans-serif; }

</style>
