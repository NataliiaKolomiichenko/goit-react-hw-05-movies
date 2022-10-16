import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { SearchMovies } from '../../components/MoviesAPI'
import SearchForm from '../../components/SearchForm';
import MoviesList from '../../components/MoviesList'

const Movies = () => {
    const [searchMoviesList, setSearchMoviesList] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query");
    const location = useLocation();

    useEffect(() => {
        if (query === null) {
            return
        };

        const fetchSearchingMovies = async () => {
            const data = await SearchMovies(query)
            const movies = await data.results;
            setSearchMoviesList(movies)
        }
        fetchSearchingMovies();
    }, [query]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const searchQuery = form.elements.query.value.toLowerCase();
        searchQuery === "" ? setSearchParams({}) : setSearchParams({ query: searchQuery });
        form.reset()
    }

    return (
        <>
            <SearchForm onSubmit={handleSubmit} />
            
            {(query !== null) && <MoviesList items={searchMoviesList} location={location} />}
        </>
    )

}

export default Movies;