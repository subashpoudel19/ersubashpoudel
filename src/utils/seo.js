// SEO utilities and meta tag management
import { useEffect } from 'react'

// Default meta data
const defaultMeta = {
  title: 'Subash Poudel - Civil Engineer',
  description: 'Professional civil engineer specializing in structural design, project management, and innovative infrastructure solutions.',
  image: '/images/og-image.jpg',
  url: 'https://ersubashpoudel.com.np',
  type: 'website',
  author: 'Subash Poudel'
}

// SEO hook for setting meta tags
export const useSEO = (meta = {}) => {
  const seoData = { ...defaultMeta, ...meta }
  
  useEffect(() => {
    // Set document title
    document.title = seoData.title
    
    // Meta tags to update
    const metaTags = [
      { name: 'description', content: seoData.description },
      { name: 'author', content: seoData.author },
      { name: 'keywords', content: seoData.keywords || '' },
      
      // Open Graph tags
      { property: 'og:title', content: seoData.title },
      { property: 'og:description', content: seoData.description },
      { property: 'og:image', content: seoData.image },
      { property: 'og:url', content: seoData.url },
      { property: 'og:type', content: seoData.type },
      { property: 'og:site_name', content: 'Subash Poudel - Civil Engineer' },
      
      // Twitter Card tags
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: seoData.title },
      { name: 'twitter:description', content: seoData.description },
      { name: 'twitter:image', content: seoData.image },
      { name: 'twitter:creator', content: '@subashpoudel' },
      
      // Additional meta tags
      { name: 'robots', content: 'index, follow' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { 'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8' }
    ]

    // Update existing meta tags or create new ones
    metaTags.forEach(tag => {
      const key = Object.keys(tag)[0]
      const value = Object.values(tag)[0]
      const content = tag.content
      
      let element = document.querySelector(`meta[${key}="${value}"]`)
      
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(key, value)
        document.head.appendChild(element)
      }
      
      if (content) {
        element.setAttribute('content', content)
      }
    })

    // Add canonical link
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = seoData.url

    // Add JSON-LD structured data
    const structuredData = generateStructuredData(seoData)
    let scriptTag = document.querySelector('script[type="application/ld+json"]')
    if (!scriptTag) {
      scriptTag = document.createElement('script')
      scriptTag.type = 'application/ld+json'
      document.head.appendChild(scriptTag)
    }
    scriptTag.textContent = JSON.stringify(structuredData)

  }, [seoData])
}

// Generate structured data for better SEO
const generateStructuredData = (meta) => {
  const baseStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Subash Poudel',
    jobTitle: 'Civil Engineer',
    description: meta.description,
    url: meta.url,
    image: meta.image,
    sameAs: [
      'https://linkedin.com/in/subashpoudel',
      'https://github.com/subashpoudel'
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kathmandu',
      addressCountry: 'Nepal'
    },
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        name: 'Tribhuvan University'
      },
      {
        '@type': 'EducationalOrganization', 
        name: 'Kathmandu University'
      }
    ],
    knowsAbout: [
      'Civil Engineering',
      'Structural Design',
      'Project Management',
      'Construction Management',
      'Earthquake Engineering',
      'BIM Technology'
    ]
  }

  // Add specific structured data based on page type
  if (meta.type === 'article') {
    return {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: meta.title,
      description: meta.description,
      image: meta.image,
      datePublished: meta.publishDate,
      dateModified: meta.modifiedDate || meta.publishDate,
      author: {
        '@type': 'Person',
        name: 'Subash Poudel'
      },
      publisher: {
        '@type': 'Person',
        name: 'Subash Poudel'
      }
    }
  }

  return baseStructuredData
}

// Generate meta tags for different page types
export const generatePageMeta = (pageType, data = {}) => {
  const baseMeta = {
    url: `${defaultMeta.url}${data.slug ? `/${pageType}/${data.slug}` : `/${pageType}`}`
  }

  switch (pageType) {
    case 'home':
      return {
        ...baseMeta,
        title: 'Subash Poudel - Civil Engineer | Structural Design & Project Management',
        description: 'Professional civil engineer with 8+ years experience in structural design, project management, and construction supervision. Specializing in earthquake-resistant design and sustainable construction.',
        keywords: 'civil engineer, structural design, project management, Nepal, earthquake engineering, construction',
        url: defaultMeta.url
      }

    case 'about':
      return {
        ...baseMeta,
        title: 'About Subash Poudel - Civil Engineer | Professional Background',
        description: 'Learn about Subash Poudel\'s professional journey, education, skills, and achievements in civil engineering and structural design.',
        keywords: 'about, civil engineer, professional background, education, skills, Nepal'
      }

    case 'projects':
      return {
        ...baseMeta,
        title: 'Engineering Projects Portfolio | Subash Poudel',
        description: 'Explore civil engineering projects including bridge design, commercial buildings, and infrastructure development across Nepal.',
        keywords: 'engineering projects, portfolio, bridge design, construction, infrastructure, Nepal'
      }

    case 'research':
      return {
        ...baseMeta,
        title: 'Research & Publications | Subash Poudel Civil Engineer',
        description: 'Academic research papers and publications on earthquake engineering, sustainable construction, and structural design.',
        keywords: 'research, publications, earthquake engineering, sustainable construction, academic papers'
      }

    case 'blog':
      if (data.title) {
        return {
          ...baseMeta,
          title: `${data.title} | Subash Poudel Blog`,
          description: data.excerpt || data.description,
          keywords: data.tags ? data.tags.join(', ') : 'engineering, blog, civil engineering',
          type: 'article',
          publishDate: data.publishDate || data.date,
          image: data.featuredImage || defaultMeta.image
        }
      }
      return {
        ...baseMeta,
        title: 'Engineering Blog | Insights & Updates by Subash Poudel',
        description: 'Read the latest insights on civil engineering, construction technology, project management, and industry trends.',
        keywords: 'engineering blog, civil engineering, construction, technology, insights'
      }

    case 'contact':
      return {
        ...baseMeta,
        title: 'Contact Subash Poudel - Civil Engineer | Project Consultation',
        description: 'Get in touch for engineering consultation, project collaboration, or professional services. Based in Kathmandu, Nepal.',
        keywords: 'contact, civil engineer, consultation, projects, Nepal, Kathmandu'
      }

    default:
      return baseMeta
  }
}

// Utility to extract reading time from content
export const calculateReadingTime = (content) => {
  if (!content) return '1 min read'
  
  const wordsPerMinute = 200
  const words = content.trim().split(/\s+/).length
  const readingTime = Math.ceil(words / wordsPerMinute)
  
  return `${readingTime} min read`
}

// Generate breadcrumb structured data
export const generateBreadcrumbStructuredData = (breadcrumbs) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url
    }))
  }
}
