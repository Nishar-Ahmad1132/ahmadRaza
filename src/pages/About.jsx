
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Award, Users, TrendingUp, Heart, Target, Zap } from 'lucide-react';
import ahmadImage from "../assets/ahmadraza.jpg"; // Adjust the path as necessary

const About = () => {
  const achievements = [
    {
      icon: Award,
      title: 'Top Performer 2023',
      description: 'Recognized as the leading supervisor in the region'
    },
    {
      icon: Users,
      title: '500+ Team Members',
      description: 'Built and mentored a thriving network of entrepreneurs'
    },
    {
      icon: TrendingUp,
      title: '300% Growth',
      description: 'Achieved exceptional team growth over the past year'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Wellness First',
      description: 'Committed to promoting natural health and wellness solutions'
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Focused on helping others achieve their personal and financial goals'
    },
    {
      icon: Zap,
      title: 'Empowerment',
      description: 'Dedicated to empowering others through education and support'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Ahmad - Network Marketing Leader | Forever Living</title>
        <meta
          name="description"
          content="Learn about Ahmad's journey in network marketing, achievements, and passion for helping others succeed with Forever Living Products."
        />
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                About Ahmad
              </h1>
              <p className="text-xl md:text-2xl text-yellow-300 max-w-3xl mx-auto">
                Passionate leader dedicated to transforming lives through
                wellness and entrepreneurship
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold forever-text-gradient mb-6">
                  My Journey
                </h2>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    My journey in network marketing began with a simple belief:
                    everyone deserves access to natural, high-quality wellness
                    products and the opportunity to build a better future for
                    themselves.
                  </p>
                  <p>
                    Starting as a passionate advocate for Forever Living
                    Products, I quickly discovered that success in this industry
                    comes from genuine care for others and a commitment to their
                    growth. This philosophy has guided every step of my career.
                  </p>
                  <p>
                    Today, as a Network Marketing Supervisor, I'm proud to lead
                    a team of over 500 dedicated entrepreneurs who share the
                    same vision of wellness, prosperity, and personal
                    development.
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
                  <img
                    alt="Ahmad's professional journey"
                    className="w-full h-96 object-cover"
                    src={ahmadImage}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold forever-text-gradient mb-4">
                Key Achievements
              </h2>
              <div className="section-divider"></div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 forever-gradient rounded-full flex items-center justify-center mb-6">
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {achievement.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold forever-text-gradient mb-4">
                My Core Values
              </h2>
              <div className="section-divider"></div>
              <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
                These principles guide everything I do and shape how I mentor my
                team members
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="w-20 h-20 forever-gradient rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <value.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Personal Touch Section */}
        <section className="py-20 forever-gradient">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-white space-y-8"
            >
              <h2 className="text-4xl font-bold">Why I Do What I Do</h2>
              <blockquote className="text-xl italic leading-relaxed">
                "Every day, I wake up knowing that I have the opportunity to
                impact lives positively. Whether it's helping someone discover
                the benefits of natural wellness products or guiding them to
                build their own successful business, the reward is
                immeasurable."
              </blockquote>
              <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
              <p className="text-lg text-white/90">
                My mission is simple: to empower others to achieve their dreams
                while promoting wellness and prosperity in our community.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
