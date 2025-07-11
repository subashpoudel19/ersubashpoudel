import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import Masonry from 'react-masonry-css'
import { 
  Search, 
  Filter, 
  Calendar,
  MapPin,
  ExternalLink,
  Eye,
  Users,
  DollarSign,
  Clock
} from 'lucide-react'

export const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedYear, setSelectedYear] = useState('All')
  const [selectedTechnology, setSelectedTechnology] = useState('All')

  const projects = [
    {
      id: 1,
      title: 'Bagmati River Bridge Design',
      description: 'Comprehensive structural design and analysis of a 150m span cable-stayed bridge over Bagmati River. The project involved advanced seismic analysis, wind load calculations, and sustainable construction methodologies.',
      category: 'Infrastructure',
      year: '2024',
      location: 'Kathmandu, Nepal',
      client: 'Department of Roads',
      value: 'NPR 2.5B',
      duration: '18 months',
      team: 12,
      technologies: ['AutoCAD', 'ETABS', 'SAP2000', 'Revit'],
      image: '/images/projects/bridge-design.jpg',
      gallery: [
        '/images/projects/bridge-1.jpg',
        '/images/projects/bridge-2.jpg',
        '/images/projects/bridge-3.jpg'
      ],
      status: 'Completed',
      featured: true
    },
    {
      id: 2,
      title: 'Smart Building Complex',
      description: 'Design and construction supervision of a 20-story smart commercial complex with integrated IoT systems, energy-efficient design, and LEED Gold certification.',
      category: 'Commercial',
      year: '2023',
      location: 'Lalitpur, Nepal',
      client: 'Smart City Development',
      value: 'NPR 1.8B',
      duration: '24 months',
      team: 15,
      technologies: ['Revit', 'BIM 360', 'ETABS', 'AutoCAD'],
      image: '/images/projects/smart-building.jpg',
      gallery: [
        '/images/projects/building-1.jpg',
        '/images/projects/building-2.jpg'
      ],
      status: 'Completed',
      featured: true
    },
    {
      id: 3,
      title: 'Earthquake Resilient Housing',
      description: 'Research and development of cost-effective earthquake-resistant housing solutions for rural communities. Developed innovative construction techniques using local materials.',
      category: 'Research',
      year: '2023',
      location: 'Gorkha, Nepal',
      client: 'National Reconstruction Authority',
      value: 'NPR 500M',
      duration: '12 months',
      team: 8,
      technologies: ['ETABS', 'ANSYS', 'AutoCAD'],
      image: '/images/projects/housing-research.jpg',
      gallery: [
        '/images/projects/housing-1.jpg',
        '/images/projects/housing-2.jpg'
      ],
      status: 'Completed',
      featured: true
    },
    {
      id: 4,
      title: 'Highway Expansion Project',
      description: 'Structural design for highway expansion including multiple overpasses, retaining walls, and drainage systems along a 25km stretch.',
      category: 'Infrastructure',
      year: '2022',
      location: 'Chitwan, Nepal',
      client: 'Ministry of Physical Infrastructure',
      value: 'NPR 3.2B',
      duration: '30 months',
      team: 20,
      technologies: ['Civil 3D', 'AutoCAD', 'STAAD Pro'],
      image: '/images/projects/highway.jpg',
      gallery: [],
      status: 'Completed',
      featured: false
    },
    {
      id: 5,
      title: 'Residential Complex Design',
      description: 'Complete structural design and construction supervision of a 150-unit residential complex with modern amenities and green spaces.',
      category: 'Residential',
      year: '2022',
      location: 'Bhaktapur, Nepal',
      client: 'Private Developer',
      value: 'NPR 800M',
      duration: '20 months',
      team: 10,
      technologies: ['Revit', 'ETABS', 'AutoCAD'],
      image: '/images/projects/residential.jpg',
      gallery: [],
      status: 'Completed',
      featured: false
    },
    {
      id: 6,
      title: 'Water Treatment Plant',
      description: 'Structural design for a modern water treatment facility capable of processing 50 million liters per day with advanced filtration systems.',
      category: 'Infrastructure',
      year: '2021',
      location: 'Pokhara, Nepal',
      client: 'Nepal Water Supply Corporation',
      value: 'NPR 1.2B',
      duration: '15 months',
      team: 12,
      technologies: ['AutoCAD', 'ETABS', 'Civil 3D'],
      image: '/images/projects/water-treatment.jpg',
      gallery: [],
      status: 'Completed',
      featured: false
    }
  ]

  const categories = ['All', ...new Set(projects.map(p => p.category))]
  const years = ['All', ...new Set(projects.map(p => p.year))]
  const technologies = ['All', ...new Set(projects.flatMap(p => p.technologies))]

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory
      const matchesYear = selectedYear === 'All' || project.year === selectedYear
      const matchesTechnology = selectedTechnology === 'All' || 
                               project.technologies.includes(selectedTechnology)

      return matchesSearch && matchesCategory && matchesYear && matchesTechnology
    })
  }, [searchTerm, selectedCategory, selectedYear, selectedTechnology, projects])

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1
  }

  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Project <span className="text-amber-400">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
              Explore our comprehensive collection of engineering projects spanning 
              infrastructure development, commercial construction, and innovative research initiatives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white dark:bg-gray-900 border-b dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>

              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              >
                {years.map(year => (
                  <option key={year} value={year}>{year === 'All' ? 'All Years' : year}</option>
                ))}
              </select>

              <select
                value={selectedTechnology}
                onChange={(e) => setSelectedTechnology(e.target.value)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              >
                {technologies.map(tech => (
                  <option key={tech} value={tech}>{tech === 'All' ? 'All Technologies' : tech}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-gray-600 dark:text-gray-300">
            Showing {filteredProjects.length} of {projects.length} projects
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex w-auto -ml-6"
            columnClassName="pl-6 bg-clip-padding"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="mb-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden card-hover group"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x300/1e3a8a/ffffff?text=Project+Image'
                    }}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="px-6 py-2 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2">
                      <Eye className="h-4 w-4" />
                      <span>View Details</span>
                    </button>
                  </div>

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex space-x-2">
                    <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="px-3 py-1 bg-amber-500 text-black rounded-full text-sm font-semibold">
                        Featured
                      </span>
                    )}
                  </div>

                  <div className="absolute top-4 right-4 bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                    {project.year}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Project Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                      <MapPin className="h-4 w-4" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                      <DollarSign className="h-4 w-4" />
                      <span>{project.value}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                      <Clock className="h-4 w-4" />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                      <Users className="h-4 w-4" />
                      <span>{project.team} members</span>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2">
                    <ExternalLink className="h-4 w-4" />
                    <span>View Project Details</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </Masonry>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="text-gray-400 dark:text-gray-500 mb-4">
                <Filter className="h-16 w-16 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No projects found</h3>
                <p>Try adjusting your search criteria or filters</p>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}
