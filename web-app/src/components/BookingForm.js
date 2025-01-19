import React, { useState } from 'react';

const BookingForm = ({ packageDetails }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the booking logic, such as sending the data to a server
    console.log('Booking Details:', { name, email, packageDetails });
  };

  return (
    <div className="booking-form">
      <h2>Confirm Your Booking</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <h3>Selected Package:</h3>
          <p>{packageDetails.title}</p>
          <p>{packageDetails.description}</p>
          <p>Price: {packageDetails.price}</p>
        </div>
        <button type="submit" className="btn btn-primary">Confirm Booking</button>
      </form>
    </div>
  );
};

export default BookingForm;