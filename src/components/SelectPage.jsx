

import { useState } from "react";
import { useNavigate } from "react-router-dom";


import { useRef } from 'react';
import gsap from 'gsap';

const choiseData = {

  "choices": [
      {
          "id": 1,
          "title": "Write your own pledge",
          "sendText": "Custom Pledge",
          "iconDefault": "/icons/1.svg",
          "iconSelected": "/icons/11.svg"
      },
      {
          "id": 2,
          "title": "Reduce, Reuse, Recycle",
          "sendText": "I pledge to reduce my consumption, reuse items whenever possible, and recycle to minimize waste.",
          "iconDefault": "/icons/22.svg",
          "iconSelected": "/icons/2.svg"
      },
      {
          "id": 3,
          "title": "Energy Efficiency",
          "sendText": "I pledge to reduce my energy consumption by using energy-efficient appliances, turning off lights when not in use, and unplugging devices",
          "iconDefault": "/icons/33.svg",
          "iconSelected": "/icons/3.svg"
      },
      {
          "id": 4,
          "title": "Sustainable Transportation",
          "sendText": "I pledge to use sustainable transportation methods such as biking, walking, carpooling, or using public transit in daily commute",
          "iconDefault": "/icons/44.svg",
          "iconSelected": "/icons/4.svg"
      },
      {
          "id": 5,
          "title": "Support Sustainable Products",
          "sendText": "I pledge to support products and companies that prioritize sustainability, including purchasing items made from recycled materials and those that are ethically produced,",
          "iconDefault": "/icons/55.svg",
          "iconSelected": "/icons/5.svg"
      },
      {
          "id": 6,
          "title": "Reduce Single-Use Plastics",
          "sendText": "I pledge to avoid single-use plastics by using reusable bags, bottles, and containers",
          "iconDefault": "/icons/66.svg",
          "iconSelected": "/icons/6.svg"
      },
      {
          "id": 7,
          "title": "Mindful Consumption",
          "sendText": "I pledge to be a mindful consumer, considering the environmental impact of my purchases and opting for quality over quantity",
          "iconDefault": "/icons/77.svg",
          "iconSelected": "/icons/7.svg"
      },
      {
          "id": 8,
          "title": "Plant a Tree",
          "sendText": "I pledge to plant at least one tree each year to contribute to reforestation and combat climate change",
          "iconDefault": "/icons/88.svg",
          "iconSelected": "/icons/8.svg"
      },
      {
          "id": 9,
          "title": "Educate Others",
          "sendText": "I pledge to educate others about the importance of trees and encourage them to participate in tree-planting initiatives.",
          "iconDefault": "/icons/88.svg",
          "iconSelected": "/icons/8.svg"
      },
      {
          "id": 10,
          "title": "Reduce Paper Use",
          "sendText": "I pledge to reduce my paper use and support tree free paper products to decrease deforestation",
          "iconDefault": "/icons/88.svg",
          "iconSelected": "/icons/8.svg"
      }
  ]
}


// function SelectPage() {

//   const buttonRef = useRef(null);
//   const arrowRef = useRef(null);
//   const fillRef = useRef(null);

//   // const [choices, setChoices] = useState([]);
//   const [selectedOption, setSelectedOption] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();
//   const [isClicked, setIsClicked] = useState(false);
//   const [choices, setChoices] = useState(choiseData.choices);
 


// const handleDrag = (e) => {
//   e.preventDefault();
//   const button = buttonRef.current;
//   const arrow = arrowRef.current;
//   const fill = fillRef.current;

//   const buttonRect = button.getBoundingClientRect();
//   let newOffsetX = e.clientX - buttonRect.left;

//   if (newOffsetX < 0) newOffsetX = 0;
//   if (newOffsetX > buttonRect.width - arrow.offsetWidth) {
//     newOffsetX = buttonRect.width - arrow.offsetWidth;
//     gsap.to(arrow, { x: newOffsetX });
//     gsap.to(fill, { width: newOffsetX + arrow.offsetWidth });
//     navigate('/post');
//     return;
//   }

//   gsap.to(arrow, { x: newOffsetX });
//   gsap.to(fill, { width: newOffsetX + arrow.offsetWidth });
// };

// const handleTouchMove = (e) => {
//   handleDrag({
//     clientX: e.touches[0].clientX,
//     preventDefault: e.preventDefault,
//   });
// };

// const resetButton = () => {
//   gsap.to(arrowRef.current, { x: 0 });
//   gsap.to(fillRef.current, { width: 0 });
// };

// const handleSelect = (choice) => {
//     // Update the selected option first
//     setSelectedOption(choice.sendText); 
//     // Use a timeout or another method to ensure state updates have been processed
//     setTimeout(() => {
//         if (choice.title === "Write your own pledge") {
//             navigate("/write-pledge");
//         } else {
//             navigate('/post', {
//                 state: { 
//                     selection: choice.sendText,
//                     title: choice.title,
//                     icon: choice.iconSelected // Always pass the selected icon
//                 }
//             });
//         }
//     }, 0); // Timeout can be set to 0 to push to the end of the event queue
// };



//   return (
//     <div className="bg-[#062357] w-screen h-screen flex flex-col items-center justify-center overflow-y-hidden">
//       <img src="/dello-logo.png" alt="" className=" absolute top-8" />
//       <h1 className="text-white text-lg mb-4 text-center px-3 mt-4">
//         Pick from the list of sustainability choices to create your personalized
//         pledge
//       </h1>


//       <div className="w-screen max-h-[60vh] flex flex-wrap justify-center items-start gap-2 overflow-y-auto p-3">
//         {choices.map((choice) => (
//           <div
//             key={choice.id}
//             className={`option w-[150px] h-[130px]  flex items-start flex-col p-3 m-1 cursor-pointer
//         border-2 rounded-lg transition-colors duration-300 gap-4 text-[15px]
//         ${
//           selectedOption === choice.sendText
//             ? "border-[#81C7FA] text-[#81C7FA]"
//             : "border-white text-white"
//         }`}
//             onClick={() => handleSelect(choice)}
//             tabIndex="0"
//             role="button"
//           >
//             <img
//               src={
//                 selectedOption === choice.sendText
//                   ? choice.iconSelected
//                   : choice.iconDefault
//               }
//               alt={choice.title}
//               className="w-10 h-10 " // Example size, adjust as needed
//             />
//             {choice.title}
//           </div>
//         ))}
//       </div>


//       <div
//       ref={buttonRef}
//       className="relative px-1 w-[80vw] h-12 bg-[#fff] border rounded-md shadow-lg overflow-hidden flex  items-center"
//       onMouseMove={handleDrag}
//       onMouseUp={resetButton}
//       onTouchMove={handleTouchMove}
//       onTouchEnd={resetButton}
//     >
//       <div ref={fillRef} className="absolute top-0 left-0 h-full bg-[#81C7FA] rounded-md" style={{ width: 0 }}></div>
//       <div
//         ref={arrowRef}
//         className="absolute w-10 h-10 px-1 bg-[#81C7FA] rounded-md cursor-pointer"
//         onMouseDown={(e) => e.preventDefault()} // Prevents drag from starting on touch devices
//         onTouchStart={(e) => e.preventDefault()} // Prevents drag from starting on touch devices
//       >
//         <span className="flex items-center justify-center h-full text-xl text-white">→</span>
//       </div>
//       <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-[#062357] font-semibold">
//         Get Started
//       </span>
//     </div>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </div>
//   );
// }


function SelectPage() {
  const buttonRef = useRef(null);
  const arrowRef = useRef(null);
  const fillRef = useRef(null);

  const [selectedOption, setSelectedOption] = useState(null); // Store the full choice object
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [choices] = useState(choiseData.choices);

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
      handleButtonClick(); // Call the button click handler
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

  const handleSelect = (choice) => {
    setSelectedOption(choice); // Save the entire choice object
    setError(""); // Clear any previous errors
  };

  const handleButtonClick = () => {
    if (selectedOption) {
      if (selectedOption.title === "Write your own pledge") {
        navigate("/write-pledge");
      } else {
        navigate('/post', {
          state: { 
            selection: selectedOption.sendText,
            title: selectedOption.title,
            icon: selectedOption.iconSelected // Always pass the selected icon
          }
        });
      }
    } else {
      setError("Please select an option before proceeding.");
    }
  };

  return (
    <div className="bg-[#062357] w-screen h-screen flex flex-col items-center justify-center overflow-y-hidden">
      <img src="/dello-logo.png" alt="" className=" absolute top-8" />
      <h1 className="text-white text-lg mb-4 text-center px-3 mt-4">
        Pick from the list of sustainability choices to create your personalized pledge
      </h1>

      <div className="w-screen max-h-[60vh] flex flex-wrap justify-center items-start gap-2 overflow-y-auto p-3">
        {choices.map((choice) => (
          <div
            key={choice.id}
            className={`option w-[150px] h-[130px]  flex items-start flex-col p-3 m-1 cursor-pointer
          border-2 rounded-lg transition-colors duration-300 gap-4 text-[15px]
          ${selectedOption === choice ? "border-[#81C7FA] text-[#81C7FA]" : "border-white text-white"}`}
            onClick={() => handleSelect(choice)}
            tabIndex="0"
            role="button"
          >
            <img
              src={selectedOption === choice ? choice.iconSelected : choice.iconDefault}
              alt={choice.title}
              className="w-10 h-10" // Example size, adjust as needed
            />
            {choice.title}
          </div>
        ))}
      </div>

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
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default SelectPage;


