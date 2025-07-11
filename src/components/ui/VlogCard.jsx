import React from 'react';
import { Play, Calendar, Eye, Tag, Clock, ExternalLink } from 'lucide-react';
import { formatDate } from '../../utils/dateFormatter';

const VlogCard = ({ 
  title, 
  description, 
  youtubeId,
  thumbnail,
  category,
  tags = [],
  publishDate,
  duration,
  views,
  slug
}) => {
  const handlePlay = (e) => {
    e.preventDefault();
    // Open YouTube video in a modal or new tab
    window.open(`https://www.youtube.com/watch?v=${youtubeId}`, '_blank');
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Project Vlogs': 'bg-primary-100 text-primary-800 dark:bg-primary-900/20 dark:text-primary-400',
      'Site Visits': 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400',
      'Technical Tutorials': 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-400',
      'Research Updates': 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400',
      'Industry Insights': 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400'
    };
    return colors[category] || 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
  };

  const thumbnailUrl = thumbnail || `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;

  return (
    <article className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="relative aspect-video overflow-hidden cursor-pointer" onClick={handlePlay}>
        <img 
          src={thumbnailUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
          <div className="bg-red-600 hover:bg-red-700 text-white rounded-full p-4 transition-colors">
            <Play className="w-8 h-8 ml-1" fill="currentColor" />
          </div>
        </div>

        {/* Category badge */}
        {category && (
          <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(category)}`}>
            {category}
          </span>
        )}

        {/* Duration */}
        {duration && (
          <span className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
            {duration}
          </span>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{formatDate(publishDate)}</span>
          </div>
          {views && (
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              <span>{views.toLocaleString()} views</span>
            </div>
          )}
          {duration && (
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{duration}</span>
            </div>
          )}
        </div>

        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
          {title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {description}
        </p>

        {/* Tags */}
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

        {/* Action buttons */}
        <div className="flex items-center gap-3">
          <button 
            onClick={handlePlay}
            className="flex-1 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
          >
            <Play className="w-4 h-4" fill="currentColor" />
            Watch Now
          </button>
          
          <a 
            href={`/vlogs/${slug}`}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-300 font-medium"
          >
            Details
          </a>
          
          <a 
            href={`https://www.youtube.com/watch?v=${youtubeId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            title="Open on YouTube"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default VlogCard;
