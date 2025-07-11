import React from 'react';
import { Calendar, MapPin, ExternalLink, Github, Users, Award } from 'lucide-react';
import { formatDate } from '../../utils/dateFormatter';

const ProjectCard = ({ 
  title, 
  description, 
  category,
  technologies = [],
  location,
  date,
  status = 'Completed',
  teamSize,
  images = [],
  awards = [],
  links = {},
  slug
}) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'In Progress': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'Planned': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Infrastructure': 'bg-primary-100 text-primary-800 dark:bg-primary-900/20 dark:text-primary-400',
      'Water Systems': 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400',
      'Bridges': 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400',
      'Research': 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-400',
      'Sustainability': 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
    };
    return colors[category] || 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
  };

  return (
    <article className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {images.length > 0 && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={images[0]} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          
          {/* Status and Category badges */}
          <div className="absolute top-4 left-4 flex gap-2">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(category)}`}>
              {category}
            </span>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(status)}`}>
              {status}
            </span>
          </div>

          {/* Awards */}
          {awards.length > 0 && (
            <div className="absolute top-4 right-4">
              <div className="bg-yellow-500 text-white p-2 rounded-full">
                <Award className="w-4 h-4" />
              </div>
            </div>
          )}
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
          {location && (
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{location}</span>
            </div>
          )}
          {date && (
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(date)}</span>
            </div>
          )}
          {teamSize && (
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{teamSize} members</span>
            </div>
          )}
        </div>

        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 transition-colors">
          {title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {description}
        </p>

        {/* Technologies */}
        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.slice(0, 4).map((tech, index) => (
              <span 
                key={index}
                className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md text-xs font-medium"
              >
                {tech}
              </span>
            ))}
            {technologies.length > 4 && (
              <span className="text-xs text-gray-500 dark:text-gray-400">
                +{technologies.length - 4} more
              </span>
            )}
          </div>
        )}

        {/* Awards */}
        {awards.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Awards & Recognition</h4>
            <div className="space-y-1">
              {awards.slice(0, 2).map((award, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <Award className="w-3 h-3 text-yellow-500" />
                  <span>{award}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action buttons */}
        <div className="flex items-center gap-3">
          <a 
            href={`/projects/${slug}`}
            className="flex-1 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-center"
          >
            View Details
          </a>
          
          {links.external && (
            <a 
              href={links.external}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              title="External Link"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          
          {links.github && (
            <a 
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              title="GitHub Repository"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
