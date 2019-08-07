<template>
    <section class="container">
        <div class="columns">
            <h3 class="column subtitle">
                {{ repositories.description }}
            </h3>
        </div>

        <h2 class="title">Projects</h2>
        <div
            v-bind:key="checksum(chunk_projects)"
            class="columns"
            v-for="chunk_projects in chunk(repositories.projects, 4)"
        >
            <div
                class="column"
                v-bind:key="project.hash"
                v-for="project in chunk_projects"
            >
                <Project v-bind:project="project"></Project>
            </div>
        </div>

        <h2 class="title">Markdowns</h2>
        <div class="columns">
            <div class="column">
                <div
                    v-bind:key="md.hash"
                    v-for="md in repositories.markdowns"
                    class="is-size-4"
                >
                    <router-link
                        :to="`/markdown/${repositories.title}/${md.file}`"
                    >
                        #{{ md.file }}
                    </router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { Chance } from 'chance'
const chance = new Chance()
function fake_rep() {
    return {
        hash: chance.guid(),
        title: chance.word(),
        description: chance.sentence(),
        markdowns: fake_markdown(),
        projects: fake_projects()
    }
}
function fake_reps() {
    return [...new Array(chance.natural({ min: 2, max: 8 }))].map(v => {
        return fake_rep(false)
    })
}
function fake_projects() {
    return [...new Array(chance.natural({ min: 4, max: 8 }))].map(v => {
        return {
            hash: chance.guid(),
            title: chance.first(),
            description: chance.sentence(),
            parent: chance.bool() ? chance.first() : ''
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
    name: 'Repository',
    props: ['rep'],
    mounted() {
        this.$store.commit('updatePageName', this.repositories.title)
    },
    data() {
        return {
            repositories: fake_rep()
        }
    },
    methods: {
        checksum(ss) {
            checksum(extractChunkHash(ss))
        },
        chunk
    }
}
</script>

<style scoped lang="sass">
@import '~bulma/sass/utilities/initial-variables'
@import '~bulma/sass/utilities/derived-variables'
.md-list
    font-size: $size-normal
</style>
