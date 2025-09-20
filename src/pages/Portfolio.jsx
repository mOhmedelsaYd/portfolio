import React, { useState, useEffect, useRef } from "react";
import professionalImage from "../assets/professional-profile.jpg";
import {
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Code,
  Palette,
  Zap,
  Users,
  Award,
  Briefcase,
  Calendar,
  ArrowRight,
  Database,
  Globe,
  Shield,
  Menu,
  X,
  Download,
} from "lucide-react";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Update active section based on scroll position
      const sections = [
        "home",
        "about",
        "experience",
        "projects",
        "skills",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(section);
        }
      }
    };

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const projects = [
    {
      title: "Scanalyze – AI-Powered Medical Diagnostics System",
      description:
        "Full-stack healthcare diagnostics platform with JWT-based authentication, role-based access control, and AI-assisted medical report generation using ResNet50 and MedGemma-4B models. Integrated bilingual medical chatbot powered by RAG and Apollo-7B with automated WhatsApp OTP verification and CI/CD pipeline on Azure.",
      tech: [
        "Node.js",
        "Express.js",
        "JWT",
        "ResNet50",
        "MedGemma-4B",
        "Apollo-7B",
        "Azure",
        "WhatsApp API",
        "RAG",
        "CI/CD",
      ],
      image:
        "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=400&fit=crop",
      category: "Healthcare AI",
      year: "Jun 2025",
      metrics: "Graduation Project",
      link: "https://scanalyze-fcds.vercel.app/",
      features: [
        "Multi-role authentication system",
        "AI-powered medical diagnostics",
        "Bilingual chatbot integration",
        "Real-time WhatsApp notifications",
      ],
    },
    {
      title: "Patria – Restaurant Management System",
      description:
        "Complete full-stack restaurant management solution with comprehensive CRUD operations for categories, products, subcategories, locations, and ingredients. Features advanced site-wide offers system and real-time order management with automated time calculation and status tracking.",
      tech: [
        "React.js",
        "Node.js",
        "Express",
        "MongoDB",
        "JavaScript",
        "REST APIs",
      ],
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
      category: "Full Stack",
      year: "2025",
      metrics: "Live Production System",
      link: "https://patria-demo.vercel.app/",
      features: [
        "Complete inventory management",
        "Real-time order tracking",
        "Site-wide promotions system",
        "Multi-location support",
      ],
    },
    {
      title: "Wrdya – HR Management System",
      description:
        "Comprehensive HR system frontend featuring employee management dashboards, leave & attendance modules, and penalties tracking system. Built with focus on optimal user experience, form validations, and responsive design across all devices with seamless API integration.",
      tech: [
        "React.js",
        "JavaScript",
        "API Integration",
        "UI/UX Design",
        "Responsive Design",
      ],
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
      category: "Frontend Development",
      year: "2025",
      metrics: "Live Production System",
      link: "https://wrdya.vercel.app/",
      features: [
        "Employee management dashboard",
        "Leave & attendance tracking",
        "Penalties management system",
        "Responsive cross-browser design",
      ],
    },
    {
      title: "E-commerce Platform with Admin Dashboard",
      description:
        "Scalable e-commerce backend system featuring secure JWT authentication, Stripe payment integration, advanced product image upload using Multer and Sharp, comprehensive search functionality with filtering and pagination for enhanced user experience.",
      tech: [
        "Node.js",
        "Express.js",
        "JWT",
        "Stripe",
        "Multer",
        "Sharp",
        "REST APIs",
      ],
      image:
        "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=600&h=400&fit=crop",
      category: "Backend Development",
      year: "Jan 2025",
      metrics: "Personal Project",
      link: "https://github.com/mOhmedelsaYd/E-commerce",
      features: [
        "Secure payment processing",
        "Advanced product management",
        "Image optimization system",
        "Advanced search & filtering",
      ],
    },
  ];

  const skills = [
    {
      category: "Frontend Development",
      icon: Code,
      level: 88,
      technologies: [
        "React.js",
        "JavaScript",
        "TypeScript",
        "HTML5",
        "CSS3",
        "Responsive Design",
      ],
      description:
        "Building modern, responsive user interfaces with React and contemporary JavaScript frameworks.",
      projects: ["Wrdya HR System", "Patria Restaurant System"],
    },
    {
      category: "Backend Development",
      icon: Database,
      level: 90,
      technologies: [
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "JWT Authentication",
        "MVC Architecture",
        "API Integration",
      ],
      description:
        "Developing scalable backend services with secure authentication and clean architecture patterns.",
      projects: ["Scanalyze AI Platform", "E-commerce Backend"],
    },
    {
      category: "Database & Cloud",
      icon: Shield,
      level: 82,
      technologies: [
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "Mongoose",
        "AWS",
        "Azure",
        "CI/CD",
      ],
      description:
        "Database design, optimization, and cloud deployment with automated CI/CD pipelines.",
      projects: ["Azure Deployment Pipeline", "Database Optimization"],
    },
    {
      category: "Specialized Technologies",
      icon: Zap,
      level: 85,
      technologies: [
        "AI Integration",
        "Stripe Payments",
        "WhatsApp API",
        "Docker",
        "Git",
        "Unit Testing",
      ],
      description:
        "Advanced integrations including AI models, payment systems, and modern development tools.",
      projects: ["AI Medical Diagnostics", "Payment Integration"],
    },
  ];

  const experience = [
    {
      title: "Freelance Full Stack Developer",
      company: "Self-Employed",
      period: "2025 – Present",
      location: "Remote",
      description:
        "Working on diverse full-stack projects including restaurant management systems and HR platforms. Specializing in MERN stack development with focus on user experience optimization and scalable system architecture.",
      achievements: [
        "Built complete restaurant management system with real-time order tracking and inventory management",
        "Developed comprehensive HR system frontend with advanced employee management capabilities",
        "Successfully deployed multiple production applications with live user bases",
        "Maintained clear client communication and delivered projects on time",
      ],
      technologies: ["React.js", "Node.js", "Express", "MongoDB", "JavaScript"],
    },
    {
      title: "Backend Developer Intern",
      company: "H2M Marketing Company",
      period: "Mar 2024 – Jul 2024",
      location: "Remote",
      description:
        "Contributed to custom application development for diverse business needs in a marketing technology environment. Focused on secure authentication systems, API performance optimization, and database management while collaborating in remote Agile teams.",
      achievements: [
        "Enhanced system security by 20% through comprehensive JWT authentication and RBAC implementation",
        "Improved API performance and system efficiency by 10% through strategic database query optimization",
        "Gained hands-on experience with professional version control workflows and API testing methodologies",
        "Successfully collaborated with distributed teams using Agile methodologies and modern communication tools",
      ],
      technologies: [
        "Node.js",
        "JWT",
        "RBAC",
        "Database Optimization",
        "API Testing",
      ],
    },
  ];

  const education = {
    degree: "Bachelor of Computing and Data Science",
    university: "Alexandria University",
    location: "Alexandria, Egypt",
    period: "2021-2025",
    status: "Graduated",
    relevantCoursework: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Software Engineering",
      "Web Development",
      "Object-Oriented Programming",
      "Computer Networks",
    ],
  };

  const certifications = [
    {
      name: "Bachelor of Computing and Data Science",
      issuer: "Alexandria University",
      year: "2025",
      type: "Degree",
    },
    {
      name: "MERN Stack Development",
      issuer: "Self-Taught & Professional Projects",
      year: "2024",
      type: "Practical Experience",
    },
    {
      name: "RESTful API Development",
      issuer: "Professional Experience",
      year: "2024",
      type: "Industry Experience",
    },
    {
      name: "Cloud Computing & CI/CD",
      issuer: "AWS/Azure Learning",
      year: "2024",
      type: "Technical Skills",
    },
  ];

  const personalInfo = {
    name: "Mohamed Elsayed Ahmed",
    title: "MERN Stack Developer",
    location: "Third Al Montazah, Alexandria, Egypt 21919",
    phone: "+201222799210",
    email: "mohamedelsaid3963@gmail.com",
    linkedin: "https://www.linkedin.com/in/moelsayd3963/",
    github: "https://github.com/mOhmedelsaYd",
    summary:
      "MERN Stack Developer with 1 year of experience building full-stack web applications. Skilled in creating responsive React interfaces, developing Node.js/Express backend services, and managing MongoDB databases. Experienced in secure authentication, performance optimization, and CI/CD deployment.",
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/mohamedElsayed_CV_16.pdf"; // File must be inside public/
    link.download = "Mohamed_Elsayed_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Elegant Background Effects */}
      <div className="fixed inset-0 z-0">
        {/* Sophisticated gradient mesh with bronze accents */}
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(194, 176, 134, 0.06) 0%, transparent 50%),
                linear-gradient(135deg, rgba(128, 128, 128, 0.05) 0%, rgba(64, 64, 64, 0.05) 100%)
              `,
            }}
          />
        </div>

        {/* Animated geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => {
            const size = 20 + (i % 4) * 15;
            const shapes = ["circle", "hexagon", "triangle", "square"];
            const shape = shapes[i % 4];

            return (
              <div
                key={i}
                className="absolute opacity-8 hover:opacity-20 transition-opacity duration-700"
                style={{
                  left: `${5 + ((i * 7) % 90)}%`,
                  top: `${10 + (i % 10) * 10}%`,
                  transform: `
                    translateY(${Math.sin(scrollY * 0.002 + i) * 20}px)
                    rotate(${scrollY * 0.05 + i * 10}deg)
                    scale(${1 + Math.sin(scrollY * 0.001 + i) * 0.2})
                  `,
                  transition: "transform 0.3s ease-out",
                }}
              >
                <div
                  className={`bg-gradient-to-br from-[#c2b086] via-[#d4c494] to-[#a39670] ${
                    shape === "circle"
                      ? "rounded-full"
                      : shape === "hexagon"
                      ? "clip-hexagon"
                      : shape === "triangle"
                      ? "clip-triangle"
                      : "rounded-lg"
                  }`}
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    filter: "blur(1px)",
                  }}
                />
              </div>
            );
          })}
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/90 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center mr-12 space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#c2b086] to-[#a39670] rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-black font-bold text-sm">ME</span>
              </div>
              <div className="text-lg font-semibold bg-gradient-to-r from-gray-200 to-[#c2b086] bg-clip-text text-transparent">
                Mohamed Elsayed
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-7">
              {[
                { name: "Home", id: "home" },
                { name: "About", id: "about" },
                { name: "Experience", id: "experience" },
                { name: "Projects", id: "projects" },
                { name: "Skills", id: "skills" },
                { name: "Contact", id: "contact" },
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-all duration-300 relative group font-medium text-sm ${
                    activeSection === item.id
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#c2b086] to-[#a39670] transition-all duration-300 ${
                      activeSection === item.id
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </button>
              ))}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-gray-300 hover:text-white p-2 mr-5"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-gray-800">
            <div className="px-4 sm:px-6 py-6 space-y-4">
              {[
                { name: "Home", id: "home" },
                { name: "About", id: "about" },
                { name: "Experience", id: "experience" },
                { name: "Projects", id: "projects" },
                { name: "Skills", id: "skills" },
                { name: "Contact", id: "contact" },
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left transition-colors duration-300 py-2 font-medium ${
                    activeSection === item.id
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-6"
        ref={heroRef}
      >
        <div className="relative z-10 mt-20 sm:mt-24 lg:mt-28 max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
            {/* Professional Avatar */}
            <div className="relative order-1 lg:order-2 lg:mb-40">
              <div className="relative max-w-sm sm:max-w-md lg:max-w-lg mx-auto lg:mx-0">
                <div
                  className="w-44 h-44 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-full lg:h-[500px] relative group cursor-pointer mx-auto"
                  style={{
                    transform: `
                      perspective(1200px) 
                      rotateX(${mousePosition.y * 0.005 - 0.2}deg) 
                      rotateY(${mousePosition.x * 0.005 - 0.2}deg)
                    `,
                    transition: "transform 0.1s ease-out",
                  }}
                >
                  <div className="w-full h-full border-2 sm:border-3 border-[#c2b086] rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 shadow-2xl overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-500">
                    <img
                      src={professionalImage}
                      alt="Mohamed Elsayed - MERN Stack Developer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  </div>
                  {/* Decorative elements - smaller on mobile */}
                  <div className="absolute -top-3 -right-3 sm:-top-6 sm:-right-6 w-12 h-12 sm:w-24 sm:h-24 bg-gradient-to-br from-[#c2b086] to-[#a39670] rounded-lg sm:rounded-2xl opacity-20 rotate-12 blur-sm" />
                  <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-8 h-8 sm:w-16 sm:h-16 bg-gradient-to-br from-[#c2b086] to-[#a39670] rounded-lg sm:rounded-xl opacity-30 -rotate-12 blur-sm" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6 sm:space-y-8 order-1 lg:order-2 text-center lg:text-left">
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center justify-center lg:justify-start space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                  <div className="w-1.5 sm:w-2 h-8 sm:h-12 bg-gradient-to-b from-[#c2b086] to-[#a39670] rounded-full" />
                  <span className="text-[#c2b086] font-medium text-base sm:text-lg tracking-wide">
                    MERN Stack Developer
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <span className="block bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent font-light tracking-tight mb-1 sm:mb-2">
                    {personalInfo.name.split(" ")[0]}
                  </span>
                  <span className="block bg-gradient-to-r from-[#c2b086] via-[#d4c494] to-[#c2b086] bg-clip-text text-transparent font-extralight tracking-wider">
                    {personalInfo.name.split(" ")[1]}
                  </span>
                </h1>

                <p className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed font-light max-w-lg sm:max-w-2xl mx-auto lg:mx-0 px-2 sm:px-0">
                  {personalInfo.summary}
                </p>
              </div>

              {/* Professional Stats */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 py-4 sm:py-6 max-w-sm sm:max-w-none mx-auto lg:mx-0">
                <div className="text-center lg:text-left bg-gray-900/30 rounded-xl p-3 sm:p-4 border border-gray-800/50">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#c2b086] mb-1">
                    1+
                  </div>
                  <div className="text-gray-500 text-xs sm:text-sm font-medium">
                    Years Experience
                  </div>
                </div>
                <div className="text-center lg:text-left bg-gray-900/30 rounded-xl p-3 sm:p-4 border border-gray-800/50">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#c2b086] mb-1">
                    {projects.length}
                  </div>
                  <div className="text-gray-500 text-xs sm:text-sm font-medium">
                    Major Projects
                  </div>
                </div>
                <div className="text-center lg:text-left bg-gray-900/30 rounded-xl p-3 sm:p-4 border border-gray-800/50">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#c2b086] mb-1">
                    3
                  </div>
                  <div className="text-gray-500 text-xs sm:text-sm font-medium">
                    Live Systems
                  </div>
                </div>
                <div className="text-center lg:text-left bg-gray-900/30 rounded-xl p-3 sm:p-4 border border-gray-800/50">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#c2b086] mb-1">
                    2025
                  </div>
                  <div className="text-gray-500 text-xs sm:text-sm font-medium">
                    Graduate
                  </div>
                </div>
              </div>

              {/* Contact Info - Stack vertically on mobile */}
              <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:flex-wrap items-center lg:items-start justify-center lg:justify-start gap-0 sm:gap-4 lg:gap-6 text-gray-500 text-xs sm:text-sm">
                <div className="flex items-center space-x-2 bg-gray-900/20 rounded-lg px-3 py-2 border border-gray-800/30">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-[#c2b086]" />
                  <span>Alexandria, Egypt</span>
                </div>
                <div className="flex items-center space-x-2 bg-gray-900/20 rounded-lg px-3 py-2 border border-gray-800/30">
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-[#c2b086]" />
                  <span className="text-xs sm:text-sm">
                    {personalInfo.email}
                  </span>
                </div>
                <div className="flex items-center space-x-2 bg-gray-900/20 rounded-lg px-3 py-2 border border-gray-800/30">
                  <Award className="w-3 h-3 sm:w-4 sm:h-4 text-[#c2b086]" />
                  <span>Fresh Graduate</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row gap-0 sm:gap-4 justify-center lg:justify-start pt-2 sm:pt-4">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#c2b086] to-[#a39670] text-black font-semibold rounded-xl sm:rounded-2xl hover:shadow-2xl hover:shadow-[#c2b086]/20 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3 w-full sm:w-auto"
                >
                  <span>View Projects</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button
                  onClick={downloadCV}
                  className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#c2b086]/50 text-[#c2b086] font-semibold rounded-xl sm:rounded-2xl hover:border-[#c2b086] hover:bg-[#c2b086]/10 hover:shadow-xl transition-all duration-300 backdrop-blur-sm w-full sm:w-auto flex items-center justify-center space-x-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download CV</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-[#c2b086]/70" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 sm:mb-24">
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-gray-200 via-[#c2b086] to-gray-300 bg-clip-text text-transparent font-light tracking-tight">
              About Me
            </h2>
            <div className="w-24 sm:w-32 h-0.5 bg-gradient-to-r from-[#c2b086] to-[#a39670] mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="prose prose-lg prose-gray">
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed font-light mb-4 sm:mb-6">
                  As a passionate MERN Stack Developer and recent graduate from
                  Alexandria University with a degree in Computing and Data
                  Science, I bring fresh perspectives and modern technical
                  skills to full-stack development.
                </p>
                <p className="text-base sm:text-lg text-gray-400 leading-relaxed mb-4 sm:mb-6">
                  My expertise includes React.js, Node.js, Express, and MongoDB,
                  with hands-on experience in secure authentication, API
                  integration, and cloud deployment. I've successfully
                  contributed to live production systems including restaurant
                  management and HR platforms, delivering measurable
                  improvements in performance and security.
                </p>
                <p className="text-base sm:text-lg text-gray-400 leading-relaxed mb-6 sm:mb-8">
                  I'm passionate about clean code, scalable architecture, and
                  leveraging cutting-edge technologies like AI integration to
                  create efficient solutions that solve real business problems
                  and drive meaningful impact.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 sm:gap-8">
                <div className="text-center p-6 sm:p-8 bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl sm:rounded-3xl border border-[#c2b086]/20 backdrop-blur-sm hover:border-[#c2b086]/40 transition-all duration-300">
                  <div className="text-2xl sm:text-4xl font-bold text-[#c2b086] mb-2 sm:mb-3">
                    {projects.length}
                  </div>
                  <div className="text-gray-500 text-xs sm:text-sm font-medium">
                    Projects Completed
                  </div>
                </div>
                <div className="text-center p-6 sm:p-8 bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl sm:rounded-3xl border border-[#c2b086]/20 backdrop-blur-sm hover:border-[#c2b086]/40 transition-all duration-300">
                  <div className="text-2xl sm:text-4xl font-bold text-[#c2b086] mb-2 sm:mb-3">
                    1+
                  </div>
                  <div className="text-gray-500 text-xs sm:text-sm font-medium">
                    Years Experience
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-gray-700/50 transform hover:scale-105 transition-all duration-500 shadow-2xl backdrop-blur-sm">
                <div className="mb-8 sm:mb-10">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-200 mb-6">
                    Education
                  </h3>
                  <div className="bg-gray-800/30 rounded-xl p-4 border border-gray-700/30 mb-6">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-[#c2b086] font-semibold">
                        {education.degree}
                      </h4>
                      <span className="text-[#c2b086] text-sm">
                        {education.status}
                      </span>
                    </div>
                    <p className="text-gray-300 font-medium">
                      {education.university}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {education.location} | {education.period}
                    </p>
                  </div>

                  <div>
                    <h5 className="text-sm font-semibold text-gray-300 mb-3">
                      Relevant Coursework:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {education.relevantCoursework.map((course, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-800/50 text-gray-400 text-xs rounded-full border border-gray-700/30"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-700/50 pt-6 sm:pt-8">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-200 mb-4 sm:mb-6">
                    Professional Development
                  </h4>
                  <div className="space-y-3">
                    {certifications.map((cert, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center p-2 sm:p-3 bg-gray-800/30 rounded-xl border border-gray-700/30"
                      >
                        <div>
                          <div className="text-gray-300 font-medium text-xs sm:text-sm">
                            {cert.name}
                          </div>
                          <div className="text-gray-500 text-xs">
                            {cert.issuer}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-[#c2b086] text-xs">
                            {cert.year}
                          </div>
                          <div className="text-gray-500 text-xs">
                            {cert.type}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black/50 to-transparent"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 sm:mb-24">
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-gray-200 via-[#c2b086] to-gray-300 bg-clip-text text-transparent font-light tracking-tight">
              Experience
            </h2>
            <div className="w-24 sm:w-32 h-0.5 bg-gradient-to-r from-[#c2b086] to-[#a39670] mx-auto rounded-full"></div>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#c2b086] via-gray-500 to-[#c2b086] rounded-full opacity-30 hidden lg:block"></div>

            {experience.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center justify-center lg:justify-${
                  index % 2 === 0 ? "start" : "end"
                } mb-16 sm:mb-20`}
              >
                <div
                  className={`w-full lg:w-5/12 ${
                    index % 2 === 0 ? "lg:pr-12 xl:pr-20" : "lg:pl-12 xl:pl-20"
                  }`}
                >
                  <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 shadow-2xl backdrop-blur-sm group">
                    <div className="flex items-center space-x-4 mb-4 sm:mb-6">
                      <div className="w-3 h-3 bg-[#c2b086] rounded-full"></div>
                      <span className="text-gray-400 font-medium text-sm sm:text-base">
                        {exp.period}
                      </span>
                      <span className="text-gray-500 text-sm">
                        • {exp.location}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-200 mb-2 sm:mb-3 group-hover:text-white transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <h4 className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6 font-medium">
                      {exp.company}
                    </h4>
                    <p className="text-gray-400 leading-relaxed font-light mb-4 sm:mb-6 text-sm sm:text-base">
                      {exp.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      <h5 className="text-sm font-semibold text-gray-300 mb-2 sm:mb-3">
                        Key Achievements:
                      </h5>
                      {exp.achievements.map((achievement, achIndex) => (
                        <div
                          key={achIndex}
                          className="flex items-start space-x-2"
                        >
                          <div className="w-1.5 h-1.5 bg-[#c2b086] rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-400 text-xs sm:text-sm font-light">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div>
                      <h5 className="text-sm font-semibold text-gray-300 mb-3">
                        Technologies Used:
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-800/50 text-gray-400 text-xs rounded-full border border-gray-700/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 sm:mb-24">
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-gray-200 via-[#c2b086] to-gray-300 bg-clip-text text-transparent font-light tracking-tight">
              Projects
            </h2>
            <div className="w-24 sm:w-32 h-0.5 bg-gradient-to-r from-[#c2b086] to-[#a39670] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-700/50 hover:border-[#c2b086]/30 transition-all duration-500 shadow-2xl backdrop-blur-sm transform hover:scale-[1.02]"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="px-2 py-1 bg-[#c2b086]/20 text-[#c2b086] text-xs rounded-full backdrop-blur-sm border border-[#c2b086]/30">
                        {project.category}
                      </span>
                      <span className="px-2 py-1 bg-gray-800/80 text-gray-300 text-xs rounded-full backdrop-blur-sm">
                        {project.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <p className="text-gray-400 mb-4 leading-relaxed font-light text-sm sm:text-base">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">
                      Key Features:
                    </h4>
                    <div className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center space-x-2"
                        >
                          <div className="w-1 h-1 bg-[#c2b086] rounded-full"></div>
                          <span className="text-gray-400 text-xs">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-800/50 text-gray-400 text-xs rounded-full border border-gray-700/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">
                      {project.metrics}
                    </span>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-[#c2b086] hover:text-white transition-colors duration-300 group/view"
                    >
                      <span className="text-sm font-medium">View Project</span>
                      <ExternalLink className="w-4 h-4 group-hover/view:translate-x-0.5 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black/50 to-transparent"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 sm:mb-24">
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-gray-200 via-[#c2b086] to-gray-300 bg-clip-text text-transparent font-light tracking-tight">
              Skills
            </h2>
            <div className="w-24 sm:w-32 h-0.5 bg-gradient-to-r from-[#c2b086] to-[#a39670] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 shadow-2xl backdrop-blur-sm group"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#c2b086] to-[#a39670] rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-black" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-200 group-hover:text-white transition-colors duration-300">
                      {skill.category}
                    </h3>
                  </div>

                  <p className="text-gray-400 mb-6 leading-relaxed font-light text-sm sm:text-base">
                    {skill.description}
                  </p>

                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-400">Proficiency</span>
                      <span className="text-sm font-semibold text-[#c2b086]">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-800/50 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-[#c2b086] to-[#a39670] h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-800/50 text-gray-400 text-xs rounded-full border border-gray-700/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">
                      Applied In:
                    </h4>
                    <div className="space-y-1">
                      {skill.projects.map((project, projectIndex) => (
                        <div
                          key={projectIndex}
                          className="flex items-center space-x-2"
                        >
                          <div className="w-1 h-1 bg-[#c2b086] rounded-full"></div>
                          <span className="text-gray-400 text-xs">
                            {project}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 sm:mb-24">
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-gray-200 via-[#c2b086] to-gray-300 bg-clip-text text-transparent font-light tracking-tight">
              Contact
            </h2>
            <div className="w-24 sm:w-32 h-0.5 bg-gradient-to-r from-[#c2b086] to-[#a39670] mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-200 mb-6">
                  Let's Work Together
                </h3>
                <p className="text-gray-400 leading-relaxed font-light text-lg mb-4">
                  I'm actively seeking new opportunities and challenging
                  projects. As a fresh graduate with hands-on experience, I'm
                  excited to contribute to innovative teams and grow alongside
                  experienced professionals.
                </p>
                <p className="text-gray-400 leading-relaxed font-light">
                  Let's discuss how I can bring value to your projects with my
                  MERN stack expertise and passion for clean, efficient code.
                </p>
              </div>

              <div className="space-y-6">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center space-x-4 p-4 bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-xl border border-gray-700/50 hover:border-[#c2b086]/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#c2b086] to-[#a39670] rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-start text-sm">
                      Email
                    </div>
                    <div className="text-gray-200 font-medium">
                      {personalInfo.email}
                    </div>
                  </div>
                </a>

                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center space-x-4 p-4 bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-xl border border-gray-700/50 hover:border-[#c2b086]/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#c2b086] to-[#a39670] rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-start text-sm">
                      Phone
                    </div>
                    <div className="text-gray-200 font-medium">
                      {personalInfo.phone}
                    </div>
                  </div>
                </a>

                <div className="flex items-center space-x-4 p-4 bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-xl border border-gray-700/50 hover:border-[#c2b086]/30 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#c2b086] to-[#a39670] rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-start text-sm">
                      Location
                    </div>
                    <div className="text-gray-200 font-medium">
                      Alexandria, Egypt
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50 rounded-xl flex items-center justify-center hover:border-[#c2b086]/30 hover:scale-105 transition-all duration-300"
                >
                  <Github className="w-6 h-6 text-gray-400 hover:text-[#c2b086] transition-colors duration-300" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50 rounded-xl flex items-center justify-center hover:border-[#c2b086]/30 hover:scale-105 transition-all duration-300"
                >
                  <Linkedin className="w-6 h-6 text-gray-400 hover:text-[#c2b086] transition-colors duration-300" />
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-gray-700/50 shadow-2xl backdrop-blur-sm">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-400 text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#c2b086]/50 transition-colors duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block  text-gray-400 text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#c2b086]/50 transition-colors duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#c2b086]/50 transition-colors duration-300"
                    placeholder="Project discussion"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    rows="5"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#c2b086]/50 transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-[#c2b086] to-[#a39670] text-black font-semibold rounded-xl hover:shadow-2xl hover:shadow-[#c2b086]/20 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3"
                >
                  <span>Send Message</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 sm:py-16 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-[#c2b086] to-[#a39670] rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-xs">ME</span>
              </div>
              <div className="text-lg font-semibold bg-gradient-to-r from-gray-200 to-[#c2b086] bg-clip-text text-transparent">
                {personalInfo.name}
              </div>
            </div>

            <p className="text-gray-500 text-sm mb-8">
              MERN Stack Developer crafting modern web applications with passion
              and precision
            </p>

            <div className="flex items-center justify-center space-x-6 mb-8 flex-wrap gap-4">
              {[
                "Home",
                "About",
                "Experience",
                "Projects",
                "Skills",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm transition-colors duration-300 ${
                    activeSection === item.toLowerCase()
                      ? "text-[#c2b086]"
                      : "text-gray-500 hover:text-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex items-center justify-center space-x-4 mb-8">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#c2b086] transition-colors duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#c2b086] transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-gray-500 hover:text-[#c2b086] transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-800/30">
              <p className="text-gray-600 text-xs">
                © {new Date().getFullYear()} {personalInfo.name}. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        .clip-hexagon {
          clip-path: polygon(
            50% 0%,
            100% 25%,
            100% 75%,
            50% 100%,
            0% 75%,
            0% 25%
          );
        }
        .clip-triangle {
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
