import React, { useRef } from "react";
import { useInterSectionObserver } from "./useInterSectionObserver";

const ObserveHero = ({children}) => {
  const ref = useRef();

  useInterSectionObserver(
    ref,
    {
      threshold: 0.5,
    },
    ([entry]) => {
      const header = document.querySelector(".header");
      if (entry.isIntersecting) {
        header.classList.remove("sticky");
        console.log("here");
      } else {
        header.classList.add("sticky");
        console.log("there");
      }
    }
  );

  return React.Children.map(children,(child) => {
    return React.createElement(child.type, {
      ...{
        ...child.props,
        key: "hero",
        ref: ref,
      },
    });
  });
};

export default ObserveHero;
