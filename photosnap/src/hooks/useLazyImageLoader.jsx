import { useEffect } from "react";

export const useLazyImageLoader = (imageRef, onLoadCallback) => {
  useEffect(() => {
    const img = imageRef.current.querySelector('img');  // Target the image inside the container

    // console.log('img', img);
    // console.log('img.complete', img.complete);

    if (!img) {
      console.log('No image element found.');
      return;
    }

    if (img.complete) {
      onLoadCallback();  // Call the callback if image is already loaded
    } else {
      img.addEventListener("load", onLoadCallback);  // Add load event listener if not loaded
    }

    return () => {
      // console.log('hook clean up, img load status', img.complete);
      img.removeEventListener("load", onLoadCallback);  // Cleanup listener on component unmount
    };
  }, [imageRef, onLoadCallback]);
};
