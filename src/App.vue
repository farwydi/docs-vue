<template>
    <main>
        <section class="hero">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        {{ page_name }}
                    </h1>
                    <nav class="breadcrumb" aria-label="breadcrumbs">
                        <ul>
                            <li>
                                <router-link to="/explorer">
                                    <span class="icon">
                                        <font-awesome-icon
                                            icon="map-marker-alt"
                                        />
                                    </span>
                                </router-link>
                            </li>
                            <li
                                v-bind:key="checksum([p.title, p.href])"
                                v-for="(p, index) in path"
                                v-bind:class="{
                                    'is-active': index == path.length - 1
                                }"
                            >
                                <div v-if="index == path.length - 1">
                                    <a v-bind:href="p.href" aria-current="page">
                                        {{ p.title }}
                                    </a>
                                </div>
                                <div v-else>
                                    <router-link v-bind:to="p.href">
                                        {{ p.title }}
                                    </router-link>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>

        <section class="section">
            <router-view></router-view>
        </section>

        <footer class="footer">
            <div class="content has-text-centered">
                <p>
                    <strong>Bulma</strong>
                    by
                    <a href="https://jgthms.com">Jeremy Thomas</a>
                    . The source code is licensed
                    <a href="http://opensource.org/licenses/mit-license.php">
                        MIT
                    </a>
                    . The website content is licensed
                    <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
                        CC BY NC SA 4.0
                    </a>
                    .
                </p>
            </div>
        </footer>
    </main>
</template>

<script>
import { mapState } from 'vuex'
import { checksum } from '@/hash'

export default {
    computed: mapState(['page_name', 'path']),
    watch: {
        $route(to, from) {
            if (to.fullPath !== from.fullPath) this.$store.commit('resetPath')
        }
    },
    methods: {
        checksum
    }
}
</script>

<style lang="scss" scoped></style>
