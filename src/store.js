import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		prizeList: []
  },
  mutations: {
		addPirze(state,data){
			state.prizeList.push(data);
		}
  },
  actions: {

  }
})
