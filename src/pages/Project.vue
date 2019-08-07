<template>
    <section class="container">
        <div class="columns">
            <div class="column">
                <h3 class="subtitle" v-if="project.parent">
                    <router-link
                        v-bind:to="{
                            path: `/project/${project.parent}`
                        }"
                    >
                        @{{ project.parent }}
                    </router-link>
                </h3>
                <h3 class="subtitle">
                    {{ project.description }}
                </h3>
            </div>
        </div>

        <h2 class="title">Repositories</h2>
        <div
            v-bind:key="checksum(chunk_repositories)"
            class="columns"
            v-for="chunk_repositories in chunk(project.repositories, 4)"
        >
            <div
                class="column"
                v-bind:key="repository.hash"
                v-for="repository in chunk_repositories"
            >
                <Repository v-bind:repository="repository"></Repository>
            </div>
        </div>
    </section>
</template>

<script>
import { Chance } from 'chance'
const chance = new Chance()
function fake_project() {
    return {
        hash: chance.guid(),
        title: chance.first(),
        description: chance.sentence(),
        parent: chance.bool() ? chance.first() : '',
        repositories: fake_rep()
    }
}
function fake_rep() {
    return [...new Array(chance.natural({ min: 2, max: 8 }))].map(v => {
        return {
            hash: chance.guid(),
            title: chance.word(),
            description: chance.sentence(),
            markdowns: fake_markdown()
        }
    })
}
function fake_markdown() {
    return [...new Array(chance.natural({ min: 2, max: 8 }))].map(v => {
        return {
            hash: chance.guid(),
            file: `${chance.word()}.md`
        }
    })
}

import { checksum, chunk, extractChunkHash } from '@/hash'

export default {
    name: 'Project',
    data() {
        return {
            project: fake_project()
        }
    },
    mounted() {
        this.$store.commit('updatePageName', this.project.title)
    },
    methods: {
        checksum(ss) {
            checksum(extractChunkHash(ss))
        },
        chunk
    },
    props: ['idx']
}
</script>

<style></style>
