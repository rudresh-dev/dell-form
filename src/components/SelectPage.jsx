

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import arrowIcon from "/arrow.png";
function SelectPage() {
  const [choices, setChoices] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);
  useEffect(() => {
    fetch("../../sustainabilityChoices.json")
      .then((response) => response.json())
      .then((data) => setChoices(data.choices))
      .catch((err) => console.error("Failed to load choices", err));
  }, []);

//   const handleSelect = (choice) => {
//     setSelectedOption(choice.sendText); // Set the selected option using the sendText
//     if (choice.title === "Write your own pledge") {
//       navigate("/write-pledge");
//     } else{
//         navigate('/post', {
//             state: { 
//               selection: choice.sendText,
//               title: choice.title,
//               icon: selectedOption === choice.sendText ? choice.iconSelected : choice.iconDefault
//             }
//           });
//     }
//   };

const handleSelect = (choice) => {
    // Update the selected option first
    setSelectedOption(choice.sendText); 
    // Use a timeout or another method to ensure state updates have been processed
    setTimeout(() => {
        if (choice.title === "Write your own pledge") {
            navigate("/write-pledge");
        } else {
            navigate('/post', {
                state: { 
                    selection: choice.sendText,
                    title: choice.title,
                    icon: choice.iconSelected // Always pass the selected icon
                }
            });
        }
    }, 0); // Timeout can be set to 0 to push to the end of the event queue
};


  const handleClick = () => {
    setIsClicked(true);
  };

  const goToNextPage = () => {
    if (selectedOption) {
      navigate("/post", { state: { selection: selectedOption } });
    } else {
      setError("Please select one option to continue.");
    }
  };

  return (
    <div className="bg-[#062357] w-screen h-screen flex flex-col items-center justify-center">
      <img src="/dello-logo.png" alt="" className=" absolute top-8" />
      <h1 className="text-white text-lg mb-4 text-center px-3 mt-4">
        Pick from the list of sustainability choices to create your personalized
        pledge
      </h1>


      <div className="w-screen max-h-[60vh] flex flex-wrap justify-center items-start gap-2 overflow-y-auto p-3">
        {choices.map((choice) => (
          <div
            key={choice.id}
            className={`option w-[150px] h-[130px] flex items-start flex-col p-3 m-1 cursor-pointer
        border-2 rounded-lg transition-colors duration-300 gap-4 
        ${
          selectedOption === choice.sendText
            ? "border-[#81C7FA] text-[#81C7FA]"
            : "border-white text-white"
        }`}
            onClick={() => handleSelect(choice)}
            tabIndex="0"
            role="button"
          >
            <img
              src={
                selectedOption === choice.sendText
                  ? choice.iconSelected
                  : choice.iconDefault
              }
              alt={choice.title}
              className="w-10 h-10" // Example size, adjust as needed
            />
            {choice.title}
          </div>
        ))}
      </div>

      <div
        onClick={handleClick}
        className="bg-white text-center responsive-mt w-64 rounded-md h-14 relative font-sans text-black text-xl font-semibold group flex justify-center items-center my-6"
      >
        <div
          className={`bg-[#81C7FA] rounded-md h-12 blue-responsive-mt w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[250px] z-10 duration-500 ${
            isClicked ? "w-[250px]" : "w-1/4"
          }`}
          onClick={goToNextPage}
          tabIndex="0"
          role="button"
        >
          <img src={arrowIcon} width="20px" height="20px" alt="arrow" />
        </div>
        <div className="">
          <p>Go Next</p>
        </div>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default SelectPage;
