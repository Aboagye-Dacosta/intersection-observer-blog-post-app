import styled from "styled-components";

import Grid from "./Grid";
import Image from "./Image";
import Paragraph from "./Paragraph";
import Section from "./Section";

const StyledSection = styled(Section)`
  background-color: var(--color-black);
  color: #fff;
`;

function KidsSection() {
  return (
    <StyledSection>
      <Grid>
        <Image url="./Kick-3-gray.png" />
        <Paragraph
          heading="Create profiles for kids"
          subHeading="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
        />
      </Grid>
    </StyledSection>
  );
}

export default KidsSection;
