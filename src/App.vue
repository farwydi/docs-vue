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
                            <li><a href="#">Projects</a></li>
                            <li><a href="#">Storage</a></li>
                            <li><a href="#">b3w-storage</a></li>
                            <li class="is-active">
                                <a href="#" aria-current="page">README</a>
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

export default {
    computed: mapState(['page_name'])
}
</script>

<style lang="scss" scoped></style>
