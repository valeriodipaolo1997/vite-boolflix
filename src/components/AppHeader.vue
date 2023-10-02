<script>
import { state } from '../state.js';
export default {
    name: 'AppHeader',
    data() {
        return {
            state,
        }
    },
    components: {
    },
    methods: {
        searchFilmSeries() {
            const urlMovie = this.state.urlMovieBase + this.state.searched;
            this.state.fetchMovieByName(urlMovie)
        },
        searchSeriesByName() {
            const urlSeries = this.state.urlSeriesBase + this.state.searched;
            this.state.fetchSeriesByName(urlSeries)
        }
    },
    created() {
    }
}
</script>

<template>
    <header>

        <div class=" container d-flex justify-content-between align-items-center">

            <div id="logo">

                <img width="230" src="https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="logo">
            </div>

            <nav class="navbar navbar-expand-lg bg-body-black">
                <div class="container-fluid">

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active text-white" aria-current="page" href="#">FILM</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#">SERIE TV</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle text-white" href="#" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    CATEGORIE
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">AZIONE</a></li>
                                    <li><a class="dropdown-item" href="#">DRAMMATICO</a></li>
                                    <li>
                                        <hr class="dropdown-divider">
                                    </li>
                                    <li><a class="dropdown-item" href="#">GUERRA</a></li>
                                </ul>
                            </li>

                        </ul>
                        <div id="search d-flex">

                            <input type="search" name="name" id="name" v-model="this.state.searched">

                            <button class="btn btn-dark"
                                @click="searchFilmSeries(); searchSeriesByName()">Search</button>

                        </div>
                    </div>
                </div>
            </nav>
            <!--
<div id="search d-flex">

                <input type="search" name="name" id="name" v-model="this.state.searched">

                <button class="btn btn-primary" @click="searchFilmSeries(); searchSeriesByName()">Search</button>

            </div>
            -->


        </div>

    </header>
</template>

<style lang="scss" scoped>
header {
    position: sticky;
    top: 0;
    left: 0;
    z-index: 100;
    background-color: black;
    padding: 1rem 0;
}
</style>