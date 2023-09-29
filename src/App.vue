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
            <span v-for="n in Math.round(movie.vote_average / 2)">
            
              
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                <path
                  d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
              </svg>
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
            <span v-for="n in Math.round(movie.vote_average / 2)">
            
              
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
              <path
                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg>
          </span>
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
