import PropTypes from "prop-types";
import { forwardRef } from "react";

import { useInterSectionObserver } from "./useInterSectionObserver";

const ObserveSection = forwardRef(({ children }, ref) => {
  useInterSectionObserver(
    ref,
    {
      threshold: 0.2,
    },
    ([entry]) => {
      let timer = null;
      if (entry.isIntersecting) {
        const selection = entry.target.querySelector(".title");
        selection.classList.add("show-title");
        const img = entry.target.querySelector("img");
        img.src = img.dataset.src;

        timer = setTimeout(() => {
          selection.classList.add("title-after");
        }, 200);
      } else {
        clearTimeout(timer);
      }
    }
  );

  return children;
});

ObserveSection.displayName = "ObserveSection";
ObserveSection.propTypes = {
  children: PropTypes.object,
};
export default ObserveSection;
