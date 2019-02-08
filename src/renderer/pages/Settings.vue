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
                  <li v-for="(path, i) in paths">
                    {{ path }}
                    <button class="btn btn-danger"
                            @click="removeLocation(i)"
                    >
                      <i class="fas fa-times-circle fa-fw"></i>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-6">
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
  import UserConfig from '../../common/config'
  const { dialog } = require('electron').remote

  export default {
    name: 'settings',
    data () {
      return {
        paths: UserConfig.get('notebookDirectories'),
        onStartup: UserConfig.get('onStartUp')
      }
    },
    watch: {
      paths () {
        UserConfig.set('notebookDirectories', this.paths)
      }
    },
    methods: {
      getPath () {
        let path = dialog.showOpenDialog({
          properties: [
            'openDirectory'
          ]
        })
        this.paths.push(path[0])
      },
      removeLocation (index) {
        this.paths.splice(index, 1)
      }
    }
  }
</script>

<style>

</style>
