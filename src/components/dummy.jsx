import { Link, useLocation } from "react-router-dom";

function PostPage() {
    const location = useLocation();
    const { selection, title, icon } = location.state || {}; // Destructuring with a fallback to prevent errors
  
    const tweetText = `I pledge to ${selection}. #sustainabilityatDTForum #DTforum`;
  
    const handlePost = () => {
      const encodedTweetText = encodeURIComponent(tweetText);
      const twitterComposeUrl = `https://twitter.com/intent/tweet?text=${encodedTweetText}`;
      window.open(twitterComposeUrl, "_blank"); // Open Twitter compose in a new tab
    };
  
    return (
      <div className="bg-[#062357] w-screen h-screen flex  justify-center items-center flex-col gap-4 pt-10">
        <img className="" src="/dello-logo.png" alt="" />
        <div>
          <h1 className="text-white text-xl font-bold text-center mb-4 mt-4">
            Your Sustainability Pledge
          </h1>
          <div className="flex items-center h-20  w-[80vw] justify-center gap-2">
            <div className="w-28 h-full bg-white flex items-center justify-center rounded-lg">
              <img src={icon} alt={title} className="h-16 w-16" />
            </div>
            <div className=" bg-[#81C7FA] h-full rounded-lg flex justify-center items-center w-full">
              <h2 className="text-2xl text-left pl-5">{title}</h2>
            </div>
          </div>
        </div>
  
        <div className="w-[80vw] border-2 border-white rounded-xl p-4 h-[35vh] mt-4">
          <p className="text-white text-[20px]">{tweetText}</p>
        </div>
        <div className="w-[80vw]">
          <p className="text-xs text-white mb-12 mt-2">
            * Based on the actions you selected, we've created a pledge for you.
            Feel free to review and make any changes to reflect your personal
            commitment.
          </p>
        </div>
  
        <div
          onClick={handlePost}
          className="flex gap-2 bg-[#81C7FA] w-[80vw] items-center justify-center py-4 rounded-xl"
        >
          <button className="text-2xl font-semibold text-[#062357]">
            Post to
          </button>
          <img src="/twitter.png" alt="" />
        </div>
        <div className="flex gap-2">
          <Link to="/select" className="underline text-white">
                back
          </Link>
          <Link to="/sustainabilitypledge" className="underline text-white">
          home
          </Link>
        </div>
  
        {/* <div className="absolute bottom-0 -z-0">
          <img src="/baricon.png" alt="" />
        </div> */}
      </div>
    );
  }
  
  export default PostPage;