import React from 'react'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} Subash Poudel. All rights reserved. Created by Subash Poudel.
          </p>
        </div>
      </div>
    </footer>
  )
}
