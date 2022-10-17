import { useState, useEffect, Suspense, useRef } from 'react';
import { FetchMovieDetails } from '../../components/MoviesAPI'
import { Link, Outlet, useParams, useNavigate, useLocation } from 'react-router-dom';
import { Button, Box, ContentBox } from './StyledMovieDetails';

const MovieDetails = () => { 
    const { movieId } = useParams();
    const [movieDetails, setMovieDetails] = useState({});
    const [movieGenres, setMovieGenres] = useState([]);
    const stateFrom = useRef('');
    const location = useLocation();
    const navigate = useNavigate();
    const backLinkHref = stateFrom.current ?? "/"
    
    useEffect(() => {
        stateFrom.current = location.state?.from
    }, [])

    useEffect(() => {
            const fetchMovieDetails = async () => {
            const moviesDetail = await FetchMovieDetails(movieId);
            setMovieDetails(moviesDetail);
            setMovieGenres(moviesDetail.genres.map(item => item.name))
        }
        fetchMovieDetails();
    }, [movieId]);

    const handleClick = () => {
        navigate(backLinkHref)
    };

    const { title, overview, poster_path } = movieDetails;

    return (
        <>
            <Button type="button" onClick={handleClick}>Go back</Button>
            <Box>
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} height="400" />
                <ContentBox>
                    <h2>{title}</h2>
                    <div>User score</div>
                    <h2>Overview</h2>
                    <div>{overview}</div>
                    <h2>Genres</h2>
                    <div>{movieGenres.join(', ')}</div>
                </ContentBox>
            </Box>
            
            <h3>Additional information</h3>
            <ul>
                <li><Link to="cast" state={{ from: { backLinkHref } }}>Cast</Link></li>
                <li><Link to="reviews" state={{from: {backLinkHref}}}>Reviews</Link></li>
            </ul>
            <Suspense>
                <Outlet />
            </Suspense>
        </>
    )
}

export default MovieDetails;