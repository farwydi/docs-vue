<template>
    <div class="card">
        <div class="card-content">
            <div class="media">
                <div class="media-content">
                    <router-link
                        v-if="project.parent"
                        class="subtitle is-6 is-block"
                        v-bind:to="{
                            path: `/project/${project.parent}`
                        }"
                    >
                        @{{ project.parent }}
                    </router-link>
                    <router-link
                        class="title is-4 is-block"
                        v-bind:to="{
                            path: `/project/${project.title}`
                        }"
                    >
                        {{ project.title }}
                    </router-link>
                </div>
            </div>

            <div class="content">
                {{ project.description }}
            </div>

            <div class="content" v-if="project.repositories > 0">
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
</template>

<script>
export default {
    props: ['project']
}
</script>

<style scoped></style>
