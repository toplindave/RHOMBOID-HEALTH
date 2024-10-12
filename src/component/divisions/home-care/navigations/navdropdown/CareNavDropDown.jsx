import React, { useContext, useEffect, useRef } from "react";
import NavContext from "../../../../../context/NavContext";
import { gsap, Power1 } from "gsap";

const CareNavDropDown = () => {
  const {
    showNavDropDown,
    //  setShowNavDropDown
  } = useContext(NavContext);

  const hNavRef = useRef();

  const tl = useRef();

  useEffect(() => {
    tl.current = gsap.timeline({ paused: true });

    tl.current.to(hNavRef.current, {
      display: "block",
      top: "20vh",
      duration: 0.1,
      ease: Power1.easeInOut,
    });
  }, []);

  useEffect(() => {
    showNavDropDown ? tl.current.play() : tl.current.reverse();
  }, [showNavDropDown]);

  return (
    <div className="care-navdropdown" ref={hNavRef}>
      CareNavDropDown
    </div>
  );
};

export default CareNavDropDown;
