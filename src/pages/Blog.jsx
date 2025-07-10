
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Blog = () => {
  const { toast } = useToast();

  const handleReadMore = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const blogPosts = [
    {
      id: 1,
      title: '5 Natural Ways to Boost Your Energy with Aloe Vera',
      excerpt: 'Discover how Forever Living\'s aloe vera products can naturally enhance your energy levels and overall vitality.',
      category: 'Wellness',
      date: '2024-01-15',
      author: 'Ahmad',
      image: 'Fresh aloe vera leaves and energy-boosting smoothie ingredients',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Building Your Network Marketing Success: My Top 10 Tips',
      excerpt: 'Learn the essential strategies that helped me build a thriving Forever Living team and achieve supervisor status.',
      category: 'Entrepreneurship',
      date: '2024-01-10',
      author: 'Ahmad',
      image: 'Professional networking event with successful entrepreneurs',
      readTime: '8 min read'
    },
    {
      id: 3,
      title: 'The Science Behind Forever Living\'s Quality Standards',
      excerpt: 'Explore how Forever Living maintains the highest quality standards in their aloe vera and wellness products.',
      category: 'Forever Living',
      date: '2024-01-05',
      author: 'Ahmad',
      image: 'Modern laboratory with scientists testing aloe vera products',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Success Story: From Part-Time to Full-Time Freedom',
      excerpt: 'Read about Sarah\'s incredible journey from working part-time to achieving financial freedom with Forever Living.',
      category: 'Success Stories',
      date: '2023-12-28',
      author: 'Ahmad',
      image: 'Happy woman celebrating business success at home office',
      readTime: '7 min read'
    },
    {
      id: 5,
      title: 'Natural Skincare Routine with Forever Living Products',
      excerpt: 'Create a complete natural skincare routine using Forever Living\'s premium aloe-based beauty products.',
      category: 'Wellness',
      date: '2023-12-20',
      author: 'Ahmad',
      image: 'Elegant skincare products arranged with fresh aloe vera',
      readTime: '4 min read'
    },
    {
      id: 6,
      title: 'Team Building Strategies That Actually Work',
      excerpt: 'Proven methods for building and maintaining a strong, motivated network marketing team.',
      category: 'Entrepreneurship',
      date: '2023-12-15',
      author: 'Ahmad',
      image: 'Team meeting with diverse group of motivated professionals',
      readTime: '9 min read'
    }
  ];

  const categories = ['All', 'Wellness', 'Entrepreneurship', 'Forever Living', 'Success Stories'];

  return (
    <>
      <Helmet>
        <title>Blog - Wellness & Business Insights | Ahmad Forever Living</title>
        <meta name="description" content="Read Ahmad's latest articles on wellness, entrepreneurship, Forever Living updates, and success stories from the network marketing world." />
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Blog</h1>
              <p className="text-xl md:text-2xl text-yellow-300 max-w-3xl mx-auto">
                Insights on wellness, entrepreneurship, and Forever Living success
              </p>
            </motion.div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={handleReadMore}
                  className={`px-6 py-2 rounded-full font-medium transition-colors ${
                    index === 0 
                      ? 'bg-green-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-full">
                  <img  alt="Featured blog post" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1504983875-d3b163aba9e6" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(blogPosts[0].date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {blogPosts[0].author}
                    </span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                      {blogPosts[0].category}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">{blogPosts[0].title}</h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{blogPosts[0].readTime}</span>
                    <Button 
                      onClick={handleReadMore}
                      className="forever-gradient text-white hover:opacity-90"
                    >
                      Read More <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold forever-text-gradient mb-4">Latest Articles</h2>
              <div className="section-divider"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img  alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 text-gray-800 px-2 py-1 rounded text-xs font-medium flex items-center">
                        <Tag className="w-3 h-3 mr-1" />
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-4">{post.excerpt}</p>
                    
                    <Button 
                      onClick={handleReadMore}
                      variant="outline" 
                      className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                    >
                      Read More <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 forever-gradient">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-white space-y-8"
            >
              <h2 className="text-4xl font-bold">Never Miss an Update</h2>
              <p className="text-xl text-white/90 leading-relaxed">
                Subscribe to get the latest wellness tips, business insights, and Forever Living updates 
                delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <Button 
                  onClick={handleReadMore}
                  className="bg-yellow-400 text-green-800 hover:bg-yellow-300 font-semibold px-6 py-3"
                >
                  Subscribe
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;
