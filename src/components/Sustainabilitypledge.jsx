import { useNavigate } from "react-router-dom";
import arrowIcon from "/arrow.png"; // Ensure the path is correct
import { useEffect, useState } from "react";

import { useRef } from "react";
import gsap from "gsap";

const Sustainabilitypledge = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const navigate = useNavigate();

  const buttonRef = useRef(null);
  const arrowRef = useRef(null);
  const fillRef = useRef(null);

  const handleDrag = (e) => {
    e.preventDefault();
    const button = buttonRef.current;
    const arrow = arrowRef.current;
    const fill = fillRef.current;

    const buttonRect = button.getBoundingClientRect();
    let newOffsetX = e.clientX - buttonRect.left;

    if (newOffsetX < 0) newOffsetX = 0;
    if (newOffsetX > buttonRect.width - arrow.offsetWidth) {
      newOffsetX = buttonRect.width - arrow.offsetWidth;
      gsap.to(arrow, { x: newOffsetX });
      gsap.to(fill, { width: newOffsetX + arrow.offsetWidth });
      navigate("/select");
      return;
    }

    gsap.to(arrow, { x: newOffsetX });
    gsap.to(fill, { width: newOffsetX + arrow.offsetWidth });
  };

  const handleTouchMove = (e) => {
    handleDrag({
      clientX: e.touches[0].clientX,
      preventDefault: e.preventDefault,
    });
  };

  const resetButton = () => {
    gsap.to(arrowRef.current, { x: 0 });
    gsap.to(fillRef.current, { width: 0 });
  };

  // Minimum swipe distance for it to be considered a swipe
  const minSwipeDistance = 50;

  useEffect(() => {
    if (isClicked) {
      setTimeout(() => {
        navigate("/select");
      }, 500); // Wait for the animation to complete
    }
  }, [isClicked, navigate]);

  // Handle swipe gesture
  const handleTouchStart = (e) => {
    setTouchEnd(null); // reset touchEnd to avoid multiple swipes
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isSwipe = Math.abs(distance) > minSwipeDistance;
    if (isSwipe) {
      setIsClicked(true);
    }
  };

  return (
    <div
      className="bg-[#062357] w-screen h-screen flex justify-center items-center overflow-y-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="flex flex-col justify-center gap-10 items-center h-[80%] ">
        <div className="absolute top-8">
          <img src="/dello-logo.png" alt="" />
        </div>
        <div className="text-[28px] text-white w-[150px] font-bold text-center">
          Take the Sustainability Pledge
        </div>
        <div className="w-36">
          <img src="/susLogo.png" width="100%" alt="" />
        </div>
        {/* <div className="flex items-end justify-center">
          <button
            type="button"
            id="getStarted"
            onClick={handleClick}
            className="bg-white text-center responsive-mt w-64 rounded-md h-14 relative font-sans text-black text-xl font-semibold group"
          >
            <div
              className={`bg-[#81C7FA] rounded-md h-12 blue-responsive-mt w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[250px] z-10 duration-500 ${
                isClicked ? "w-[250px]" : "w-1/4"
              }`}
            >
              <img src={arrowIcon} width="20px" height="20px" alt="arrow" />
            </div>
            <p className="translate-x-2">Get Started</p>
          </button>
        </div> */}

        <div
          ref={buttonRef}
          className="relative px-1 z-10 w-[80vw] h-14 bg-[#fff] border rounded-md shadow-lg overflow-hidden flex  items-center"
          onMouseMove={handleDrag}
          onMouseUp={resetButton}
          onTouchMove={handleTouchMove}
          onTouchEnd={resetButton}
        >
          <div
            ref={fillRef}
            className="absolute top-0 left-0 h-full bg-[#81C7FA] rounded-md"
            style={{ width: 0 }}
          ></div>
          <div
            ref={arrowRef}
            className="absolute w-10 h-12 px-1 bg-[#81C7FA] rounded-md cursor-pointer"
            onMouseDown={(e) => e.preventDefault()} // Prevents drag from starting on touch devices
            onTouchStart={(e) => e.preventDefault()} // Prevents drag from starting on touch devices
          >
            <span className="flex items-center justify-center h-full text-xl text-white">
              →
            </span>
          </div>
          <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-[#062357] font-semibold">
            Get Started
          </span>
        </div>
        <img className="absolute bottom-0 -z-0" src="/baricon.png" alt="" />
      </div>
    </div>
  );
};

export default Sustainabilitypledge;
