<script>
import { state } from '../state.js';
import AppSerieList from './AppSerieList.vue';
export default {
    name: 'AppFilmSection',
    data() {
        return {
            state,
        }
    },
    components: {
        AppSerieList
    },
    methods: {
    },
}
</script>

<template>
    <section id="serie">

        <div class="container">

            <h2>Serie TV</h2>

            <AppSerieList />

        </div>

    </section>
</template>

<style lang="scss" scoped>

</style>