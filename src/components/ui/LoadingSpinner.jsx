import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingSpinner = ({ size = 'default', text = 'Loading...' }) => {
  const sizeClasses = {
    small: 'w-4 h-4',
    default: 'w-6 h-6',
    large: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-2 p-8">
      <Loader2 className={`animate-spin text-primary-600 ${sizeClasses[size]}`} />
      <p className="text-gray-600 dark:text-gray-400 text-sm">{text}</p>
    </div>
  );
};

export default LoadingSpinner;
