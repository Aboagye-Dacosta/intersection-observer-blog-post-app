import styled from "styled-components";

import { useRef } from "react";
import ObserveSection from "../services/observeSection";
import Button from "./Button";
import ForwardIcon from "./ForwardIcon";
import Image from "./Image";
import Paragraph from "./Paragraph";
import Row from "./Row";
import Section from "./Section";

const StyledSection = styled(Section)`
  background-color: var(--color-black);
  color: #fff;
`;

function KidsSection() {
  const ref = useRef();
  return (
    <ObserveSection ref={ref}>
      <StyledSection ref={ref}>
        <Row>
          <Image url="./kids-main.png" src="kids-sm.jpg" />
          <Row direction="vertical">
            <Paragraph
              title="Zone out with kids zone and lets your kids have their adventure"
              heading="Create profiles for kids"
              subHeading="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
            />
            <Button>
              Join the amazing world of kids
              <ForwardIcon />
            </Button>
          </Row>
        </Row>
      </StyledSection>
    </ObserveSection>
  );
}

export default KidsSection;
