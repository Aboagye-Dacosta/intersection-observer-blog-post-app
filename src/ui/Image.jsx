import PropTypes from "prop-types";
import { useRef } from "react";
import styled from "styled-components";
import ObserveImage from "../services/observeImage";

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  background-color: ${(props) =>
    props?.$active == "active" ? "transparent" : "blue"};
`;

const Image = ({ url }) => {
  const ref = useRef();

  return (
    <ObserveImage ref={ref}>
      <StyledImage  data-src={url} />
    </ObserveImage>
  );
};

Image.propTypes = {
  url: PropTypes.string,
};

export default Image;
