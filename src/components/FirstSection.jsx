import React, { useRef, useEffect } from "react";

const FirstSection = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("fadeIn");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );

      observer.observe(sectionRef.current);

      return () => {
        observer.disconnect();
      };
    }, []);
  return (
    <div
      className="bg-red-400 flex items-center justify-center section"
      ref={sectionRef}
    >
      <h2 className="text-2xl font-semibold text-white">FirstSection</h2>
    </div>
  );
};

export default FirstSection;
