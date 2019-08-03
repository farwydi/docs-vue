import Vue from 'vue'
import Router from 'vue-router'
import ProjectExplorer from './views/ProjectExplorer.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/project-explore',
            name: 'project-explore',
            component: ProjectExplorer
        }
    ]
})
