<template>
    <main>
        <section class="section">
            <div class="container">
                <nav
                    class="navbar"
                    role="navigation"
                    aria-label="main navigation"
                >
                    <div class="navbar-brand">
                        <a class="navbar-item" href="https://bulma.io">
                            <img
                                src="https://bulma.io/images/bulma-logo.png"
                                width="112"
                                height="28"
                            />
                        </a>

                        <a
                            role="button"
                            class="navbar-burger burger"
                            aria-label="menu"
                            aria-expanded="false"
                            data-target="navbarBasicExample"
                        >
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>

                    <div id="navbarBasicExample" class="navbar-menu">
                        <div class="navbar-start">
                            <a class="navbar-item">
                                Home
                            </a>

                            <a class="navbar-item">
                                Documentation
                            </a>

                            <div class="navbar-item has-dropdown is-hoverable">
                                <a class="navbar-link">
                                    More
                                </a>

                                <div class="navbar-dropdown">
                                    <a class="navbar-item">
                                        About
                                    </a>
                                    <a class="navbar-item">
                                        Jobs
                                    </a>
                                    <a class="navbar-item">
                                        Contact
                                    </a>
                                    <hr class="navbar-divider" />
                                    <a class="navbar-item">
                                        Report an issue
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="navbar-end">
                            <div class="navbar-item">
                                <div class="buttons">
                                    <a class="button is-primary">
                                        <strong>Sign up</strong>
                                    </a>
                                    <a class="button is-light">
                                        Log in
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </section>

        <section class="hero">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        b3w-storage
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
            <Markdown
                class="container"
                page_url="https://raw.githubusercontent.com/axios/axios/master/README.md"
            ></Markdown>
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

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Markdown from '@/components/Markdown.vue'

@Component({
    components: {
        Markdown
    }
})
export default class App extends Vue {}
</script>

<style lang="scss" scoped>
@import '~bulma/bulma';

// body
main {
    font-family: $body-family;
    color: $body-color;
    font-size: $body-font-size;
    font-weight: $body-weight;
    line-height: $body-line-height;
}
</style>
