import React from 'react';
import Step from './Step';

const steps = [
  { number: "1", title: "Sign Up & Login", description: "Create an account or login securely with JWT or OAuth." },
  { number: "2", title: "Create & Edit Designs", description: "Use our powerful editor to craft your graphics." },
  { number: "3", title: "Save & Export", description: "Save your designs and export them in your preferred format." },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-indigo-50">
      <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        {steps.map(({ number, title, description }) => (
          <Step key={number} number={number} title={title} description={description} />
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;