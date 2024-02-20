import PropTypes from "prop-types";
import { useRef, useState } from "react";
import styled from "styled-components";
import { useInterSectionObserver } from "../services/useInterSectionObserver";

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  background-color: ${(props) =>
    props?.$active == "active" ? "transparent" : "blue"};
`;

const Image = ({ url }) => {
  const ref = useRef("image");
  const [isVisible, setVisible] = useState(false);
  useInterSectionObserver(
    ref,
    {
      threshold: 0.5,
    },
    ([entry]) => {
      if (entry.isIntersecting) {
        setVisible(entry.isIntersecting);
        entry.target.src = entry.target.dataset.src;
      }
    }
  );

  const active = isVisible ? "active" : "inactive";

  return <StyledImage ref={ref} $active={active} data-src={url} />;
};

Image.propTypes = {
  url: PropTypes.string,
};

export default Image;
