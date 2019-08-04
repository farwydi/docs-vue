<template>
    <section class="container">
        <h2 class="title">{{ project.title }}</h2>
        <h3 class="subtitle">
            {{ project.description }}
        </h3>
    </section>
</template>

<script>
import { Chance } from 'chance'
const chance = new Chance()
function fake_project(idx) {
    return {
        hash: chance.guid(),
        title: idx,
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
            description: chance.sentence()
        }
    })
}

export default {
    name: 'Project',
    data() {
        return {
            project: fake_project(this.idx)
        }
    },
    mounted() {
        this.$store.commit('updatePageName', this.idx)
    },
    props: ['idx']
}
</script>

<style></style>
