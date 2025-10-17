import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);


export function mySplitText(element, className) {   

    if (!element) return;

        const split = new SplitText(element, {
      type: "lines, words",
      linesClass: "line-overflow", // utile per mascherare
    });

    gsap.from(split.words, {
      y: 100,
      autoAlpha: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.05,
      scrollTrigger: {
        trigger: className,
        start: "top 80%",
        toggleActions: "play none none reverse",
        // markers: true,
      },
    });

    return () => split.revert();

}
