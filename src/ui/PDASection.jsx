import Grid from "./Grid";
import Paragraph from "./Paragraph";
import Section from "./Section";

function PDASection() {
  return (
    <Section>
      <Grid>
        <Paragraph
          heading="Watch everywhere"
          subHeading="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
        />
      </Grid>
    </Section>
  );
}

export default PDASection;
