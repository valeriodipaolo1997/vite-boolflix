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

            <div id="search d-flex">

                <input type="search" name="name" id="name" v-model="this.state.searched">

                <button class="btn btn-primary" @click="searchFilmSeries(); searchSeriesByName()">CERCA</button>

            </div>

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