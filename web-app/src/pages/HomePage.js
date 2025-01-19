import React from 'react';
import { useHistory } from 'react-router-dom';
import PackageList from '../components/PackageList';

const HomePage = () => {
  const history = useHistory();

  const handleBookNow = (packageDetails) => {
    history.push({
      pathname: '/booking',
      state: { package: packageDetails }
    });
  };

  return (
    <div className="home-page">
      <h1>Welcome to Havenly Stay</h1>
      <p>Explore our exclusive packages and book your unforgettable experience!</p>
      <PackageList onBookNow={handleBookNow} />
    </div>
  );
};

export default HomePage;