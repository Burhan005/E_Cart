import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-cyan-800 text-white py-8">
      <div className="container mx-auto px-4">
      {/* heading pending */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h4 className="text-lg font-bold mb-2">About Us</h4>
            <p>Learn more about our story, mission, and values.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-2">Quick Links</h4>
            <ul>
              <li><Link to="/about" className="hover:underline">About</Link></li>
              <li><Link to="/products" className="hover:underline">Products</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact</Link></li>
              <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-lg font-bold mb-2">Contact Us</h4>
            <p>Email: support@example.com</p>
            <p>Phone: +1 234 567 890</p>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-lg font-bold mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <div className="cursor-pointer text-gray-400 hover:text-white"><FaFacebook /></div>
              <div className="cursor-pointer text-gray-400 hover:text-white"><FaTwitter /></div>
              <div className="cursor-pointer text-gray-400 hover:text-white"><FaInstagram /></div>
              <div className="cursor-pointer text-gray-400 hover:text-white"><FaLinkedin /></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-700 py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Your Company. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
