import { useEffect } from "react";

export const useLazyImageLoader = (imageRef, onLoadCallback) => {
  useEffect(() => {
    const img = imageRef.current.querySelector('img');  // Target the image inside the container

    // console.log(img);
    console.log(img.complete);

    if (img.complete) {
      onLoadCallback();  // Call the callback if image is already loaded
    } else {
      img.addEventListener("load", onLoadCallback);  // Add load event listener if not loaded
    }

    return () => {
      img.removeEventListener("load", onLoadCallback);  // Cleanup listener on component unmount
    };
  }, [imageRef, onLoadCallback]);
};
