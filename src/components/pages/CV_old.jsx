import React from 'react'
import { motion } from 'framer-motion'
import { 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin,
  Github,
  ExternalLink,
  Award,
  GraduationCap,
  Briefcase,
  Code,
  Languages,
  Calendar,
  Building,
  Users,
  BookOpen,
  Star,
  Globe,
  FileText,
  Printer
} from 'lucide-react'

export const CV = () => {
  const personalInfo = {
    name: 'Subash Poudel',
    title: 'Senior Civil Engineer',
    email: 'subash.poudel@students.jsums.edu',
    phone: '+977-98xxxxxxxx',
    location: 'Kathmandu, Nepal',
    website: 'https://ersubashpoudel.com.np',
    linkedin: 'https://www.linkedin.com/in/subash-poudel-680a12221/',
    github: 'https://github.com/subashpoudel19'
  }

  const summary = `Dedicated and innovative Civil Engineer with 8+ years of experience in structural design, 
  project management, and construction supervision. Proven track record of delivering complex infrastructure 
  projects on time and within budget. Expertise in earthquake-resistant design, sustainable construction 
  practices, and BIM technology. Passionate about research and committed to advancing engineering solutions 
  for developing countries.`

  const experience = [
    {
      title: 'Senior Civil Engineer',
      company: 'ABC Engineering Consultancy',
      location: 'Kathmandu, Nepal',
      period: '2022 - Present',
      description: 'Leading structural design and analysis for major infrastructure projects including bridges, high-rise buildings, and industrial facilities.',
      achievements: [
        'Led design team for NPR 2.5B Bagmati River Bridge project',
        'Implemented BIM workflows reducing design errors by 40%',
        'Supervised structural analysis for 15+ high-rise buildings',
        'Mentored 8 junior engineers and improved team productivity by 35%'
      ]
    },
    {
      title: 'Project Manager',
      company: 'XYZ Construction Ltd.',
      location: 'Lalitpur, Nepal',
      period: '2020 - 2022',
      description: 'Managed construction projects from inception to completion, ensuring quality, timeline, and budget compliance.',
      achievements: [
        'Successfully managed projects worth NPR 500M+',
        'Achieved 98% on-time project delivery rate',
        'Reduced construction costs by 15% through optimization',
        'Led cross-functional teams of 50+ professionals'
      ]
    },
    {
      title: 'Structural Engineer',
      company: 'DEF Engineering Services',
      location: 'Kathmandu, Nepal',
      period: '2018 - 2020',
      description: 'Specialized in seismic design and analysis of reinforced concrete and steel structures.',
      achievements: [
        'Designed earthquake-resistant structures for 25+ buildings',
        'Conducted post-earthquake damage assessments after 2015 Gorkha earthquake',
        'Developed innovative retrofitting solutions for existing structures',
        'Published 3 research papers on seismic design'
      ]
    },
    {
      title: 'Junior Civil Engineer',
      company: 'GHI Consulting Engineers',
      location: 'Pokhara, Nepal',
      period: '2016 - 2018',
      description: 'Entry-level position focusing on structural design, site supervision, and quality control.',
      achievements: [
        'Assisted in design of 10+ residential and commercial buildings',
        'Conducted regular site inspections and quality assessments',
        'Prepared technical reports and construction drawings',
        'Gained expertise in AutoCAD, ETABS, and SAP2000'
      ]
    }
  ]

  const education = [
    {
      degree: 'Master of Science in Structural Engineering',
      institution: 'Tribhuvan University',
      location: 'Kathmandu, Nepal',
      period: '2018 - 2020',
      gpa: '3.85/4.0',
      thesis: 'Seismic Performance Evaluation of RC Buildings with Masonry Infill Walls',
      achievements: ['Dean\'s List', 'Research Excellence Award', 'Best Thesis Award']
    },
    {
      degree: 'Bachelor of Engineering in Civil Engineering',
      institution: 'Kathmandu University',
      location: 'Dhulikhel, Nepal',
      period: '2012 - 2016',
      gpa: '3.75/4.0',
      thesis: 'Analysis and Design of Multi-Story Building with Base Isolation',
      achievements: ['Graduated with Distinction', 'Academic Excellence Scholarship', 'Student Council Member']
    }
  ]

  const skills = {
    technical: [
      { name: 'Structural Design & Analysis', level: 95 },
      { name: 'AutoCAD', level: 95 },
      { name: 'ETABS & SAP2000', level: 90 },
      { name: 'Revit & BIM', level: 85 },
      { name: 'STAAD Pro', level: 80 },
      { name: 'ANSYS', level: 75 },
      { name: 'Civil 3D', level: 80 },
      { name: 'MS Project', level: 85 }
    ],
    soft: [
      'Project Management',
      'Team Leadership',
      'Communication',
      'Problem Solving',
      'Critical Thinking',
      'Time Management',
      'Client Relations',
      'Negotiation'
    ],
    languages: [
      { name: 'English', level: 'Fluent' },
      { name: 'Nepali', level: 'Native' },
      { name: 'Hindi', level: 'Conversational' }
    ]
  }

  const certifications = [
    {
      name: 'Professional Engineer (PE)',
      issuer: 'Nepal Engineering Council',
      date: '2023',
      id: 'NEC-PE-2023-1234'
    },
    {
      name: 'Project Management Professional (PMP)',
      issuer: 'Project Management Institute',
      date: '2022',
      id: 'PMP-2022-5678'
    },
    {
      name: 'LEED Green Associate',
      issuer: 'US Green Building Council',
      date: '2021',
      id: 'LEED-GA-2021-9012'
    },
    {
      name: 'Autodesk Certified Professional - Revit',
      issuer: 'Autodesk',
      date: '2020',
      id: 'ACP-REV-2020-3456'
    }
  ]

  const publications = [
    {
      title: 'Seismic Performance of RC Buildings with Infill Walls: A Case Study of Nepal',
      journal: 'Journal of Earthquake Engineering',
      year: '2024',
      coAuthors: ['Dr. Ram Sharma', 'Prof. Sita Devi']
    },
    {
      title: 'Sustainable Construction Materials from Agricultural Waste',
      journal: 'Construction and Building Materials',
      year: '2023',
      coAuthors: ['Dr. Maya Thapa']
    },
    {
      title: 'BIM Implementation in Infrastructure Projects',
      journal: 'Automation in Construction',
      year: '2023',
      coAuthors: ['John Smith', 'Dr. Lisa Johnson']
    }
  ]

  const projects = [
    {
      name: 'Bagmati River Bridge Design',
      role: 'Lead Structural Engineer',
      value: 'NPR 2.5B',
      period: '2023-2024'
    },
    {
      name: 'Smart Building Complex',
      role: 'Project Manager',
      value: 'NPR 1.8B',
      period: '2022-2023'
    },
    {
      name: 'Earthquake Resilient Housing',
      role: 'Research Lead',
      value: 'NPR 500M',
      period: '2022-2023'
    }
  ]

  const awards = [
    {
      title: 'Excellence in Engineering Award',
      issuer: 'Nepal Engineering Council',
      year: '2024'
    },
    {
      title: 'Young Engineer of the Year',
      issuer: 'Institution of Engineers Nepal',
      year: '2023'
    },
    {
      title: 'Research Innovation Award',
      issuer: 'Tribhuvan University',
      year: '2020'
    }
  ]

  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="py-8 bg-gradient-to-br from-blue-900 to-blue-800 text-white no-print">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Curriculum <span className="text-amber-400">Vitae</span>
            </h1>
            <p className="text-lg text-blue-100 mb-6">
              Professional resume and career highlights
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => window.print()}
                className="flex items-center space-x-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-lg transition-colors duration-200"
              >
                <Printer className="h-5 w-5" />
                <span>Print CV</span>
              </button>
              
              <a
                href="/cv/subash-poudel-cv.pdf"
                download
                className="flex items-center space-x-2 px-6 py-3 bg-white text-blue-900 hover:bg-gray-100 font-semibold rounded-lg transition-colors duration-200"
              >
                <Download className="h-5 w-5" />
                <span>Download PDF</span>
              </a>

              <a
                href="/cv/subash-poudel-cv.docx"
                download
                className="flex items-center space-x-2 px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold rounded-lg transition-colors duration-200"
              >
                <FileText className="h-5 w-5" />
                <span>Download Word</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CV Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Personal Information */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="flex-shrink-0">
              <img
                src="/images/profile-cv.jpg"
                alt="Subash Poudel"
                className="w-32 h-32 rounded-full object-cover border-4 border-blue-200 dark:border-blue-800"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/128x128/1e3a8a/ffffff?text=SP'
                }}
              />
            </div>
            
            <div className="flex-grow text-center md:text-left">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {personalInfo.name}
              </h1>
              <h2 className="text-xl text-blue-600 dark:text-blue-400 mb-4">
                {personalInfo.title}
              </h2>
              
              <div className="grid md:grid-cols-2 gap-3 text-gray-600 dark:text-gray-300">
                <div className="flex items-center justify-center md:justify-start space-x-2">
                  <Mail className="h-4 w-4" />
                  <a href={`mailto:${personalInfo.email}`} className="hover:text-blue-600 dark:hover:text-blue-400">
                    {personalInfo.email}
                  </a>
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>{personalInfo.phone}</span>
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-2">
                  <Globe className="h-4 w-4" />
                  <a href={personalInfo.website} className="hover:text-blue-600 dark:hover:text-blue-400">
                    ersubashpoudel.com.np
                  </a>
                </div>
              </div>

              <div className="flex justify-center md:justify-start space-x-4 mt-4">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors duration-200"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Professional Summary */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            <User className="h-6 w-6 text-blue-600 mr-3" />
            Professional Summary
          </h2>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {summary}
            </p>
          </div>
        </motion.section>

        {/* Work Experience */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <Briefcase className="h-6 w-6 text-blue-600 mr-3" />
            Professional Experience
          </h2>
          
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {job.title}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {job.company} • {job.location}
                    </p>
                  </div>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{job.period}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {job.description}
                </p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-1">
                    {job.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start">
                        <Star className="h-4 w-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Education */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <GraduationCap className="h-6 w-6 text-blue-600 mr-3" />
            Education
          </h2>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {edu.institution} • {edu.location}
                    </p>
                  </div>
                  <div className="text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="text-sm mt-1">GPA: {edu.gpa}</div>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  <strong>Thesis:</strong> {edu.thesis}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {edu.achievements.map((achievement, achievementIndex) => (
                    <span
                      key={achievementIndex}
                      className="px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 rounded-full text-sm"
                    >
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <Code className="h-6 w-6 text-blue-600 mr-3" />
            Skills & Competencies
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Technical Skills */}
            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Technical Skills
              </h3>
              <div className="space-y-4">
                {skills.technical.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-blue-600 dark:text-blue-400 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="h-2 bg-blue-600 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills & Languages */}
            <div className="space-y-6">
              {/* Soft Skills */}
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Soft Skills
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {skills.soft.map((skill, index) => (
                    <div key={index} className="flex items-center">
                      <Star className="h-4 w-4 text-amber-500 mr-2" />
                      <span className="text-gray-600 dark:text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Languages className="h-5 w-5 mr-2" />
                  Languages
                </h3>
                <div className="space-y-2">
                  {skills.languages.map((language, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-700 dark:text-gray-300">{language.name}</span>
                      <span className="text-blue-600 dark:text-blue-400 font-medium">
                        {language.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Certifications */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <Award className="h-6 w-6 text-blue-600 mr-3" />
            Certifications & Licenses
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {cert.name}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                  {cert.issuer}
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                  <span>Issued: {cert.date}</span>
                  <span>ID: {cert.id}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Publications */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <BookOpen className="h-6 w-6 text-blue-600 mr-3" />
            Selected Publications
          </h2>
          
          <div className="space-y-4">
            {publications.map((pub, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {pub.title}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 mb-1">
                  {pub.journal} • {pub.year}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  <strong>Co-authors:</strong> {pub.coAuthors.join(', ')}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Major Projects */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <Building className="h-6 w-6 text-blue-600 mr-3" />
            Major Projects
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {project.name}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 mb-1">
                  {project.role}
                </p>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  <p>Value: {project.value}</p>
                  <p>Period: {project.period}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Awards */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <Award className="h-6 w-6 text-blue-600 mr-3" />
            Awards & Recognition
          </h2>
          
          <div className="space-y-4">
            {awards.map((award, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {award.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400">
                    {award.issuer}
                  </p>
                </div>
                <div className="text-amber-500 font-bold text-lg">
                  {award.year}
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  )
}
