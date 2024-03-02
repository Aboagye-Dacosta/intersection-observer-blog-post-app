import { useRef } from "react";
import styled from "styled-components";

import ObserveSection from "../services/observeSection";
import Image from "./Image";
import Paragraph from "./Paragraph";
import Row from "./Row";
import Section from "./Section";
import Button from "./Button"
import ForwardIcon from "./ForwardIcon"

const StyledSection = styled(Section)`
  background-color: var(--color-black);
  color: #fff;
`;
function MobileSection() {
  const ref = useRef();
  return (
    <ObserveSection ref={ref}>
      <StyledSection ref={ref}>
        <Row>
          <Image url="./main/mobile-main.png" src="./main/mobile-main.jpg" />
          <Row direction="vertical">
            <Paragraph
              title="Don't worry your pocket is enough."
              heading="Download your shows to watch offline"
              subHeading="Save your favorites easily and always have something to watch."
            />
            <Button>
              Watch unlimited on your mobile
              <ForwardIcon />
            </Button>
          </Row>
        </Row>
      </StyledSection>
    </ObserveSection>
  );
}

export default MobileSection;
