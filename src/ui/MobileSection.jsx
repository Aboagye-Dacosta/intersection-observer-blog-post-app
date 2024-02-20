import styled from "styled-components";

import Grid from "./Grid";
import Image from "./Image";
import Paragraph from "./Paragraph";
import Section from "./Section";

const StyledSection = styled(Section)`
    background-color: var(--color-black);
    color:#fff;
`
function MobileSection() {
  return (
    <StyledSection>
      <Grid>
        <Image url="./Kick-3-blue.png" />
        <Paragraph
          heading="Download your shows to watch offline"
          subHeading="Save your favorites easily and always have something to watch."
        />
      </Grid>
    </StyledSection>
  );
}

export default MobileSection;
