import { useState, useEffect } from "react";

export default function useScroll() {
  const [isScrolled, setScrolled] = useState(false);
  useEffect(() => {
    function scroll(e) {
      var scrollPosY = window.pageYOffset | document.body.scrollTop;
      setScrolled(scrollPosY > 100);
    }
    document.addEventListener("scroll", scroll, { passive: true });
    return () => {
      document.removeEventListener("scroll", scroll);
    };
  }, []);
  return isScrolled;
}
