<template>
    <div class="card">
        <div class="card-content">
            <div class="media">
                <div class="media-content">
                    <router-link
                        class="title is-4 is-block"
                        v-bind:to="{
                            path: `/repository/${repository.title}`
                        }"
                    >
                        {{ repository.title }}
                    </router-link>
                </div>
            </div>

            <div class="content">
                {{ repository.description }}
            </div>

            <div class="content">
                <div v-bind:key="md.hash" v-for="md in repository.markdowns">
                    <router-link
                        :to="`/markdown/${repository.title}/${md.file}`"
                    >
                        #{{ md.file }}
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['repository']
}
</script>

<style scoped></style>
