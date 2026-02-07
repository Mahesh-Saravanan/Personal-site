"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const sections = [
    { name: "About Me", id: "about" },

    { name: "Professional Journey", id: "experience" },
    { name: "Academic Journey", id: "education" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Tech stack", id: "skills" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Contact", id: "contact" },
  ];

  const greetings = [
    "Hello there",
    "வணக்கம்",
    "Hola",
    "Bonjour",
    "Guten Tag",
    "Ciao",
  ];

  const projects = [
    {
      id: 1,
      title: "Deskbot",
      description: "Hello World!",
      image: "/deskbot/preview1.png",
      about: "DeskBot is a personal physical assistant designed to move with you, interact with you, and support you in everyday life. It can walk alongside you, respond to voice commands, and act as a playful companion. When you are away, it becomes a smart surveillance bot, navigating through your home and keeping an eye on things using its onboard camera. On your desk, it transforms into a compact companion that can charge your phone and assist with daily tasks. Built to be helpful, interactive, and always evolving.",
      gallery: []
    },
    {
      id: 2,
      title: "Off-Road Buggy Racing",
      description: "Mud, speed, and pure engineering!",
      image: "/off-road-buggy-racing/preview.png",
      about: "SAE Baja is a global off-road racing competition where teams design, build, and race a single-seater buggy across extreme terrains. With the team of 23-member, I led on the complete journey of building an off-road vehicle from concept to competition, competing against more than 200 teams worldwide.\n\nOver a year-long development cycle, the project moved through detailed design, simulation, fabrication, and intensive testing. The vehicle was engineered using SolidWorks for design and Ansys, Adams, and Lotus software for structural and dynamic evaluation. After clearing the design validation stage, we built the complete buggy in four months, followed by two months of race-grade testing.\n\nAt the national event in Chandigarh, Punjab, we competed in multiple formats, including an eight-hour endurance race. We finished in the top ten, secured second place in maneuverability, and ranked fourth in suspension and traction — a proud result of teamwork, persistence, and engineering discipline.",
      gallery: ["/off-road-buggy-racing/1.JPG", "/off-road-buggy-racing/2.JPG", "/off-road-buggy-racing/3.JPG", "/off-road-buggy-racing/4.mp4"]
    },
    {
      id: 3,
      title: "Vaegan Autonomous Vehicle",
      description: "Just sit and relax",
      image: "/vaegan-autonomous-vehicle/preview.png",
      about: "This project, developed as my bachelor’s thesis at Anna University, focused on building a complete ecosystem for an autonomous shuttle service within a college campus. The goal was to create a self-driven vehicle that could safely transport users to their destinations while providing a smooth and simple user experience.\n\nThe system was built on a retrofitted TVS ES electric scooter, redesigned to support autonomous navigation. A hub motor powered by lithium-ion batteries provided propulsion, while custom-designed hardware enabled steering, braking, and speed control. The vehicle followed a white guiding line laid on campus roads, using a Pixy image sensor for real-time path detection. Sensor data was processed onboard to control steering through a stepper motor-driven gear mechanism, while braking was handled using servo motor actuation. Speed was regulated using a potentiometer-based control system.\n\nBeyond vehicle automation, the project also included a full software layer for user interaction. A barcode-based login system was developed, backed by an SQL database and a locally hosted web interface within the university network. A Bluetooth barcode scanner enabled quick user authentication, while a smart parking gate ensured proper vehicle docking and safety. Together, these components formed a complete, functional prototype of a campus-scale autonomous mobility service.",
      gallery: ["/vaegan-autonomous-vehicle/1.jpg", "/vaegan-autonomous-vehicle/2.mp4", "/vaegan-autonomous-vehicle/3.jpg", "/vaegan-autonomous-vehicle/4.mp4", "/vaegan-autonomous-vehicle/5.mp4"]
    },
    {
      id: 4,
      title: "Reinforcement Learning Mobile Bot",
      description: "Learning by rewards.",
      image: "/reinforcement-learning-mobile-bot/preview.png",
      about: "This project focuses on building an autonomous mobile robot that learns to navigate through complex indoor environments using reinforcement learning. The hardware platform is based on the Nvidia JetRacer Pro, equipped with a Slamtec RPLidar A3 360-degree sensor mounted using a custom 3D-printed bracket, and an Intel D435i depth camera for obstacle detection. The system runs on Linux with the Robot Operating System (ROS) as middleware, enabling seamless communication between sensors, control logic, and actuators.\n\nTo enable safe and efficient training, a custom Python-based simulator was developed using Pygame, replicating the real floor plan of the university building. The simulator generates realistic LiDAR data based on the robot’s position and orientation, allowing accurate perception and navigation learning before deployment.\n\nThe driving policy is learned using a Double Deep Q-Network (DDQN) framework, formulated as a Markov Decision Process. The trained model predicts optimal steering actions from LiDAR observations, which are then transferred to the physical robot. Careful hardware calibration ensures smooth and reliable real-world execution, bridging the gap between simulation and reality.",
      gallery: ["/reinforcement-learning-mobile-bot/1.mp4", "/reinforcement-learning-mobile-bot/2.jpg", "/reinforcement-learning-mobile-bot/3.jpg", "/reinforcement-learning-mobile-bot/4.mp4", "/reinforcement-learning-mobile-bot/5.png"]
    },
    {
      id: 5,
      title: "Display Tuning Robot",
      description: "Say cheese…",
      image: "/display-tuning-robot/preview.png",
      about: "This project focuses on building a mobile robotic system for automated calibration and validation of large-scale, tile-based Laser Phosphor Displays developed by Prysm Inc. The robot is equipped with a high-resolution Nikon digital camera and a scientific imaging camera, enabling precise detection and measurement of visual defects across ultra-wide 225-inch display surfaces.\n\nThe system automates critical tuning processes such as power balancing, seam blending, and Mura correction. Power balancing ensures uniform brightness across tiles, seam blending aligns overlapping regions for seamless visuals, and Mura correction addresses fine pixel-level non-uniformities. By replacing human visual inspection with camera-based measurement, the system accurately quantifies defects and triggers corrections on a tile-by-tile basis, significantly reducing manual effort and improving consistency.\n\nMounted on a precision mobile platform with multi-axis actuation, the robot can scan displays in three directions, enabling both calibration and validation.\n\nDue to confidentiality agreements and NDA restrictions, further technical details cannot be disclosed.",
      gallery: []
    },
    {
      id: 6,
      title: "Rental Bikes Business Simulator",
      description: "Take a ride?",
      image: "/rental-bikes-business-simulator/preview.png",
      about: "This project models the real-world operations of a Mobility as a Service (MaaS) company that provides rental electric scooters for daily commuting. The simulator recreates the complete business workflow over a defined time period, enabling detailed analysis of both operational efficiency and financial performance.\n\nThe system is based on a city-wide fleet of electric scooters distributed across multiple rental stations in Coimbatore, India. Users can rent a scooter from any station and return it to another, while a dedicated operations team, known as Wingmen, dynamically redistributes vehicles between stations based on real-time demand and availability. The simulator tracks and optimizes this reshuffling process to ensure high service availability with minimal operational effort.\n\nIn addition, the platform monitors key cost drivers, including charging cycles, power consumption, maintenance, and overall expenditure, while simultaneously tracking revenue. By integrating real-world data such as station locations, travel distances, and traffic conditions, the simulator identifies cost leaks, suggests optimal station placement, and determines the ideal fleet size. This allows data-driven decisions that improve service coverage, reduce idle time, and enhance overall business efficiency.",
      gallery: ["/rental-bikes-business-simulator/1.png", "/rental-bikes-business-simulator/2.mp4", "/rental-bikes-business-simulator/3.png", "/rental-bikes-business-simulator/4.png", "/rental-bikes-business-simulator/5.png", "/rental-bikes-business-simulator/6.mp4", "/rental-bikes-business-simulator/7.mp4"]
    },
    {
      id: 7,
      title: "Black Jack Learning Agent",
      description: "Wanna bet? Just kidding!",
      image: "/black-jack-learning-agent/preview.png",
      about: "This project explores the design of a self-learning Blackjack player using reinforcement learning principles based on a Markov Decision Process. The complete game environment was developed in Python, with learning driven by a Q-learning framework. The goal was to study how strategy evolves over time and how different rules and hyperparameters influence decision-making and win rates.\n\nThe simulator closely follows standard Blackjack rules inspired by Beat the Dealer, including card counting strategies. The agent learns an optimal policy through interaction with the environment, where each state is defined by the player’s hand value and the dealer’s visible card. At every step, the agent chooses between two actions — hit or stick — and receives a reward based on the game outcome.\n\nLearning is guided by a Q-table that stores state–action values and is updated using Bellman’s equation. Training was carried out over 100,000 simulated games, balancing exploration and exploitation using an epsilon-greedy approach. The final model achieved a win rate of 44%, closely matching skilled human-level play and demonstrating effective learning under uncertainty.",
      gallery: []
    },
  ];

  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);
  const [selectedMilestone, setSelectedMilestone] = useState<any>(null);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);
  const [showContactOptions, setShowContactOptions] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const milestones = [
    { id: 1, title: "Best Paper Award — ICDD, Romania", desc: "Research, recognized." },
    { id: 2, title: "Convocation — Bachelor’s in Mechanical Engineering", desc: "Where the journey began." },
    { id: 3, title: "Convocation — Master’s in Artificial Intelligence", desc: "Turning passion into purpose." },
    { id: 4, title: "IISF — National First, Autonomous Vehicle", desc: "Innovation in motion." },
    { id: 5, title: "Endurance Off-Road Race — Post Finish", desc: "Dust, sweat, and smiles — celebrating months of effort crossing the finish line." },
    { id: 6, title: "Appreciation of Work", desc: "Moments that matter." },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreetingIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [greetings.length]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsNavVisible(false);
      } else {
        setIsNavVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY < 100) {
        setIsNavVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [lastScrollY]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of the navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-red-100 overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-transform duration-300 ${isNavVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">
          <div className="flex-1"></div>
          <div className="hidden md:flex items-center gap-8 justify-center">
            {sections.map((section) => (
              <Link
                key={section.name}
                href={`#${section.id}`}
                onClick={(e) => handleScroll(e, section.id)}
                className="text-sm font-medium text-gray-600 hover:text-red-600 transition-colors"
              >
                {section.name}
              </Link>
            ))}
          </div>
          <div className="flex-1 flex justify-end items-center gap-4">
            <a
              href="/resume.pdf"
              download="Mahesh_Saravanan_Resume.pdf"
              className="px-5 py-2.5 bg-red-600 text-white text-sm font-bold rounded-full hover:bg-red-700 transition-all shadow-lg shadow-red-200"
            >
              Resume
            </a>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-red-600 transition-colors"
            >
              <span className="sr-only">Open menu</span>
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state. */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
            >
              <div className="px-6 py-6 space-y-4">
                {sections.map((section) => (
                  <Link
                    key={section.name}
                    href={`#${section.id}`}
                    onClick={(e) => handleScroll(e, section.id)}
                    className="block text-base font-medium text-gray-600 hover:text-red-600 transition-colors"
                  >
                    {section.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="pt-24 w-full overflow-hidden" onClick={() => setIsNavVisible(false)}>
        {/* Hero Section */}
        <section className="min-h-[85vh] flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 max-w-7xl mx-auto px-4 sm:px-6">
          {/* Left Side: Text */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-6 w-full">
            <div className="h-12 mb-2">
              <span key={currentGreetingIndex} className="inline-block px-5 py-2 bg-red-50 text-red-600 rounded-full text-xl font-medium animate-fade-in-up">
                {greetings[currentGreetingIndex]}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 leading-tight break-words">
              I&apos;m <span className="text-red-600">Mahesh</span> Saravanan
            </h1>
            <p className="text-lg sm:text-xl text-gray-500 max-w-lg leading-relaxed">
              A product developer turning curious thoughts into products with passion.
            </p>
            <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
              <Link href="#contact" className="px-8 py-3.5 rounded-full bg-red-600 text-white font-semibold hover:bg-red-700 transition shadow-lg shadow-red-200">
                Let&apos;s Talk
              </Link>
              <Link href="#portfolio" className="px-8 py-3.5 rounded-full border border-gray-200 bg-white text-gray-900 font-semibold hover:bg-gray-50 transition">
                View Work
              </Link>
            </div>
          </div>

          {/* Right Side: Image with Red Border Bar */}
          <div className="flex-1 flex justify-center md:justify-start md:pl-24 py-10 w-full">
            <div className="relative group w-full flex flex-col items-center md:items-start">
              {/* Scalable Container */}
              <div className="relative transition-transform duration-700 group-hover:scale-105 origin-bottom">
                {/* Image Container */}
                <div className="relative w-80 h-96 md:w-[28rem] md:h-[34rem] z-10">
                  <Image
                    src="/intro-1.png"
                    alt="Mahesh Saravanan"
                    fill
                    className="object-contain object-bottom"
                    priority
                  />
                </div>
                {/* The Extended Red Bar */}
                <div className="h-4 bg-red-600 shadow-lg w-[200%] absolute bottom-0 right-0 translate-x-[20%] md:translate-x-0 md:right-auto md:left-0 z-20"></div>
              </div>
            </div>
          </div>
        </section>

        {/* About Me */}
        <section id="about" className="py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">About Me</h2>
            <div className="bg-transparent">
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                I enjoy working across engineering and technology, especially where science meets creativity. From scientific imaging to machine learning and computer vision, I like building solutions that are both smart and practical. I often take ideas from concept to a complete product, handling design, development, and manufacturing.
                <br />
                <br />
                When I am not building, you will find me modeling in 3D, experimenting with electronics, or capturing the night sky through astrophotography😉. Curiosity drives my work, and learning shapes my journey.
              </p>
              <div className="mt-8">
                <a
                  href="#portfolio"
                  onClick={(e) => handleScroll(e, "portfolio")}
                  className="text-lg font-semibold text-red-600 hover:text-red-700 hover:underline transition-colors cursor-pointer"
                >
                  Interested in what I’ve built? &darr;
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Slider */}
        <section id="portfolio" className="py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 mb-12 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
            <p className="text-gray-500 mt-2">Swipe to explore my work</p>
          </div>

          {/* Horizontal Scroll Container */}
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 pb-8 -mx-6 md:mx-0 scrollbar-hide">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ scale: 1.03 }}
                viewport={{ once: true }}
                onClick={() => setSelectedProject(project)}
                className="snap-center shrink-0 w-[85vw] md:w-[450px] h-[64vw] md:h-[340px] group relative bg-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer border border-gray-200"
              >
                <div className="absolute inset-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 flex flex-col justify-end text-left">
                  <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                  <p className="text-gray-200 text-sm font-medium">{project.description}</p>
                </div>
              </motion.div>
            ))}
            {/* Spacer for right padding */}
            <div className="shrink-0 w-6 md:w-0"></div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Career Journey</h2>
            <div className="space-y-8">
              {[
                {
                  role: "Director",
                  company: "Vaegan Hosting and Development Services",
                  location: "Chennai, India",
                  period: "2026 – Present",
                  description: ""
                },
                {
                  role: "Technical Lead",
                  company: "Ice Apple Technology Solutions",
                  location: "Chennai, India",
                  period: "2025 – Present",
                  description: "Driving advanced display calibration solutions in collaboration with Prysm Inc. (USA) for Laser Phosphor Display systems. Designing camera-based tuning pipelines that combine classical image processing and deep learning to reduce optical distortions and Moiré patterns. Developing automated quality inspection systems and a robotic calibration platform to improve precision, repeatability, and factory workflow efficiency."
                },
                {
                  role: "Machine Learning Developer (Freelance)",
                  company: "Independent Consultant",
                  location: "",
                  period: "2024",
                  description: "Built an end-to-end deep learning pipeline to predict anemia and blood hemoglobin levels using medical images of conjunctiva, nails, and palms. Designed training workflows that support continuous model improvement and robustness against data drift."
                },
                {
                  role: "Research Assistant",
                  company: "Center for Artificial Intelligence and Robotics, THWS",
                  location: "Würzburg, Germany",
                  period: "2023 – 2024",
                  description: "Developed automated multimodal data collection pipelines for robotic experiments, followed by structured ETL processing and database storage. Performed statistical analysis and feature engineering, delivering clear insights through interactive dashboards and visual reports."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ scale: 1.02 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:bg-red-600 hover:border-red-600 transition-all cursor-default group"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-white transition-colors">{item.role}</h3>
                    <span className="text-sm font-medium text-red-600 bg-red-50 px-3 py-1 rounded-full whitespace-nowrap mt-2 md:mt-0 w-fit group-hover:bg-white/20 group-hover:text-white transition-colors">{item.period}</span>
                  </div>
                  <div className="text-gray-700 font-medium mb-4 group-hover:text-red-50 transition-colors">
                    {item.company} {item.location && <span className="text-gray-400 font-normal group-hover:text-red-200"> • {item.location}</span>}
                  </div>
                  {item.description && (
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base group-hover:text-red-50 transition-colors">
                      {item.description}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="py-24">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Academic Journey</h2>
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ scale: 1.02 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:bg-red-600 hover:border-red-600 transition-all cursor-default group"
              >
                <h3 className="text-xl font-bold group-hover:text-white transition-colors">Masters in Artificial Intelligence</h3>
                <p className="text-gray-600 mt-2 group-hover:text-red-100 transition-colors">Technical University of Applied Sciences Würzburg-Schweinfurt, Germany • 2022 - 2023</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ scale: 1.02 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:bg-red-600 hover:border-red-600 transition-all cursor-default group"
              >
                <h3 className="text-xl font-bold group-hover:text-white transition-colors">Bachelors in Mechanical Engineering</h3>
                <p className="text-gray-600 mt-2 group-hover:text-red-100 transition-colors">KPR Institute of Engineering and Technology, Coimbatore, India • 2017 - 2021</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Through the Lens */}
        <section id="milestones" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Through the Lens</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {milestones.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedMilestone(item)}
                  className="group relative aspect-video bg-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all border border-gray-200 cursor-pointer"
                >
                  <div className="absolute inset-0">
                    <Image
                      src={`/milestones/${item.id}.png`}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm mt-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-500 mt-8 italic">
              Snapshots of key moments and achievements.
            </p>
          </div>
        </section>

        {/* Tech Stack */}
        <section id="skills" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Tech Stack</h2>
            <p className="text-gray-500 text-center mb-16">Tools and technologies I use to bring ideas to life</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { name: "Python", logo: "python.png" },
                { name: "C#", logo: "csharp.png" },
                { name: "TensorFlow", logo: "tensorflow.png" },
                { name: "PyTorch", logo: "pytorch.png" },
                { name: "OpenCV", logo: "opencv.png" },
                { name: "3D Printing", logo: "3dp.png" },
                { name: "Autodesk", logo: "autodesk.png" },
                { name: "Ansys", logo: "ansys.png" },
                { name: "SolidWorks", logo: "solidworks.png" },
                { name: "MySQL", logo: "mysql.png" },
                { name: "Bash Scripting", logo: "bash.png" },
                { name: "ROS", logo: "ros.png" },
              ].map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ scale: 1.05, translateY: -5 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:bg-red-600 hover:border-red-600 flex flex-col items-center justify-center gap-4 transition-all group cursor-default"
                >
                  <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-110 bg-white rounded-lg p-1">
                    <Image
                      src={`/tech-stack/${skill.logo}`}
                      alt={skill.name}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <span className="font-bold text-sm text-gray-700 group-hover:text-white transition-colors">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Reviews & Testimonials</h2>
            <p className="text-gray-500 text-center mb-16">What colleagues and partners say about our work</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: "Prof. Dr.-Ing. Pascal Meißner",
                  role: "Research professor, CAIRO, THWS.",
                  content: "Throughout his employment, Mr. Saravanan consistently demonstrated exceptional professionalism and skill, meeting all requirements and expectations. His proactive approach, coupled with his ability to quickly adapt to new areas, was truly commendable. His deep understanding of data handling and programming techniques allowed him to make significant technical contributions to our projects.",
                  image: "/pascal.jpg"
                },
                {
                  name: "Prof. Dr. Magda Gregorová",
                  role: "Head of CAIRO, THWS",
                  content: "Mr. Saravanan consistently delivered high-quality work thanks to his methodical and efficient work ethic. He was not only a valuable asset to his superiors but also a collaborative and supportive partner to his colleagues.",
                  image: "/magda.png"
                }
              ].map((review, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -10 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all relative group flex flex-col"
                >
                  <div className="flex items-center gap-1 text-red-600 mb-6 font-bold italic">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-8 italic leading-relaxed relative z-10">
                    &ldquo;{review.content}&rdquo;
                  </p>

                  {/* Faint Background Quotation Image */}
                  <div className="absolute bottom-4 right-6 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-500 -z-0">
                    <Image
                      src="/quote.png"
                      alt="quote"
                      width={100}
                      height={100}
                      className="object-contain"
                    />
                  </div>

                  <div className="flex items-center gap-4 border-t border-gray-50 pt-6 mt-auto relative z-10">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 border-2 border-red-100 shrink-0">
                      <Image
                        src={review.image}
                        alt={review.name}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{review.name}</h4>
                      <p className="text-[10px] text-red-600 font-medium tracking-wide uppercase">{review.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24 bg-black text-white text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Get In Touch</h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Have something in mind? A project, a question, or just a good idea - let’s talk.
            </p>

            <div className="flex flex-col items-center space-y-6">
              <button
                onClick={() => setShowContactOptions(!showContactOptions)}
                className="inline-block px-10 py-4 bg-red-600 rounded-full text-lg font-bold hover:bg-red-700 transition-all hover:scale-105 active:scale-95"
              >
                {showContactOptions ? "Say Hello" : "Say Hello"}
              </button>

              <AnimatePresence>
                {showContactOptions && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-wrap lg:flex-nowrap justify-center gap-4 w-full max-w-6xl mt-8 px-4"
                  >
                    {[
                      {
                        label: "Mail",
                        href: "mailto:maheshhss750@gmail.com",
                        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
                        desc: "maheshhss750@gmail.com"
                      },
                      {
                        label: "Phone",
                        href: "tel:+919787330275",
                        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />,
                        desc: "+91 9787330275"
                      },
                      {
                        label: "WhatsApp",
                        href: "https://wa.me/919787330275",
                        icon: <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />,
                        desc: "Chat Now",
                        isWhatsApp: true
                      },
                      {
                        label: "Instagram",
                        href: "https://www.instagram.com/mahesh_saravanan_/",
                        icon: <g><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></g>,
                        desc: "@mahesh_saravanan_"
                      },
                      {
                        label: "LinkedIn",
                        href: "https://www.linkedin.com/in/mahesh-saravanan-/",
                        icon: <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />,
                        desc: "Professional"
                      },
                      {
                        label: "GitHub",
                        href: "https://github.com/Mahesh-Saravanan",
                        icon: <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />,
                        desc: "Mahesh-Saravanan"
                      },
                    ].map((link, i) => (
                      <motion.a
                        key={link.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ delay: i * 0.1, duration: 0.4 }}
                        href={link.href}
                        target={link.href.startsWith('http') ? "_blank" : undefined}
                        rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                        className="flex-1 min-w-[140px] max-w-[190px] p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors group"
                      >
                        <div className="text-red-500 mb-2 flex justify-center">
                          <svg className="w-6 h-6" fill={link.isWhatsApp || link.label === "LinkedIn" || link.label === "GitHub" ? "currentColor" : "none"} stroke={link.isWhatsApp || link.label === "LinkedIn" || link.label === "GitHub" ? "none" : "currentColor"} viewBox="0 0 24 24" strokeWidth={2}>
                            {link.icon}
                          </svg>
                        </div>
                        <h3 className="font-bold text-sm mb-1">{link.label}</h3>
                        <p className="text-gray-400 text-[10px] break-all">{link.desc}</p>
                      </motion.a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in"
              onClick={() => setSelectedProject(null)}
            >
              <div
                className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
                  onClick={() => setSelectedProject(null)}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>

                {/* Scrollable Content */}
                <div className="overflow-y-auto">
                  {/* Hero Image */}
                  <div className="relative w-full h-64 md:h-80">
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                      <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{selectedProject.title}</h2>
                        <p className="text-gray-200 text-lg">{selectedProject.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-8 space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">About the Project</h3>
                      <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line">
                        {selectedProject.about}
                      </p>
                    </div>

                    {/* Gallery */}
                    {selectedProject.gallery && selectedProject.gallery.length > 0 && (
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Gallery</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {selectedProject.gallery.map((item: string, idx: number) => {
                            const isVideo = item.toLowerCase().endsWith('.mp4');
                            return (
                              <div
                                key={idx}
                                className="relative aspect-video rounded-xl overflow-hidden bg-gray-100 cursor-pointer group"
                                onClick={() => setSelectedMedia(item)}
                              >
                                {isVideo ? (
                                  <div className="absolute inset-0 flex items-center justify-center">
                                    <video className="w-full h-full object-cover">
                                      <source src={item} type="video/mp4" />
                                    </video>
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                                      <div className="w-12 h-12 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                      </div>
                                    </div>
                                  </div>
                                ) : (
                                  <Image
                                    src={item}
                                    alt={`Gallery ${idx + 1}`}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-500"
                                  />
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </AnimatePresence>

        {/* Media Lightbox (Click to Enlarge) */}
        {selectedMedia && (
          <div
            className="fixed inset-0 z-[110] flex items-center justify-center bg-black/90 backdrop-blur-md p-6 animate-fade-in"
            onClick={() => setSelectedMedia(null)}
          >
            <div
              className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
                onClick={() => setSelectedMedia(null)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>

              <div className="flex items-center justify-center bg-black">
                {selectedMedia.toLowerCase().endsWith('.mp4') ? (
                  <video controls autoPlay className="max-h-[85vh] w-full">
                    <source src={selectedMedia} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div className="relative w-full h-auto max-h-[85vh] flex items-center justify-center">
                    <img
                      src={selectedMedia}
                      alt="Enlarged media"
                      className="max-h-[85vh] w-auto h-auto object-contain"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Milestone Lightbox Modal */}
        <AnimatePresence>
          {selectedMilestone && (
            <div
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-fade-in"
              onClick={() => setSelectedMilestone(null)}
            >
              <button
                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[110]"
                onClick={() => setSelectedMilestone(null)}
              >
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>

              <div
                className="relative w-full max-w-5xl max-h-[90vh] flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl bg-black">
                  <Image
                    src={`/milestones/${selectedMilestone.id}.png`}
                    alt={selectedMilestone.title}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="mt-6 text-center text-white max-w-2xl">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">{selectedMilestone.title}</h3>
                  <p className="text-lg text-gray-300">{selectedMilestone.desc}</p>
                </div>
              </div>
            </div>
          )}
        </AnimatePresence>
      </main>

      <footer className="bg-white py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <span className="text-gray-500 text-sm">© 2026 Mahesh Saravanan. All rights reserved.</span>
          <div className="flex gap-8">
            <a href="mailto:maheshhss750@gmail.com" className="text-gray-400 hover:text-red-500 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </a>
            <a href="https://wa.me/919787330275" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-colors">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
            </a>
            <a href="https://www.instagram.com/mahesh_saravanan_/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-600 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
            </a>
            <a href="https://www.linkedin.com/in/mahesh-saravanan-/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-700 transition-colors">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            </a>
            <a href="https://github.com/Mahesh-Saravanan" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black transition-colors">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div >
  );
}
