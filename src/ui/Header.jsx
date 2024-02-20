import PropTypes from "prop-types";
import styled from "styled-components";

import Button from "./Button";
import ForwardIcon from "./ForwardIcon";
import Heading from "./Heading";

const StyledHeader = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem;
  background-color: #fff;
  width: 100%;
  z-index:1000;
  /* margin: 0 2rem; */

`;

const StyledHeading = styled(Heading)`
  color: var(--color-primary);
`;

function Header() {

  return (
    <StyledHeader className="header">
      <StyledHeading as="h2">Hublix Movies</StyledHeading>
      <Button as="a" href="#">
        Sign in <ForwardIcon />
      </Button>
    </StyledHeader>
  );
}

Header.propTypes = {
  sticky: PropTypes.string,
};

export default Header;
