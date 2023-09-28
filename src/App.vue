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
    searchFilmByName() {
      const urlByName = this.state.urlBase + this.state.filmSearched;
      this.state.fetchMovieByName(urlByName)
    }
  },
  created() {

  }
}
</script>

<template>
  <input type="search" name="name" id="name" v-model="this.state.filmSearched">
  <button class="btn" @click="searchFilmByName">trova</button>


  <div>
    <ul>
      <li v-for="result in this.state.results">
        <div>TITOLO: {{ result.title }}</div>
        <div>TITOLO ORIGINALE: {{ result.original_title }}</div>
        <div>LINGUA: {{ result.original_language }}</div>
        <div>VOTO: {{ result.vote_average }}</div>
      </li>
    </ul>
  </div>
</template>
<style scoped></style>
