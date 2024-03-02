import PropTypes from "prop-types";
import styled,{keyframes} from "styled-components";
import Heading from "./Heading";

const animateTitle = keyframes`
  0%{
   width:10%;
   left:0;
   transform:translateX(-50%);
   opacity: 0;

  }
  50%{
    width:10%;
  }
  100%{
    
    width:50%;
    left:50%;
   transform:translateX(-50%);
   opacity:1;
   
  }
`;


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


  &.hide-title {
  opacity:0;
  transform: translateY(-100px);
  transition: opacity 1000ms, transform 1000ms;
}

&.show-title {
  opacity: 1;
  transform:translateY(0);
}
  
&.title-after::after {
    content: "";
    position: absolute;
    display: inline-block;
    opacity:1;
    top: 105%;
    height: 2px;
    width: 50%;
    left:50%;
   transform:translateX(-50%);
    background-color: orangered;
    animation-name: ${animateTitle};
    animation-direction: normal;
    animation-iteration-count: initial;
    animation-duration:400ms;
  }

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
