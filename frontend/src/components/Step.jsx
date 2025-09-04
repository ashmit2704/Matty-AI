import React from 'react';

const Step = ({ number, title, description }) => (
  <div>
    <div className="text-indigo-600 text-5xl font-bold mb-4">{number}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

export default Step;