
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { DollarSign, Users, TrendingUp, Award, Clock, BookOpen, Heart, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const JoinTeam = () => {
  const { toast } = useToast();

  const handleJoinTeam = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const benefits = [
    {
      icon: DollarSign,
      title: 'Passive Income Potential',
      description: 'Build a sustainable income stream that works for you 24/7'
    },
    {
      icon: Users,
      title: 'Strong Support Network',
      description: 'Join a community of like-minded entrepreneurs who support each other'
    },
    {
      icon: TrendingUp,
      title: 'Personal Development',
      description: 'Continuous growth opportunities and skill development programs'
    },
    {
      icon: Award,
      title: 'Recognition & Rewards',
      description: 'Achievement-based rewards and recognition for your success'
    },
    {
      icon: Clock,
      title: 'Flexible Schedule',
      description: 'Work on your own terms and create your ideal work-life balance'
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Training',
      description: 'Complete training programs to ensure your success'
    }
  ];

  const mentorshipFeatures = [
    {
      icon: Heart,
      title: 'Personal Mentorship',
      description: 'One-on-one guidance tailored to your goals and challenges'
    },
    {
      icon: Target,
      title: 'Goal Setting & Tracking',
      description: 'Strategic planning to help you achieve your business objectives'
    },
    {
      icon: Users,
      title: 'Team Building Support',
      description: 'Learn proven strategies for building and managing your team'
    }
  ];

  const successStories = [
    {
      name: 'Layla Hassan',
      achievement: 'Supervisor Level in 8 months',
      story: 'Started part-time and now leads a team of 50+ members',
      image: 'Professional woman in business attire smiling confidently'
    },
    {
      name: 'Omar Khalil',
      achievement: 'Full-time income in 6 months',
      story: 'Replaced his corporate salary and gained financial freedom',
      image: 'Young professional man in casual business wear'
    },
    {
      name: 'Nadia Ahmed',
      achievement: 'Top Performer Award 2023',
      story: 'Built a thriving business while raising three children',
      image: 'Mother and entrepreneur working from home office'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Join Ahmad's Team - Forever Living Business Opportunity</title>
        <meta name="description" content="Start your Forever Living business journey with Ahmad's mentorship. Discover the benefits of network marketing and build your path to financial freedom." />
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Join My Team</h1>
              <p className="text-xl md:text-2xl text-yellow-300 max-w-3xl mx-auto mb-8">
                Start your journey to financial freedom with Forever Living Products
              </p>
              <Button 
                onClick={handleJoinTeam}
                size="lg" 
                className="bg-yellow-400 text-green-800 hover:bg-yellow-300 font-semibold px-8 py-4 text-lg"
              >
                Become a Forever Business Owner
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Why Join Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold forever-text-gradient mb-4">Why Join Forever Living?</h2>
              <div className="section-divider"></div>
              <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
                Discover the incredible benefits of building your own Forever Living business
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow group"
                >
                  <div className="w-14 h-14 forever-gradient rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mentorship Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold forever-text-gradient mb-6">Working with Me</h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  When you join my team, you're not just getting a business opportunity—you're gaining 
                  a dedicated mentor committed to your success. I provide comprehensive support to help 
                  you build a thriving Forever Living business.
                </p>

                <div className="space-y-6">
                  {mentorshipFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2, duration: 0.6 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-4"
                    >
                      <div className="w-12 h-12 forever-gradient rounded-full flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
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
                  <img  alt="Ahmad mentoring team members" className="w-full h-96 object-cover" src="https://images.unsplash.com/photo-1592382258436-7751788238e8" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold forever-text-gradient mb-4">Success Stories</h2>
              <div className="section-divider"></div>
              <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
                Meet some of our successful team members who have transformed their lives
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4">
                    <img  alt={story.name} className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1626447857058-2ba6a8868cb5" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 text-center mb-2">{story.name}</h3>
                  <p className="text-green-600 font-semibold text-center mb-4">{story.achievement}</p>
                  <p className="text-gray-600 text-center leading-relaxed">{story.story}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold forever-text-gradient mb-4">How to Get Started</h2>
              <div className="section-divider"></div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: '1',
                  title: 'Contact Me',
                  description: 'Reach out to discuss your goals and learn about the opportunity'
                },
                {
                  step: '2',
                  title: 'Join the Team',
                  description: 'Complete the simple registration process to become a Forever Business Owner'
                },
                {
                  step: '3',
                  title: 'Start Building',
                  description: 'Begin your journey with comprehensive training and ongoing support'
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 forever-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
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
              <h2 className="text-4xl font-bold">Ready to Change Your Life?</h2>
              <p className="text-xl text-white/90 leading-relaxed">
                Take the first step towards financial freedom and personal growth. 
                Join my team today and start building your Forever Living business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={handleJoinTeam}
                  size="lg" 
                  className="bg-yellow-400 text-green-800 hover:bg-yellow-300 font-semibold px-8 py-3"
                >
                  Join My Team Now
                </Button>
                <Button 
                  onClick={handleJoinTeam}
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white hover:text-green-800 px-8 py-3"
                >
                  Schedule Consultation
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default JoinTeam;
