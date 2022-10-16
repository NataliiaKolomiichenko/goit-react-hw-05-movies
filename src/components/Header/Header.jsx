import { StyledHeader } from "./HeaderStyle";
import PropTypes from 'prop-types'

const Header = ({children}) => {
    return (
        <StyledHeader>
            {children}
        </StyledHeader>
    )
};

Header.propTypes = {
    children: PropTypes.element.isRequired,
}

export default Header;