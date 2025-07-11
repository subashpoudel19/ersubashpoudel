import React, { useState } from 'react';
import { Download, Print, Mail, Phone, MapPin, ExternalLink, Award, GraduationCap, Briefcase, FileText, Users, Code, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import SkillBar from '../ui/SkillBar';
import Timeline from '../ui/Timeline';

const CV = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const personalInfo = {
    name: "Subash Poudel",
    title: "MS Student in Civil Engineering",
    department: "Department of Civil and Environmental Engineering",
    university: "Jackson State University (JSU)",
    address: "1315 North Jefferson Street, Apt 222, Jackson, MS 39202",
    email: "subash.poudel@students.jsums.edu",
    phone: "769-261-7161",
    orcid: "https://orcid.org/0009-0003-1493-4920",
    researchGate: "https://www.researchgate.net/profile/Subash-Poudel-9",
    linkedIn: "https://www.linkedin.com/in/subash-poudel-680a12221/"
  };

  const education = [
    {
      type: 'education',
      title: 'MS in Civil Engineering',
      organization: 'Jackson State University (JSU)',
      location: 'Jackson, MS, USA',
      date: '2024 Fall - Present',
      description: 'Graduate Research Assistant under Prof. Dr. Rocky Talchabhadel, specializing in multi-hazard risk assessment and geospatial analysis.',
      achievements: [
        'HICORPS Project Graduate Research Assistant',
        'Focus on hydrological impacts and resiliency partnership',
        'Collaboration with ERDC and WOOLPERT'
      ]
    },
    {
      type: 'education',
      title: 'Bachelor\'s Degree in Civil Engineering',
      organization: 'Tribhuvan University',
      location: 'Nepal',
      date: '2022',
      description: 'Completed undergraduate studies with focus on structural engineering and seismic analysis.',
      achievements: [
        'Final Year Thesis on Seismic Vulnerability Evaluation',
        'Specialized in RCC structure analysis and retrofitting'
      ]
    },
    {
      type: 'education',
      title: 'Higher Secondary Education',
      organization: 'Valmiki College',
      location: 'Nepal',
      date: '2017',
      description: 'Completed higher secondary education with Mahatma Gandhi Scholarship.',
      achievements: [
        'Mahatma Gandhi Scholarship Scheme recipient',
        'Awarded by Embassy of India (2016)'
      ]
    },
    {
      type: 'education',
      title: 'Secondary Education',
      organization: 'Valmiki Shiksha Sadan',
      location: 'Nepal',
      date: '2015',
      description: 'Completed secondary education with outstanding academic performance.',
      achievements: [
        '2nd Topper of Chitwan District in SLC examination'
      ]
    }
  ];

  const experience = [
    {
      type: 'work',
      title: 'Model-Mod Intern',
      organization: 'Coastal and Hydraulics Lab (CHL), Engineer Research and Development Center (ERDC)',
      location: 'Vicksburg, MS',
      date: 'May - July 2025',
      description: 'Conducted research on post-wildfire debris flow occurrence in western United States hilly regions.',
      achievements: [
        'Utilized MTBS wildfire perimeter dataset for comprehensive analysis',
        'Implemented USGS WildCat model for debris flow probability assessment',
        'Developed Python automation scripts for model workflows',
        'Integrated debris flow probability outputs into Multi-Hazard Risk Index (MHRI) framework'
      ],
      skills: ['Python', 'GIS', 'Remote Sensing', 'USGS WildCat Model', 'Debris Flow Analysis']
    },
    {
      type: 'work',
      title: 'Graduate Research Assistant',
      organization: 'Jackson State University',
      location: 'Jackson, MS',
      date: 'Fall 2024 - Present',
      description: 'Working under Dr. Rocky Talchabhadel on hydrological impacts and resiliency research.',
      achievements: [
        'HICORPS Project research collaboration',
        'Multi-hazard risk assessment studies',
        'Geospatial data analysis and modeling'
      ]
    },
    {
      type: 'work',
      title: 'Civil Engineer',
      organization: 'Civil Aviation Authority of Nepal (CAAN)',
      location: 'Nepal',
      date: 'February - May 2023',
      description: 'Oversaw the New Terminal Building Construction Project at Nepalgunj Airport as client\'s representative engineer.',
      achievements: [
        'Successfully addressed groundwater ingress issues during raft construction',
        'Ensured project stability and efficiency',
        'Collaborated with senior engineers from consultancy team'
      ]
    },
    {
      type: 'work',
      title: 'Civil Engineer',
      organization: 'Quartz Group Pvt. Ltd.',
      location: 'Nepal',
      date: 'June - October 2022',
      description: 'Supervised and conducted soil field tests and laboratory analyses.',
      achievements: [
        'Conducted SPT, DCPT, and ERT field tests',
        'Prepared interpretative reports for infrastructure projects',
        'Led Electrical Resistivity Testing (ERT) for subsurface characterization'
      ],
      skills: ['Geotechnical Engineering', 'Soil Testing', 'ERT', 'Laboratory Analysis']
    }
  ];

  const skills = {
    'Spatial Tools & Remote Sensing': [
      { skill: 'Geographic Information System (GIS)', level: 90 },
      { skill: 'Google Earth Engine', level: 85 },
      { skill: 'USGS Wildcat Model', level: 80 }
    ],
    'Programming': [
      { skill: 'Python', level: 90 },
      { skill: 'MATLAB', level: 80 },
      { skill: 'JavaScript', level: 75 },
      { skill: 'Dart', level: 70 },
      { skill: 'C', level: 65 }
    ],
    'Design & Analysis': [
      { skill: 'AutoCAD', level: 85 },
      { skill: 'Civil 3D', level: 80 },
      { skill: 'ETABS', level: 75 }
    ],
    'Web & App Development': [
      { skill: 'Flutter', level: 80 },
      { skill: 'Firebase', level: 75 },
      { skill: 'React', level: 70 }
    ]
  };

  const awards = [
    {
      title: 'Graduate Research Assistant Scholarship',
      organization: 'Jackson State University',
      date: '2024',
      description: 'HICORPS Project scholarship in collaboration with ERDC and WOOLPERT'
    },
    {
      title: 'Mahatma Gandhi Scholarship Scheme',
      organization: 'Embassy of India',
      date: '2016',
      description: 'Scholarship for higher secondary education in Valmiki College'
    },
    {
      title: '2nd Topper of Chitwan District',
      organization: 'SLC Board',
      date: '2015',
      description: 'Outstanding academic performance in secondary education'
    }
  ];

  const memberships = [
    { organization: 'Geological Society of America (GSA)', type: 'Student Member' },
    { organization: 'American Society of Civil Engineers (ASCE)', type: 'Student Member' },
    { organization: 'European Geosciences Union (EGU)', type: 'Student Member' },
    { organization: 'American Geophysical Union (AGU)', type: 'Student Member' },
    { organization: 'Nepal Engineering Council (NEC)', type: 'General Member' }
  ];

  const presentations = [
    {
      title: 'Multi-Hazard Risk Assessment in CZMA Areas: A Geospatial Framework Integrating Future Scenarios',
      authors: 'Poudel, S., Bista, S., & Talchabhadel, R.',
      year: '2025',
      venue: 'European Geosciences Union (EGU) General Assembly',
      type: 'Poster presentation'
    },
    {
      title: 'Mapping Multi-hazards in Coastal Cities Using Geospatial Techniques',
      authors: 'Poudel, S., Bista, S., & Talchabhadel, R.',
      year: '2025',
      venue: 'American Geophysical Union',
      type: 'Oral presentation'
    },
    {
      title: 'Flood Vulnerability Index of US Coastal Cities and Its use in assessing climate change impacts',
      authors: 'Poudel, S., Bista, S., & Talchabhadel, R.',
      year: '2024',
      venue: 'Research Engagement Week, Jackson State University',
      type: 'Poster presentation'
    }
  ];

  const projects = [
    {
      title: 'Post-Wildfire Debris Flow Risk Assessment for California Coast',
      description: 'Implemented USGS WildCat model for assessing debris flow probability following major wildfires in western United States.',
      technologies: ['USGS WildCat Model', 'Python', 'GIS', 'MTBS Dataset'],
      achievements: [
        'Processed comprehensive geospatial datasets',
        'Developed Python automation workflows',
        'Integrated outputs into Multi-Hazard Risk Index (MHRI) framework'
      ]
    },
    {
      title: 'Discharge Prediction at HUC2 Watersheds using LSTM',
      description: 'Developed machine learning model using Long Short-Term Memory networks to predict discharge at HUC2 watershed outlets.',
      technologies: ['Python', 'LSTM', 'Machine Learning', 'Watershed Analysis'],
      achievements: [
        'Completed as part of Machine Learning course (Fall 2024)',
        'Code and demonstration available on GitHub'
      ]
    },
    {
      title: 'Seismic Vulnerability Evaluation and Retrofitting of RCC Structures',
      description: 'Final year thesis project on seismic assessment and retrofitting strategies for reinforced concrete structures.',
      technologies: ['ETABS', 'FEMA Guidelines', 'Indian Standards'],
      achievements: [
        'Qualitative and Quantitative Assessment procedures',
        'Proposed retrofitting strategies with reinforcement modifications',
        'Ensured structural stability under various load conditions'
      ]
    }
  ];

  const references = [
    {
      name: 'Dr. Rocky Talchabhadel',
      position: 'Department of Civil and Environmental Engineering',
      organization: 'Jackson State University, Jackson, MS, USA',
      email: 'rocky.talchabhadel@jsums.edu'
    },
    {
      name: 'Prof. Dr. Shubh Narayan Pathak',
      position: 'Department of Civil Engineering',
      organization: 'Pulchowk Campus, IOE, TU, Nepal',
      email: 'pathakshubh@gmail.com'
    },
    {
      name: 'Dr. Ram Krishna Regmi',
      position: 'Department of Civil Engineering',
      organization: 'Pulchowk Campus, IOE, TU, Nepal',
      email: 'rkregmi@pcampus.edu.np'
    }
  ];

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // This would trigger a PDF download of the CV
    alert('PDF download functionality would be implemented here');
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {personalInfo.name}
              </h1>
              <p className="text-xl text-primary-600 dark:text-primary-400 mb-2">
                {personalInfo.title}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-1">
                {personalInfo.department}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                {personalInfo.university}
              </p>
            </div>
            
            <div className="flex gap-3">
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <Print className="w-4 h-4" />
                Print
              </button>
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </button>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary-600" />
                <a href={`mailto:${personalInfo.email}`} className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary-600">
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary-600" />
                <a href={`tel:${personalInfo.phone}`} className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary-600">
                  {personalInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary-600" />
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  Jackson, MS
                </span>
              </div>
              <div className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-primary-600" />
                <a href={personalInfo.orcid} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary-600">
                  ORCID Profile
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-2 mb-8 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {[
              { id: 'overview', label: 'Overview', icon: FileText },
              { id: 'education', label: 'Education', icon: GraduationCap },
              { id: 'experience', label: 'Experience', icon: Briefcase },
              { id: 'skills', label: 'Skills', icon: Code },
              { id: 'projects', label: 'Projects', icon: Globe },
              { id: 'awards', label: 'Awards', icon: Award },
              { id: 'memberships', label: 'Memberships', icon: Users }
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveSection(id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap ${
                  activeSection === id
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <motion.div
          key={activeSection}
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
        >
          {activeSection === 'overview' && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Professional Summary</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  MS Civil Engineering student at Jackson State University with specialization in multi-hazard risk assessment, 
                  geospatial analysis, and post-wildfire debris flow research. Experienced in GIS applications, remote sensing, 
                  and Python programming for geospatial data automation. Currently working as a Graduate Research Assistant 
                  under the HICORPS Project in collaboration with ERDC and WOOLPERT.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Research Interests</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Multi-Hazard Risk Assessment</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Coastal zone risk modeling and climate change impact assessment
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Geospatial Analysis</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      GIS applications and remote sensing for environmental monitoring
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Post-Wildfire Effects</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Debris flow assessment and wildfire impact modeling
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Machine Learning</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      LSTM networks for hydrological predictions and watershed analysis
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Recent Achievements</h3>
                <div className="space-y-3">
                  {awards.slice(0, 3).map((award, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-yellow-500 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{award.title}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {award.organization} • {award.date}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeSection === 'education' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Education</h2>
              <Timeline events={education} />
            </div>
          )}

          {activeSection === 'experience' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Professional Experience</h2>
              <Timeline events={experience} />
            </div>
          )}

          {activeSection === 'skills' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Technical Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category}>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{category}</h3>
                    <div className="space-y-3">
                      {skillList.map((skillData, index) => (
                        <SkillBar
                          key={index}
                          skill={skillData.skill}
                          level={skillData.level}
                          color="primary"
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'projects' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Research Projects</h2>
              <div className="space-y-6">
                {projects.map((project, index) => (
                  <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="bg-primary-100 text-primary-800 dark:bg-primary-900/20 dark:text-primary-400 px-2 py-1 rounded-md text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">Key Achievements:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-300">
                        {project.achievements.map((achievement, achIndex) => (
                          <li key={achIndex}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'awards' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Awards & Recognition</h2>
              <div className="space-y-4">
                {awards.map((award, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <Award className="w-6 h-6 text-yellow-500 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{award.title}</h3>
                      <p className="text-primary-600 dark:text-primary-400">{award.organization}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{award.date}</p>
                      <p className="text-gray-600 dark:text-gray-300 mt-2">{award.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Conference Presentations</h3>
                <div className="space-y-4">
                  {presentations.map((presentation, index) => (
                    <div key={index} className="border-l-4 border-primary-500 pl-4">
                      <h4 className="font-medium text-gray-900 dark:text-white">{presentation.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{presentation.authors}</p>
                      <p className="text-sm text-primary-600 dark:text-primary-400">
                        {presentation.venue} ({presentation.year}) - {presentation.type}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeSection === 'memberships' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Professional Memberships</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {memberships.map((membership, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <Users className="w-5 h-5 text-primary-600" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{membership.organization}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{membership.type}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">References</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {references.map((reference, index) => (
                    <div key={index} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900 dark:text-white">{reference.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">{reference.position}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{reference.organization}</p>
                      <a 
                        href={`mailto:${reference.email}`}
                        className="text-sm text-primary-600 hover:text-primary-700"
                      >
                        {reference.email}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default CV;
