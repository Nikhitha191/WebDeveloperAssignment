import React from 'react';
import { healthStatusCards } from '../data/mockData';

const HealthStatusCards = () => {
  return (
    <div className="space-y-4">
      {healthStatusCards.map((card) => (
        <div key={card.id} className="bg-white rounded-xl shadow-sm p-4 border-l-4" style={{ borderLeftColor: card.color }}>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-gray-800">{card.title}</h4>
              <p className="text-sm text-gray-500">{card.date}</p>
            </div>
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: card.color }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;