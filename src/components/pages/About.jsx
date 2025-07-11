import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  MapPin, 
  Mail, 
  Phone, 
  Calendar,
  Award,
  GraduationCap,
  Briefcase,
  Star,
  ExternalLink,
  FileText,
  Send,
  ChevronRight
} from 'lucide-react'

export const About = () => {
  const skills = [
    { name: 'GIS & Remote Sensing' },
    { name: 'Python Programming' },
    { name: 'AutoCAD & Civil 3D' },
    { name: 'USGS WildCat Model' },
    { name: 'Multi-Hazard Assessment' },
    { name: 'ETABS & SAP2000' },
    { name: 'Machine Learning & Deep Learning' },
    { name: 'LSTM Neural Networks' },
    { name: 'Research & Analysis' },
    { name: 'Project Management' },
    { name: 'Seismic Analysis' },
    { name: 'Geospatial Analysis' },
    { name: 'Risk Assessment' },
    { name: 'Data Science & Analytics' },
    { name: 'Scientific Writing' },
    { name: 'Structural Engineering' }
  ]

  const timeline = [
    {
      year: '2024 - Present',
      title: 'MS in Civil Engineering',
      company: 'Jackson State University (JSU)',
      description: 'Graduate Research Assistant specializing in multi-hazard risk assessment and geospatial analysis under Dr. Rocky Talchabhadel.',
      type: 'education'
    },
    {
      year: 'May - July 2025',
      title: 'Model-Mod Intern',
      company: 'ERDC, Vicksburg, MS',
      description: 'Conducted research on post-wildfire debris flow using USGS WildCat model and Python automation scripts.',
      type: 'work'
    },
    {
      year: 'Fall 2024 - Present',
      title: 'Graduate Research Assistant',
      company: 'Jackson State University',
      description: 'Working on HICORPS project for hydrological impacts and resiliency partnership with ERDC and WOOLPERT.',
      type: 'work'
    },
    {
      year: 'Feb - May 2023',
      title: 'Civil Engineer',
      company: 'Civil Aviation Authority of Nepal (CAAN)',
      description: 'Oversaw New Terminal Building Construction at Nepalgunj Airport, addressed groundwater ingress issues.',
      type: 'work'
    },
    {
      year: 'June - Oct 2022',
      title: 'Civil Engineer',
      company: 'Quartz Group Pvt. Ltd.',
      description: 'Supervised soil field tests (SPT, DCPT, ERT), performed laboratory analyses and interpretative reports.',
      type: 'work'
    },
    {
      year: '2022',
      title: 'Bachelor in Civil Engineering',
      company: 'Tribhuvan University, Nepal',
      description: 'Completed with focus on structural engineering. Final thesis on Seismic Vulnerability Evaluation of RCC Structures.',
      type: 'education'
    }
  ]

  const certifications = [
    'HICORPS Project Graduate Research Assistant - JSU',
    'Mahatma Gandhi Scholarship - Embassy of India (2016)',
    '2nd Topper Chitwan District - SLC Board (2015)',
    'Student Member - Geological Society of America (GSA)',
    'Student Member - American Society of Civil Engineers (ASCE)',
    'Student Member - European Geosciences Union (EGU)',
    'Student Member - American Geophysical Union (AGU)',
    'General Member - Nepal Engineering Council (NEC)'
  ]

  const interests = [
    'Multi-Hazard Risk Assessment',
    'Post-Wildfire Debris Flow',
    'Geospatial Analysis',
    'Machine Learning in Engineering',
    'Climate Change Impacts',
    'Sustainable Infrastructure',
    'Research & Innovation',
    'Community Resilience'
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="text-amber-400">Subash Poudel</span>
              </h1>
              <p className="text-xl mb-8 text-gray-100 leading-relaxed">
                MS Civil Engineering student at Jackson State University specializing in 
                multi-hazard risk assessment and geospatial analysis. Graduate Research Assistant 
                working on innovative solutions for post-wildfire debris flow assessment and 
                coastal city resilience under the HICORPS project.
              </p>
              
              <div className="space-y-3 text-gray-200">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-amber-400" />
                  <span>Jackson, MS, USA</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-amber-400" />
                  <span>subash.poudel@students.jsums.edu</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-amber-400" />
                  <span>769-261-7161</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-amber-400" />
                  <span>MS Student (2024-Present)</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
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

      {/* Skills Section */}
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
              Technical Skills & Expertise
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Proficient in cutting-edge engineering tools and methodologies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center justify-between">
                  <span className="text-gray-900 dark:text-white font-medium">
                    {skill.name}
                  </span>
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Professional Journey
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Key milestones in my engineering career
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-300 dark:bg-blue-600"></div>

            {timeline.map((item, index) => {
              const getIcon = (type) => {
                switch (type) {
                  case 'work': return Briefcase
                  case 'education': return GraduationCap
                  case 'certification': return Award
                  default: return Star
                }
              }
              const Icon = getIcon(item.type)

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative flex items-start space-x-6 mb-8"
                >
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center z-10">
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-grow bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                      <span className="text-blue-600 dark:text-blue-400 font-semibold">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-amber-600 dark:text-amber-400 font-medium mb-2">
                      {item.company}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Certifications & Interests */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                <Award className="h-6 w-6 text-amber-500 mr-3" />
                Certifications & Licenses
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-900 dark:text-white">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Interests */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                <Star className="h-6 w-6 text-amber-500 mr-3" />
                Areas of Interest
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-center hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors duration-300"
                  >
                    <span className="text-blue-900 dark:text-blue-100 font-medium">
                      {interest}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research Focus Section */}
      <section className="py-20 bg-blue-50 dark:bg-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Research Focus & Academic Journey
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Currently pursuing cutting-edge research in multi-hazard risk assessment and geospatial analysis
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Current Research
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Post-Wildfire Debris Flow Assessment
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Using USGS WildCat model and Python automation for California coastal cities risk analysis
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Multi-Hazard Risk Framework
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Developing geospatial frameworks integrating future climate scenarios for coastal zone management
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Machine Learning Applications
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    LSTM networks for discharge prediction at HUC2 watershed outlets in Mississippi River Basin
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Academic Excellence
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Award className="h-6 w-6 text-amber-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      HICORPS Project Scholarship
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Graduate Research Assistant position with collaboration between JSU, ERDC, and WOOLPERT
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Award className="h-6 w-6 text-amber-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Mahatma Gandhi Scholarship
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Embassy of India scholarship for higher secondary education
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Award className="h-6 w-6 text-amber-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Academic Achievement
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      2nd Topper of Chitwan District in SLC examination (2015)
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Let's Connect & Collaborate
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Whether you're interested in research collaboration, project partnerships, or academic discussions, I'm always open to meaningful connections
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 mr-4 text-blue-200" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:subash.poudel@students.jsums.edu" className="text-blue-200 hover:text-white">
                      subash.poudel@students.jsums.edu
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 mr-4 text-blue-200" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:769-261-7161" className="text-blue-200 hover:text-white">
                      769-261-7161
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 mr-4 text-blue-200" />
                  <div>
                    <p className="font-medium">Location</p>
                    <span className="text-blue-200">Jackson, MS, USA</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <ExternalLink className="h-6 w-6 mr-4 text-blue-200" />
                  <div>
                    <p className="font-medium">ORCID</p>
                    <a 
                      href="https://orcid.org/0009-0003-1493-4920" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-200 hover:text-white"
                    >
                      0009-0003-1493-4920
                    </a>
                  </div>
                </div>
              </div>

              <p className="mt-6 text-blue-100">
                I'm particularly interested in collaborations involving multi-hazard risk assessment, 
                geospatial analysis, machine learning applications in civil engineering, and 
                sustainable infrastructure development.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Send className="h-5 w-5 mr-2" />
                <span>Send Message</span>
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
              
              <Link
                to="/cv"
                className="w-full inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <FileText className="h-5 w-5 mr-2" />
                <span>View Full CV</span>
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>

              <a
                href="/CV_Subash_Poudel.pdf"
                download
                className="w-full inline-flex items-center justify-center px-8 py-4 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <Award className="h-5 w-5 mr-2" />
                <span>Download CV</span>
                <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
