import { useCallback, useEffect } from "react";

export const useInterSectionObserver = (ref, options, callback) => {
  const observerCallback = useCallback((options, callback) => {
    const observer = new IntersectionObserver(callback, options);
    return observer;
  }, []);

  useEffect(() => {
    let observer = null;
    const entity = ref?.current;
    if (entity) {
      observer = observerCallback(options, callback);
      observer.observe(entity);
    }

    return () => {
      if (entity) {
        observer.unobserve(entity);
      }
    };
  }, [callback, observerCallback, options, ref]);
};
