import PropTypes from "prop-types";
import React, { forwardRef } from "react";

import { useInterSectionObserver } from "./useInterSectionObserver";

const ObserveImage = forwardRef(({ children }, ref) => {
  useInterSectionObserver(
    ref,
    {
      threshold: 0.3,
    },
    ([entry]) => {
      if (entry.isIntersecting) {
        const overlay = entry.target.querySelector(".overlay");
        overlay.classList.add("remove-blur");
      }
    }
  );

  return React.Children.map(children, (child, index) => {
    return React.createElement(child.type, {
      ...{
        ...child.props,
        key: `image${index}`,
        ref: ref,
        // $active: active,
      },
    });
  });
});

ObserveImage.displayName = "ObserveImage";

ObserveImage.propTypes = {
  children: PropTypes.object,
};
export default ObserveImage;
