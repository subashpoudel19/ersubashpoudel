import React from 'react';
import { Calendar, MapPin, Building, Award } from 'lucide-react';

const Timeline = ({ events = [] }) => {
  const getIcon = (type) => {
    switch (type) {
      case 'education':
        return <Award className="w-4 h-4" />;
      case 'work':
        return <Building className="w-4 h-4" />;
      case 'project':
        return <MapPin className="w-4 h-4" />;
      default:
        return <Calendar className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'education':
        return 'bg-blue-600 border-blue-200';
      case 'work':
        return 'bg-green-600 border-green-200';
      case 'project':
        return 'bg-purple-600 border-purple-200';
      case 'award':
        return 'bg-yellow-600 border-yellow-200';
      default:
        return 'bg-primary-600 border-primary-200';
    }
  };

  if (!events.length) {
    return (
      <div className="text-center text-gray-500 dark:text-gray-400 py-8">
        No timeline events available.
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />
      
      <div className="space-y-8">
        {events.map((event, index) => (
          <div key={index} className="relative flex items-start gap-6">
            {/* Timeline dot */}
            <div className={`relative z-10 flex items-center justify-center w-8 h-8 rounded-full border-4 text-white ${getTypeColor(event.type)}`}>
              {getIcon(event.type)}
            </div>
            
            {/* Content */}
            <div className="flex-1 min-w-0 pb-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {event.title}
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap ml-4">
                    {event.date}
                  </span>
                </div>
                
                {event.organization && (
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                    {event.organization}
                  </p>
                )}
                
                {event.location && (
                  <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                )}
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {event.description}
                </p>
                
                {event.achievements && event.achievements.length > 0 && (
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                      Key Achievements:
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-300">
                      {event.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {event.skills && event.skills.length > 0 && (
                  <div className="mt-4">
                    <div className="flex flex-wrap gap-2">
                      {event.skills.map((skill, idx) => (
                        <span 
                          key={idx}
                          className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
