import Grid from "./Grid";
import Image from "./Image";
import Paragraph from "./Paragraph";
import Section from "./Section";

function DesktopSection() {
  return (
    <Section>
      <Grid>
        <Paragraph
          heading="Enjoy on your TV"
          subHeading="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
        />
        <Image />
      </Grid>
    </Section>
  );
}

export default DesktopSection;
