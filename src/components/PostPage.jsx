// import { useLocation } from "react-router-dom";

// function PostPage() {
//   const location = useLocation();
//   const { selection, title, icon } = location.state || {}; // Destructuring with a fallback to prevent errors

//   const tweetText = `I pledge to ${selection}. #sustainabilityatDTForum #DTforum`;

//   const handlePost = () => {
//     const encodedTweetText = encodeURIComponent(tweetText);
//     const twitterComposeUrl = `https://twitter.com/intent/tweet?text=${encodedTweetText}`;
//     window.open(twitterComposeUrl, "_blank"); // Open Twitter compose in a new tab
//   };

//   return (
//     <div className="bg-[#062357] w-screen h-screen flex  justify-center items-center flex-col">
//       <img className="absolute top-" src="/dello-logo.png" alt="" />
//       <div>
//         <h1 className="text-white text-2xl font-bold text-center">
//           Your Sustainability Pledge
//         </h1>
//         <div className="flex items-center h-20  w-[80vw] justify-center gap-2">
//           <div className="w-28 h-full bg-white flex items-center justify-center rounded-lg">
//             <img src={icon} alt={title} className="h-16 w-16" />
//           </div>
//           <div className=" bg-[#81C7FA] h-full rounded-lg flex justify-center items-center w-full">
//             <h2 className="text-2xl text-left pl-5">{title}</h2>
//           </div>
//         </div>
//       </div>

//       <div className="w-[80vw] border-2 border-white rounded-xl p-4 h-[35vh]">
//         <p className="text-white text-[20px]">{tweetText}</p>
//       </div>
//       <div className="w-[80vw]">
//         <p className="text-xs text-white">
//           * Based on the actions you selected, we've created a pledge for you.
//           Feel free to review and make any changes to reflect your personal
//           commitment.​
//         </p>
//       </div>
//       <button onClick={handlePost}>Post to Twitter</button>
//     </div>

//     // <div className='bg-blue-900 w-full h-full flex flex-col items-center justify-center p-4 text-white'>
//     // <h1 className="text-xl mb-4">Your Selection</h1>
//     // <img src={icon} alt={title} className="w-20 h-20 mb-2" />
//     // <h2 className="text-2xl">{title}</h2>
//     // <p>{selection}</p>
//     // </div>
//   );
// }

// export default PostPage;

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function PostPage() {
  const location = useLocation();
  const { selection, title, icon } = location.state || {}; // Destructuring with a fallback to prevent errors

  // const tweetText = `${selection}. #CommitToGreenatDTForum`;
  const initialTweetText = `${selection}. #CommitToGreenatDTForum`;

  const [tweetText, setTweetText] = useState(initialTweetText);

  const handlePost = () => {
    const encodedTweetText = encodeURIComponent(tweetText);
    const twitterComposeUrl = `https://twitter.com/intent/tweet?text=${encodedTweetText}`;
    window.open(twitterComposeUrl, "_blank"); // Open Twitter compose in a new tab
  };

  const handleTextChange = (event) => {
    setTweetText(event.target.value);
  };

  const handleTextClear = () => {
    setTweetText("");
  };

  return (
    <div className="bg-[#062357] w-screen h-screen flex  justify-center items-center flex-col gap-4 overflow-y-hidden">
      <img className="absolute top-8" src="/dello-logo.png" alt="" />
      <div>
        <h1 className="text-white text-xl font-bold text-center mb-4 mt-4">
          Your Sustainability Pledge
        </h1>
        <div className="flex items-center h-16  w-[80vw] justify-center gap-2">
          <div className="w-28 h-full bg-white flex items-center justify-center rounded-lg">
            <img src={icon} alt={title} className="h-11 w-11" />
          </div>
          <div className=" bg-[#81C7FA] h-full rounded-lg flex justify-center items-center w-full">
            <h2 className="text-[19px] text-center font-semibold text-[#222]">
              {title}
            </h2>
          </div>
        </div>
      </div>

      {/* <div className="w-[80vw] border-2 border-white rounded-xl p-4 h-auto max-h-[35vh] mt-4">
          <p className="text-white text-[17px]">{tweetText}</p>
        </div> */}

      <div className="w-[80vw] border-2 border-white rounded-xl p-4 h-auto max-h-[35vh] mt-4">
        <textarea
          className="text-white text-[17px] w-full h-full bg-transparent border-none outline-none resize-none"
          value={tweetText}
          onChange={handleTextChange}
        />
      </div>
      <div className="w-[80vw] flex justify-between mt-2">
        <button 
          onClick={handleTextClear} 
          className="text-sm text-white underline"
        >
          Clear Text
        </button>
      </div>
      <div className="w-[80vw]">
        <p className="text-xs text-white mb-4 mt-2">
          * Based on the actions you selected, we've created a pledge for you.
          Feel free to review and make any changes to reflect your personal
          commitment.
        </p>
      </div>

      <div
        onClick={handlePost}
        className="flex gap-2 bg-[#81C7FA] w-[80vw] items-center justify-center py-3 rounded-xl z-10"
      >
        <button className="text-2xl font-semibold text-[#062357]">
          Post to
        </button>
        <img src="/twitter.png" alt="" />
      </div>
      <div className="flex gap-2 z-10">
        <Link to="/select" className="underline text-white">
          back
        </Link>
        <Link to="/sustainabilitypledge" className="underline text-white">
          home
        </Link>
      </div>

      {/* <img className="absolute bottom-0 -z-0" src="/baricon.png" alt="" /> */}
    </div>
  );
}

export default PostPage;
