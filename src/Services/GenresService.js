import {AXIOS} from "./axios";
import {FetchService} from "./FetchService";

export class GenresService extends FetchService{
    static async getGenres() {
        return await this.getFromUrl('/genre/movie/list');
    }
}