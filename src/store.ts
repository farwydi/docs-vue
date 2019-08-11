import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        title: 'Docs',
        page_name: '',
        loading: true,
        path: []
    },
    mutations: {
        updatePageName(state, name) {
            state.page_name = name
        },
        resetPath(state) {
            state.loading = true
            state.path = []
        },
        show(state) {
            state.loading = true
        },
        hide(state) {
            state.loading = false
        },
        addPath(state, path: { href: any; title: any }) {
            //@ts-ignore
            state.path.push(path)
        }
    },
    actions: {}
})
