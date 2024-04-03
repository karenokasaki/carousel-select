import { useState, useEffect } from "react";
export default function useScreenWidth() {
  const [screenWidth, setScreenWidth] = useState();
  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) setScreenWidth(entry.contentRect.width);
    });
    observer.observe(document.body);
    return () => observer.disconnect();
  }, []);

  return screenWidth;
}
