<script>
import { state } from './state.js';
export default {
  name: 'App',
  data() {
    return {
      state
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
  <input type="search" name="name" id="name" v-model="this.state.searched">
  <button class="btn" @click="searchFilmSeries(); searchSeriesByName()">trova</button>


  <div class="d-flex justify-content-evenly">
    <ul>
      <li>
        <h1>FILM</h1>
      </li>
      <li v-for="movie in this.state.movies">
        <div>TITOLO: {{ movie.title }}</div>
        <div>TITOLO ORIGINALE: {{ movie.original_title }}</div>
        <div>VOTO: {{ movie.vote_average }}</div>
        <div>LINGUA: {{ movie.original_language.toUpperCase() }} <img width="30"
            src="https://purecatamphetamine.github.io/country-flag-icons/3x2/IT.svg" alt="">
        </div>
      </li>
    </ul>

    <ul>
      <li>
        <h1>SERIE</h1>
      </li>
      <li v-for="series in this.state.series">
        <div>TITOLO: {{ series.name }}</div>
        <div>TITOLO ORIGINALE: {{ series.original_name }}</div>
        <div>VOTO: {{ series.vote_average }}</div>
        <div>LINGUA: {{ series.original_language.toUpperCase() }} <img width="30"
            src="https://purecatamphetamine.github.io/country-flag-icons/3x2/IT.svg" alt="">
        </div>
      </li>
    </ul>
  </div>
</template>
<style scoped></style>
