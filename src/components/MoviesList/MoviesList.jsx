import PropTypes from 'prop-types'
import MovieLink from '../MovieLink';

const SearchMoviesList = ({ items, location }) => {
    return (
        <ul>
            {items.map(({ id, title }) => <li key={id}><MovieLink title={title} id={id} location={location} /></li>)}
        </ul>
    )
}

SearchMoviesList.propTypes = {
    location: PropTypes.object.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
    })
    ),
}

export default SearchMoviesList;