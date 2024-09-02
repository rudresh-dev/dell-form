// import  { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// function Home() {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     fetch('/data.json')
//       .then(response => response.json())
//       .then(data => setItems(data.items));



//       // Record page visit
//     const recordVisit = async () => {
//         try {
//           const response = await fetch('http://localhost:5000/api/visits', {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ page: 'Home' })  // Assuming 'Home' is the identifier for this page
//           });
  
//           const jsonResponse = await response.json();
//           console.log('Visit recorded:', jsonResponse);
//         } catch (error) {
//           console.error('Error recording visit:', error);
//         }
//       };
  
//       recordVisit();
      
//   }, []);

//   return (
//     <div>
//       {items.map(item => (
//         <div key={item.id}>
//           <Link to={`/item/${item.id}`}>{item.name}</Link>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Home;





import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [items, setItems] = useState([]);

  // // Function to generate or retrieve a session ID
  // const getSessionId = () => {
  //   let sessionId = localStorage.getItem('sessionId');
  //   if (!sessionId) {
  //     // Generate a random session ID, e.g., UUID or any other method that ensures uniqueness
  //     sessionId = 'xxxx-xxxx-xxxx-xxxx'.replace(/[x]/g, () => 
  //       (Math.random() * 16 | 0).toString(16));
  //     localStorage.setItem('sessionId', sessionId);
  //   }
  //   return sessionId;
  // };

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setItems(data.items));



    // // Record page visit
    // const recordVisit = async () => {
    //   const sessionId = getSessionId();  // Retrieve the current session ID
    //   try {
    //     const response = await fetch('http://localhost:5000/api/visits', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify({
    //         page: 'Home',  // Assuming 'Home' is the identifier for this page
    //         sessionId: sessionId  // Send the session ID with the request
    //       })
    //     });

    //     const jsonResponse = await response.json();
    //     console.log('Visit recorded:', jsonResponse);
    //   } catch (error) {
    //     console.error('Error recording visit:', error);
    //   }
    // };

    // recordVisit();
  }, []);

  return (
    <div>
      {items.map(item => (
        <div key={item.id}>
          <Link to={`/item/${item.id}`}>{item.name}</Link>
        </div>
      ))}
    </div>
  );
}

export default Home;
