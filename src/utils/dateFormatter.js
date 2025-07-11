// Date formatting utilities
import { format, formatDistanceToNow, parseISO } from 'date-fns'

export const formatDate = (date, formatString = 'MMM dd, yyyy') => {
  if (!date) return ''
  
  try {
    const dateObj = typeof date === 'string' ? parseISO(date) : new Date(date)
    return format(dateObj, formatString)
  } catch (error) {
    console.error('Error formatting date:', error)
    return ''
  }
}

export const formatDateRelative = (date) => {
  if (!date) return ''
  
  try {
    const dateObj = typeof date === 'string' ? parseISO(date) : new Date(date)
    return formatDistanceToNow(dateObj, { addSuffix: true })
  } catch (error) {
    console.error('Error formatting relative date:', error)
    return ''
  }
}

export const formatDateLong = (date) => {
  return formatDate(date, 'MMMM dd, yyyy')
}

export const formatDateShort = (date) => {
  return formatDate(date, 'MM/dd/yyyy')
}

export const formatDateISO = (date) => {
  if (!date) return ''
  
  try {
    const dateObj = typeof date === 'string' ? parseISO(date) : new Date(date)
    return dateObj.toISOString()
  } catch (error) {
    console.error('Error formatting ISO date:', error)
    return ''
  }
}

export const getYear = (date) => {
  if (!date) return ''
  
  try {
    const dateObj = typeof date === 'string' ? parseISO(date) : new Date(date)
    return dateObj.getFullYear()
  } catch (error) {
    console.error('Error getting year:', error)
    return ''
  }
}

export const getMonth = (date) => {
  if (!date) return ''
  
  try {
    const dateObj = typeof date === 'string' ? parseISO(date) : new Date(date)
    return format(dateObj, 'MMMM')
  } catch (error) {
    console.error('Error getting month:', error)
    return ''
  }
}

export const isValidDate = (date) => {
  try {
    const dateObj = typeof date === 'string' ? parseISO(date) : new Date(date)
    return !isNaN(dateObj.getTime())
  } catch (error) {
    return false
  }
}

export const sortByDate = (items, dateField = 'date', ascending = false) => {
  return [...items].sort((a, b) => {
    const dateA = new Date(a[dateField])
    const dateB = new Date(b[dateField])
    
    if (ascending) {
      return dateA - dateB
    } else {
      return dateB - dateA
    }
  })
}
