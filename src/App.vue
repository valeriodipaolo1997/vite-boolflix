<script>
import { state } from './state.js';
export default {
  name: 'App',
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
  <input type="search" name="name" id="name" v-model="this.state.searched">
  <button class="btn" @click="searchFilmSeries(); searchSeriesByName()">trova</button>


  <div class="d-flex justify-content-evenly">

    <div>
      <div class="card" v-for="movie in this.state.movies">
        <img width="100" :src="'https://image.tmdb.org/t/p/w342' + movie.poster_path" alt="">
        <div class="card-body">
          <div>TITOLO: {{ movie.title }}</div>
          <div>TITOLO ORIGINALE: {{ movie.original_title }}</div>
          <div>
            <span>VOTO: {{ Math.round(movie.vote_average / 2) }}</span>
            <span>
              <i class="fa-solid fa-star" v-for="n in Math.round(movie.vote_average / 2)"></i>

            </span>
          </div>
          <div>LINGUA: {{ movie.original_language.toUpperCase() }} <img width="30"
              :src="'https://purecatamphetamine.github.io/country-flag-icons/3x2/' + movie.original_language.toUpperCase() + '.svg'"
              alt="">

          </div>

        </div>

      </div>
    </div>


    <div>
      <div class="card" v-for="serie in this.state.series">
        <img width="100" :src="'https://image.tmdb.org/t/p/w342' + serie.poster_path" alt="">
        <div class="card-body">
          <div>TITOLO: {{ serie.name }}</div>
          <div>TITOLO ORIGINALE: {{ serie.original_name }}</div>
          <div>
            <span>VOTO: {{ Math.round(serie.vote_average / 2) }}</span>
            <span><i class="fa-solid fa-star" v-for="n in Math.round(serie.vote_average / 2)"></i></span>
          </div>
          <div>LINGUA: {{ serie.original_language.toUpperCase() }} <img width="30"
              :src="'https://purecatamphetamine.github.io/country-flag-icons/3x2/' + serie.original_language.toUpperCase() + '.svg'"
              alt="">

          </div>


        </div>

      </div>
    </div>

  </div>
</template>
<style scoped></style>
