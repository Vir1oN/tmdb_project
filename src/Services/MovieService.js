import {AXIOS} from "./axios";
import {FetchService} from "./FetchService";

export class MovieService extends FetchService{
    static async getMovies(params) {
         const {data} =  await AXIOS.get('/discover/movie', {
             params
         });
         return data;
    }

    static async getMovieById(id) {
        return await this.getFromUrl(`/movie/${id}`);
    }

    static async searchMoviesByName(name) {
        const {data} = await AXIOS.get('/search/movie', {
            params: {
                query: name
            }
        });
        return data;
    }

}