import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Search, 
  Filter,
  Calendar,
  Download,
  ExternalLink,
  Quote,
  Users,
  BookOpen,
  Award,
  Eye
} from 'lucide-react'

export const Research = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedYear, setSelectedYear] = useState('All')

  const publications = [
    {
      id: 1,
      title: 'Seismic Performance of Reinforced Concrete Buildings with Infill Walls: A Case Study of Nepal',
      authors: ['Subash Poudel', 'Dr. Ram Sharma', 'Prof. Sita Devi'],
      publication: 'Journal of Earthquake Engineering',
      year: '2024',
      category: 'Earthquake Engineering',
      abstract: 'This study investigates the seismic performance of reinforced concrete buildings with masonry infill walls in the context of Nepal. The research focuses on the behavior of these structures during the 2015 Gorkha earthquake and proposes improved design methodologies for earthquake-resistant construction.',
      keywords: ['Seismic analysis', 'Infill walls', 'Earthquake resistance', 'Nepal building codes'],
      doi: '10.1080/13632469.2024.123456',
      citations: 45,
      pdfFile: '/research/seismic-performance-2024.pdf',
      featured: true,
      type: 'Journal Article'
    },
    {
      id: 2,
      title: 'Sustainable Construction Materials from Agricultural Waste: A Comprehensive Review',
      authors: ['Subash Poudel', 'Dr. Maya Thapa'],
      publication: 'Construction and Building Materials',
      year: '2023',
      category: 'Sustainable Construction',
      abstract: 'A comprehensive review of sustainable construction materials derived from agricultural waste products. The study examines the feasibility, performance characteristics, and environmental benefits of using rice husk, wheat straw, and corn cob derivatives in concrete production.',
      keywords: ['Sustainable materials', 'Agricultural waste', 'Green construction', 'Environmental impact'],
      doi: '10.1016/j.conbuildmat.2023.132789',
      citations: 32,
      pdfFile: '/research/sustainable-materials-2023.pdf',
      featured: true,
      type: 'Journal Article'
    },
    {
      id: 3,
      title: 'BIM Implementation in Infrastructure Projects: Challenges and Opportunities in Developing Countries',
      authors: ['Subash Poudel', 'John Smith', 'Dr. Lisa Johnson'],
      publication: 'Automation in Construction',
      year: '2023',
      category: 'Digital Construction',
      abstract: 'This research explores the implementation of Building Information Modeling (BIM) in infrastructure projects within developing countries, identifying key challenges and proposing strategic solutions for successful adoption.',
      keywords: ['BIM', 'Infrastructure', 'Digital transformation', 'Developing countries'],
      doi: '10.1016/j.autcon.2023.104892',
      citations: 28,
      pdfFile: '/research/bim-implementation-2023.pdf',
      featured: false,
      type: 'Journal Article'
    },
    {
      id: 4,
      title: 'Post-Earthquake Damage Assessment Using UAV Technology and Machine Learning',
      authors: ['Subash Poudel', 'Dr. Tech Expert'],
      publication: 'International Conference on Earthquake Engineering',
      year: '2022',
      category: 'Earthquake Engineering',
      abstract: 'Presentation of innovative methodology for rapid post-earthquake damage assessment using unmanned aerial vehicles (UAVs) combined with machine learning algorithms for automated damage detection and classification.',
      keywords: ['UAV', 'Machine learning', 'Damage assessment', 'Post-earthquake'],
      doi: '',
      citations: 15,
      pdfFile: '/research/uav-damage-assessment-2022.pdf',
      featured: false,
      type: 'Conference Paper'
    },
    {
      id: 5,
      title: 'Climate-Resilient Infrastructure Design for Mountain Regions',
      authors: ['Subash Poudel', 'International Team'],
      publication: 'Climate Adaptation Research Report',
      year: '2022',
      category: 'Climate Adaptation',
      abstract: 'Technical report examining design considerations for infrastructure in mountain regions facing increasing climate variability, with specific focus on temperature fluctuations, precipitation changes, and extreme weather events.',
      keywords: ['Climate resilience', 'Mountain infrastructure', 'Adaptation strategies'],
      doi: '',
      citations: 12,
      pdfFile: '/research/climate-resilient-2022.pdf',
      featured: false,
      type: 'Technical Report'
    }
  ]

  const categories = ['All', ...new Set(publications.map(p => p.category))]
  const years = ['All', ...new Set(publications.map(p => p.year))]

  const filteredPublications = publications.filter(pub => {
    const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pub.abstract.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pub.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === 'All' || pub.category === selectedCategory
    const matchesYear = selectedYear === 'All' || pub.year === selectedYear

    return matchesSearch && matchesCategory && matchesYear
  })

  const researchStats = [
    { label: 'Publications', value: publications.length, icon: BookOpen },
    { label: 'Citations', value: publications.reduce((total, pub) => total + pub.citations, 0), icon: Quote },
    { label: 'Co-authors', value: 12, icon: Users },
    { label: 'Awards', value: 3, icon: Award }
  ]

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
              Research & <span className="text-amber-400">Publications</span>
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
              Advancing the field of civil engineering through innovative research, 
              collaborative studies, and evidence-based solutions for real-world challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Research Stats */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {researchStats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
                    <Icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-50 dark:bg-gray-800 border-b dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search publications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>

              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
              >
                {years.map(year => (
                  <option key={year} value={year}>{year === 'All' ? 'All Years' : year}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-4 text-gray-600 dark:text-gray-300">
            Showing {filteredPublications.length} of {publications.length} publications
          </div>
        </div>
      </section>

      {/* Publications List */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {filteredPublications.map((publication, index) => (
              <motion.article
                key={publication.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    {/* Header */}
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        publication.featured 
                          ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400'
                          : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                      }`}>
                        {publication.featured ? 'Featured' : publication.type}
                      </span>
                      <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                        {publication.category}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">
                        {publication.year}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                      {publication.title}
                    </h2>

                    {/* Authors */}
                    <div className="text-gray-600 dark:text-gray-300 mb-3">
                      <strong>Authors:</strong> {publication.authors.join(', ')}
                    </div>

                    {/* Publication Info */}
                    <div className="text-gray-600 dark:text-gray-300 mb-4">
                      <strong>Published in:</strong> {publication.publication}
                      {publication.doi && (
                        <>
                          {' • '}
                          <a 
                            href={`https://doi.org/${publication.doi}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 dark:text-blue-400 hover:underline"
                          >
                            DOI: {publication.doi}
                          </a>
                        </>
                      )}
                    </div>

                    {/* Abstract */}
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      {publication.abstract}
                    </p>

                    {/* Keywords */}
                    <div className="mb-4">
                      <span className="text-sm text-gray-600 dark:text-gray-400 font-medium mr-2">Keywords:</span>
                      <div className="inline-flex flex-wrap gap-2">
                        {publication.keywords.map((keyword) => (
                          <span
                            key={keyword}
                            className="px-2 py-1 bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-600 rounded text-xs"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center space-x-6 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Quote className="h-4 w-4" />
                        <span>{publication.citations} citations</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>Published {publication.year}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex lg:flex-col gap-3">
                    <a
                      href={publication.pdfFile}
                      download
                      className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
                    >
                      <Download className="h-4 w-4" />
                      <span>Download PDF</span>
                    </a>
                    
                    <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 font-medium rounded-lg transition-colors duration-200">
                      <Eye className="h-4 w-4" />
                      <span>View Abstract</span>
                    </button>

                    {publication.doi && (
                      <a
                        href={`https://doi.org/${publication.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 font-medium rounded-lg transition-colors duration-200"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>View Online</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* No Results */}
          {filteredPublications.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <Filter className="h-16 w-16 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No publications found
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Try adjusting your search criteria or filters
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Research Interests */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Current Research Interests
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Exploring innovative solutions for sustainable and resilient infrastructure
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.slice(1).map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {category}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {publications.filter(p => p.category === category).length} publications
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
