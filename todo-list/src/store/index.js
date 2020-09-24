import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: []
  },
  mutations: {
    CLEAR_CHECKED() {
      for (let i = this.tasks.length - 1; i >= 0; --i) {
        if (this.tasks[i].checked) {
          this.tasks.splice(i, 1);
        }
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
