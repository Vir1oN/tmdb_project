export const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGJhZWJkYTU5NGM2MmVhMjJmMjVkYTM2YjM1YzgwYiIsInN1YiI6IjVmZmViODRjZmVhMGQ3MDAzYzhkYWYxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4zGXqfVy6BVIntxsy92c_OeMpMnJJmjn7Zmsc49b0a4';
export const AXIOS_CONFIG = {
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: `Bearer ${API_TOKEN}`
    }
};
