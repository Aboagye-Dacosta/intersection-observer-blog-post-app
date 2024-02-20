import { useRef } from "react";
import styled from "styled-components";
import { useInterSectionObserver } from "../services/useInterSectionObserver";
import Button from "./Button";
import ForwardIcon from "./ForwardIcon";
import Header from "./Header";
import Heading from "./Heading";

const StyledHero = styled.header`
  width: 100dvw;
  height: 100vh;
  background: url(./hero-1.jpg);
  background-size: cover;

  display: flex;
  flex-direction: column;
`;

const StyledRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  flex: 1;
  gap: 1rem;
`;

function Hero() {
  const ref = useRef();

  useInterSectionObserver(
    ref,
    {
      threshold: 0.5,
    },
    ([entry]) => {
      if (entry.isIntersecting) {
        const header = document.querySelector(".header");
        header.classList.remove("sticky");
        console.log("here");
      } else {
        const header = document.querySelector(".header");
        header.classList.add("sticky");
        console.log("there");
      }
    }
  );

  return (
    <StyledHero ref={ref}>
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
