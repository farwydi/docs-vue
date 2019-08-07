import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Project from '@/components/Project.vue'
import Repository from '@/components/Repository.vue'

Vue.component('Project', Project)
Vue.component('Repository', Repository)

import './base.scss'
import './markdown.scss'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
