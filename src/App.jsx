
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Products from '@/pages/Products';
import JoinTeam from '@/pages/JoinTeam';
import Contact from '@/pages/Contact';
import Blog from '@/pages/Blog';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Helmet>
          <title>Ahmad - Network Marketing Supervisor | Forever Living Products</title>
          <meta name="description" content="Join Ahmad's Forever Living team and discover the power of natural wellness products. Expert guidance in network marketing and business development." />
        </Helmet>
        
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/join-team" element={<JoinTeam />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        
        <Footer />
        <WhatsAppFloat />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
