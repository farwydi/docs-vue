<template>
    <div class="columns">
        <div
            class="column"
            v-bind:key="project.hash"
            v-for="project in projects"
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
                            v-bind:key="repository.id"
                            v-for="repository in project.repositories"
                        >
                            <div class="media-content">
                                <router-link to="x">
                                    {{ repository.name }}
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
</template>

<script>
// import { Vue } from 'vue-property-decorator'

// export class ProjectExplorer extends Vue {}

export default {
    data() {
        return {
            projects: [
                {
                    hash: 19254524,
                    title: 'Storage',
                    description: 'Big fucking project',
                    parent: '',
                    repositories: [
                        {
                            id: 1,
                            name: 'b3w-storage',
                            description:
                                'Simmer seven garlics, doughnut, and chocolate in a large frying pan over medium heat, grill for nine minutes and whisk with some raspberries.'
                        },
                        {
                            id: 2,
                            name: 'b3w-storage-content-api',
                            description: 'isla de sangria '
                        },
                        {
                            id: 3,
                            name: 'b3w-storage-content-api',
                            description: 'nosily accelerate a ship.  '
                        }
                    ]
                },
                {
                    hash: 12564524,
                    title: 'Subscribe',
                    description:
                        'Big fucking project Big fucking project Big fucking project Big fucking project Big fucking project Big fucking project ',
                    parent: 'BY',
                    repositories: [
                        {
                            id: 3,
                            name: 'b3w-storage-content-api',
                            description: 'nosily accelerate a ship.  '
                        },
                        {
                            id: 3,
                            name: 'b3w-storage-content-api',
                            description: 'nosily accelerate a ship.  '
                        },
                        {
                            id: 3,
                            name: 'b3w-storage-content-api',
                            description: 'nosily accelerate a ship.  '
                        },
                        {
                            id: 3,
                            name: 'b3w-storage-content-api',
                            description: 'nosily accelerate a ship.  '
                        },
                        {
                            id: 3,
                            name: 'b3w-storage-content-api',
                            description: 'nosily accelerate a ship.  '
                        },
                        {
                            id: 3,
                            name: 'b3w-storage-content-api',
                            description: 'nosily accelerate a ship.  '
                        },
                        {
                            id: 3,
                            name: 'b3w-storage-content-api',
                            description: 'nosily accelerate a ship.  '
                        },
                        {
                            id: 3,
                            name: 'b3w-storage-content-api',
                            description: 'nosily accelerate a ship.  '
                        },
                        {
                            id: 3,
                            name: 'b3w-storage-content-api',
                            description: 'nosily accelerate a ship.  '
                        },
                        {
                            id: 3,
                            name: 'b3w-storage-content-api',
                            description: 'nosily accelerate a ship.  '
                        }
                    ]
                },
                {
                    hash: 12534524,
                    title: 'A',
                    description: 'Big fucking project',
                    parent: '',
                    repositories: []
                },
                {
                    hash: 12545242,
                    title: 'B',
                    description: 'Big fucking project',
                    parent: '',
                    repositories: []
                }
            ]
        }
    },
    methods: {
        add() {
            this.count += 1
        }
    }
}
</script>

<style scoped lang="scss">
@import '~bulma/bulma';
</style>
