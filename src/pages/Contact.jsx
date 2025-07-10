import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  Clock,
  Loader2,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
} from "lucide-react";
import { useRef, useState } from "react";
import { Helmet } from "react-helmet";

const Contact = () => {
  const { toast } = useToast();
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // ✅ Replace these with your actual EmailJS credentials
    const serviceID = "service_wnpczde";
    const templateID = "template_6jf6yy3";
    const publicKey = "iNSDf5l8e7FYOKTC5";

    // ✅ Optional safety check for default placeholder values
    if (
      serviceID === "your_service_id" ||
      templateID === "your_template_id" ||
      publicKey === "your_public_key"
    ) {
      toast({
        title: "Email Service Not Configured",
        description: "Please configure EmailJS credentials to send messages.",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    // ✅ Send email via EmailJS
    emailjs
      .sendForm(serviceID, templateID, form.current, publicKey)
      .then(
        (result) => {
          toast({
            title: "✅ Message Sent Successfully!",
            description:
              "Thank you for reaching out. I will get back to you shortly.",
          });
          // ✅ Reset form fields
          setFormData({ name: "", email: "", phone: "", message: "" });
          form.current.reset(); // optional: resets actual DOM form too
        },
        (error) => {
          toast({
            title: "❌ Something went wrong.",
            description:
              "There was a problem sending your message. Please try again later.",
            variant: "destructive",
          });
          console.error("EmailJS error:", error);
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };
  

  const handleSocialClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+91 8779282185",
      description: "Call me for immediate assistance",
    },
    {
      icon: Mail,
      title: "Email",
      details: "nizamisher40@gmail.com",
      description: "Send me an email anytime",
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      details: "+91 8779282185",
      description: "Quick chat on WhatsApp",
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Mumbai, M.H., India",
      description: "Available for local meetings",
    },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/ahmad.raza742?igsh=ZzFkYWx6Y3RiOGVs",
      color: "from-pink-500 to-purple-600",
    },
    {
      name: "Facebook",
      url: "https://facebook.com/your_username",
      color: "from-blue-600 to-blue-700",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/your_username",
      color: "from-blue-700 to-blue-800",
    },
  ];
  

  return (
    <>
      <Helmet>
        <title>
          Contact Ahmad - Forever Living Network Marketing Supervisor
        </title>
        <meta
          name="description"
          content="Get in touch with Ahmad for Forever Living business opportunities, product information, or team mentorship. Multiple ways to connect."
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
                Contact Me
              </h1>
              <p className="text-xl md:text-2xl text-yellow-300 max-w-3xl mx-auto">
                Ready to start your Forever Living journey? Let's connect!
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold forever-text-gradient mb-6">
                  Send Me a Message
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Fill out the form below and I'll get back to you within 24
                  hours. I'm here to answer any questions about Forever Living
                  products or business opportunities.
                </p>

                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                      placeholder="+91 8779282185"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Tell me about your interest in Forever Living products or business opportunity..."
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    className="w-full forever-gradient text-white hover:opacity-90 py-3 text-lg font-semibold"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    ) : (
                      <Send className="mr-2 h-5 w-5" />
                    )}
                    {isLoading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold forever-text-gradient mb-6">
                    Get in Touch
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    I'm always excited to connect with people who are passionate
                    about wellness and building their own successful business.
                    Choose the method that works best for you!
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
                    >
                      <div className="w-12 h-12 forever-gradient rounded-full flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-1">
                          {info.title}
                        </h3>
                        <p className="text-green-600 font-semibold mb-1">
                          {info.details}
                        </p>
                        <p className="text-gray-600 text-sm">
                          {info.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Business Hours */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-green-50 rounded-lg p-6"
                >
                  <div className="flex items-center mb-4">
                    <Clock className="w-6 h-6 text-green-600 mr-3" />
                    <h3 className="text-lg font-bold text-gray-800">
                      Business Hours
                    </h3>
                  </div>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span className="font-semibold">9:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span className="font-semibold">10:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span className="font-semibold">12:00 PM - 5:00 PM</span>
                    </div>
                  </div>
                </motion.div>

                {/* Social Media */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-bold text-gray-800 mb-4">
                    Follow Me on Social Media
                  </h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <button
                        key={index}
                        onClick={() => handleSocialClick(social.url)}
                        className={`px-6 py-3 bg-gradient-to-r ${social.color} text-white rounded-lg font-semibold hover:opacity-90 transition-opacity`}
                      >
                        {social.name}
                      </button>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
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
              <h2 className="text-4xl font-bold">Stay Updated</h2>
              <p className="text-xl text-white/90 leading-relaxed">
                Subscribe to my newsletter for the latest Forever Living
                updates, wellness tips, and business insights.
              </p>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                />
                <Button
                  type="submit"
                  className="bg-yellow-400 text-green-800 hover:bg-yellow-300 font-semibold px-6 py-3"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    "Subscribe"
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
