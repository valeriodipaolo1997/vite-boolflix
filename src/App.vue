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
  created() {
    this.state.fetchMovieByName(this.state.urlBase + this.state.filmName)
  }
}
</script>

<template></template>
<style scoped></style>
