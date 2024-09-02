import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Test = () => {
  const [offsetX, setOffsetX] = useState(0);
  const navigate = useNavigate();

  const handleDrag = (e) => {
    let newOffsetX = e.clientX - e.target.getBoundingClientRect().left;
    if (newOffsetX < 0) newOffsetX = 0;
    if (newOffsetX > 150) { // Adjust this limit based on your button's width
      newOffsetX = 150;
      // Navigate to the next page
      navigate('/next-page'); // Replace with your route
    }
    setOffsetX(newOffsetX);
  };

  const handleDragEnd = () => {
    if (offsetX < 150) { // Adjust this limit based on your button's width
      setOffsetX(0);
    }
  };

  return (
    <div className="relative w-48 h-12 bg-white border rounded-full shadow-lg">
      <div className="absolute top-0 left-0 h-full bg-blue-500 rounded-full transition-width duration-300" style={{ width: `${offsetX + 50}px` }}>
        <div
          className="absolute w-10 h-10 bg-blue-300 rounded-full cursor-pointer"
          style={{ left: `${offsetX}px` }}
          onMouseMove={handleDrag}
          onMouseUp={handleDragEnd}
        >
          <span className="flex items-center justify-center h-full text-xl text-white">→</span>
        </div>
      </div>
      <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-blue-900 font-semibold">
        Get Started
      </span>
    </div>
  );
};

export default Test;
