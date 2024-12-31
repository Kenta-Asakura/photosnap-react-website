import { useRef, useEffect } from "react";

export const useLazyImageLoader = (loadedClass = "loaded") => {
  // console.log(imageRef);
  const imageRef = useRef(null);

  useEffect(() => {
    // console.log('imageRef', imageRef);

    const ref = imageRef.current;
    console.log('ref', ref);

    const img = ref.querySelector('img');  // Target the image inside the container
    // const img = imageRef.current; // Directly use the ref as the image element
    // console.log('img', img);
    // console.log('img.complete', img.complete);

    // if (!img) {
    //   console.warn("No image element found within the provided ref.");
    //   return;
    // }

    const handleLoad = () => {
      ref.classList.add(loadedClass); // Add class to container
    };

    if (img.complete) {
      handleLoad();  // Call the callback if image is already loaded
    } else {
      img.addEventListener("load", handleLoad);  // Add load event listener if not loaded
    }

    return () => {
      img.removeEventListener("load", handleLoad); // Cleanup listener
    };
  }, [loadedClass]);

  return { imageRef }; // Return the ref for use in the component
};
