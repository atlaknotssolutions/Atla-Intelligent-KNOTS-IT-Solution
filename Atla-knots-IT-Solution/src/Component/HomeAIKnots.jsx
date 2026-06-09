import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  ArrowRight,
  Users,
  Award,
  ChevronDown,
  Star,
  Zap,
  TrendingUp,
  Clock,
  Settings,
  BarChart3,
  Shield,
  Layers,
  MessageCircle,
} from "lucide-react";

const HomeAIKnots = () => {
  const [activeFeatureTab, setActiveFeatureTab] = useState("all");

  // Client logos placeholder
  const clientLogos = [
    "https://via.placeholder.com/120?text=Client+1",
    "https://via.placeholder.com/120?text=Client+2",
    "https://via.placeholder.com/120?text=Client+3",
    "https://via.placeholder.com/120?text=Client+4",
  ];

  const industries = [
    "E-Commerce",
    "FinTech",
    "Healthcare",
    "Manufacturing",
    "Logistics",
    "Retail",
    "SaaS",
    "Education",
    "Real Estate",
    "Media",
    "Insurance",
    "Tourism",
  ];

  const benefits = [
    {
      title: "Expert Development Team",
      description:
        "Our skilled developers deliver high-quality custom applications using latest technologies.",
      icon: <Zap className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Cost Efficiency",
      description:
        "Reduce development costs and time-to-market with our agile development methodology.",
      icon: <Clock className="w-6 h-6" />,
      color: "from-emerald-500 to-teal-500",
    },
    {
      title: "Scalable Solutions",
      description:
        "Build applications that grow with your business without compromising performance.",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-purple-500 to-indigo-500",
    },
    {
      title: "Enterprise Security",
      description:
        "Robust security protects your data against cyber threats with industry compliance.",
      icon: <Shield className="w-6 h-6" />,
      color: "from-red-500 to-rose-500",
    },
    {
      title: "Enhanced Performance",
      description:
        "Optimize your digital infrastructure for superior speed and reliability.",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-orange-500 to-amber-500",
    },
    {
      title: "Seamless Integration",
      description:
        "Connect existing systems with new technologies smoothly with minimal disruption.",
      icon: <Settings className="w-6 h-6" />,
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "24/7 Support",
      description:
        "Dedicated support team ensures your systems run smoothly at all times.",
      icon: <MessageCircle className="w-6 h-6" />,
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Data Analytics",
      description:
        "Leverage AI and analytics to extract actionable insights from your data.",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Cloud Solutions",
      description:
        "Migrate to cloud infrastructure for flexibility, scalability, and cost savings.",
      icon: <Layers className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-500",
    },
  ];

  const allServices = [
    {
      title: "Custom Web Development",
      desc: "Tailor-made web applications built with modern technologies.",
      category: "development",
      icon: "💻",
    },
    {
      title: "Mobile App Development",
      desc: "Native and cross-platform mobile applications for iOS and Android.",
      category: "development",
      icon: "📱",
    },
    {
      title: "Cloud Infrastructure",
      desc: "AWS, Azure, and GCP infrastructure setup and management.",
      category: "development",
      icon: "☁️",
    },
    {
      title: "DevOps Services",
      desc: "CI/CD pipelines, containerization, and infrastructure automation.",
      category: "development",
      icon: "⚙️",
    },
    {
      title: "AI & Machine Learning",
      desc: "Custom ML models, NLP, computer vision, and predictive analytics.",
      category: "ai",
      icon: "🤖",
    },
    {
      title: "Chatbot Development",
      desc: "Intelligent chatbots powered by AI for customer engagement.",
      category: "ai",
      icon: "💬",
    },
    {
      title: "Automation Solutions",
      desc: "Process automation and workflow optimization using RPA.",
      category: "ai",
      icon: "🔄",
    },
    {
      title: "Data Analytics",
      desc: "Business intelligence, data visualization, and actionable insights.",
      category: "ai",
      icon: "📊",
    },
    {
      title: "Cybersecurity",
      desc: "Security audits, penetration testing, and compliance management.",
      category: "development",
      icon: "🔒",
    },
    {
      title: "Database Design",
      desc: "Scalable database architecture and optimization.",
      category: "development",
      icon: "🗄️",
    },
    {
      title: "API Development",
      desc: "RESTful and GraphQL APIs for seamless integrations.",
      category: "development",
      icon: "🔗",
    },
    {
      title: "System Integration",
      desc: "Connect multiple systems for unified operations.",
      category: "ai",
      icon: "🔀",
    },
  ];

  const testimonials = [
    {
      rating: 5,
      content:
        "AI Knots transformed our entire digital infrastructure. Their team delivered a world-class solution ahead of schedule.",
      author: "Rahul Sharma",
      title: "CEO - Tech Innovations Ltd",
    },
    {
      rating: 5,
      content:
        "Professional team with deep technical expertise. They understood our business needs and delivered exceptional results.",
      author: "Priya Patel",
      title: "Founder - Digital Commerce",
    },
    {
      rating: 5,
      content:
        "Outstanding support and continuous improvement. AI Knots is our trusted technology partner.",
      author: "Amit Verma",
      title: "CTO - Enterprise Solutions",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      desc: "We understand your business goals and technical requirements.",
    },
    {
      step: "02",
      title: "Design & Architecture",
      desc: "Crafting scalable solutions tailored to your needs.",
    },
    {
      step: "03",
      title: "Development & Testing",
      desc: "Agile development with rigorous quality assurance.",
    },
    {
      step: "04",
      title: "Deployment",
      desc: "Seamless launch with zero downtime deployment strategies.",
    },
    {
      step: "05",
      title: "Support & Optimization",
      desc: "Ongoing support and continuous optimization for peak performance.",
    },
  ];

  const faqs = [
    {
      q: "What technologies do you specialize in?",
      a: "We specialize in modern tech stack including React, Node.js, Python, cloud platforms (AWS, Azure, GCP), and AI/ML technologies.",
    },
    {
      q: "Do you provide ongoing support after deployment?",
      a: "Yes, we offer comprehensive support packages including maintenance, monitoring, and continuous optimization.",
    },
    {
      q: "How do you ensure project quality?",
      a: "We follow agile methodology with rigorous testing, code reviews, and continuous integration for high-quality deliverables.",
    },
    {
      q: "Can you integrate with existing systems?",
      a: "Absolutely, we specialize in seamless integration of new solutions with legacy systems and third-party applications.",
    },
    {
      q: "What is your development process?",
      a: "We follow an agile approach with regular sprint planning, daily standups, and transparent communication with clients.",
    },
  ];

  const getFilteredServices = () => {
    if (activeFeatureTab === "all") return allServices;
    return allServices.filter((s) => s.category === activeFeatureTab);
  };

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center px-6 pt-24 pb-16 bg-gradient-to-br from-[#673DE6] via-[#7C3AED] to-[#8B5CF6] overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
              Transform Your Ideas Into
              <br />
              <span className="text-yellow-300">Intelligent Solutions!</span>
            </h1>

            <ul className="space-y-4 text-xl md:text-2xl text-white">
              {[
                "Custom Web & Mobile Apps",
                "AI-Powered Solutions",
                "Cloud Infrastructure & DevOps",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-[#673DE6]" />
                  </div>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#673DE6] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition flex items-center gap-2 shadow-lg"
              >
                Let's Talk
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition"
              >
                Request a Quote
              </motion.button>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-3 text-lg font-medium text-white"
            >
              <span className="text-green-400 text-2xl">✔</span> Get Free
              Consultation Today
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <div className="rounded-2xl shadow-2xl w-full max-w-[520px] bg-white/10 backdrop-blur p-12 flex items-center justify-center h-96">
                <div className="text-center">
                  <div className="text-7xl mb-4">💡</div>
                  <p className="text-white text-2xl font-bold">
                    Innovative Technology Solutions
                  </p>
                  <p className="text-white/70 mt-2">
                    Building the digital future
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRUSTED BY SECTION */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-10"
          >
            Trusted By Leading Companies Across India
          </motion.h2>

          <div className="overflow-hidden py-6">
            <div className="flex animate-marquee gap-12 whitespace-nowrap">
              {[...clientLogos, ...clientLogos].map((logo, i) => (
                <div
                  key={i}
                  className="h-16 w-32 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-sm"
                >
                  Client Logo
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About AI Knots
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                AI Knots is a leading technology solutions provider dedicated to
                helping businesses harness the power of cutting-edge technology.
                With expertise in web development, mobile apps, cloud solutions,
                and AI/ML, we transform ideas into intelligent, scalable
                solutions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team of seasoned professionals works closely with clients to
                understand their unique challenges and deliver customized
                solutions that drive real business value and sustainable growth.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { num: "50+", label: "Successful Projects" },
                { num: "25+", label: "Expert Team Members" },
                { num: "15+", label: "Years Combined Experience" },
                { num: "8+", label: "Core Technologies" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition"
                >
                  <div className="text-4xl font-bold text-[#673DE6] mb-2">
                    {stat.num}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900"
          >
            Our{" "}
            <span className="bg-gradient-to-r from-[#673DE6] to-[#8B5CF6] bg-clip-text text-transparent">
              Services
            </span>
          </motion.h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Comprehensive technology solutions designed to drive your business
            forward
          </p>

          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-white rounded-3xl p-1 shadow-sm border border-gray-200">
              {["all", "development", "ai"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveFeatureTab(tab)}
                  className={`px-10 py-3.5 rounded-3xl font-semibold transition-all text-lg ${
                    activeFeatureTab === tab
                      ? "bg-gradient-to-r from-[#673DE6] to-[#8B5CF6] text-white shadow"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  {tab === "all"
                    ? "All Services"
                    : tab === "development"
                      ? "Development"
                      : "AI & Automation"}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            key={activeFeatureTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {getFilteredServices().map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white border border-gray-100 hover:border-indigo-200 hover:shadow-xl transition-all duration-300 rounded-3xl p-8 group cursor-pointer"
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-indigo-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* INDUSTRIES SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900"
          >
            Industries{" "}
            <span className="bg-gradient-to-r from-[#673DE6] to-[#8B5CF6] bg-clip-text text-transparent">
              We Serve
            </span>
          </motion.h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Delivering tailored solutions across diverse industries
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {industries.map((industry, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.02 }}
                whileHover={{ scale: 1.05, y: -3 }}
                className="rounded-xl bg-white p-4 text-center shadow-sm hover:shadow-md transition-all cursor-pointer border border-gray-100"
              >
                <div className="text-lg font-semibold text-gray-800">
                  {industry}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900"
          >
            Why Choose{" "}
            <span className="bg-gradient-to-r from-[#673DE6] to-[#8B5CF6] bg-clip-text text-transparent">
              AI Knots
            </span>
          </motion.h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -5 }}
                className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:border-indigo-200 cursor-pointer"
              >
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r ${benefit.color} text-white shadow-md group-hover:scale-110 transition-transform`}
                >
                  {benefit.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  {benefit.title}
                </h3>
                <p className="leading-relaxed text-gray-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900"
          >
            Our Process
          </motion.h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            A systematic approach ensuring successful delivery and maximum ROI
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative rounded-2xl bg-white p-8 shadow-md hover:shadow-xl transition-all cursor-pointer group"
              >
                <div className="text-6xl font-bold text-indigo-100 absolute top-4 right-4 group-hover:text-indigo-200 transition-colors">
                  {step.step}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed relative z-10">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900"
          >
            What Our{" "}
            <span className="bg-gradient-to-r from-[#673DE6] to-[#8B5CF6] bg-clip-text text-transparent">
              Clients Say
            </span>
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="flex flex-col rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm transition-all hover:shadow-lg cursor-pointer"
              >
                <div className="mb-4 flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="mb-4 flex-1 text-gray-700 leading-relaxed">
                  {testimonial.content}
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="font-semibold text-gray-900">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-indigo-600">{testimonial.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900"
          >
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-[#673DE6] to-[#8B5CF6] bg-clip-text text-transparent">
              Questions
            </span>
          </motion.h2>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <details className="bg-white rounded-xl p-6 cursor-pointer hover:bg-gray-50 transition-colors border border-gray-100">
                  <summary className="font-semibold text-gray-900 text-lg list-none flex justify-between items-center">
                    {faq.q}
                    <ChevronDown className="w-5 h-5 text-indigo-600 group-open:rotate-180 transition-transform" />
                  </summary>
                  <p className="mt-4 text-gray-600 leading-relaxed pl-2 border-l-2 border-indigo-300">
                    {faq.a}
                  </p>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-gradient-to-r from-[#673DE6] to-[#8B5CF6] text-center">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl text-purple-100 mb-10"
          >
            Let us show you how AI Knots can help you build the future
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#673DE6] px-10 py-5 rounded-full text-xl font-semibold hover:bg-gray-100 transition shadow-lg"
            >
              Schedule a Demo
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-10 py-5 rounded-full text-xl font-semibold hover:bg-white/10 transition"
            >
              Get in Touch
            </motion.button>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default HomeAIKnots;
