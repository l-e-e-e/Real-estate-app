import React, { useState } from 'react';
import axios from 'axios';

const AddListing = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
 



const handleSubmit = (e) => {
  e.preventDefault();
  try {
    fetch('http://localhost:8000/api/listings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
        price: price,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to make the POST request.');
        }
      })
      .then((data) => {
        console.log(data); // Log the response data
      })
      .catch((error) => {
        console.error(error);
      });

    setTitle('');
    setPrice('');
  } catch (error) {
    console.error(error);
  }
};




  return (
    <div>
      <h1>Add Listing</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id='titleInput'
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="number"
          id='priceInput'
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <button type="submit">Add Listing</button>
      </form>
    </div>


  );
}

export default AddListing;
