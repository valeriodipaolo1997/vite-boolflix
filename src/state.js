import { reactive } from "vue";
import axios from 'axios';


export const state = reactive({
    urlMovieBase: 'https://api.themoviedb.org/3/search/movie?api_key=aa76fd69b0e817c63385eca34e50fd93&language=it_IT&query=',
    urlSeriesBase: 'https://api.themoviedb.org/3/search/tv?api_key=aa76fd69b0e817c63385eca34e50fd93&language=it_IT&query=',
    urlBestSeries: 'https://api.themoviedb.org/3/discover/tv?api_key=aa76fd69b0e817c63385eca34e50fd93&language=it_IT&page=1&sort_by=vote_average.desc&vote_count.gte=200',
    urlBestMovie: 'https://api.themoviedb.org/3/discover/movie?api_key=aa76fd69b0e817c63385eca34e50fd93&language=it_IT&page=1&sort_by=vote_average.desc&vote_count.gte=200',

    searched: '',

    bestMovie: '',
    bestSeries: '',
    movies: '',
    series: '',
    coverPath: 'https://image.tmdb.org/t/p/',


    flagCountry: '',


    fetchMovieByName(url) {

        axios
            .get(url)
            .then(response => {

                this.movies = response.data.results

            })
            .catch(error => {
                console.error(error);
            })

    },
    fetchSeriesByName(url) {

        axios
            .get(url)
            .then(response => {

                this.series = response.data.results

            })
            .catch(error => {
                console.error(error);
            })
    },
    fetchBestSeries(url) {
        axios
            .get(url)
            .then(response => {

                this.bestSeries = response.data.results

            })
            .catch(error => {
                console.error(error);
            })
    },

    fetchBestMovie(url) {
        axios
            .get(url)
            .then(response => {

                this.bestMovie = response.data.results

            })
            .catch(error => {
                console.error(error);
            })
    }
})