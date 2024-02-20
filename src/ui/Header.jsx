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
  /* margin: 0 2rem; */
`;

const StyledHeading = styled(Heading)`
  color: var(--color-primary);
`;

function Header() {
  return (
    <StyledHeader>
      <StyledHeading as="h2">Hublix Movies</StyledHeading>
      <Button as="a" href="#">
        Sign in <ForwardIcon />
      </Button>
    </StyledHeader>
  );
}

export default Header;
