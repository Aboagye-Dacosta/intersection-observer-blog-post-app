import PropTypes from "prop-types";
import styled from "styled-components";
import Heading from "./Heading";

const StyledParagraph = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  color:#fff;
  height: 100%;
  width: 100%;

`;

function Paragraph({ heading, subHeading }) {
  return (
    <StyledParagraph>
      <Heading>{heading}</Heading>
      <Heading as="h2">{subHeading}</Heading>
    </StyledParagraph>
  );
}

Paragraph.propTypes = {
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string.isRequired,
};

export default Paragraph;
