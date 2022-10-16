import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FetchMovieReviews } from '../MoviesAPI'

const MovieCredits = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {

        const fetchCredits = async () => {
            const reviewsData = await FetchMovieReviews(movieId);
            const reviewsResults = await reviewsData.results;
            setReviews(reviewsResults);
        }
        
        fetchCredits();
    }, [movieId]);

    return (
        reviews.length === 0 ? <div>We don't have any reviews for this movies</div> :
            <ul>
                {reviews.map(({ author, content }) => <li key={author}><h4>{author}</h4><p>{content}</p></li>)}
            </ul>
    )
}

export default MovieCredits;