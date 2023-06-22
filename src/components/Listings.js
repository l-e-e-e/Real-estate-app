// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Listings = () => {
//   const [listings, setListings] = useState([]);

//   useEffect(() => {
//     fetchListings();
//   }, []);

  



//   const fetchListings = async () => {
//         try {
//       const response = await axios.get('http://localhost:8000/api/listings');
//       console.log(response.data); // Log the response data
//       if (Array.isArray(response.data.listings)) {
//         setListings(response.data.listings);
//       } else {
//         console.error('Invalid response data:', response.data);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };
  
  

//   const deleteListing = async (id) => {
//     try {
//       await axios.delete(`/api/listings/${id}`);
//       fetchListings();
//     } catch (error) {
//       console.error(error);
//     }
//   };

 

//   return (
//     <div>
//       <h1>Listings</h1>
//       {Array.isArray(listings) ? (
//         <ul>
//           {listings.map((listing) => (
//             <li key={listing.id}>
//               {listing.title} - {listing.price}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No listings found.</p>
//       )}
//     </div>
//   );
  
// }

// export default Listings;




import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Listings = () => {
  const [listings, setListings] = useState([]);
  const [selectedId, setSelectedId] = useState('');

  useEffect(() => {
    fetchListings();
  }, []);

  const fetchListings = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/listings');
      console.log(response.data); // Log the response data
      if (Array.isArray(response.data.listings)) {
        setListings(response.data.listings);
      } else {
        console.error('Invalid response data:', response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteListing = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/listings/${selectedId}`);
      fetchListings();
      setSelectedId('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Listings</h1>
      {Array.isArray(listings) ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {listings.map((listing) => (
              <tr key={listing.id}>
                <td>{listing.id}</td>
                <td>{listing.title}</td>
                <td>{listing.price}</td>
                <td>
                  <button onClick={() => setSelectedId(listing.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No listings found.</p>
      )}
      {selectedId && (
        <div>
          <p>Selected ID: {selectedId}</p>
          <button onClick={deleteListing}>Confirm Delete</button>
        </div>
      )}
    </div>
  );
};

export default Listings;
