import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FetchMovieCredits } from '../MoviesAPI'

const MovieCredits = () => {
    const { movieId } = useParams();
    const [credits, setCredits] = useState([]);

    useEffect(() => {

        const fetchCredits = async () => {
            const creditsData = await FetchMovieCredits(movieId);
            const cast = await creditsData.cast;
            setCredits(cast);
        }
        
        fetchCredits();
    }, [movieId])

    return (
        credits.length === 0 ? <div>We don't have any information about actors for this movies</div> :
        <ul>
            {credits.map(({ name, profile_path }) => <li key={name}><img src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt="Actor portrait" height="150" /><p>{name}</p></li>)}
        </ul>
    )
}

export default MovieCredits;