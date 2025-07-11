import React from 'react';

const SkillBar = ({ skill, level, color = 'primary' }) => {
  const getColorClasses = (color) => {
    const colors = {
      primary: 'bg-primary-600',
      blue: 'bg-blue-600',
      green: 'bg-green-600',
      purple: 'bg-purple-600',
      orange: 'bg-orange-600',
      red: 'bg-red-600'
    };
    return colors[color] || colors.primary;
  };

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {skill}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {level}%
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div 
          className={`h-2.5 rounded-full transition-all duration-1000 ease-out ${getColorClasses(color)}`}
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
