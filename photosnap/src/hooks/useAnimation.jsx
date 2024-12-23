import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export const useAnimation = (initialClass = '', animationClass = '') => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  return {
    ref,
    animationClass: hasAnimated ? animationClass : initialClass,
  };
};
