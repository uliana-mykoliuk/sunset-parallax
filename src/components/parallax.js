import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

import Mountain1 from "@/assets/parallax/mountain-1.svg";
import Mountain2 from "@/assets/parallax/mountain-2.svg";
import Mountain3 from "@/assets/parallax/mountain-3.svg";
import Sun from "@/assets/parallax/sun.svg";
import CloudsBottom from "@/assets/parallax/clouds-bottom.svg";
import CloudsLeft from "@/assets/parallax/clouds-left.svg";
import CloudsRight from "@/assets/parallax/clouds-right.svg";
import Stars from "@/assets/parallax/stars.svg";

function Parallax() {
  const [background, setBackground] = useState(20);

  const parallaxRef = useRef(null);
  const mountain3 = useRef(null);
  const mountain2 = useRef(null);
  const mountain1 = useRef(null);
  const cloudsBottom = useRef(null);
  const cloudsLeft = useRef(null);
  const cloudsRight = useRef(null);
  const stars = useRef(null);
  const sun = useRef(null);
  const copy = useRef(null);
  const btn = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      var tl = gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: "top top",
          end: "5000 bottom",
          scrub: true,
          pin: true,
          onUpdate: (self) => {
            setBackground(Math.ceil(self.progress * 100 + 20));
          },
        },
      });
      tl.to(
        mountain3.current,
        {
          y: "-=80",
        },
        0
      );
      tl.to(
        mountain2.current,
        {
          y: "-=30",
        },
        0
      );
      tl.to(
        mountain1.current,
        {
          y: "+=50",
        },
        0
      );
      tl.to(
        stars.current,
        {
          top: 0,
        },
        0.5
      );
      tl.to(
        cloudsBottom.current,
        {
          opacity: 0,
          duration: 0.5,
        },
        0
      );
      tl.to(
        cloudsLeft.current,
        {
          x: "-20%",
          opacity: 0,
        },
        0
      );
      tl.to(
        cloudsRight.current,
        {
          x: "20%",
          opacity: 0,
        },
        0
      );
      tl.to(
        sun.current,
        {
          y: "+=210",
        },
        0
      );
      tl.to(
        copy.current,
        {
          y: "-150%",
          opacity: 1,
        },
        0
      );
      tl.to(
        btn.current,
        {
          opacity: 1,
        },
        1.5
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="parallax-outer">
      <div
        ref={parallaxRef}
        style={{
          background: `linear-gradient(#0F2B9C, #673D7D ${background}%, #A74A67, #EDFC54 )`,
        }}
        className="parallax"
      >
        <Image
          ref={mountain3}
          fetchPriority="high"
          className="parallax_img mountain-3"
          src={Mountain3}
          alt=""
        />
        <Image
          ref={mountain2}
          fetchPriority="high"
          className="parallax_img mountain-2"
          src={Mountain2}
          alt=""
        />
        <Image
          ref={mountain1}
          fetchPriority="high"
          className="parallax_img mountain-1"
          src={Mountain1}
          alt=""
        />
        <Image
          ref={sun}
          fetchPriority="high"
          className="parallax_img sun"
          src={Sun}
          alt=""
        />
        <Image
          ref={cloudsBottom}
          fetchPriority="high"
          className="parallax_img clouds-bottom"
          src={CloudsBottom}
          alt=""
        />
        <Image
          ref={cloudsLeft}
          fetchPriority="high"
          className="parallax_img clouds-left"
          src={CloudsLeft}
          alt=""
        />
        <Image
          ref={cloudsRight}
          fetchPriority="high"
          className="parallax_img clouds-right"
          src={CloudsRight}
          alt=""
        />
        <Image
          ref={stars}
          fetchPriority="high"
          className="parallax_img stars"
          src={Stars}
          alt=""
        />
        <div ref={copy} className="copy">
          <h1>Journey</h1>
          <span ref={btn}>Discover more</span>
        </div>
      </div>
    </div>
  );
}

export default Parallax;
