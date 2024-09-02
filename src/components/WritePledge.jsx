import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import arrowIcon from "/arrow.png";
function WritePledge() {
  const [pledgeText, setPledgeText] = useState('');
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);


 
  const handleSubmit = () => {
    const encodedPledge = encodeURIComponent(pledgeText);  // Encode user text only
    navigate(`/post`, { state: { selection: encodedPledge } });
    setIsClicked(true);
  };

  return (
    <div className='bg-[#062357] w-screen h-screen flex flex-col gap-10 items-center justify-center '>
        <img className='absolute top-8' src="/dello-logo.png" alt="" />
      <h1 className="text-white text-xl mb-4">Write your own sustainability pledge:</h1>
      <textarea
        className="text-area p-4 rounded-xl bg-[#062357] border-2 border-white text-white w-[80vw]"
        value={pledgeText}
        onChange={(e) => setPledgeText(e.target.value)}
        rows="4"
        cols="50"
        placeholder="Your pledge here..."
      />
      {/* <button className="next-button" onClick={handleSubmit}>Submit Pledge</button> */}


      <div className="flex items-end justify-center">
          <button
            type="button"
            id="getStarted"
            onClick={handleSubmit}
            className="bg-white text-center responsive-mt w-64 rounded-md h-14 relative font-sans text-black text-xl font-semibold group"
          >
            <div
              className={`bg-[#81C7FA] rounded-md h-12 blue-responsive-mt w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[250px] z-10 duration-500 ${
                isClicked ? "w-[250px]" : "w-1/4"
              }`}
            >
              <img src={arrowIcon} width="20px" height="20px" alt="arrow" />
            </div>
            <p className="translate-x-2">Submit</p>
          </button>
        </div>
        <Link to="/select" className="underline text-white">
          <button className="underline text-white">back</button>
        </Link>
    </div>
  );
}

export default WritePledge;
