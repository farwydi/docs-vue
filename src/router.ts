import Vue from 'vue'
import Router from 'vue-router'
import Explorer from './pages/Explorer.vue'
import Project from './pages/Project.vue'
import Repository from './pages/Repository.vue'
import Markdown from './pages/Markdown.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        { path: '/explorer', component: Explorer },
        { path: '/project/:idx', component: Project, props: true },
        { path: '/repository/:repository', component: Repository, props: true },
        { path: '/markdown/:page', component: Markdown, props: true }
    ]
})
