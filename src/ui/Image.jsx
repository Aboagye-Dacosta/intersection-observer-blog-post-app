import PropTypes from "prop-types";
import { useRef } from "react";
import styled from "styled-components";
import ObserveImage from "../services/observeImage";

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  background-color:inherit;
`;

const Image = ({ url, src }) => {
  const ref = useRef();

  return (
    <ObserveImage ref={ref}>
      <StyledImage data-src={url} src={src} />
    </ObserveImage>
  );
};

Image.propTypes = {
  url: PropTypes.string,
  src: PropTypes.string,
};

export default Image;
