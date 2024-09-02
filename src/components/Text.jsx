import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';

const Test = () => {
  const buttonRef = useRef(null);
  const arrowRef = useRef(null);
  const fillRef = useRef(null);
  const navigate = useNavigate();

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
      navigate('/next-page');
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

  return (
    <div className="w-screen bg-[#062357] h-screen flex items-center justify-center">
    <div
      ref={buttonRef}
      className="relative px-1 w-[80vw] h-12 bg-[#fff] border rounded-md shadow-lg overflow-hidden flex  items-center"
      onMouseMove={handleDrag}
      onMouseUp={resetButton}
      onTouchMove={handleTouchMove}
      onTouchEnd={resetButton}
    >
      <div ref={fillRef} className="absolute top-0 left-0 h-full bg-[#81C7FA] rounded-md" style={{ width: 0 }}></div>
      <div
        ref={arrowRef}
        className="absolute w-10 h-10 px-1 bg-[#81C7FA] rounded-md cursor-pointer"
        onMouseDown={(e) => e.preventDefault()} // Prevents drag from starting on touch devices
        onTouchStart={(e) => e.preventDefault()} // Prevents drag from starting on touch devices
      >
        <span className="flex items-center justify-center h-full text-xl text-white">→</span>
      </div>
      <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-[#062357] font-semibold">
        Get Started
      </span>
    </div>
    </div>
  );
};

export default Test;
