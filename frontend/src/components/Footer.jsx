import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-20 py-8 px-6 md:px-20 text-center text-gray-600">
      <p>© 2025 Matty. All rights reserved.</p>
      <div className="mt-4 space-x-4">
        <a href="/privacy" className="hover:underline">Privacy Policy</a>
        <a href="/terms" className="hover:underline">Terms of Service</a>
        <a href="/support" className="hover:underline">Support</a>
      </div>
    </footer>
  );
};

export default Footer;