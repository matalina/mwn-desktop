const state = {
  // 800x600 is the default size of our window
  windowBounds: { width: 800, height: 600 },
  // do not start the app up on startup
  onStartUp: false,
  // list of directories that make up the writers notebook
  notebookDirectories: [],
  // word count interval (min: 5 minutes max: 1 day) or 0 for off
  countInterval: 5
}

const mutations = {
  UPDATE_WINDOW_BOUNDS (state, bounds) {
    state.windowBounds = bounds
  },
  TOGGLE_ON_START_UP (state) {
    state.onStartUp = !state.onStartUp
  },
  ADD_NOTEBOOK_DIRECTORY (state, path) {
    state.notebookDirectories.push(path)
  },
  REMOVE_NOTEBOOK_DIRECTORY (state, path) {
    state.notebookDirectories = state.notebookDirectories.filter((index, value) => {
      return path !== value
    })
  },
  UPDATE_COUNT_INTERVAL (state, minutes) {
    state.countInterval = minutes
  }
}

const actions = {
  addNotebookDirectory ({ commit }, path) {
    console.log('add directory')
    commit('ADD_NOTEBOOK_DIRECTORY', path)
  },
  removeNotebookDirectory ({ commit }, path) {
    console.log('remove directory')
    commit('REMOVE_NOTEBOOK_DIRECTORY', path)
  },
  toggleStartUp ({ commit }) {
    commit('TOGGLE_ON_START_UP')
  },
  updateCountIntervale ({ commit }, minutes) {
    commit('UPDATE_COUNT_INTERVAL', minutes)
  }
}

export default {
  state,
  mutations,
  actions
}
