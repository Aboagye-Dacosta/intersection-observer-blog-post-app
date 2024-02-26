import { useRef } from "react";

import ObserveSection from "../services/observeSection";
import Image from "./Image";
import Paragraph from "./Paragraph";
import Row from "./Row";
import Section from "./Section";
import Button from "./Button";
import ForwardIcon from "./ForwardIcon";

const DesktopSection = () => {
  const ref = useRef("desktopSection");
  return (
    <ObserveSection ref={ref}>
      <Section as="div" className="deskTop" ref={ref}>
        <Row>
          <Row direction="vertical">
            <Paragraph
              title="Watch on any screen size without a pixel defect"
              heading="Enjoy on your TV"
              subHeading="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
            />
            <Button>
              Stream the highest quality
              <ForwardIcon />
            </Button>
          </Row>

          <Image url="./desktop-other.jpg" src="desktop-sm.jpg" />
        </Row>
      </Section>
    </ObserveSection>
  );
};

export default DesktopSection;
