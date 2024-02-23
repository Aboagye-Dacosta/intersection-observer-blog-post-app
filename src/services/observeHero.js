import { Children, createElement, forwardRef } from "react";
import PropTypes from "prop-types";

import { useInterSectionObserver } from "./useInterSectionObserver";

const ObserveHero = forwardRef(({ children }, ref) => {
  useInterSectionObserver(
    ref,
    {
      threshold: 0.5,
    },
    ([entry]) => {
      const header = document.querySelector(".header");
      if (entry.isIntersecting) {
        header.classList.remove("sticky");
      } else {
        header.classList.add("sticky");
      }
    }
  );

  return Children.map(children, (child) => {
    return createElement(child.type, {
      ...{
        ...child.props,
        key: "hero",
        ref: ref,
      },
    });
  });
});

ObserveHero.displayName = "ObserveHero";
ObserveHero.propTypes = {
  children: PropTypes.object,
};
export default ObserveHero;
