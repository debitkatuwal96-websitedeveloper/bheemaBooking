import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">BookCore.</h3>
            <p className="text-gray-400">
              Your one-stop solution for all booking needs. Hotels, flights, cars, events - we've got you covered.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaYoutube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-400 hover:text-white transition">Home</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition">About Us</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition">Booking</Link></li>
                            <li><Link to="#" className="text-gray-400 hover:text-white transition">Listing </Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition">Contact</Link></li>
                            <li><Link to="#" className="text-gray-400 hover:text-white transition">Login</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition">SignUp</Link></li>
              {/* <li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li> */}
            </ul>
          </div>

          {/* Booking Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Book With Us</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Hotel Reservations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Flight Tickets</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Car Rentals</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Event Tickets</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Vacation Packages</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Cruise Bookings</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <FaMapMarkerAlt className="h-5 w-5 text-gray-400 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-400">123 Booking Street, Suite 456<br />San Francisco, CA 94107</p>
              </div>
              <div className="flex items-center">
                <FaPhone className="h-5 w-5 text-gray-400 mr-3" />
                <a href="tel:+11234567890" className="text-gray-400 hover:text-white transition">+1 (123) 456-7890</a>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="h-5 w-5 text-gray-400 mr-3" />
                <a href="mailto:info@bookease.com" className="text-gray-400 hover:text-white transition">info@bookease.com</a>
              </div>
              <div className="flex items-center">
                <FaClock className="h-5 w-5 text-gray-400 mr-3" />
                <p className="text-gray-400">24/7 Customer Support</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-16 border-t border-gray-800 pt-8">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-lg font-semibold text-white mb-4">Subscribe to Our Newsletter</h4>
            <p className="text-gray-400 mb-6">Get the latest deals and offers directly to your inbox</p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                required
              />
              <button
                type="submit"
                className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Bheema Infotech. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition">Cookie Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;