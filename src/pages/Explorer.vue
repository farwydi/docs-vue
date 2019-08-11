<template>
    <div class="container">
        <progress
            v-if="loading"
            class="progress is-small is-primary"
            max="100"
        ></progress>
        <div v-else>
            <h2 class="title">Projects</h2>
            <div
                class="columns"
                v-bind:key="checksumByHash(chunk_projects)"
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
                v-bind:key="checksumByHash(chunk_repositories)"
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
        </div>
    </div>
</template>

<script>
import { checksumByHash, chunk } from '@/hash'
import axios from 'axios'

export default {
    name: 'Explorer',
    data() {
        return {
            projects: [],
            repositories: [],
            loading: true
        }
    },
    mounted() {
        this.$store.commit('updatePageName', 'Explorer')
        this.multiReq([
            // Запрос репозиториев
            `{
                repositories {
                    hash,
                    title,
                    description,
                    markdowns {
                        hash,
                        file
                    }
                }
            }`,
            // Запрос проектов
            `{
                projects {
                    hash,
                    title,
                    description,
                    parent {
                        hash,
                        title
                    },
                    repositories {
                        hash,
                        title,
                        description,
                        markdowns {
                            hash,
                            file
                        }
                    }
                }
            }`
        ])
    },
    methods: {
        checksumByHash,
        chunk,
        async multiReq(mquery) {
            let results = await axios.all(
                mquery.map(query => {
                    return axios.post('/api/graphql', { query })
                })
            )
            this.loading = false
            results.map(result => {
                try {
                    if (!result.data.data) {
                        throw result.data.errors
                    }
                    for (const key of Object.keys(result.data.data)) {
                        this[key] = result.data.data[key]
                    }
                } catch (e) {
                    if (Array.isArray(e)) {
                        for (let err of e) {
                            console.error(err.message)
                        }
                    } else {
                        console.error(e)
                    }
                }
            })
        }
    }
}
</script>

<style></style>
