
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Award, Users, TrendingUp, Heart, Target, Zap, GraduationCap, Briefcase, MapPin, CalendarDays } from 'lucide-react';
import ahmadImage from "../assets/ahmadraza.jpg"; // Adjust the path as necessary
// import img7 from "../assets/img7.jpg"; // Ensure this image is available in your assets

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

  const education = [
    {
      degree: 'M.Tech in Computer Science and Engineering',
      institution: 'Indian Institute of Technology (IIT) Kharagpur',
      location: 'Kharagpur, India',
      period: 'Jul 2022 – May 2024'
    },
    {
      degree: 'B.Tech in Computer Science and Engineering',
      institution: 'Motilal Nehru National Institute of Technology (MNNIT) Allahabad',
      location: 'Prayagraj, India',
      period: 'Jul 2018 – May 2022'
    }
  ];

  const experience = [
    {
      role: 'Research Intern — Optimization & Algorithms Lab',
      organization: 'Indian Institute of Technology (IIT) Kharagpur',
      location: 'IIT Kharagpur',
      period: 'Aug 2023 – Apr 2024',
      advisor: 'Advisor: Dr. Neeraj Tyagi',
      highlights: [
        'Investigated combinatorial optimization techniques and developed a new greedy metaheuristic.',
        'Submitted a paper to the 2024 International Conference on Algorithms and Discrete Mathematics.'
      ]
    },
    {
      role: 'Mathematics Content Intern — Outlier-style EdTech',
      organization: 'Independent work',
      location: 'Remote',
      period: 'Jun 2023 – Jul 2023',
      highlights: [
        'Created learning content for Calculus I/II, Linear Algebra, and Probability.',
        'Built interactive LaTeX-based assessments and proof-based student-learning material.'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Ahmad Raza | Computer Science Engineer</title>
        <meta
          name="description"
          content="Learn about Ahmad Raza's education, research experience, and technical background in computer science and engineering."
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
                Computer science engineer with a foundation in algorithms,
                optimization, and mathematical problem-solving
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
                  I am a computer science engineer with an M.Tech from IIT
                  Kharagpur and a B.Tech from MNNIT Allahabad. My interests
                  sit at the intersection of algorithms, optimization, and
                  rigorous mathematical problem-solving.
                  </p>
                  <p>
                  Through research and academic projects, I have explored
                  combinatorial optimization, greedy metaheuristics, and the
                  practical communication of complex mathematical concepts.
                  </p>
                  <p>
                  I enjoy building reliable technical solutions, learning from
                  challenging problems, and contributing thoughtfully to work
                  that combines theory with real-world impact.
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

        {/* Education Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <div className="w-14 h-14 mx-auto mb-5 forever-gradient rounded-2xl flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-4xl font-bold forever-text-gradient mb-4">Education</h2>
              <div className="section-divider"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-7 max-w-5xl mx-auto">
              {education.map((item, index) => (
                <motion.article
                  key={item.degree}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.12, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-7 shadow-lg border border-gray-100"
                >
                  <h3 className="text-xl font-bold text-gray-900 leading-snug">{item.degree}</h3>
                  <p className="text-green-700 font-semibold mt-3">{item.institution}</p>
                  <div className="mt-5 space-y-2 text-sm text-gray-600">
                    <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-green-700" />{item.location}</p>
                    <p className="flex items-center gap-2"><CalendarDays className="w-4 h-4 text-green-700" />{item.period}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <div className="w-14 h-14 mx-auto mb-5 forever-gradient rounded-2xl flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl font-bold forever-text-gradient mb-4">Research & Academic Experience</h2>
              <div className="section-divider"></div>
            </motion.div>

            <div className="relative border-l-2 border-green-200 ml-3 md:ml-5 space-y-10">
              {experience.map((item, index) => (
                <motion.article
                  key={item.role}
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.12, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative pl-8 md:pl-10"
                >
                  <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-green-700 ring-4 ring-green-100"></span>
                  <div className="rounded-2xl bg-gray-50 border border-gray-100 p-7 shadow-sm">
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-3 mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{item.role}</h3>
                        <p className="text-green-700 font-semibold mt-1">{item.organization}</p>
                      </div>
                      <div className="text-sm text-gray-600 sm:text-right shrink-0">
                        <p>{item.period}</p>
                        <p>{item.location}</p>
                      </div>
                    </div>
                    {item.advisor && <p className="text-sm italic text-gray-600 mb-4">{item.advisor}</p>}
                    <ul className="space-y-2 text-gray-700 leading-relaxed">
                      {item.highlights.map((highlight) => <li key={highlight} className="flex gap-3"><span className="text-green-700 font-bold">•</span><span>{highlight}</span></li>)}
                    </ul>
                  </div>
                </motion.article>
              ))}
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
