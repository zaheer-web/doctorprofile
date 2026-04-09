import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 🔥 window scroll
    window.scrollTo(0, 0);

    // 🔥 agar koi scrollable div hai
    const main = document.getElementById("main-content");
    if (main) {
      main.scrollTo(0, 0);
    }

  }, [pathname]);

  return null;
}