// // import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import arrowIcon from "/arrow.png"; // Ensure the path is correct
// import { useEffect, useState } from "react";

// const Sustainabilitypledge = () => {
//   const [isClicked, setIsClicked] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (isClicked) {
//       setTimeout(() => {
//         navigate("/select");
//       }, 500); // Wait for the animation to complete
//     }
//   }, [isClicked, navigate]);

//   const handleClick = () => {
//     setIsClicked(true);
//   };

//   return (
//     <div className="bg-[#062357] w-screen h-screen flex justify-center items-center overflow-y-hidden">
//       <div className="flex flex-col justify-center gap-10 items-center h-[80%] ">
//         <div className="absolute top-8">
//           <img src="/dello-logo.png" alt="" />
//         </div>
//         <div className="text-[28px] text-white w-[150px] font-bold text-center">
//           Take the Sustainability Pledge
//         </div>
//         <div className="w-36">
//           <img src="/susLogo.png" width="100%" alt="" />
//         </div>
//         {/* <div>
//           <Link to="/select" className=" w-32 bg-white px-16 py-4">
//             <button>Get Started</button>
//           </Link>
//         </div> */}
//         <div className="flex items-end justify-center">
//           <button
//             type="button"
//             id="getStarted"
//             onClick={handleClick}
//             className="bg-white text-center responsive-mt w-64 rounded-md h-14 relative font-sans text-black text-xl font-semibold group"
//           >
//             <div
//               className={`bg-[#81C7FA] rounded-md h-12 blue-responsive-mt w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[250px] z-10 duration-500 ${
//                 isClicked ? "w-[250px]" : "w-1/4"
//               }`}
//             >
//               <img src={arrowIcon} width="20px" height="20px" alt="arrow" />
//             </div>
//             <p className="translate-x-2">Get Started</p>
//           </button>
//         </div>
//         {/* <div className="absolute -bottom-10 -z-0">
//           <img src="/baricon.png" alt="" />
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default Sustainabilitypledge;



import { useNavigate } from "react-router-dom";
import arrowIcon from "/arrow.png"; // Ensure the path is correct
import { useEffect, useState } from "react";

const Sustainabilitypledge = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const navigate = useNavigate();

  // Minimum swipe distance for it to be considered a swipe
  const minSwipeDistance = 50;

  useEffect(() => {
    if (isClicked) {
      setTimeout(() => {
        navigate("/select");
      }, 500); // Wait for the animation to complete
    }
  }, [isClicked, navigate]);

  const handleClick = () => {
    setIsClicked(true);
  };

  // Handle swipe gesture
  const handleTouchStart = (e) => {
    setTouchEnd(null); // reset touchEnd to avoid multiple swipes
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
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
        <div className="flex items-end justify-center">
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
        </div>
      </div>
    </div>
  );
};

export default Sustainabilitypledge;
