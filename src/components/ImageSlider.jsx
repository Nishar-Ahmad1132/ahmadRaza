import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';  




const images = [
  {
    src: img1,
    alt: 'Forever Living aloe vera products collection',
    title: 'Premium Wellness Products',
    description: 'Discover the power of nature with our aloe vera-based products.'
  },
  {
    src: img2,
    alt: 'Ahmad\'s successful network marketing team at an event',
    title: 'Thriving Team Community',
    description: 'Join a supportive community of entrepreneurs growing together.'
  },
  {
    src: img3,
    alt: 'Wellness event with people doing yoga outdoors',
    title: 'Embrace a Healthy Lifestyle',
    description: 'We believe in holistic well-being and personal growth.'
  },
  {
    src: img4,
    alt: 'Person achieving success and financial freedom',
    title: 'Achieve Your Dreams',
    description: 'Unlock your potential for financial freedom and success.'
  },
  {
    src: img5,
    alt: 'Forever Living skincare product in use',
    title: 'Radiant Skincare Solutions',
    description: 'Nourish your skin with our advanced formulas.'
  }
];

const ImageSlider = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000); // Autoplay every 5 seconds
    return () => clearInterval(slideInterval);
  }, []);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const [direction, setDirection] = useState(0);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    if (newDirection > 0) {
      nextSlide();
    } else {
      prevSlide();
    }
  };

  return (
    <section className="relative z-40 mt-16 w-full h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] overflow-hidden bg-gray-900">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={index}
          className="absolute w-full h-full"
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.3 },
          }}
        >
          <div className="relative w-full h-full">
            {/* Blurred Background Image */}
            <img
              src={images[index].src}
              alt=""
              className="absolute inset-0 w-full h-full object-cover blur-md scale-110"
            />

            {/* Main Image (centered and contained) */}
            <div className="relative z-[5] flex justify-center items-center w-full h-full bg-black/30">
              <img
                src={images[index].src}
                alt={images[index].alt}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
          <div className="absolute inset-0 z-10 bg-black/50 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-center text-white p-4"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-yellow-400">
                {images[index].title}
              </h2>
              <p className="text-lg md:text-xl max-w-2xl">
                {images[index].description}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={() => paginate(-1)}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 bg-white/20 text-white p-2 rounded-full hover:bg-white/40 transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={() => paginate(1)}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 bg-white/20 text-white p-2 rounded-full hover:bg-white/40 transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === i ? "bg-yellow-400 w-6" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default ImageSlider;