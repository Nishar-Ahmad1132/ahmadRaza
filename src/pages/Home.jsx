import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Award, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import TestimonialsSlider from '@/components/TestimonialsSlider.jsx';
const Home = () => {
  const {
    toast
  } = useToast();
  const handleContactClick = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };
  const stats = [{
    icon: Users,
    number: '500+',
    label: 'Team Members'
  }, {
    icon: Award,
    number: '15+',
    label: 'Awards Won'
  }, {
    icon: TrendingUp,
    number: '95%',
    label: 'Success Rate'
  }, {
    icon: Star,
    number: '4.9',
    label: 'Rating'
  }];
  return <>
      <Helmet>
        <title>Ahmad - Network Marketing Supervisor | Forever Living Products</title>
        <meta name="description" content="Join Ahmad's Forever Living team and discover the power of natural wellness products. Expert guidance in network marketing and business development." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center hero-pattern overflow-hidden">
        <div className="absolute inset-0 forever-gradient opacity-90"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="space-y-8">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-yellow-400 shadow-2xl">
              <img alt="Ahmad - Network Marketing Supervisor" className="w-full h-full object-cover" src="https://storage.googleapis.com/hostinger-horizons-assets-prod/7ca2e517-8274-4178-8f0a-918dfce1b688/1ecb10d73d220c8407606827ef1638f1.jpg" />
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">Ahmad Raza</h1>
              <p className="text-xl md:text-2xl text-yellow-300 font-medium">
                Network Marketing Supervisor – Forever Living Products
              </p>
            </div>

            <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.5,
            duration: 0.8
          }} className="max-w-3xl mx-auto">
              <blockquote className="text-lg md:text-xl text-white/90 italic leading-relaxed">
                "Success in network marketing isn't just about selling products—it's about building relationships, 
                empowering others, and creating a legacy of wellness and prosperity."
              </blockquote>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.8,
            duration: 0.6
          }} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button onClick={handleContactClick} size="lg" className="bg-yellow-400 text-green-800 hover:bg-yellow-300 font-semibold px-8 py-3 text-lg">
                Contact Me <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Link to="/join-team">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-green-800 px-8 py-3 text-lg">
                  Join My Team
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => <motion.div key={index} initial={{
            opacity: 0,
            scale: 0.5
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} transition={{
            delay: index * 0.1,
            duration: 0.6
          }} viewport={{
            once: true
          }} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 forever-gradient rounded-full flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold forever-text-gradient mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>)}
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{
            opacity: 0,
            x: -50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8
          }} viewport={{
            once: true
          }}>
              <h2 className="text-4xl font-bold forever-text-gradient mb-6">
                Passionate About Wellness & Growth
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                With years of experience in network marketing and a deep passion for health and wellness, 
                I've dedicated my career to helping others achieve their dreams through Forever Living Products.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                My journey has been filled with incredible milestones, team achievements, and most importantly, 
                the satisfaction of seeing others succeed and transform their lives.
              </p>
              <Link to="/about">
                <Button className="forever-gradient text-white hover:opacity-90">
                  Learn More About Me <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            x: 50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8
          }} viewport={{
            once: true
          }} className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img alt="Ahmad working with team members" className="w-full h-96 object-cover" src="https://images.unsplash.com/photo-1651009188116-bb5f80eaf6aa" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 forever-gradient rounded-full flex items-center justify-center shadow-xl">
                <Award className="w-12 h-12 text-white" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSlider />

      {/* CTA Section */}
      <section className="py-20 forever-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ready to Transform Your Life?
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Join thousands of successful entrepreneurs who have built thriving businesses 
              with Forever Living Products. Your journey to financial freedom starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/join-team">
                <Button size="lg" className="bg-yellow-400 text-green-800 hover:bg-yellow-300 font-semibold px-8 py-3">
                  Join My Team Today
                </Button>
              </Link>
              <Link to="/products">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-green-800 px-8 py-3">
                  Explore Products
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>;
};
export default Home;