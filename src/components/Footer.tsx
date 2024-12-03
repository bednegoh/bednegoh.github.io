import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400">
          Copyright © {new Date().getFullYear()} by Bednegoh | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;