
import React from 'react';
import { healthIndicators } from '../data/mockData';

const AnatomySection = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 relative">
      <h3 className="text-lg font-semibold text-gray-800 mb-6">Body Overview</h3>
      
      <div className="relative mx-auto w-64 h-80">
        {/* Human body silhouette - using a simple SVG representation */}
        <svg
          viewBox="0 0 200 320"
          className="w-full h-full text-gray-300 fill-current"
        >
          {/* Head */}
          <ellipse cx="100" cy="30" rx="25" ry="30" />
          {/* Neck */}
          <rect x="90" y="55" width="20" height="15" />
          {/* Torso */}
          <rect x="70" y="70" width="60" height="120" rx="15" />
          {/* Arms */}
          <rect x="45" y="80" width="15" height="80" rx="7" />
          <rect x="140" y="80" width="15" height="80" rx="7" />
          {/* Legs */}
          <rect x="80" y="190" width="15" height="120" rx="7" />
          <rect x="105" y="190" width="15" height="120" rx="7" />
        </svg>
        
        {/* Health indicators positioned over the body */}
        {healthIndicators.map((indicator) => (
          <div
            key={indicator.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2"
            style={{
              top: indicator.position.top,
              left: indicator.position.left,
            }}
          >
            <div className="relative">
              <div
                className="w-3 h-3 rounded-full border-2 border-white shadow-lg"
                style={{ backgroundColor: indicator.color }}
              ></div>
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 whitespace-nowrap">
                <div className="bg-white px-2 py-1 rounded-md shadow-md border text-xs font-medium text-gray-700">
                  {indicator.name}
                  <div
                    className="w-2 h-2 rounded-full inline-block ml-2"
                    style={{ backgroundColor: indicator.color }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnatomySection;