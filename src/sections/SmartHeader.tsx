// "use client";

// import { useEffect, useState } from "react";
// import { Header } from "./Header";

// export const SmartHeader = () => {
//   const [isSticky, setIsSticky] = useState(true);

//   useEffect(() => {
//     const hero = document.getElementById("hero");

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsSticky(entry.isIntersecting);
//       },
//       {
//         rootMargin: "-80px 0px 0px 0px", // adjust as needed
//         threshold: 0,
//       }
//     );

//     if (hero) {
//       observer.observe(hero);
//     }

//     return () => {
//       if (hero) observer.unobserve(hero);
//     };
//   }, []);

//   return (
//     <div className={isSticky ? "sticky top-0 z-20 backdrop-blur-sm" : ""}>
//       <Header />
//     </div>
//   );
// };

"use client";

import { useEffect, useState } from "react";
import { Header } from "./Header";

export const SmartHeader = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 800) {
        setShowHeader(true); // always show at top
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setShowHeader(false);
      } else {
        // Scrolling up
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`
        fixed top-0 left-0 right-0 z-20
        transition-all duration-500 ease-in-out
        ${showHeader ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
      `}
      style={{ willChange: "transform, opacity" }}
    >
      <Header />
    </div>
  );
};
