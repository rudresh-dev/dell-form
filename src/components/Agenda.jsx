import { useState, useEffect } from "react";
import Modal from "./Modal";

import Nav from "./Navbar/Nav";

import Hero from "./HeroSection/Hero";
import Bottom from "./bottonSection/Bottom";

function Agenda() {
  const [agenda, setAgenda] = useState([]);
  const [selectedSession, setSelectedSession] = useState(null);


   // Function to generate or retrieve a session ID
   const getSessionId = () => {
    let sessionId = localStorage.getItem('sessionId');
    if (!sessionId) {
      // Generate a random session ID, e.g., UUID or any other method that ensures uniqueness
      sessionId = 'xxxx-xxxx-xxxx-xxxx'.replace(/[x]/g, () => 
        (Math.random() * 16 | 0).toString(16));
      localStorage.setItem('sessionId', sessionId);
    }
    return sessionId;
  };


  useEffect(() => {
    fetch("./agenda.json")
      .then((response) => response.json())
      .then((data) => setAgenda(data.agenda));


         // Record page visit
    const recordVisit = async () => {
      const sessionId = getSessionId();  // Retrieve the current session ID
      try {
        const response = await fetch('http://localhost:5000/api/visits', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            page: 'agenda',  // Assuming 'Home' is the identifier for this page
            sessionId: sessionId  // Send the session ID with the request
          })
        });

        const jsonResponse = await response.json();
        console.log('Visit recorded:', jsonResponse);
      } catch (error) {
        console.error('Error recording visit:', error);
      }
    };

    recordVisit();

  }, []);

  const handleSessionClick = (session) => {
    setSelectedSession(session);
  };

  return (
    <div className="w-screen flex justify-center items-center flex-col">
      <Nav />
      <Hero />
      <Bottom />

      <div className="lg:w-[70%] justify-center flex items-center flex-col">
        {/* search bar */}
        {/* <div className="flex justify-center items-center flex-col md:flex-row gap-2 md:justify-between px-8 py-4 w-full">
          <div className="bg-[#3FCDD9] w-[95%] flex items-center justify-center py-[4px] md:w-[120px]">
            <button>Filters</button>
          </div>
          <div className="flex items-center gap-2 border w-[95%] py-[7px] px-1 border-[#CBEEFF] md:w-[250px]">
            <BiSearch />
            <input type="text" placeholder="search" />
          </div>
        </div> */}

        {/* next */}
        <div className=" flex justify-center items-center flex-col w-full">
          <h2 className="text-left w-[95%] my-2">4 September 2024</h2>
          {agenda.map((slot, index) => (
            <div
              key={index}
              className="w-[95%] flex items-center justify-center flex-col mb-6 md:flex-row md:items-start md:justify-start"
            >
              <div className="w-full flex items-start flex-col justify-center md:w-[13%]">
                <h2 className="text-left py-2 text:[15px] lg:text-[20px] pl-2">
                  {slot.time}
                </h2>
              </div>

              <div className="w-[95%] flex flex-col gap-6">
                {slot.sessions.map((session, idx) => (
                  <div
                    key={idx}
                    className="session-card border border-[#CBEEFF] w-full flex items-start flex-col justify-center pl-3 py-3 "
                    onClick={() => handleSessionClick(session)}
                  >
                    <h3 className="font-bold text-[#444] text-[18px]">
                      {session.title}
                    </h3>
                    <h4 className="font-normal text-[14px] text-[#444] mt-2">
                      {session.time}
                    </h4>
                    <p className="text-[14px] font-normal bg-[#CBEEFF] px-4 py-1 rounded-full text-center mt-2">
                      {session.category}
                    </p>
                    <p className="text-[14px] mt-2 font-normal">
                      {session.slot}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
          {selectedSession && (
            <Modal
              session={selectedSession}
              onClose={() => setSelectedSession(null)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Agenda;
