<template>
  <main>
    <div class="row">
      <div class="col">
        <h1>Settings</h1>
        <div class="row">
          <div class="col-6">
            <div class="row">
              <div class="col-6">
                Where is your notebook located?<br/>
              <small class="text-muted">You may select multiple locations. <br/>
                Children folders are automatically indexed.</small>
              </div>
              <div class="col-6">
                <button class="btn btn-primary"
                        @click="getPath()"
                >Select Location</button>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <ul>
                  <li v-for="path in paths">
                    {{ path }}
                    <button class="btn btn-danger"
                            @click="removeLocation(path)"
                    >
                      <i class="fas fa-times-circle fa-fw"></i>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="form-group">
              <input type="text"
                     v-model="minutes"
                     @keyup="updateInterval()"
              />
            </div>
            <div class="form-group form-check">
              <input type="checkbox"
                     class="form-check-input"
                     v-model="onStartup"
                     id="onStartup"
              />
              <label class="form-check-label" for="onStartup">Start on Windows boot?</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  const { dialog } = require('electron').remote

  export default {
    name: 'settings',
    data () {
      return {
        minutes: this.countInterval
      }
    },
    computed: {
      paths () {
        return this.$store.state.Settings.notebookDirectories
      },
      onStartup () {
        return this.$store.state.Settings.onStartUp
      },
      countInterval () {
        return this.$store.state.Settings.countInterval
      }
    },
    watch: {

    },
    methods: {
      getPath () {
        let path = dialog.showOpenDialog({
          properties: [
            'openDirectory'
          ]
        })
        this.$store.dispatch('addNotebookDirectory', path)
      },
      removeLocation (path) {
        this.$store.dispatch('removeNotebookDirectory', path)
      },
      toggleStartUp () {
        this.$store.dispatch('toggleStartUp')
      },
      updateInterval () {
        this.$store.dispatch('updateCountInterval', this.minutes)
      }
    }
  }
</script>

<style>

</style>
