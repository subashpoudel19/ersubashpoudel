// Content loader utility for markdown files
export const loadMarkdownFiles = async (directory) => {
  try {
    const modules = import.meta.glob('../content/**/*.md')
    const content = []
    
    for (const path in modules) {
      if (path.includes(directory)) {
        const mod = await modules[path]()
        const { attributes, body } = mod.default
        const slug = path.split('/').pop().replace('.md', '')
        content.push({ ...attributes, content: body, slug })
      }
    }
    
    return content.sort((a, b) => new Date(b.date) - new Date(a.date))
  } catch (error) {
    console.error(`Error loading content from ${directory}:`, error)
    return []
  }
}

// Search and filter utilities
export const searchContent = (content, searchTerm, searchFields = ['title', 'description', 'excerpt']) => {
  if (!searchTerm) return content
  
  const term = searchTerm.toLowerCase()
  return content.filter(item => 
    searchFields.some(field => 
      item[field]?.toLowerCase().includes(term)
    )
  )
}

export const filterByCategory = (content, category) => {
  if (!category || category === 'All') return content
  return content.filter(item => item.category === category)
}

export const filterByTag = (content, tag) => {
  if (!tag || tag === 'All') return content
  return content.filter(item => 
    item.tags && item.tags.includes(tag)
  )
}

export const filterByYear = (content, year) => {
  if (!year || year === 'All') return content
  return content.filter(item => {
    const itemYear = new Date(item.date || item.publishDate || item.year).getFullYear().toString()
    return itemYear === year
  })
}

// Pagination utility
export const paginate = (content, page = 1, itemsPerPage = 10) => {
  const startIndex = (page - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  
  return {
    items: content.slice(startIndex, endIndex),
    totalPages: Math.ceil(content.length / itemsPerPage),
    currentPage: page,
    totalItems: content.length,
    hasNext: endIndex < content.length,
    hasPrev: page > 1
  }
}

// Content statistics
export const getContentStats = (content) => {
  const categories = [...new Set(content.map(item => item.category))].filter(Boolean)
  const tags = [...new Set(content.flatMap(item => item.tags || []))].filter(Boolean)
  const years = [...new Set(content.map(item => {
    const date = item.date || item.publishDate || item.year
    return date ? new Date(date).getFullYear() : null
  }))].filter(Boolean).sort((a, b) => b - a)
  
  return {
    total: content.length,
    categories: categories.map(cat => ({
      name: cat,
      count: content.filter(item => item.category === cat).length
    })),
    tags: tags.map(tag => ({
      name: tag,
      count: content.filter(item => item.tags && item.tags.includes(tag)).length
    })).sort((a, b) => b.count - a.count),
    years: years.map(year => ({
      year,
      count: content.filter(item => {
        const itemYear = new Date(item.date || item.publishDate || item.year).getFullYear()
        return itemYear === year
      }).length
    }))
  }
}
