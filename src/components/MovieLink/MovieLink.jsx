import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MovieLink = (({ title, id, location }) => {
    if (location.pathname === '/') {
        return (<Link to={`movies/${id}`} state={{from: location}}>{title}</Link>)
    }
    return (<Link to={`${id}`} state={{from: location}}>{title}</Link>)
})

MovieLink.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
}

export default MovieLink;