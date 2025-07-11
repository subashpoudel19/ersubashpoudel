// Custom hooks for content management and data fetching
import { useState, useEffect } from 'react'
import { loadMarkdownFiles } from '../utils/contentLoader'

// Hook for loading and managing content
export const useContent = (contentType) => {
  const [content, setContent] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadContent = async () => {
      try {
        setLoading(true)
        setError(null)
        
        // For demo purposes, using static data
        // In production, this would load from markdown files or CMS
        const data = await getStaticContent(contentType)
        setContent(data)
      } catch (err) {
        console.error(`Error loading ${contentType}:`, err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    loadContent()
  }, [contentType])

  return { content, loading, error, setContent }
}

// Static content for demo purposes
const getStaticContent = async (contentType) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500))

  switch (contentType) {
    case 'blog':
      return blogPosts
    case 'projects':
      return projects
    case 'research':
      return researchPapers
    case 'vlogs':
      return vlogs
    default:
      return []
  }
}

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: 'The Future of Earthquake-Resistant Construction in Nepal',
    excerpt: 'Exploring innovative building techniques and materials that could revolutionize earthquake safety in seismically active regions like Nepal.',
    content: 'Full blog content here...',
    author: 'Subash Poudel',
    publishDate: '2024-01-15',
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
    publishDate: '2024-01-10',
    readTime: '6 min read',
    category: 'Industry News',
    tags: ['Sustainability', 'Green Building', 'Materials', 'Environment'],
    featuredImage: '/images/blog/sustainable-materials.jpg',
    featured: true,
    views: 980,
    comments: 15
  }
]

// Sample projects data
const projects = [
  {
    id: 1,
    title: 'Bagmati River Bridge Design',
    description: 'Comprehensive structural design and analysis of a 150m span cable-stayed bridge over Bagmati River.',
    category: 'Infrastructure',
    year: '2024',
    location: 'Kathmandu, Nepal',
    client: 'Department of Roads',
    value: 'NPR 2.5B',
    duration: '18 months',
    team: 12,
    technologies: ['AutoCAD', 'ETABS', 'SAP2000', 'Revit'],
    image: '/images/projects/bridge-design.jpg',
    status: 'Completed',
    featured: true
  }
]

// Sample research papers data
const researchPapers = [
  {
    id: 1,
    title: 'Seismic Performance of Reinforced Concrete Buildings with Infill Walls: A Case Study of Nepal',
    authors: ['Subash Poudel', 'Dr. Ram Sharma', 'Prof. Sita Devi'],
    publication: 'Journal of Earthquake Engineering',
    year: '2024',
    category: 'Earthquake Engineering',
    abstract: 'This study investigates the seismic performance of reinforced concrete buildings with masonry infill walls in the context of Nepal.',
    keywords: ['Seismic analysis', 'Infill walls', 'Earthquake resistance', 'Nepal building codes'],
    doi: '10.1080/13632469.2024.123456',
    citations: 45,
    featured: true,
    type: 'Journal Article'
  }
]

// Sample vlogs data
const vlogs = [
  {
    id: 1,
    title: 'Behind the Scenes: Bagmati Bridge Construction',
    description: 'Take an exclusive look at the construction process of the Bagmati River Bridge project.',
    youtubeId: 'dQw4w9WgXcQ',
    thumbnail: '/images/vlogs/bridge-construction.jpg',
    duration: '15:32',
    publishDate: '2024-01-20',
    category: 'Project Walkthrough',
    tags: ['Bridge Construction', 'Project Management', 'Engineering Process'],
    views: 25400,
    likes: 1200,
    featured: true
  }
]

// Hook for filtering and searching content
export const useContentFilter = (content, initialFilters = {}) => {
  const [filters, setFilters] = useState({
    search: '',
    category: 'All',
    year: 'All',
    tag: 'All',
    ...initialFilters
  })

  const filteredContent = content.filter(item => {
    // Search filter
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase()
      const matchesSearch = 
        item.title?.toLowerCase().includes(searchTerm) ||
        item.description?.toLowerCase().includes(searchTerm) ||
        item.excerpt?.toLowerCase().includes(searchTerm) ||
        item.tags?.some(tag => tag.toLowerCase().includes(searchTerm))
      
      if (!matchesSearch) return false
    }

    // Category filter
    if (filters.category && filters.category !== 'All') {
      if (item.category !== filters.category) return false
    }

    // Year filter
    if (filters.year && filters.year !== 'All') {
      const itemYear = new Date(item.publishDate || item.date || item.year).getFullYear().toString()
      if (itemYear !== filters.year) return false
    }

    // Tag filter
    if (filters.tag && filters.tag !== 'All') {
      if (!item.tags?.includes(filters.tag)) return false
    }

    return true
  })

  const updateFilter = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }))
  }

  const resetFilters = () => {
    setFilters({
      search: '',
      category: 'All',
      year: 'All',
      tag: 'All',
      ...initialFilters
    })
  }

  return {
    filteredContent,
    filters,
    updateFilter,
    resetFilters,
    setFilters
  }
}

// Hook for pagination
export const usePagination = (items, itemsPerPage = 10) => {
  const [currentPage, setCurrentPage] = useState(1)
  
  const totalPages = Math.ceil(items.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentItems = items.slice(startIndex, endIndex)
  
  const goToPage = (page) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)))
  }
  
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }
  
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }
  
  // Reset to first page when items change
  useEffect(() => {
    setCurrentPage(1)
  }, [items.length])
  
  return {
    currentItems,
    currentPage,
    totalPages,
    goToPage,
    nextPage,
    prevPage,
    hasNext: currentPage < totalPages,
    hasPrev: currentPage > 1
  }
}

// Hook for managing favorites/bookmarks
export const useFavorites = (storageKey = 'favorites') => {
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem(storageKey)
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(favorites))
  }, [favorites, storageKey])

  const addFavorite = (item) => {
    setFavorites(prev => {
      if (!prev.find(fav => fav.id === item.id)) {
        return [...prev, item]
      }
      return prev
    })
  }

  const removeFavorite = (itemId) => {
    setFavorites(prev => prev.filter(fav => fav.id !== itemId))
  }

  const toggleFavorite = (item) => {
    const isFavorite = favorites.find(fav => fav.id === item.id)
    if (isFavorite) {
      removeFavorite(item.id)
    } else {
      addFavorite(item)
    }
  }

  const isFavorite = (itemId) => {
    return Boolean(favorites.find(fav => fav.id === itemId))
  }

  return {
    favorites,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isFavorite
  }
}
