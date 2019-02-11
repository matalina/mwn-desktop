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
export default {
  name: 'bg-word-counter',
  data () {
    return {
      paths: [],
      countInterval: 5
    }
  },
  computed: {
    inMilliseconds () {
      return this.countInterval * 60 * 1000
    }
  },
  methods: {
    runInBackground () {
      console.log('begin counting')

      for (let i in this.paths) {
        let notebook = this.paths[i]
        console.log(notebook)
      }

      setTimeout(this.runInBackground, this.inMilliseconds)
    }
  },
  mounted () {
    console.log('mounted word counter')

    setTimeout(this.runInBackground, this.inMilliseconds)
  }
}
</script>

<style>
</style>
