import { useCallback, useEffect } from "react";

export const useInterSectionObserver = (ref, options, callback) => {
  const observerCallback = useCallback((ref, options, callback) => {
    const observer = new IntersectionObserver(callback, options);
    return observer;
  }, []);

  useEffect(() => {
    let observer = null;
    const entity =
      ref === "header" ? document.querySelector(".header") : ref?.current;
    if (entity) {
      observer = observerCallback(ref, options, callback);
      observer.observe(entity);
    }

    return () => {
      if (entity) {
        observer.unobserve(entity);
      }
    };
  }, [callback, observerCallback, options, ref]);
};
