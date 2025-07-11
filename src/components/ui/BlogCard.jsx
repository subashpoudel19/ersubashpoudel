import React from 'react';
import { Calendar, User, Tag, Clock, ArrowRight } from 'lucide-react';
import { formatDate } from '../../utils/dateFormatter';

const BlogCard = ({ 
  title, 
  excerpt, 
  author = 'Subash Poudel',
  date, 
  category, 
  tags = [], 
  slug,
  image,
  readTime = '5 min read'
}) => {
  return (
    <article className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          {category && (
            <span className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              {category}
            </span>
          )}
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{formatDate(date)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{readTime}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 transition-colors">
          {title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {excerpt}
        </p>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.slice(0, 3).map((tag, index) => (
              <span 
                key={index}
                className="inline-flex items-center gap-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md text-xs"
              >
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
            {tags.length > 3 && (
              <span className="text-xs text-gray-500 dark:text-gray-400">
                +{tags.length - 3} more
              </span>
            )}
          </div>
        )}

        <a 
          href={`/blog/${slug}`}
          className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors group"
        >
          Read More
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </article>
  );
};

export default BlogCard;
