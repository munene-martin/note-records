import React from "react";

const RateLimit = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="w-64 bg-gray-800 border-2 border-green-500 rounded-xl shadow-lg p-4 text-center">
        <h2 className="text-lg font-semibold text-green-400 mb-2">
          Rate Limit
        </h2>
        <p className="text-gray-300 text-sm">
          Limity active to prevent overload giggity😂.
        </p>
        
      </div>
    </div>
  );
};

export default RateLimit;
