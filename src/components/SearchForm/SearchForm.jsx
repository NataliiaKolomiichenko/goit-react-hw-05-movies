import PropTypes from 'prop-types';
import {StyledSearchForm} from './StyledSearchForm'

const SearchForm = ({ onSubmit }) => {
    return (
        <StyledSearchForm onSubmit={onSubmit}>
            <input type="text" name="query" />
            <button type="submit">Search</button>
        </StyledSearchForm>
    );
};

SearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;