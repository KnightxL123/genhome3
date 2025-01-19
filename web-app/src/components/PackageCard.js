import React from 'react';
import { useHistory } from 'react-router-dom';

const PackageCard = ({ packageDetails }) => {
  const history = useHistory();

  const handleBookNow = () => {
    history.push({
      pathname: '/booking',
      state: { package: packageDetails }
    });
  };

  return (
    <div className="package-card">
      <figure className="card-banner">
        <img src={packageDetails.image} alt={packageDetails.title} loading="lazy" />
      </figure>
      <div className="card-content">
        <h3 className="h3 card-title">{packageDetails.title}</h3>
        <p className="card-text">{packageDetails.description}</p>
        <ul className="card-meta-list">
          <li className="card-meta-item">
            <div className="meta-box">
              <ion-icon name="time"></ion-icon>
              <p className="text">{packageDetails.duration}</p>
            </div>
          </li>
          <li className="card-meta-item">
            <div className="meta-box">
              <ion-icon name="people"></ion-icon>
              <p className="text">pax: {packageDetails.people}</p>
            </div>
          </li>
          <li className="card-meta-item">
            <div className="meta-box">
              <ion-icon name="location"></ion-icon>
              <p className="text">{packageDetails.destination}</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="card-price">
        <div className="wrapper">
          <p className="reviews">({packageDetails.reviews} reviews)</p>
          <div className="card-rating">
            {Array.from({ length: packageDetails.rating }, (_, index) => (
              <ion-icon key={index} name="star"></ion-icon>
            ))}
          </div>
        </div>
        <p className="price">
          ₱{packageDetails.price}
          <span>/ per person</span>
        </p>
        <button className="btn btn-secondary" onClick={handleBookNow}>Book Now</button>
      </div>
    </div>
  );
};

export default PackageCard;