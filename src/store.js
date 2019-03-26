import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		prizeList: [{
			user: '177****5138',
			prize: 'IPad'
		},{
			user: '185****4825',
			prize: 'IPhone'
		},{
			user: '133****4876',
			prize: 'IPod'
		}]
  },
  mutations: {
		addPirze(state,data){
			state.prizeList.push(data);
		}
  },
  actions: {

  }
})
