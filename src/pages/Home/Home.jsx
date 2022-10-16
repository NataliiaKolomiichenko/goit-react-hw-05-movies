import { useState, useEffect } from 'react';
import { TrendingMovies } from '../../components/MoviesAPI'
import MoviesList from '../../components/MoviesList'
import { useLocation } from 'react-router-dom';

const Home = () => {
    const [moviesList, setMoviesList] = useState([])
    const location = useLocation();

    useEffect(() => {
        const fetchMovies = async () => {
            const data = await TrendingMovies();
            const moviesData = await data.results;
            setMoviesList(moviesData)
        }
        fetchMovies()
    }, []);

    return (
        <>
            <h1>Trending today</h1>
            <MoviesList items={moviesList} location={location} />
        </>
    );
}

export default Home;