import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
const Footer = () => {
  const {
    toast
  } = useToast();
  const handleSocialClick = (url) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      toast({
        title:
          "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      });
    }
  };
  const handleDownload = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 forever-gradient rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Ahmad</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Network Marketing Supervisor dedicated to helping others achieve
              wellness and financial freedom through Forever Living Products.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() =>
                  handleSocialClick(
                    "https://www.instagram.com/ahmad.raza742?igsh=ZzFkYWx6Y3RiOGVs"
                  )
                }
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </button>
              <button
                // onClick={handleSocialClick}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </button>
              <button
                // onClick={handleSocialClick}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <span className="text-lg font-semibold mb-6 block">
              Quick Links
            </span>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/join-team"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Join My Team
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <span className="text-lg font-semibold mb-6 block">Services</span>
            <ul className="space-y-3">
              <li>
                <span className="text-gray-300">Business Mentorship</span>
              </li>
              <li>
                <span className="text-gray-300">Product Consultation</span>
              </li>
              <li>
                <span className="text-gray-300">Team Training</span>
              </li>
              <li>
                <span className="text-gray-300">Wellness Coaching</span>
              </li>
              <li>
                <button
                  onClick={handleDownload}
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Download Brochure
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <span className="text-lg font-semibold mb-6 block">
              Contact Info
            </span>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-400" />
                <span className="text-gray-300">+91 8779282185</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-400" />
                <span className="text-gray-300">ahmadraza070799@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-yellow-400" />
                <span className="text-gray-300">Mumbai, Maharashtra</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Ahmad - Forever Living Network Marketing Supervisor. All
              rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <button
                onClick={handleDownload}
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                Privacy Policy
              </button>
              <button
                onClick={handleDownload}
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;