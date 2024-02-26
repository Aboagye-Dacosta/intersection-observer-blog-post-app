import { useRef } from "react";

import ObserveSection from "../services/observeSection";
import Image from "./Image";
import Paragraph from "./Paragraph";
import Row from "./Row";
import Section from "./Section";
import Button from "./Button";
import ForwardIcon from "./ForwardIcon";

function PDASection() {
  const ref = useRef();
  return (
    <ObserveSection ref={ref}>
      <Section ref={ref}>
        <Row>
          <Row direction="vertical">
            <Paragraph
              title="Are you worried about the location. Our quality is always the same"
              heading="Watch everywhere"
              subHeading="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
            />
            <Button>
            What are you waiting for?
              <ForwardIcon />
            </Button>
          </Row>
          <Image url="./pda.png" src="pda.jpg" />
        </Row>
      </Section>
    </ObserveSection>
  );
}

export default PDASection;
