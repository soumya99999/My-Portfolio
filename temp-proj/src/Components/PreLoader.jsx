// Components/Preloader.jsx
import React from 'react';

const PreLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900">
      <div className="flex flex-col items-center space-y-4">
        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        
        {/* Loading Text */}
        <p className="text-white text-lg font-semibold">Loading...</p>
      </div>
    </div>
  );
};

export default PreLoader;
