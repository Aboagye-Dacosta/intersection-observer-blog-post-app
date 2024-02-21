import PropTypes from "prop-types";
import React, { forwardRef, useState } from "react";

import { useInterSectionObserver } from "./useInterSectionObserver";

const ObserveImage = forwardRef(({ children }, ref) => {
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

  return React.Children.map(children, (child, index) => {
    return React.createElement(child.type, {
      ...{
        ...child.props,
        key: `image${index}`,
        ref: ref,
        $active: active,
      },
    });
  });
});

ObserveImage.displayName = "ObserveImage";

ObserveImage.propTypes = {
  children: PropTypes.object,
};
export default ObserveImage;
