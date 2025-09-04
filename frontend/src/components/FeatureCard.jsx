import React from 'react';

const FeatureCard = ({ icon, title, description }) => (
  <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

export default FeatureCard;