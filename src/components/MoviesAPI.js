import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '298b3ba9f2c0a557e7d7fc47b0ac595b';

export async function TrendingMovies() {
    try {
        const response = await axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
        const data = await response.data;
        return data;
    } catch (error) {
        console.error(error);
    };
};

export async function SearchMovies(searchName) {
    try {
        const response = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${searchName}&include_adult=false`);
        const data = await response.data;
        return data;
    } catch (error) {
        console.error(error);
    };
};

export async function FetchMovieDetails(movieId) {
    try {
        const response = await axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
        const data = await response.data;
        return data;
    } catch (error) {
        console.error(error);
    };
};

export async function FetchMovieCredits(movieId) {
    try {
        const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`);
        const data = await response.data;
        return data;
    } catch (error) {
        console.error(error);
    };
};

export async function FetchMovieReviews(movieId) {
    try {
        const response = await axios.get(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`);
        const data = await response.data;
        return data;
    } catch (error) {
        console.error(error);
    };
};