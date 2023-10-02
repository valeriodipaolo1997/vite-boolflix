<script>
import { state } from './state.js';
import AppHeader from './components/AppHeader.vue';
import AppFilm from './components/AppFilm.vue';
import AppSerie from './components/AppSerie.vue';

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
    AppSerie
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
    <AppFilm />
    <AppSerie />
  </main>
</template>
<style scoped>
 main {
  height: calc(100vh - 70px);
  background-color: black;
  overflow-y: auto;
}
</style>
