import PropTypes from "prop-types";
import styled from "styled-components";
import Heading from "./Heading";


const StyledParagraph = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  color: #fff;
  height: 100%;
  width: 100%;
  position: relative;
  width: 70rem;
`;

const Title = styled(Heading)`
  position: relative;
  text-transform: uppercase;
  margin-bottom: 1rem;
  font-size:1.7rem;

`;

const SubHeading = styled(Heading)`
  color:slate;
`
function Paragraph({ heading, subHeading, title }) {
  return (
    <StyledParagraph>
      <Title as="h3" className="title hide-title">
        {title}
      </Title>
      <Heading>{heading}</Heading>
      <SubHeading as="h2">{subHeading}</SubHeading>
    </StyledParagraph>
  );
}

Paragraph.propTypes = {
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default Paragraph;
