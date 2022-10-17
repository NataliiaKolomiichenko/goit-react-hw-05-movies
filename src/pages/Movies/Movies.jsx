import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { SearchMovies } from '../../components/MoviesAPI'
import SearchForm from '../../components/SearchForm';
import MoviesList from '../../components/MoviesList'
import { Notify } from 'notiflix';

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
        let searchQuery = form.elements.query.value.toLowerCase();
        if (searchQuery === "") {
            setSearchParams({})
            return Notify.warning('Please enter a search name.');
        }
        setSearchParams({ query: searchQuery });
    }

    return (
        <>
            <SearchForm onSubmit={handleSubmit} query={query} />
            
            {(query !== null) && <MoviesList items={searchMoviesList} location={location} />}
        </>
    )
}

export default Movies;