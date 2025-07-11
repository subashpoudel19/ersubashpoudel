import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Play, 
  Search, 
  Calendar,
  Clock,
  Eye,
  ThumbsUp,
  Share2,
  ExternalLink,
  Filter
} from 'lucide-react'
import { format } from 'date-fns'

export const Vlogs = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const vlogs = [
    {
      id: 1,
      title: 'Behind the Scenes: Bagmati Bridge Construction',
      description: 'Take an exclusive look at the construction process of the Bagmati River Bridge project, featuring interviews with the construction team and detailed explanations of the engineering challenges.',
      youtubeId: 'dQw4w9WgXcQ', // Replace with actual YouTube video IDs
      thumbnail: '/images/vlogs/bridge-construction.jpg',
      duration: '15:32',
      publishDate: new Date('2024-01-20'),
      category: 'Project Walkthrough',
      tags: ['Bridge Construction', 'Project Management', 'Engineering Process'],
      views: 25400,
      likes: 1200,
      featured: true
    },
    {
      id: 2,
      title: 'Earthquake Engineering Explained: Building for Safety',
      description: 'A comprehensive explanation of earthquake engineering principles, covering base isolation, damping systems, and how buildings are designed to withstand seismic forces.',
      youtubeId: 'dQw4w9WgXcQ',
      thumbnail: '/images/vlogs/earthquake-engineering.jpg',
      duration: '12:45',
      publishDate: new Date('2024-01-15'),
      category: 'Tutorial',
      tags: ['Earthquake Engineering', 'Structural Design', 'Safety'],
      views: 18700,
      likes: 950,
      featured: true
    },
    {
      id: 3,
      title: 'Smart Building Technology Integration',
      description: 'Exploring the integration of IoT sensors, automated systems, and energy management technologies in our latest smart building project.',
      youtubeId: 'dQw4w9WgXcQ',
      thumbnail: '/images/vlogs/smart-building.jpg',
      duration: '10:18',
      publishDate: new Date('2024-01-10'),
      category: 'Industry Insights',
      tags: ['Smart Buildings', 'IoT', 'Technology', 'Innovation'],
      views: 14200,
      likes: 780,
      featured: false
    },
    {
      id: 4,
      title: 'Day in the Life of a Civil Engineer',
      description: 'Follow me through a typical day as a civil engineer, from site visits and design reviews to team meetings and project planning.',
      youtubeId: 'dQw4w9WgXcQ',
      thumbnail: '/images/vlogs/day-in-life.jpg',
      duration: '8:56',
      publishDate: new Date('2024-01-05'),
      category: 'Personal',
      tags: ['Career', 'Work Life', 'Engineering Life'],
      views: 31500,
      likes: 1800,
      featured: false
    },
    {
      id: 5,
      title: 'Sustainable Construction Materials Deep Dive',
      description: 'An in-depth look at sustainable construction materials, including recycled concrete, bamboo reinforcement, and bio-based composites.',
      youtubeId: 'dQw4w9WgXcQ',
      thumbnail: '/images/vlogs/sustainable-materials.jpg',
      duration: '13:22',
      publishDate: new Date('2023-12-28'),
      category: 'Tutorial',
      tags: ['Sustainability', 'Materials', 'Green Construction'],
      views: 22100,
      likes: 1050,
      featured: false
    },
    {
      id: 6,
      title: 'BIM Software Tutorial: Getting Started with Revit',
      description: 'A beginner-friendly tutorial on Building Information Modeling using Autodesk Revit, covering basic tools and workflows.',
      youtubeId: 'dQw4w9WgXcQ',
      thumbnail: '/images/vlogs/bim-tutorial.jpg',
      duration: '18:44',
      publishDate: new Date('2023-12-20'),
      category: 'Tutorial',
      tags: ['BIM', 'Revit', 'Software', 'Design'],
      views: 45600,
      likes: 2300,
      featured: false
    }
  ]

  const categories = ['All', ...new Set(vlogs.map(vlog => vlog.category))]
  const allTags = [...new Set(vlogs.flatMap(vlog => vlog.tags))]

  const filteredVlogs = vlogs.filter(vlog => {
    const matchesSearch = vlog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vlog.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vlog.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === 'All' || vlog.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  const featuredVlogs = vlogs.filter(vlog => vlog.featured)
  const latestVlog = vlogs[0]

  const VideoCard = ({ vlog, featured = false }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
    >
      <div className="relative">
        <img
          src={vlog.thumbnail}
          alt={vlog.title}
          className="w-full h-48 object-cover"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/400x300/1e3a8a/ffffff?text=Video+Thumbnail'
          }}
        />
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="w-16 h-16 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
            <Play className="h-8 w-8 text-white ml-1" />
          </button>
        </div>

        {/* Duration */}
        <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
          {vlog.duration}
        </div>

        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-2 left-2">
            <span className="px-3 py-1 bg-red-600 text-white rounded-full text-sm font-semibold">
              Featured
            </span>
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-2 right-2">
          <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">
            {vlog.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
          {vlog.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {vlog.description}
        </p>

        <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4" />
            <span>{format(vlog.publishDate, 'MMM dd, yyyy')}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Eye className="h-4 w-4" />
            <span>{vlog.views.toLocaleString()} views</span>
          </div>
          <div className="flex items-center space-x-1">
            <ThumbsUp className="h-4 w-4" />
            <span>{vlog.likes.toLocaleString()}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {vlog.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-xs"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <button className="flex items-center space-x-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-200">
            <Play className="h-4 w-4" />
            <span>Watch Now</span>
          </button>

          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
              <Share2 className="h-4 w-4" />
            </button>
            <a
              href={`https://youtube.com/watch?v=${vlog.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )

  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-red-600 to-red-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Engineering <span className="text-yellow-400">Vlogs</span>
            </h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto leading-relaxed">
              Visual stories from the engineering world. Watch behind-the-scenes content, 
              tutorials, and insights from real projects and construction sites.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Latest Video */}
      {latestVlog && (
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Latest Video
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Check out our most recent upload
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid lg:grid-cols-2 gap-8 items-center"
            >
              <div className="relative">
                <img
                  src={latestVlog.thumbnail}
                  alt={latestVlog.title}
                  className="w-full h-64 lg:h-80 object-cover rounded-xl"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/600x400/1e3a8a/ffffff?text=Latest+Video'
                  }}
                />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Play className="h-10 w-10 text-white ml-1" />
                  </button>
                </div>

                <div className="absolute bottom-4 right-4 bg-black/80 text-white px-3 py-1 rounded text-lg font-semibold">
                  {latestVlog.duration}
                </div>
              </div>

              <div>
                <div className="mb-4">
                  <span className="px-4 py-2 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-sm font-semibold">
                    {latestVlog.category}
                  </span>
                </div>

                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {latestVlog.title}
                </h2>

                <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                  {latestVlog.description}
                </p>

                <div className="flex items-center space-x-6 mb-6 text-gray-500 dark:text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5" />
                    <span>{format(latestVlog.publishDate, 'MMM dd, yyyy')}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Eye className="h-5 w-5" />
                    <span>{latestVlog.views.toLocaleString()} views</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ThumbsUp className="h-5 w-5" />
                    <span>{latestVlog.likes.toLocaleString()}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {latestVlog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <button className="flex items-center space-x-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200">
                    <Play className="h-5 w-5" />
                    <span>Watch Now</span>
                  </button>
                  
                  <a
                    href={`https://youtube.com/watch?v=${latestVlog.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 font-semibold rounded-lg transition-colors duration-200"
                  >
                    <ExternalLink className="h-5 w-5" />
                    <span>View on YouTube</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Featured Videos */}
      {featuredVlogs.length > 0 && (
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Featured Videos
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Our most popular and educational content
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {featuredVlogs.map((vlog, index) => (
                <motion.div
                  key={vlog.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <VideoCard vlog={vlog} featured={true} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Videos */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filter */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search videos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
              </div>

              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div className="mt-4 text-gray-600 dark:text-gray-300">
              Showing {filteredVlogs.length} of {vlogs.length} videos
            </div>
          </div>

          {/* Video Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVlogs.map((vlog, index) => (
              <motion.div
                key={vlog.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <VideoCard vlog={vlog} />
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredVlogs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <Filter className="h-16 w-16 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No videos found
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Try adjusting your search criteria or filters
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* YouTube Channel CTA */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Subscribe for More Content
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Get notified when new engineering videos are published. Join our 
              growing community of engineering enthusiasts!
            </p>
            <a
              href="https://youtube.com/@subashpoudel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 px-8 py-4 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105"
            >
              <Play className="h-6 w-6" />
              <span>Subscribe on YouTube</span>
              <ExternalLink className="h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
