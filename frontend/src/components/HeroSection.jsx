import React from 'react';

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20 bg-indigo-50">
      <div className="max-w-xl mb-10 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Create Stunning Graphics Effortlessly
        </h1>
        <p className="text-lg mb-6">
          Matty is your all-in-one online graphic design tool for posters, banners, social media images, and more.
        </p>
        <div className="space-x-4">
          <a href="/signup" className="px-6 py-3 bg-indigo-600 text-white rounded-md font-semibold hover:bg-indigo-700">
            Get Started Free
          </a>
          <a href="#demo" className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-md font-semibold hover:bg-indigo-100">
            Watch Demo
          </a>
        </div>
      </div>
      <div>
        <img src="/images/hero-matty.png" alt="Matty Design Tool Interface" className="w-full max-w-lg rounded-lg shadow-lg" />
      </div>
    </section>
  );
};

export default HeroSection;