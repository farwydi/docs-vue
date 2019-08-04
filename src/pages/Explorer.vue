<template>
    <section class="container">
        <h2 class="title">Projects</h2>
        <div class="columns" v-for="chunk_projects in chunk(projects, 4)">
            <div
                class="column"
                v-bind:key="project.hash"
                v-for="project in chunk_projects"
            >
                <div class="card">
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <p class="subtitle is-6" v-if="project.parent">
                                    <router-link
                                        v-bind:to="{
                                            path: `project/${project.parent}`
                                        }"
                                    >
                                        @{{ project.parent }}
                                    </router-link>
                                </p>
                                <p class="title is-4">{{ project.title }}</p>
                            </div>
                        </div>

                        <div class="content">
                            {{ project.description }}
                        </div>

                        <div class="content">
                            <div
                                class="media"
                                v-bind:key="repository.hash"
                                v-for="repository in project.repositories"
                            >
                                <div class="media-content">
                                    <router-link to="x">
                                        {{ repository.title }}
                                    </router-link>

                                    <div class="content">
                                        {{ repository.description }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <h2 class="title">Repositories</h2>
        <div
            class="columns"
            v-for="chunk_repositories in chunk(repositories, 4)"
        >
            <div
                class="column"
                v-bind:key="repository.hash"
                v-for="repository in chunk_repositories"
            >
                <div class="card">
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <p class="title is-4">{{ repository.title }}</p>
                            </div>
                        </div>

                        <div class="content">
                            {{ repository.description }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { Chance } from 'chance'
const chance = new Chance()
function fake_projects() {
    return [...new Array(chance.natural({ min: 4, max: 8 }))].map(v => {
        return {
            hash: chance.guid(),
            title: chance.first(),
            description: chance.sentence(),
            parent: chance.bool() ? chance.first() : '',
            repositories: fake_rep()
        }
    })
}
function fake_rep() {
    return [...new Array(chance.natural({ min: 2, max: 8 }))].map(v => {
        return {
            hash: chance.guid(),
            title: chance.word(),
            description: chance.sentence()
        }
    })
}

import { mapGetters, mapState } from 'vuex'

export default {
    name: 'Explorer',
    data() {
        return {
            projects: fake_projects(),
            repositories: fake_rep()
        }
    },
    mounted() {
        this.$store.commit('updatePageName', 'Explorer')
    },
    methods: {
        chunk(array, chunk_size) {
            return [].concat.apply(
                [],
                array.map((elem, i) =>
                    i % chunk_size ? [] : [array.slice(i, i + chunk_size)]
                )
            )
        }
    }
}
</script>

<style></style>
