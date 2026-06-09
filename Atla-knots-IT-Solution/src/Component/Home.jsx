import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import FlowManagementSystem from "../assets/Images/Icon/flow management system.png";
import AmazonModel from "../assets/Images/Icon/Amazon-Model.jpg";
import DelegationTaskAssignment from "../assets/Images/Icon/Delegation Task Assignment.png";
import RepetitiveTaskAssignment from "../assets/Images/Icon/Repeatative-Task-Assignment.png";
import HelpTicketSystem from "../assets/Images/Icon/Help-Ticket-System-1.png";
import AuditorModule from "../assets/Images/Icon/amazonmodel.png";
import Helpticket from "../assets/Images/Icon/Help ticket system.png";
import paymentcollectionengine from "../assets/Images/Icon/paymentcollectionengine.png";
import AutomatedScoring from "../assets/Images/Icon/AutomatedScoring.png";
import KRAKPI from "../assets/Images/Icon/KRAKPI.png";
import {
  Check,
  ArrowRight,
  Play,
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
  Sparkles,
  Layers,
  Megaphone,
  MessageCircle,
  AlertCircle,
  Menu,
  X,
  CheckCircle,
  CheckCircle2Icon,
} from "lucide-react";
import ATLAknotsDark from "./Mobile/img/logoimage3.png";
import ATLAknotsDark2 from "../assets/Images/AIStory.png";

// Counter Component for animated numbers
const Counter = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Extract numeric value
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
  // Extract suffix (K, +, etc)
  const suffix = value.replace(/[0-9,]/g, "");

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const increment = numericValue / (duration * 60); // 60 frames per second approximation
    const interval = setInterval(
      () => {
        start += increment;
        if (start >= numericValue) {
          setCount(numericValue);
          clearInterval(interval);
        } else {
          setCount(Math.floor(start));
        }
      },
      (duration * 1000) / (numericValue / increment),
    );

    return () => clearInterval(interval);
  }, [isInView, numericValue, duration]);

  return (
    <div ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </div>
  );
};

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFeatureTab, setActiveFeatureTab] = useState("operations");
  const [activeIndustryTab, setActiveIndustryTab] = useState("All");

  // Client logos from the reference website
  const clientLogos = [
    "https://cdn-jdbol.nitrocdn.com/stMslhZcyTrQKwaudxVanuuJFlvCrYOu/assets/images/optimized/rev-3eef2b7/midigitalautopilot.com/wp-content/uploads/2023/04/1.png",
    "https://cdn-jdbol.nitrocdn.com/stMslhZcyTrQKwaudxVanuuJFlvCrYOu/assets/images/optimized/rev-3eef2b7/midigitalautopilot.com/wp-content/uploads/2023/04/2.png",
    "https://cdn-jdbol.nitrocdn.com/stMslhZcyTrQKwaudxVanuuJFlvCrYOu/assets/images/optimized/rev-3eef2b7/midigitalautopilot.com/wp-content/uploads/2023/04/3.png",
    "https://cdn-jdbol.nitrocdn.com/stMslhZcyTrQKwaudxVanuuJFlvCrYOu/assets/images/optimized/rev-3eef2b7/midigitalautopilot.com/wp-content/uploads/2023/04/4.png",
    "https://cdn-jdbol.nitrocdn.com/stMslhZcyTrQKwaudxVanuuJFlvCrYOu/assets/images/optimized/rev-3eef2b7/midigitalautopilot.com/wp-content/uploads/2023/04/5.png",
    "https://cdn-jdbol.nitrocdn.com/stMslhZcyTrQKwaudxVanuuJFlvCrYOu/assets/images/optimized/rev-3eef2b7/midigitalautopilot.com/wp-content/uploads/2023/04/6.png",
    "https://cdn-jdbol.nitrocdn.com/stMslhZcyTrQKwaudxVanuuJFlvCrYOu/assets/images/optimized/rev-3eef2b7/midigitalautopilot.com/wp-content/uploads/2023/04/7.png",
    "https://cdn-jdbol.nitrocdn.com/stMslhZcyTrQKwaudxVanuuJFlvCrYOu/assets/images/optimized/rev-3eef2b7/midigitalautopilot.com/wp-content/uploads/2023/04/8.png",
    "https://cdn-jdbol.nitrocdn.com/stMslhZcyTrQKwaudxVanuuJFlvCrYOu/assets/images/optimized/rev-3eef2b7/midigitalautopilot.com/wp-content/uploads/2023/04/9.png",
    "https://cdn-jdbol.nitrocdn.com/stMslhZcyTrQKwaudxVanuuJFlvCrYOu/assets/images/optimized/rev-3eef2b7/midigitalautopilot.com/wp-content/uploads/2023/04/10.png",
    "https://cdn-jdbol.nitrocdn.com/stMslhZcyTrQKwaudxVanuuJFlvCrYOu/assets/images/optimized/rev-3eef2b7/midigitalautopilot.com/wp-content/uploads/2025/03/16.png",
    "https://cdn-jdbol.nitrocdn.com/stMslhZcyTrQKwaudxVanuuJFlvCrYOu/assets/images/optimized/rev-3eef2b7/midigitalautopilot.com/wp-content/uploads/2025/03/17.png",
  ];

  // All industries from reference
  const industries = [
    "Agriculture",
    "Construction",
    "Design & Marketing",
    "Arts & Crafts",
    "Automotive",
    "Gems & Jewellery",
    "Jute Industry",
    "Logistic",
    "Manufacturing",
    "Marbles & Tiles",
    "Packaging",
    "Training Institute",
    "Solar",
    "Textile",
    "Trader",
    "Electronics",
    "Finance & Insurance",
    "Food & Beverages",
    "Healthcare",
    "Pharma",
    "Real Estate",
  ];

  // Benefits data
  const benefits = [
    {
      title: "Increased Efficiency",
      description:
        "AI KNOTS automates repetitive tasks, freeing up your team to focus on high-value work.",
      icon: <Zap className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Time & Cost Savings",
      description:
        "By streamlining processes and reducing manual errors, AI KNOTS saves you time and money.",
      icon: <Clock className="w-6 h-6" />,
      color: "from-emerald-500 to-teal-500",
    },
    {
      title: "Improve Scalability",
      description:
        "By automating repetitive tasks and optimizing workflows, AI KNOTS empowers your business to scale without compromising quality or customer satisfaction.",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-purple-500 to-indigo-500",
    },
    {
      title: "Error Reduction",
      description:
        "AI KNOTS's automation minimizes human error, ensuring accuracy and reliability in your operations.",
      icon: <Shield className="w-6 h-6" />,
      color: "from-red-500 to-rose-500",
    },
    {
      title: "Enhance Productivity",
      description:
        "MI Digital Autopilot optimizes workflows, increasing productivity and improving overall performance.",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-orange-500 to-amber-500",
    },
    {
      title: "Streamline Process",
      description:
        "Simplify your complex business processes and make them more efficient with AI KNOTS automation system.",
      icon: <Settings className="w-6 h-6" />,
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Full Audibility and Tracking",
      description:
        "Track progress and identify areas for improvement with AI KNOTS's complete visibility into your operations.",
      icon: <Layers className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: "Improve Customer Experience",
      description:
        "Deliver better products and services to your customers by streamlining processes and reducing errors with AI KNOTS.",
      icon: <Users className="w-6 h-6" />,
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Insights and Data Accuracy",
      description:
        "Make informed decisions and optimize your business with AI KNOTS's accurate and actionable data.",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
    },
  ];

  // Features from the reference
  const allFeatures = [
    {
      title: "Flow Management System",
      desc: "Create and deploy a new task flow system in just 5 minutes, along with the doer dashboard and WhatsApp.",
      category: "operations",
      icon: FlowManagementSystem,
    },
    {
      title: "Amazon Model",
      desc: "AI KNOTS enables step-by-step notification updates to customers on WhatsApp, keeping them informed about the progress of tasks or processes at every stage, similar to e-commerce.",
      category: "operations",
      icon: AmazonModel,
    },
    {
      title: "Delegation Task Assignment",
      desc: "Assign tasks to doers, with details like priority levels, voice recording, deadline & any necessary attachments.",
      category: "operations",
      icon: DelegationTaskAssignment,
    },
    {
      title: "Repetitive Task Assignment",
      desc: "Easily assign tasks that need to be repeated frequently. Set them up once, and the system will automatically reassign them on schedule.",
      category: "operations",
      icon: RepetitiveTaskAssignment,
    },
    {
      title: "Help Ticket System",
      desc: "Create a support request or help ticket system, when an employee faces a problem or needs a senior's help.",
      category: "operations",
      icon: HelpTicketSystem,
    },
    {
      title: "Auditor Module",
      desc: "Analyze completed tasks and generate quality scores, giving you a clear picture of individual and team efficiency.",
      category: "operations",
      icon: AuditorModule,
    },
    {
      title: "Intranet",
      desc: "Organize and manage external links within AI KNOTS, categorizing them for easy access. Control user access to specific links based on their requirements.",
      category: "operations",
      icon: "🏢",
    },
    {
      title: "Manage Multiple Branches",
      desc: "Simplify branch network management, add new locations, remove inactive ones, assign dedicated managers, and give yourself the control you need to optimize your operations.",
      category: "operations",
      icon: "🏬",
    },
    {
      title: "Payment Collection Engine",
      desc: "Send automated payment reminders to your clients in just a few clicks.",
      category: "operations",
      icon: paymentcollectionengine,
    },
    {
      title: "Automated Scoring",
      desc: "Automated scoring related to task completion and on-time completion calculated by the System.",
      category: "operations",
      icon: AutomatedScoring,
    },
    {
      title: "Auto Task Reminders",
      desc: "Automated WhatsApp reminder system to users regarding task updates, deadlines & task completion.",
      category: "operations",
      icon: "⏰",
    },
    {
      title: "Inventory Management System",
      desc: "Get real-time inventory visibility, live stock, and product movement reports anytime, anywhere from the dashboard.",
      category: "operations",
      icon: "📦",
    },
    {
      title: "Runo API Integrated",
      desc: "Connect AI KNOTS with RUNO CRM to fetch customer leads directly into the system. Use the client information within the FMS for task assignment, tracking, and streamlined communication.",
      category: "operations",
      icon: "🔌",
    },
    {
      title: "IndiaMART API Integrated",
      desc: "Integrate AI KNOTS with IndiaMART CRM to automatically fetch leads from your IndiaMART account. Manage these leads in the FMS to simplify task assignments and follow-ups.",
      category: "operations",
      icon: Helpticket,
    },
    {
      title: "Quick Launch",
      desc: "Save important links for quick and permanent access directly from the dashboard for faster navigation and productivity.",
      category: "operations",
      icon: "⚡",
    },
    {
      title: "Project Management System",
      desc: "Manage complete projects with a fully customizable and movable workflow to streamline project execution and tracking.",
      category: "operations",
      icon: "📋",
    },
    {
      title: "KRA-KPI",
      desc: "Manage sales targets, TL verification, and lead updates efficiently while integrating Checklist and FMS for complete performance tracking.",
      category: "operations",
      icon: KRAKPI,
    },
    {
      title: "AI-Powered Delegation",
      desc: "Assign and manage tasks easily using AI-powered voice commands for faster workflow execution.",
      category: "operations",
      icon: "🤖",
    },
    {
      title: "Leave Register with Buddy Assign",
      desc: "Manage leave approvals and automatically assign buddies to handle tasks during a doer's absence without interrupting workflow.",
      category: "operations",
      icon: "🌴",
    },
    {
      title: "Attendance & Site Visit Configure",
      desc: "Configure attendance with location tracking, real-time photo verification, universal attendance, branch-wise attendance, doer-wise attendance, and site visit tracking.",
      category: "operations",
      icon: "📍",
    },
    {
      title: "Scoring",
      desc: "Track doer-wise and department-wise performance with Weekly MIS Scores and customizable Performance Scores based on task planning, completion, and on-time delivery.",
      category: "operations",
      icon: "🏆",
    },
    {
      title: "Hiring FMS",
      desc: "Use AI KNOTS FMS modules for HR hiring processes and sales lead management to store, track, and manage complete operational workflows efficiently.",
      category: "operations",
      icon: "👥",
    },
    {
      title: "Create Chatbot",
      desc: "Our WhatsApp chatbot system allows you to create automated conversations with your customers directly within WhatsApp.",
      category: "messaging",
      icon: "🤖",
    },
    {
      title: "Message Triggering From Google Sheets",
      desc: "AI KNOTS can integrate with Google Sheets to trigger messages based on specific conditions or changes.",
      category: "messaging",
      icon: "📊",
    },
    {
      title: "Payment Reminders",
      desc: "AI KNOTS can automatically send payment reminders over WhatsApp to your clients or sales team for advanced follow-up.",
      category: "messaging",
      icon: "🔔",
    },
    {
      title: "Personalized Messaging",
      desc: "AI KNOTS's personalized messaging feature allows you to send automated WhatsApp messages customized to individual recipients.",
      category: "messaging",
      icon: "📱",
    },
    {
      title: "Birthday Reminders",
      desc: "With AI KNOTS, employees or your clients get automatic birthday reminders on their WhatsApp.",
      category: "messaging",
      icon: "🎂",
    },
    {
      title: "DND Option",
      desc: "AI KNOTS lets you schedule bulk messages. If a customer replies 'DND,' they won't receive any more messages from the system.",
      category: "messaging",
      icon: "🚫",
    },
  ];

  // Most Loved Features
  const lovedFeatures = [
    {
      title: "Next Level Delegation",
      desc: "AI KNOTS's Next Level Delegation System makes task assignment easy and effective with priority levels, deadlines, voice notes, and attachments.",
      icon: "🎯",
    },
    {
      title: "Compliance Checklist",
      desc: "It ensures all your processes meet required standards. Create detailed checklists to track mandatory tasks, deadlines, and responsibilities.",
      icon: "✅",
    },
    {
      title: "Flow Management System",
      desc: "AI KNOTS's Flow Management System enables seamless coordination of a single process across multiple departments and roles.",
      icon: "🌊",
    },
    {
      title: "Amazon Model",
      desc: "AI KNOTS's Amazon Model allows you to send step-by-step updates to your customers on WhatsApp, just like in e-commerce systems.",
      icon: "📦",
    },
    {
      title: "Advanced & Robust Split FMS",
      desc: "The Split FMS in AI KNOTS allows seamless task handovers between workflows.",
      icon: "⚡",
    },
    {
      title: "Attendance Management System",
      desc: "With our Attendance Management System, keeping track of employee attendance is simplified with real-time tracking.",
      icon: "📅",
    },
  ];

  // Process Steps
  const processSteps = [
    {
      step: "01",
      title: "Process Mapping & Design",
      desc: "Our experts work closely with you to map out your existing workflows and design automation solutions that align with your specific needs and goals.",
    },
    {
      step: "02",
      title: "Software Implementation",
      desc: "Our team seamlessly integrates AI KNOTS into your existing systems, ensuring a smooth transition and minimal disruption to your daily operations.",
    },
    {
      step: "03",
      title: "Training & Support",
      desc: "We provide comprehensive training to your staff, empowering them to effectively utilize AI KNOTS and maximize its benefits.",
    },
    {
      step: "04",
      title: "Monitoring & Optimization",
      desc: "We continuously monitor AI KNOTS's performance and gather feedback to identify opportunities for further optimization.",
    },
    {
      step: "05",
      title: "Customization",
      desc: "If your process is not fulfilled by any of our existing features, we will define the implementation flow and deliver the requirement.",
    },
  ];

  // Testimonials from reference
  const testimonials = [
    {
      rating: 5,
      content:
        "It has been a great pleasure to work With Kailash Ji and Team MI Digital. Honestly from the day 1 he is keen to understand our core issues and solutions are always focussed towards making remedies within time frame. Be it Responding to us or be it Helping on Emergency requirements or be it solution finding we would rate you as our first vendor.",
      author: "Sandeep Lalwani",
      title: "Director - Lalwani Ferro Alloys Ltd",
    },
    {
      rating: 5,
      content:
        "We are immensely grateful to AI KNOTS for providing us with a revolutionary solution that has completely transformed our inventory management and enhanced the overall customer experience. we used to manually manage customer requests and maintain real-time inventory updates which was quiet challenging.",
      author: "Pathik Shah",
      title: "Owner - K.R.APPAREL",
    },
    {
      rating: 5,
      content:
        "The software also has an easy to use interface and packed with a lot of amazing features like task delegation, performance report, drip marketing, bulk messaging on Groups and a lot more. The software has made client management a breeze with its dynamic templates.",
      author: "Sandeep Lalwani",
      title: "Director - Lalwani Ferro Alloys Ltd",
    },
  ];

  const categories = [
    {
      title: "Agriculture & Allied",
      icon: "🌾",
      industries: [
        "Agriculture",
        "Construction",
        "Design & Marketing",
        "Arts & Crafts",
        "Automotive",
        "Automobile",
        "Gems & Jewellery",
        "Jute Industry",
      ],
    },
    {
      title: "Logistics & Manufacturing",
      icon: "🏭",
      industries: [
        "Logistics",
        "Manufacturing",
        "Marbles & Tiles",
        "Packaging",
        "Training Institute",
        "Solar",
        "Textile",
      ],
    },
    {
      title: "Trade & Financial Services",
      icon: "📊",
      industries: [
        "Trader",
        "Electronics",
        "Finance & Insurance",
        "Food & Beverages",
        "Healthcare",
        "Pharmacy",
        "Pharma",
        "Real Estate",
      ],
    },
  ];

  // FAQ Data
  const faqs = [
    {
      q: "MI Digital Autopilot (AI KNOTS) is software to streamline and automate your marketing and business operations.",
      a: "AI KNOTS helps businesses automate repetitive tasks, streamline workflows, and improve overall operational efficiency through intelligent automation.",
    },
    {
      q: "Currently, AI KNOTS supports WhatsApp and Emails, which allows businesses to communicate with their customers and programmatically track their operational activity.",
      a: "The platform integrates seamlessly with WhatsApp and Email services to provide automated communication and tracking capabilities.",
    },
    {
      q: "AI KNOTS can be used by small to medium-sized businesses across various industries that are looking to improve their Operations, customer engagement and communication through messaging platforms.",
      a: "From manufacturing to retail, healthcare to finance, AI KNOTS serves a wide range of industries looking to optimize their operations.",
    },
    {
      q: "Yes, AI KNOTS can integrate with other systems such as CRM tools, e-commerce platforms, and more to streamline communication and improve customer engagement.",
      a: "AI KNOTS offers API integrations with popular CRMs, e-commerce platforms, and other business tools for seamless data flow.",
    },
    {
      q: "AI KNOTS offers proper customer support to assist our clients with the proper training and any questions or issues they may encounter while using or implementing our platform.",
      a: "Our dedicated support team provides training, onboarding assistance, and ongoing technical support.",
    },
  ];

  const getFilteredFeatures = () => {
    return allFeatures.filter((f) => f.category === activeFeatureTab);
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center px-6 pt-24 pb-16 bg-gradient-to-br from-[#673DE6] via-[#7C3AED] to-[#8B5CF6] overflow-hidden">
        {/* Background decorative elements */}
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
                "Automate Repetitive Tasks",
                "Streamline Workflows",
                "Manage Inventory Hassle-Free",
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
                Schedule a demo
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition"
              >
                Start a free trial
              </motion.button>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-3 text-lg font-medium text-white"
            >
              <span className="text-green-400 text-2xl">✔</span> Get 15 Days
              FREE Trial Now
            </motion.p>
          </motion.div>

          {/* Right Side - Dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <img
                src={ATLAknotsDark}
                alt="AI KNOTS Dashboard"
                className="rounded-2xl shadow-2xl w-full max-w-[520px]"
              />

              {/* Floating Elements */}

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-12 -right-6 bg-white p-3 rounded-3xl shadow-2xl"
              >
                {/* <img
                  src={ATLAknotsDark}
                  alt="Business Owner"
                  className="w-48 rounded-2xl"
                /> */}
              </motion.div>

              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-12 -left-8 text-6xl"
              >
                📈
              </motion.div>
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
            Trusted By Hundreds of Indian Business Owners
          </motion.h2>

          <div className="overflow-hidden py-6">
            <div className="flex animate-marquee gap-12 whitespace-nowrap">
              {[...clientLogos, ...clientLogos].map((logo, i) => (
                <img
                  key={i}
                  src={logo}
                  alt="client"
                  className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition-all"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI KNOTS STORY SECTION */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                The AI KNOTS Story with Our Co-founder Mr. Kailash Agarwal
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our journey began with a simple vision: to empower businesses
                with intelligent automation that saves time, reduces errors, and
                drives growth. Today, AI KNOTS stands as a testament to that
                vision, serving hundreds of Indian businesses across diverse
                industries.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#673DE6] to-[#8B5CF6] flex items-center justify-center text-white text-2xl">
                  <Play className="w-8 h-8" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    Watch the full story
                  </p>
                  <p className="text-gray-500 text-sm">3 min video</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={ATLAknotsDark2}
                  alt="AI KNOTS Story"
                  className="w-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* CHALLENGES & SOLUTION SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left: Pie Chart */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={ATLAknotsDark2}
                  alt="AI KNOTS Story"
                  className="w-full"
                />
              </div>
            </motion.div>

            {/* Right: Challenges */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-indigo-950 leading-tight mb-10">
                Dear Entrepreneurs, Can
                <br />
                You Relate With These
                <br />
                Challenges?
              </h2>
              <ul className="space-y-6">
                {[
                  "Becoming a Chief 'Firefighting' Officer day by day?",
                  "Too much Dependency on 'MIS' person?",
                  "Team Forgetting Tasks & Priorities despite multiple follow-ups?",
                  "Losing Track of Inventory levels, leading to overstocking or stockouts?",
                  "No Centralized System to streamline task status and progress!",
                ].map((challenge, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 items-start group cursor-pointer"
                  >
                    <span className="text-2xl group-hover:scale-110 transition-transform">
                      ⚠️
                    </span>
                    <p className="text-gray-700 leading-relaxed font-medium">
                      {challenge}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* AI KNOTS Solution */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 pt-12 border-t border-gray-200"
          >
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl font-bold text-indigo-950 leading-tight mb-6">
                  Automate Your Complex
                  <br />
                  Business Process With MI
                  <br />
                  Digital Autopilot AI KNOTS
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  More work. Less stress! MI Digital Autopilot (AI KNOTS) is the
                  ultimate solution to streamline and automate your marketing
                  and business operations. From automating workflows to
                  generating insightful reports, AI KNOTS acts as your partner
                  in efficiency and success.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { number: "220+", label: "Live Setup" },
                  { number: "12,230+", label: "Users" },
                  { number: "2,715+", label: "Live FMS" },
                  {
                    number: "26,000+",
                    label: "Delegation Processed (Avg Monthly)",
                  },
                  {
                    number: "316K+",
                    label: "Checklist Processed (Avg Monthly)",
                  },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5 }}
                    className="bg-indigo-50 hover:bg-indigo-100 transition-colors rounded-2xl p-6 cursor-pointer"
                  >
                    <div className="text-4xl font-bold text-indigo-600 mb-1">
                      <Counter value={stat.number} duration={2} />
                    </div>
                    <div className="text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES TABS SECTION */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900"
          >
            Our{" "}
            <span className="bg-gradient-to-r from-[#673DE6] to-[#8B5CF6] bg-clip-text text-transparent">
              Features
            </span>
          </motion.h2>
          <p className="text-center text-gray-600 mb-8 max-w-xl mx-auto text-sm md:text-base">
            Discover the powerful tools that make AI KNOTS the ultimate business
            automation solution
          </p>

          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-white rounded-full p-1 shadow-sm border border-gray-200">
              {["operations", "messaging"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveFeatureTab(tab)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all text-sm ${
                    activeFeatureTab === tab
                      ? "bg-gradient-to-r from-[#673DE6] to-[#8B5CF6] text-white shadow"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  {tab === "operations" ? "Operations" : "Messaging"}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            key={activeFeatureTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
          >
            {getFilteredFeatures().map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-[#FFF6EF] hover:bg-[#FFF6EF] border border-gray-100 hover:border-indigo-200 hover:shadow-xl transition-all duration-300 rounded-3xl p-4 group cursor-pointer h-full"
              >
                <div className="flex items-center gap-4 mb-4 group-hover:scale-110 transition-transform">
                  <div className="flex-none h-20 w-20 rounded-3xl bg-indigo-50 border border-indigo-100 shadow-sm flex items-center justify-center text-4xl text-indigo-700 overflow-hidden">
                    {typeof feature.icon === "string" &&
                    /\.(png|jpe?g|gif|svg)$/i.test(feature.icon) ? (
                      <img
                        src={feature.icon}
                        alt={feature.title}
                        className="h-12 w-12 object-contain"
                      />
                    ) : (
                      <div className="text-5xl">{feature.icon}</div>
                    )}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-indigo-700 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-snug text-sm">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* MOST LOVED FEATURES */}
      <section className="py-20 bg-gradient-to-br from-[#673DE6] to-[#8B5CF6]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-6 text-white"
          >
            Most <span className="text-yellow-300">Loved</span> Features
          </motion.h2>
          <p className="text-center text-purple-100 mb-12 max-w-2xl mx-auto">
            Our clients' favorite features that have transformed their business
            operations
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lovedFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white/10 backdrop-blur rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all cursor-pointer"
              >
                <h3 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2">
                  <CheckCircle2Icon className="w-5 h-5 " />
                  {feature.title}
                </h3>
                <p className="text-purple-100 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES SECTION */}
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header with Logo */}

          {/* Main Title */}
          <div className="text-center mb-12">
            <div className="inline-block">
              <div className="flex items-center gap-2 justify-center mb-3">
                <span className="h-px w-8 bg-indigo-300"></span>
                <span className="text-indigo-600 font-semibold text-sm tracking-wide uppercase">
                  Our Expertise
                </span>
                <span className="h-px w-8 bg-indigo-300"></span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Industries We Serve In
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-indigo-300 rounded-full mx-auto mt-4"></div>
            </div>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
              Delivering tailored solutions across diverse sectors with
              excellence and innovation
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, idx) => (
              <div
                key={idx}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo-50 hover:border-indigo-100 overflow-hidden"
              >
                {/* Card Header */}
                <div className="relative px-6 pt-6 pb-4 bg-gradient-to-r from-indigo-50/50 to-transparent border-b border-indigo-100">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl transform group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">
                        {category.title}
                      </h3>
                      <div className="h-0.5 w-12 bg-indigo-400 rounded-full mt-1 group-hover:w-16 transition-all duration-300"></div>
                    </div>
                  </div>
                </div>

                {/* Industries List */}
                <div className="p-6">
                  <div className="flex flex-wrap gap-2.5">
                    {category.industries.map((industry, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center px-3.5 py-1.5 rounded-full text-sm font-medium bg-gray-50 text-gray-700 border border-gray-100 shadow-sm hover:shadow-md hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-200 transition-all duration-200 cursor-default"
                      >
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer Decoration */}
                <div className="h-1 w-full bg-gradient-to-r from-indigo-200 via-indigo-400 to-indigo-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* Bottom Stats / Extra Info - Optional */}
          <div className="mt-16 pt-8 border-t border-indigo-100 text-center">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                <span>25+ Years Combined Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                <span>Global Client Network</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                <span>24/7 Industry Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BENEFITS SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900"
          >
            Benefits Of Business Process Automation By{" "}
            <span className="bg-gradient-to-r from-[#673DE6] to-[#8B5CF6] bg-clip-text text-transparent">
              AI KNOTS
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
                className="group rounded-2xl border border-gray-100 bg-[#F5F5FF] p-6 shadow-sm transition-all hover:shadow-lg hover:border-indigo-200 cursor-pointer"
              >
                <h3 className="mb-3 text-xl font-bold text-gray-900 flex items-center gap-2">
                  <Check className="w-5 h-5 text-indigo-600" />
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900"
          >
            Our Process & Approach
          </motion.h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            A systematic approach to ensure successful implementation and
            maximum ROI
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative rounded-2xl bg-gradient-to-br from-gray-50 to-white p-8 shadow-md hover:shadow-xl transition-all cursor-pointer group"
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900"
          >
            What Our{" "}
            <span className="bg-gradient-to-r from-[#673DE6] to-[#8B5CF6] bg-clip-text text-transparent">
              Clients Say?
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
                className="flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-lg cursor-pointer"
              >
                <div className="mb-4 flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="mb-4 flex-1 text-gray-700 leading-relaxed line-clamp-4">
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

      {/* CASE STUDIES SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Case Studies
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Explore our case studies and stay up to date on how MI Digital
                AutoPilot is helping business automate their operation and
                marketing efforts.
              </p>
              <button className="text-[#673DE6] font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                View All Case Studies <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Blogs & Resources
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Explore our case studies and stay up to date on how MI Digital
                AutoPilot is helping business automate their operation and
                marketing efforts.
              </p>
              <button className="text-[#673DE6] font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                Read Our Blog <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
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
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Home;
