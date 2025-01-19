import React from 'react';
import { useLocation } from 'react-router-dom';
import BookingForm from '../components/BookingForm';

const BookingPage = () => {
  const location = useLocation();
  const { packageDetails } = location.state || {};

  if (!packageDetails) {
    return <p>No package selected. Please go back and select a package.</p>;
  }

  return (
    <div className="booking-page">
      <h2>Booking Confirmation</h2>
      <h3>{packageDetails.title}</h3>
      <p>{packageDetails.description}</p>
      <p>Price: {packageDetails.price} per person</p>
      <BookingForm packageDetails={packageDetails} />
    </div>
  );
};

export default BookingPage;