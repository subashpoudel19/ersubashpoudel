import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { 
  ArrowDown, 
  Download, 
  Mail, 
  ExternalLink,
  Building,
  Users,
  Award,
  BookOpen,
  User,
  Code,
  GraduationCap,
  Briefcase,
  Calendar,
  Phone,
  Send,
  ChevronRight,
  FileText,
  Github,
  Linkedin,
  Youtube
} from 'lucide-react'

export const Home = () => {
  const [currentTitle, setCurrentTitle] = useState(0)
  const titles = [
    'MS Civil Engineering Student',
    'Graduate Research Assistant', 
    'GIS & Remote Sensing Specialist',
    'Multi-Hazard Risk Analyst'
  ]

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/subash-poudel-680a12221/',
      icon: Linkedin,
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/ersubashpoudel',
      icon: Github,
      color: 'bg-gray-800 hover:bg-gray-900'
    },
    {
      name: 'ResearchGate',
      href: 'https://www.researchgate.net/profile/Subash-Poudel-9',
      icon: BookOpen,
      color: 'bg-green-600 hover:bg-green-700'
    },
    {
      name: 'ORCID',
      href: 'https://orcid.org/0009-0003-1493-4920',
      icon: ExternalLink,
      color: 'bg-emerald-600 hover:bg-emerald-700'
    },
    {
      name: 'YouTube',
      href: 'https://youtube.com/@ersubashpoudel',
      icon: Youtube,
      color: 'bg-red-600 hover:bg-red-700'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [])

  const stats = [
    { label: 'Projects Completed', value: 15, icon: Building },
    { label: 'Research Papers', value: 8, icon: BookOpen },
    { label: 'Years Experience', value: 3, icon: Award },
    { label: 'Skills Mastered', value: 25, icon: Code }
  ]

  const skillsAndServices = [
    { name: 'GIS & Remote Sensing', type: 'skill' },
    { name: 'Python Programming', type: 'skill' },
    { name: 'AutoCAD & Civil 3D', type: 'skill' },
    { name: 'Multi-Hazard Assessment', type: 'skill' },
    { name: 'Project Management', type: 'skill' },
    { name: 'Research & Analysis', type: 'skill' },
    { name: 'Geospatial Analysis Consulting', type: 'service' },
    { name: 'Risk Assessment Studies', type: 'service' },
    { name: 'Infrastructure Planning', type: 'service' },
    { name: 'Machine Learning Solutions', type: 'service' },
    { name: 'Academic Collaboration', type: 'service' },
    { name: 'Technical Writing & Documentation', type: 'service' }
  ]

  const education = [
    {
      degree: 'MS in Civil Engineering',
      school: 'Jackson State University',
      location: 'Jackson, MS, USA',
      year: '2024 - Present',
      description: 'Specializing in multi-hazard risk assessment and geospatial analysis'
    },
    {
      degree: 'Bachelor in Civil Engineering',
      school: 'Tribhuvan University',
      location: 'Nepal',
      year: '2022',
      description: 'Focus on structural engineering and seismic analysis'
    }
  ]

  const experience = [
    {
      title: 'Model-Mod Intern',
      company: 'ERDC, Vicksburg, MS',
      period: 'May - July 2025',
      description: 'Conducted research on post-wildfire debris flow using USGS WildCat model and Python automation'
    },
    {
      title: 'Graduate Research Assistant',
      company: 'Jackson State University',
      period: 'Fall 2024 - Present',
      description: 'Working under Dr. Rocky Talchabhadel on HICORPS project for multi-hazard risk assessment'
    }
  ]

  const blogs = [
    {
      id: 1,
      title: 'Multi-Hazard Risk Assessment in Coastal Cities',
      excerpt: 'Exploring innovative geospatial frameworks for integrating future climate scenarios...',
      date: '2024-12-15',
      category: 'Research',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Post-Wildfire Debris Flow Analysis Using Python',
      excerpt: 'How machine learning and automation can enhance disaster risk modeling...',
      date: '2024-11-28',
      category: 'Technology',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'Sustainable Infrastructure Development in Nepal',
      excerpt: 'Bridging traditional engineering practices with modern sustainable solutions...',
      date: '2024-11-10',
      category: 'Engineering',
      readTime: '6 min read'
    }
  ]

  const featuredProjects = [
    {
      id: 1,
      title: 'Post-Wildfire Debris Flow Risk Assessment',
      description: 'USGS WildCat model implementation for California coastal cities using Python automation',
      image: '/images.jpeg',
      category: 'Research',
      year: '2025'
    },
    {
      id: 2,
      title: 'LSTM Discharge Prediction Model',
      description: 'Machine learning approach for HUC2 watershed discharge prediction',
      image: '/images.jpeg',
      category: 'Data Science',
      year: '2024'
    },
    {
      id: 3,
      title: 'Seismic Vulnerability Assessment',
      description: 'RCC structure evaluation and retrofitting using ETABS and FEMA guidelines',
      image: '/images.jpeg',
      category: 'Structural',
      year: '2022'
    }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Civil Engineering Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
          
          {/* Structural Grid */}
          <div className="absolute inset-0 opacity-60" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.15) 1px, transparent 1px),
              linear-gradient(rgba(59, 130, 246, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.08) 1px, transparent 1px),
              radial-gradient(circle at 50px 50px, rgba(245, 158, 11, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: `100px 100px, 100px 100px, 25px 25px, 25px 25px, 50px 50px`,
            animation: 'structuralMove 25s linear infinite'
          }}></div>

          {/* Topographical Lines */}
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'%3E%3Cpath fill='none' stroke='%233b82f6' stroke-width='1' stroke-opacity='0.1' d='M100,100 Q200,80 300,100 T500,100 T700,100'/%3E%3Cpath fill='none' stroke='%233b82f6' stroke-width='1' stroke-opacity='0.1' d='M80,200 Q180,180 280,200 T480,200 T680,200'/%3E%3Cpath fill='none' stroke='%233b82f6' stroke-width='1' stroke-opacity='0.1' d='M120,300 Q220,280 320,300 T520,300 T720,300'/%3E%3C/svg%3E")`,
            backgroundSize: '800px 600px',
            animation: 'topoFlow 20s ease-in-out infinite alternate'
          }}></div>

          {/* Civil Engineering Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Bridge Structure */}
            <div className="absolute top-1/5 right-1/10 w-48 h-20 opacity-10" style={{
              animation: 'bridgeGlow 8s ease-in-out infinite alternate'
            }}>
              <svg width="100%" height="100%" viewBox="0 0 200 80" fill="none">
                <path d="M20 60 L40 40 L60 60 L80 40 L100 60 L120 40 L140 60 L160 40 L180 60" 
                      stroke="rgba(59, 130, 246, 0.4)" strokeWidth="2" fill="none"/>
                <line x1="20" y1="60" x2="180" y2="60" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="3"/>
                <circle cx="40" cy="40" r="3" fill="rgba(245, 158, 11, 0.6)"/>
                <circle cx="80" cy="40" r="3" fill="rgba(245, 158, 11, 0.6)"/>
                <circle cx="120" cy="40" r="3" fill="rgba(245, 158, 11, 0.6)"/>
                <circle cx="160" cy="40" r="3" fill="rgba(245, 158, 11, 0.6)"/>
              </svg>
            </div>

            {/* Building Framework */}
            <div className="absolute bottom-1/6 left-1/12 w-32 h-40 border-2 border-blue-500/20 rounded opacity-10" style={{
              background: 'linear-gradient(90deg, transparent 20px, rgba(59, 130, 246, 0.05) 20px, rgba(59, 130, 246, 0.05) 40px, transparent 40px)',
              animation: 'frameConstruct 12s ease-in-out infinite'
            }}>
              <div className="absolute top-5 left-0 right-0 h-0.5 bg-blue-500/30" style={{
                animation: 'beamConnect 6s ease-in-out infinite alternate'
              }}></div>
              <div className="absolute top-10 left-0 right-0 h-0.5 bg-blue-500/30"></div>
              <div className="absolute top-15 left-0 right-0 h-0.5 bg-blue-500/30" style={{
                animation: 'beamConnect 6s ease-in-out infinite alternate 2s'
              }}></div>
              <div className="absolute top-20 left-0 right-0 h-0.5 bg-blue-500/30"></div>
              <div className="absolute top-28 left-0 right-0 h-0.5 bg-blue-500/30"></div>
              <div className="absolute top-32 left-0 right-0 h-0.5 bg-blue-500/30"></div>
            </div>

            {/* Load Arrow */}
            <div className="absolute top-1/4 right-1/4 opacity-40" style={{
              animation: 'loadPulse 3s ease-in-out infinite'
            }}>
              <div className="w-0 h-0 border-l-2 border-r-2 border-l-transparent border-r-transparent border-t-5 border-t-amber-400"></div>
              <div className="absolute -top-9 -left-5 text-xs text-amber-400/60 font-mono">P = 50kN</div>
            </div>

            {/* Moment Curve */}
            <div className="absolute bottom-1/3 right-1/6 w-20 h-10 border-2 border-emerald-400/30 rounded-b-full border-t-0 opacity-30" style={{
              animation: 'momentFlex 6s ease-in-out infinite'
            }}></div>

            {/* Material Strength Indicator */}
            <div className="absolute top-2/5 left-1/20 w-20 h-1.5 rounded opacity-30" style={{
              background: 'linear-gradient(90deg, rgba(16, 185, 129, 0.3) 0%, rgba(245, 158, 11, 0.3) 50%, rgba(239, 68, 68, 0.3) 100%)',
              animation: 'strengthPulse 4s ease-in-out infinite'
            }}>
              <div className="absolute -top-5 left-0 text-xs text-blue-400/50 font-mono">MPa</div>
            </div>

            {/* Technical Specifications */}
            <div className="absolute top-1/3 left-1/6 text-xs text-blue-400/40 font-mono opacity-40" style={{
              animation: 'techFloat 10s ease-in-out infinite'
            }}>
              fc&apos; = 25 MPa<br/>
              fy = 415 MPa
            </div>
            <div className="absolute top-3/5 right-1/5 text-xs text-blue-400/40 font-mono opacity-40" style={{
              animation: 'techFloat 10s ease-in-out infinite 3s'
            }}>
              E = 200 GPa<br/>
              γ = 25 kN/m³
            </div>
            <div className="absolute bottom-1/4 left-2/5 text-xs text-blue-400/40 font-mono opacity-40" style={{
              animation: 'techFloat 10s ease-in-out infinite 6s'
            }}>
              ψ = 0.6<br/>
              φ = 0.85
            </div>
          </div>
        </div>

        {/* Social Media Sidebar */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 hidden lg:block"
        >
          <div className="flex flex-col space-y-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.4 + index * 0.1, type: "spring", stiffness: 200 }}
                  className={`p-3 rounded-lg ${social.color} text-white shadow-lg transition-all duration-300 transform hover:scale-110 group`}
                  title={social.name}
                >
                  <Icon className="h-5 w-5" />
                  <span className="absolute left-full ml-3 bg-gray-900 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {social.name}
                  </span>
                </motion.a>
              )
            })}
          </div>
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Profile Image */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mx-auto w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-amber-400 shadow-2xl"
            >
              <img 
                src="/subash.jpeg" 
                alt="Subash Poudel"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/160x160/1e3a8a/ffffff?text=SP'
                }}
              />
            </motion.div>

            {/* Name and Title */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
              >
                Subash Poudel
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-xl md:text-2xl lg:text-3xl text-amber-400 font-light h-12 flex items-center justify-center"
              >
                <motion.span
                  key={currentTitle}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="typewriter"
                >
                  {titles[currentTitle]}
                </motion.span>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-lg md:text-xl max-w-3xl mx-auto text-gray-100 leading-relaxed"
            >
              MS Civil Engineering student at Jackson State University specializing in multi-hazard 
              risk assessment, geospatial analysis, and innovative engineering solutions for sustainable development.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                to="/projects"
                className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <Building className="h-5 w-5" />
                <span>View Projects</span>
              </Link>
              
              <a
                href="/CV_Subash_Poudel.pdf"
                download
                className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <Download className="h-5 w-5" />
                <span>Download CV</span>
              </a>
              
              <Link
                to="/contact"
                className="px-8 py-4 bg-transparent border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <Mail className="h-5 w-5" />
                <span>Contact Me</span>
              </Link>
            </motion.div>

            {/* Mobile Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="lg:hidden flex justify-center space-x-4 mt-8"
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.4 + index * 0.1, type: "spring", stiffness: 200 }}
                    className={`p-3 rounded-lg ${social.color} text-white shadow-lg transition-all duration-300 transform hover:scale-110`}
                    title={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                )
              })}
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-white/60 cursor-pointer"
            >
              <ArrowDown className="h-6 w-6" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Passionate about creating innovative infrastructure solutions and advancing research
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  I am currently pursuing my Master's in Civil Engineering at Jackson State University, 
                  where I work as a Graduate Research Assistant under Dr. Rocky Talchabhadel. My research 
                  focuses on multi-hazard risk assessment and geospatial analysis, particularly in coastal 
                  cities and post-wildfire debris flow scenarios.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  With experience in both academic research and practical engineering applications, 
                  I combine traditional civil engineering principles with cutting-edge technology 
                  including Python programming, GIS, and machine learning to solve complex environmental challenges.
                </p>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <Link
                  to="/about"
                  className="inline-flex items-center px-6 py-3 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-lg transition-all duration-300"
                >
                  <User className="h-5 w-5 mr-2" />
                  <span>Know More</span>
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-amber-400 rounded-2xl transform rotate-3"></div>
                <img
                  src="/subash.jpeg"
                  alt="Subash Poudel"
                  className="relative w-full h-96 object-cover rounded-2xl shadow-2xl"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x500/1e3a8a/ffffff?text=Subash+Poudel'
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills & Services Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Technical expertise and professional services offered
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Skills Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                Skills
              </h3>
              <div className="space-y-4">
                {skillsAndServices.filter(item => item.type === 'skill').map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-lg font-semibold text-gray-900 dark:text-white">
                        {skill.name}
                      </span>
                    </div>
                    <div className="h-1 bg-blue-500 rounded-full"></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Services Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                <span className="w-3 h-3 bg-emerald-500 rounded-full mr-3"></span>
                Services
              </h3>
              <div className="space-y-4">
                {skillsAndServices.filter(item => item.type === 'service').map((service, index) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-lg font-semibold text-gray-900 dark:text-white">
                        {service.name}
                      </span>
                    </div>
                    <div className="h-1 bg-emerald-500 rounded-full"></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/cv"
              className="inline-flex items-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-all duration-300"
            >
              <GraduationCap className="h-5 w-5 mr-2" />
              <span>View Complete CV</span>
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Education & Experience Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Education & Experience
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Academic background and professional journey
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                <GraduationCap className="h-6 w-6 mr-3 text-amber-500" />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {edu.degree}
                      </h4>
                      <span className="text-sm text-amber-600 dark:text-amber-500 font-medium">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 font-medium mb-1">
                      {edu.school}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                      {edu.location}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      {edu.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                <Briefcase className="h-6 w-6 mr-3 text-emerald-500" />
                Experience
              </h3>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {exp.title}
                      </h4>
                      <span className="text-sm text-emerald-600 dark:text-emerald-500 font-medium">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 font-medium mb-2">
                      {exp.company}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      {exp.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/cv"
              className="inline-flex items-center px-6 py-3 bg-slate-600 hover:bg-slate-700 text-white font-semibold rounded-lg transition-all duration-300"
            >
              <FileText className="h-5 w-5 mr-2" />
              <span>View Full CV</span>
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-200 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Achievement Highlights
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-200 max-w-2xl mx-auto">
              Building excellence through dedication, innovation, and collaboration
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-900/10 dark:bg-white/10 rounded-full mb-4 group-hover:bg-gray-900/20 dark:group-hover:bg-white/20 transition-colors duration-300">
                    <Icon className="h-8 w-8 text-gray-900 dark:text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    <CountUp
                      end={stat.value}
                      duration={2.5}
                      delay={0.5}
                      suffix={stat.label === 'Years Experience' ? '+' : ''}
                    />
                  </div>
                  <div className="text-slate-700 dark:text-slate-200 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Showcasing innovative engineering solutions and research contributions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden card-hover group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x300/1e3a8a/ffffff?text=Project+Image'
                    }}
                  />
                  <div className="absolute top-4 right-4 bg-amber-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    {project.year}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-slate-600 text-white px-3 py-1 rounded-full text-sm">
                    {project.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <Link
                    to={`/projects`}
                    className="inline-flex items-center text-amber-600 dark:text-amber-500 hover:text-amber-700 dark:hover:text-amber-400 font-medium group"
                  >
                    <span>Learn More</span>
                    <ExternalLink className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/projects"
              className="inline-flex items-center px-8 py-4 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <Building className="h-5 w-5 mr-2" />
              <span>View All Projects</span>
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Latest Blog Posts
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Insights, research findings, and thoughts on engineering and technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 px-3 py-1 rounded-full text-sm font-medium">
                      {blog.category}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      {blog.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 hover:text-amber-600 dark:hover:text-amber-500 transition-colors duration-300">
                    {blog.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(blog.date).toLocaleDateString()}
                    </div>
                    
                    <Link
                      to="/blog"
                      className="text-amber-600 dark:text-amber-500 hover:text-amber-700 dark:hover:text-amber-400 font-medium text-sm inline-flex items-center"
                    >
                      Read More
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/blog"
              className="inline-flex items-center px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <BookOpen className="h-5 w-5 mr-2" />
              <span>Read More Blogs</span>
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-200 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Let's Connect
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-200 max-w-2xl mx-auto">
              Ready to collaborate or discuss opportunities? I'd love to hear from you
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-900 dark:text-white"
            >
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 mr-4 text-slate-600 dark:text-slate-300" />
                  <span>subash.poudel@students.jsums.edu</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 mr-4 text-slate-600 dark:text-slate-300" />
                  <span>769-261-7161</span>
                </div>
              </div>

              <p className="mt-6 text-slate-700 dark:text-slate-200">
                Whether you're interested in research collaboration, project partnerships, 
                or just want to connect, I'm always open to meaningful conversations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Send className="h-5 w-5 mr-2" />
                <span>Contact Me</span>
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
