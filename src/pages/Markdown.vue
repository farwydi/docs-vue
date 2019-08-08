<template>
    <div class="container markdown-body" v-html="template"></div>
</template>

<script>
import axios from 'axios'
import { Converter } from 'showdown'
import { initHighlighting } from 'highlight.js'

export default {
    name: 'Markdown',
    props: ['repository', 'md'],
    data() {
        return {
            converter: new Converter(),
            template: ''
        }
    },
    mounted() {
        this.$store.commit('updatePageName', 'README.md')
        this.$store.commit('addPath', {
            href: `/repository/${this.repository}`,
            title: this.repository
        })
        this.$store.commit('addPath', {
            href: `/md/${this.repository}`,
            title: this.md
        })

        this.converter.setFlavor('github')
        this.converter.setOption('simpleLineBreaks', false)

        this.downloadPage()
    },
    methods: {
        async downloadPage() {
            try {
                const { data } = await axios.get(
                    'https://raw.githubusercontent.com/axios/axios/master/README.md'
                )
                this.template = this.converter.makeHtml(data)
            } catch (e) {
                console.error(e)
            }
        }
    },
    updated() {
        initHighlighting()
    }
}
</script>

<style></style>
