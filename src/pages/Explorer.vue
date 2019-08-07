<template>
    <section class="container">
        <h2 class="title">Projects</h2>
        <div
            class="columns"
            v-bind:key="checksum(chunk_projects)"
            v-for="chunk_projects in chunk(projects, 4)"
        >
            <div
                class="column"
                v-bind:key="project.hash"
                v-for="project in chunk_projects"
            >
                <Project v-bind:project="project"></Project>
            </div>
        </div>
        <h2 class="title">Repositories</h2>
        <div
            v-bind:key="checksum(chunk_repositories)"
            class="columns"
            v-for="chunk_repositories in chunk(repositories, 4)"
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
        checksum(ss) {
            checksum(extractChunkHash(ss))
        },
        chunk
    }
}
</script>

<style></style>
