import { useState, useEffect } from 'react';
import { FetchMovieDetails } from '../../components/MoviesAPI'
import { Link, Outlet, useParams, useLocation, useNavigate } from 'react-router-dom';
import { Button, Box, ContentBox } from './StyledMovieDetails';

const MovieDetails = () => { 
    const { movieId } = useParams();
    const [movieDetails, setMovieDetails] = useState({});
    const [movieGenres, setMovieGenres] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    const backLinkHref = location.state?.from ?? "/"

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
    }

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
                <li><Link to="cast">Cast</Link></li>
                <li><Link to="reviews">Reviews</Link></li>
            </ul>
            <Outlet />
        </>
    )
}

export default MovieDetails;