import { useInView } from 'react-intersection-observer';

export const useAnimation = (animationClass = '', animationType = 'fadeIn') => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  return {
    ref,
    animationClass: inView ? animationType : '',
  };
};
