import {AXIOS} from "./axios";

export class FetchService {
    static async getFromUrl (url) {
        const {data} = await AXIOS.get(url);
        return data;
    }
}