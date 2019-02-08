<template>
  <div class="row">
    <div class="col">
      <h1>Word Counter</h1>
      <ul>
        <li v-for="path in paths">
          {{ path }}
        </li>
      </ul>
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
  name: 'bg-word-counter',
  data () {
    return {
      paths: UserConfig.get('notebookDirectories')
    }
  },
  watch: {
    paths () {
      this.paths = UserConfig.get('notebookDirectories')
    }
  },
  methods: {

  },
  mounted () {
    console.log('mounted word counter')
  }
}
</script>

<style>
</style>
