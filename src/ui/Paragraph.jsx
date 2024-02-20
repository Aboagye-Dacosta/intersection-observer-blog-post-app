import PropTypes from "prop-types";
import Heading from "./Heading";

function Paragraph({ heading, subHeading }) {
  return (
    <p>
      <Heading>{heading}</Heading>
      <Heading as="h2">{subHeading}</Heading>
    </p>
  );
}

Paragraph.propTypes = {
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string.isRequired,
};

export default Paragraph;
