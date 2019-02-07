<template>
  <div>
    <div class="row">
      <div class="col">
        <h1>Settings</h1>
        <input type="text" v-model="paths"/>
        <input type="checkbox" v-model="onStartup"/>
      </div>
    </div>
  </div>
</template>

<script>
  import UserConfig from '../../common/config'

  UserConfig.create({
    // We'll call our data file 'user-preferences'
    configName: 'settings',
    defaults: {
      // 800x600 is the default size of our window
      windowBounds: { width: 800, height: 600 },
      // do not start the app up on startup
      onStartUp: false,
      // list of directories that make up the writers notebook
      notebookDirectories: []
    }
  })
  export default {
    name: 'settings',
    data () {
      return {
        paths: UserConfig.get('notebookDirectories'),
        onStartup: UserConfig.get('onStartUp')
      }
    }
  }
</script>

<style>

</style>
