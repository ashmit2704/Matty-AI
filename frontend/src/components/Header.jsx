import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-6 bg-white shadow-md">
      <Link to="/" className="text-2xl font-bold text-indigo-600">Matty</Link>
      <nav className="space-x-6">
        <Link to="/about" className="hover:text-indigo-600">About</Link>
        <Link to="/contact" className="hover:text-indigo-600">Contact</Link>
        <Link to="/login" className="hover:text-indigo-600">Login</Link>
        <Link to="/signup" className="font-semibold text-white bg-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-700">Sign Up</Link>
      </nav>
    </header>
  );
};

export default Header;