import {AXIOS} from "./axios";
import {FetchService} from "./FetchService";

export class MovieService extends FetchService{
    static async getMovies() {
        return await this.getFromUrl('/discover/movie');
    }

    static async getMovieById(id) {
        return await this.getFromUrl(`/movie/${id}`);
    }
}