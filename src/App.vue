<script>
import { state } from './state.js';
import AppHeader from './components/AppHeader.vue';
import AppFilm from './components/AppFilm.vue';
import AppSerie from './components/AppSerie.vue';
import AppBanner from './components/AppBanner.vue';


export default {
  name: 'App',
  data() {
    return {
      state,
    }
  },
  components: {
    AppHeader,
    AppFilm,
    AppSerie,
    AppBanner
  },
  methods: {

  },
  created() {

  }
}
</script>

<template>
  <AppHeader />

  <main>
    <div v-if="this.state.series.length || this.state.movies.length > 0">
      <AppFilm />
      <AppSerie />
    </div>
    <div v-else>
      <AppBanner />
    </div>
  </main>
</template>
<style scoped>
main {
  height: calc(100vh - 70px);
  background-color: black;
  overflow-y: auto;
}
</style>
