import PropTypes from "prop-types";
import { useRef } from "react";
import styled from "styled-components";
import ObserveImage from "../services/observeImage";

const StyledImage = styled.img`
  width: 40rem;
  height: auto;
  background-color: inherit;
`;

const StyledHolder = styled.div`
  width: 40rem;
  height: 40rem;
  background-color: green;
  position: relative;
`;

const Overlay = styled.div.attrs({ className: "overlay blur" })`
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: filter 1s ease, background-color 0.5s ease;
  background-color: #b9b5b5;

  &.blur {
    filter: blur(5px);
  }

  &.remove-blur {
    filter: blur(0);
    background: transparent;
  }
`;

const Image = ({ url, src }) => {
  const ref = useRef();

  return (
    <ObserveImage ref={ref}>
      <StyledHolder>
        <Overlay />
        <StyledImage data-src={url} src={src} />
      </StyledHolder>
    </ObserveImage>
  );
};

Image.propTypes = {
  url: PropTypes.string,
  src: PropTypes.string,
};

export default Image;
