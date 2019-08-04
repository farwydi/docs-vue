import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        title: 'Docs',
        page_name: ''
    },
    mutations: {
        updatePageName(state, name) {
            state.page_name = name
        }
    },
    actions: {}
})
