
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const TestimonialsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Forever Business Owner',
      image: 'Professional woman with confident smile in business attire',
      text: 'Working with Ahmad has been life-changing. His mentorship and support helped me build a successful Forever Living business that now provides for my family.',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Team Leader',
      image: 'Asian businessman in modern office setting',
      text: 'Ahmad\'s training programs are exceptional. I went from zero experience to team leader in just 6 months. His guidance is invaluable.',
      rating: 5
    },
    {
      id: 3,
      name: 'Fatima Al-Rashid',
      role: 'Supervisor',
      image: 'Middle Eastern woman in professional headscarf smiling warmly',
      text: 'The Forever Living products have transformed my health, and Ahmad\'s business model has transformed my life. I couldn\'t be more grateful.',
      rating: 5
    },
    {
      id: 4,
      name: 'David Rodriguez',
      role: 'Senior Manager',
      image: 'Hispanic man in casual business wear with friendly expression',
      text: 'Ahmad doesn\'t just teach you how to sell products; he teaches you how to build relationships and create lasting success. Truly inspiring!',
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold forever-text-gradient mb-4">What My Team Says</h2>
          <div className="section-divider"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
            Hear from successful team members who have transformed their lives with Forever Living
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="testimonial-card rounded-2xl p-8 md:p-12 text-center"
            >
              <Quote className="w-12 h-12 text-green-600 mx-auto mb-6" />
              
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-xl md:text-2xl text-gray-700 italic leading-relaxed mb-8">
                "{testimonials[currentIndex].text}"
              </blockquote>

              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <img  alt={testimonials[currentIndex].name} className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1644424235476-295f24d503d9" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-gray-800 text-lg">{testimonials[currentIndex].name}</p>
                  <p className="text-green-600 font-medium">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-green-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
