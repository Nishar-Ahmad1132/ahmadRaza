
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Leaf, Heart, Dumbbell, Sparkles, Shield, Star, Droplet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Products = () => {
  const { toast } = useToast();

  const handleLearnMore = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const categories = [
    {
      icon: Droplet,
      title: "Personal Care",
      description:
        "Natural personal care essentials to nourish and protect your body from head to toe",
      products: [
        "DREAM BY FOREVER",
        "DESIRE BY FOREVER",
        "FOREVER BHRINGRAJ HAIR FALL",
        "FOREVER BRIGHT TOOTHGEL",
        "ALOE AVOCADO FACE AND BODY SOAP",
      ],
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Leaf,
      title: "Aloe Vera Products",
      description:
        "Pure, natural aloe vera products for internal and external wellness",
      products: ["Aloe Vera Gel", "Aloe Berry Nectar", "Aloe Peaches"],
      color: "from-green-500 to-green-600",
    },
    {
      icon: Heart,
      title: "Nutrition & Supplements",
      description:
        "Complete nutritional support for optimal health and vitality",
      products: ["Forever Daily", "Argi+", "Forever Calcium"],
      color: "from-red-500 to-red-600",
    },
    {
      icon: Dumbbell,
      title: "Weight Management",
      description: "Comprehensive solutions for healthy weight management",
      products: ["Forever Lite Ultra", "Forever Therm", "Forever Lean"],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Sparkles,
      title: "Skincare & Beauty",
      description: "Natural skincare products for radiant, healthy skin",
      products: [
        "Sonya Daily Skincare",
        "Forever Alpha-E Factor",
        "Aloe Propolis Creme",
      ],
      color: "from-purple-500 to-purple-600",
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: '100% Natural',
      description: 'All products are made from the finest natural ingredients'
    },
    {
      icon: Star,
      title: 'Quality Assured',
      description: 'Rigorous testing ensures the highest quality standards'
    },
    {
      icon: Heart,
      title: 'Health Focused',
      description: 'Designed to support your overall health and wellness'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah M.',
      text: 'Forever Living products have transformed my health and energy levels completely!',
      rating: 5
    },
    {
      name: 'Ahmed K.',
      text: 'The aloe vera gel is amazing for my skin. I see results within days!',
      rating: 5
    },
    {
      name: 'Fatima R.',
      text: 'Best investment in my health. The nutrition supplements are top quality.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Forever Living Products - Natural Wellness Solutions | Ahmad</title>
        <meta name="description" content="Discover Forever Living's premium natural products including aloe vera, nutrition supplements, weight management, and skincare solutions." />
      </Helmet>

      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 forever-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Forever Living Products</h1>
              <p className="text-xl md:text-2xl text-yellow-300 max-w-3xl mx-auto mb-8">
                Discover the power of nature with our premium wellness products
              </p>
              <div className="section-divider bg-yellow-400"></div>
            </motion.div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold forever-text-gradient mb-6">About Forever Living</h2>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Forever Living Products is the world's largest grower, manufacturer, and distributor 
                    of aloe vera and bee products. For over 40 years, we've been dedicated to seeking 
                    out nature's best sources for health and beauty.
                  </p>
                  <p>
                    Our mission is to provide you with products that are as close to nature as possible, 
                    helping you look better, feel better, and live better naturally.
                  </p>
                </div>
                
                <div className="mt-8 space-y-4">
                  <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To be the premier company in the wellness industry, providing natural products 
                    that enhance people's lives while creating opportunities for financial independence.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img  alt="Forever Living aloe vera plantation" className="w-full h-96 object-cover" src="https://images.unsplash.com/photo-1596875837111-1e4c04ef63e8" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold forever-text-gradient mb-4">Product Categories</h2>
              <div className="section-divider"></div>
              <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
                Explore our comprehensive range of natural wellness products
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {categories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{category.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{category.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-gray-800">Popular Products:</h4>
                    <ul className="space-y-1">
                      {category.products.map((product, idx) => (
                        <li key={idx} className="text-gray-600 flex items-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          {product}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    onClick={handleLearnMore}
                    className="w-full forever-gradient text-white hover:opacity-90"
                  >
                    Learn More
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold forever-text-gradient mb-4">Why Choose Forever Living?</h2>
              <div className="section-divider"></div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="w-20 h-20 forever-gradient rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold forever-text-gradient mb-4">What Our Customers Say</h2>
              <div className="section-divider"></div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="testimonial-card rounded-2xl p-6"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-gray-800">- {testimonial.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 forever-gradient">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-white space-y-8"
            >
              <h2 className="text-4xl font-bold">Ready to Experience Natural Wellness?</h2>
              <p className="text-xl text-white/90 leading-relaxed">
                Join millions of satisfied customers worldwide who have discovered the power of Forever Living Products
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={handleLearnMore}
                  size="lg" 
                  className="bg-yellow-400 text-green-800 hover:bg-yellow-300 font-semibold px-8 py-3"
                >
                  Shop Products
                </Button>
                <Button 
                  onClick={handleLearnMore}
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white hover:text-green-800 px-8 py-3"
                >
                  Get Consultation
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Products;
