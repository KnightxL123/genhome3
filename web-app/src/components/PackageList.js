import React from 'react';
import { useHistory } from 'react-router-dom';
import PackageCard from './PackageCard';

const packages = [
  {
    id: 1,
    title: 'Escape to the Sleek Serenity of Modern Minimalist Living',
    description: 'Unwind in the clean, serene spaces of our Modern Minimalist home, where simplicity meets style for the ultimate peaceful getaway.',
    price: 750,
    duration: '7D/6N',
    people: 10,
    destination: 'Philippines',
    reviews: 25,
    rating: 5,
    image: './assets/images/package-1.jpg',
  },
  {
    id: 2,
    title: 'A Cozy Family Getaway in Timeless Tradition',
    description: 'Step into a warm, inviting home with classic charm, where spacious rooms and a cozy atmosphere offer the perfect setting for family memories.',
    price: 520,
    duration: '7D/6N',
    people: 10,
    destination: 'Philippines',
    reviews: 20,
    rating: 5,
    image: './assets/images/package-2.jpg',
  },
  {
    id: 3,
    title: 'Urban Edge in an Industrial Loft',
    description: 'Embrace the bold, contemporary vibe of our Industrial Loft, featuring exposed brick, metal accents, and open spaces for a unique, stylish stay.',
    price: 660,
    duration: '7D/6N',
    people: 10,
    destination: 'Philippines',
    reviews: 40,
    rating: 5,
    image: './assets/images/package-3.jpg',
  },
];

const PackageList = () => {
  const history = useHistory();

  const handleBookNow = (packageDetails) => {
    history.push({
      pathname: '/booking',
      state: { package: packageDetails },
    });
  };

  return (
    <section id="package-section" className="package-section">
      <div className="container">
        <p className="section-subtitle">Packages</p>
        <h2 className="h2 section-title">Checkout Our Packages</h2>
        <p className="section-text">
          Don’t miss out—choose one of our exclusive packages and make your stay unforgettable. Whether you're here for a weekend getaway or an extended retreat, we’ve got the perfect deal for you. Book now and enjoy a truly memorable experience!
        </p>
        <ul className="package-list">
          {packages.map((pkg) => (
            <li key={pkg.id}>
              <PackageCard package={pkg} onBookNow={() => handleBookNow(pkg)} />
            </li>
          ))}
        </ul>
        <button className="btn btn-primary">View All Packages</button>
      </div>
    </section>
  );
};

export default PackageList;