import { useState, useEffect } from "react";

export default function useIsInViewport(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    });

    if (ref.current) {
      observer.observe(ref.current);
      setIsIntersecting(ref.current.isIntersecting); // Update initial state
    }

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}
