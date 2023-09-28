import { reactive } from "vue";
import axios from 'axios';


export const state = reactive({

    urlBase: 'https://api.themoviedb.org/3/search/movie?api_key=aa76fd69b0e817c63385eca34e50fd93&query=',
    filmName: 'matrix',
    fetchMovieByName(url) {

        axios
            .get(url)
            .then(response => {

                console.log(response.data.results);

            })
            .catch(error => {
                console.error(error.message);
            })

    },
})