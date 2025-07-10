import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navItems = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'About',
    path: '/about'
  }, {
    name: 'Products',
    path: '/products'
  }, {
    name: 'Join Team',
    path: '/join-team'
  }, {
    name: 'Contact',
    path: '/contact'
  }, {
    name: 'Blog',
    path: '/blog'
  }];
  return <motion.nav initial={{
    y: -100
  }} animate={{
    y: 0
  }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 forever-gradient rounded-full flex items-center justify-center">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold forever-text-gradient">Ahmad Raza</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => <Link key={item.name} to={item.path} className={`text-sm font-medium transition-colors hover:text-green-600 ${location.pathname === item.path ? 'text-green-600 border-b-2 border-green-600' : scrolled ? 'text-gray-700' : 'text-white'}`}>
                {item.name}
              </Link>)}
            {/* <Button className="forever-gradient text-white hover:opacity-90">
              Get Started
            </Button> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={`p-2 rounded-md ${scrolled ? 'text-gray-700' : 'text-white'}`}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && <motion.div initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} className="md:hidden bg-white rounded-lg shadow-lg mt-2 py-4">
            {navItems.map(item => <Link key={item.name} to={item.path} onClick={() => setIsOpen(false)} className={`block px-4 py-2 text-sm font-medium transition-colors hover:bg-green-50 hover:text-green-600 ${location.pathname === item.path ? 'text-green-600 bg-green-50' : 'text-gray-700'}`}>
                {item.name}
              </Link>)}
            <div className="px-4 pt-2">
              <Button className="w-full forever-gradient text-white">
                Get Started
              </Button>
            </div>
          </motion.div>}
      </div>
    </motion.nav>;
};
export default Navbar;