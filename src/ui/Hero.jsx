import styled from "styled-components";
import Button from "./Button";
import ForwardIcon from "./ForwardIcon";
import Header from "./Header";
import Heading from "./Heading";
import Row from "./Row";

const StyledHero = styled.header`
  width: 100dvw;
  height: 100vh;
  background: url(./hero-1.jpg);
  background-size: cover;

  display: flex;
  flex-direction: column;
`;

const StyledRow = styled(Row)`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  flex: 1;
  gap:1rem;
`;

function Hero() {
  return (
    <StyledHero>
      <Header />
      <StyledRow>
        <Heading>Unlimited movies, TV shows, and more</Heading>
        <Heading as="h2">Watch anywhere. Cancel anytime.</Heading>
        <Button>
          Get Started <ForwardIcon />
        </Button>
      </StyledRow>
    </StyledHero>
  );
}

export default Hero;
