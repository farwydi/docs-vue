<template>
    <div class="markdown-body" v-html="template"></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import axios, { AxiosResponse } from 'axios'
import { Converter } from 'showdown'
import { initHighlighting } from 'highlight.js'

@Component
export default class Markdown extends Vue {
    @Prop() private page_url!: string
    template: string = ''

    converter = new Converter()

    updated() {
        initHighlighting()
    }

    mounted() {
        this.converter.setFlavor('github')
        this.converter.setOption('simpleLineBreaks', false)

        axios
            .get(this.page_url)
            .then((value: AxiosResponse) => {
                this.template = this.converter.makeHtml(value.data)
            })
            .catch(e => {
                console.error(e)
            })
    }
}
</script>

<style lang="scss">
.markdown-body {
    @import '~highlight.js/scss/github';
    @import '~@primer/css/base/index';
}
@import '~@primer/css/markdown/index';
</style>
