import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-6 bg-white shadow-md">
      <div className="text-2xl font-bold text-indigo-600">Matty</div>
      <nav className="space-x-6">
        <a href="#features" className="hover:text-indigo-600">Features</a>
        <a href="#pricing" className="hover:text-indigo-600">Pricing</a>
        <a href="#templates" className="hover:text-indigo-600">Templates</a>
        <a href="#about" className="hover:text-indigo-600">About</a>
        <a href="#contact" className="hover:text-indigo-600">Contact</a>
        <a href="/login" className="font-semibold text-indigo-600 hover:underline">Login</a>
      </nav>
    </header>
  );
};

export default Header;