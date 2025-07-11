import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Search, 
  Calendar,
  Clock,
  User,
  Tag,
  ArrowRight,
  TrendingUp,
  MessageCircle,
  Share2
} from 'lucide-react'
import { format } from 'date-fns'

export const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Earthquake-Resistant Construction in Nepal',
      excerpt: 'Exploring innovative building techniques and materials that could revolutionize earthquake safety in seismically active regions like Nepal.',
      content: 'Full blog content here...',
      author: 'Subash Poudel',
      publishDate: new Date('2024-01-15'),
      readTime: '8 min read',
      category: 'Technical Insights',
      tags: ['Earthquake Engineering', 'Construction', 'Nepal', 'Safety'],
      featuredImage: '/images/blog/earthquake-construction.jpg',
      featured: true,
      views: 1250,
      comments: 23
    },
    {
      id: 2,
      title: 'Sustainable Building Materials: A Game Changer for Green Construction',
      excerpt: 'How agricultural waste and recycled materials are transforming the construction industry towards more sustainable practices.',
      content: 'Full blog content here...',
      author: 'Subash Poudel',
      publishDate: new Date('2024-01-10'),
      readTime: '6 min read',
      category: 'Industry News',
      tags: ['Sustainability', 'Green Building', 'Materials', 'Environment'],
      featuredImage: '/images/blog/sustainable-materials.jpg',
      featured: true,
      views: 980,
      comments: 15
    },
    {
      id: 3,
      title: 'BIM Technology: Transforming Infrastructure Design and Management',
      excerpt: 'A deep dive into how Building Information Modeling is revolutionizing the way we design, construct, and maintain infrastructure projects.',
      content: 'Full blog content here...',
      author: 'Subash Poudel',
      publishDate: new Date('2024-01-05'),
      readTime: '10 min read',
      category: 'Technical Insights',
      tags: ['BIM', 'Technology', 'Digital Construction', 'Innovation'],
      featuredImage: '/images/blog/bim-technology.jpg',
      featured: false,
      views: 756,
      comments: 31
    },
    {
      id: 4,
      title: 'Project Update: Smart Building Complex Construction Progress',
      excerpt: 'Latest updates from our ongoing smart building project, showcasing integration of IoT systems and energy-efficient design.',
      content: 'Full blog content here...',
      author: 'Subash Poudel',
      publishDate: new Date('2023-12-28'),
      readTime: '4 min read',
      category: 'Project Updates',
      tags: ['Smart Buildings', 'IoT', 'Project Management', 'Progress Update'],
      featuredImage: '/images/blog/project-update.jpg',
      featured: false,
      views: 523,
      comments: 8
    },
    {
      id: 5,
      title: 'Climate Change Adaptation in Infrastructure Design',
      excerpt: 'Strategies for designing resilient infrastructure that can withstand the increasing challenges posed by climate change.',
      content: 'Full blog content here...',
      author: 'Subash Poudel',
      publishDate: new Date('2023-12-20'),
      readTime: '7 min read',
      category: 'Technical Insights',
      tags: ['Climate Change', 'Resilience', 'Adaptation', 'Infrastructure'],
      featuredImage: '/images/blog/climate-adaptation.jpg',
      featured: false,
      views: 834,
      comments: 19
    },
    {
      id: 6,
      title: 'The Role of AI in Modern Construction Management',
      excerpt: 'Examining how artificial intelligence and machine learning are optimizing construction processes and project outcomes.',
      content: 'Full blog content here...',
      author: 'Subash Poudel',
      publishDate: new Date('2023-12-15'),
      readTime: '9 min read',
      category: 'Technical Insights',
      tags: ['AI', 'Machine Learning', 'Construction Management', 'Innovation'],
      featuredImage: '/images/blog/ai-construction.jpg',
      featured: false,
      views: 1100,
      comments: 27
    }
  ]

  const categories = ['All', ...new Set(blogPosts.map(post => post.category))]
  const allTags = [...new Set(blogPosts.flatMap(post => post.tags))]
  const popularTags = allTags.slice(0, 10) // Get top 10 tags

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  const featuredPosts = blogPosts.filter(post => post.featured)
  const recentPosts = blogPosts.slice(0, 5)

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
              Engineering <span className="text-amber-400">Blog</span>
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
              Insights, updates, and innovations from the world of civil engineering. 
              Sharing knowledge, experiences, and the latest trends in construction and infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Featured Articles
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Our most popular and insightful posts
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/400x300/1e3a8a/ffffff?text=Blog+Post'
                      }}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-amber-500 text-black rounded-full text-sm font-semibold">
                        Featured
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-3 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{format(post.publishDate, 'MMM dd, yyyy')}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                      {post.title}
                    </h2>

                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center space-x-1">
                          <TrendingUp className="h-4 w-4" />
                          <span>{post.views} views</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageCircle className="h-4 w-4" />
                          <span>{post.comments} comments</span>
                        </div>
                      </div>

                      <button className="flex items-center space-x-1 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium group">
                        <span>Read More</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Content */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Blog Posts */}
            <div className="lg:col-span-3">
              {/* Search and Filter */}
              <div className="mb-8">
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search articles..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                    />
                  </div>

                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                <div className="mt-4 text-gray-600 dark:text-gray-300">
                  Showing {filteredPosts.length} of {blogPosts.length} articles
                </div>
              </div>

              {/* Blog Posts List */}
              <div className="space-y-8">
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                  >
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img
                          src={post.featuredImage}
                          alt={post.title}
                          className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/300x200/1e3a8a/ffffff?text=Blog+Post'
                          }}
                        />
                      </div>

                      <div className="md:w-2/3 p-6">
                        <div className="flex items-center space-x-4 mb-3">
                          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                            {post.category}
                          </span>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-4 w-4" />
                              <span>{format(post.publishDate, 'MMM dd, yyyy')}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="h-4 w-4" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                        </div>

                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                          {post.title}
                        </h2>

                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          {post.excerpt}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-xs"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                            <div className="flex items-center space-x-1">
                              <TrendingUp className="h-4 w-4" />
                              <span>{post.views}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MessageCircle className="h-4 w-4" />
                              <span>{post.comments}</span>
                            </div>
                            <button className="flex items-center space-x-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                              <Share2 className="h-4 w-4" />
                              <span>Share</span>
                            </button>
                          </div>

                          <button className="flex items-center space-x-1 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium group">
                            <span>Read More</span>
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              {/* No Results */}
              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <Search className="h-16 w-16 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    No articles found
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Try adjusting your search criteria
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* Recent Posts */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg"
                >
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                    Recent Posts
                  </h3>
                  <div className="space-y-4">
                    {recentPosts.map((post) => (
                      <div key={post.id} className="group cursor-pointer">
                        <h4 className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 mb-1">
                          {post.title}
                        </h4>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {format(post.publishDate, 'MMM dd, yyyy')}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Popular Tags */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg"
                >
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                    Popular Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag) => (
                      <button
                        key={tag}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900 text-gray-700 dark:text-gray-300 hover:text-blue-800 dark:hover:text-blue-200 rounded-full text-sm transition-colors duration-200"
                      >
                        #{tag}
                      </button>
                    ))}
                  </div>
                </motion.div>

                {/* Newsletter Signup */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-blue-600 text-white rounded-xl p-6 shadow-lg"
                >
                  <h3 className="text-lg font-bold mb-2">
                    Stay Updated
                  </h3>
                  <p className="text-blue-100 mb-4 text-sm">
                    Get the latest engineering insights delivered to your inbox.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-3 py-2 bg-white text-gray-900 rounded-lg focus:ring-2 focus:ring-amber-400 focus:outline-none"
                    />
                    <button className="w-full px-4 py-2 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-lg transition-colors duration-200">
                      Subscribe
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
