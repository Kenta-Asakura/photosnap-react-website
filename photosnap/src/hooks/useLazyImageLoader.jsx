import { useRef, useEffect } from "react";

export const useLazyImageLoader = (loadedClass = "loaded") => {
  const imageRef = useRef(null);

  useEffect(() => {
    const ref = imageRef.current;
    const img = ref.querySelector('img');

    if (!img) {
      console.warn("No image element found within the provided ref.");
      return;
    }

    const handleLoad = () => {
      ref.classList.add(loadedClass);
    };

    img.complete ? handleLoad() : img.addEventListener("load", handleLoad);

    return () => {
      img.removeEventListener("load", handleLoad);
    };
  }, [loadedClass]);

  return { imageRef };
};
