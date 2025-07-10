import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Reveal = ({ children }) => {
  const el = useRef();

  useEffect(() => {
    gsap.fromTo(
      el.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el.current,
          start: "top 80%",
          end: "top 30%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return <div ref={el}>{children}</div>;
};

export default Reveal;
