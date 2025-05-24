
import React from 'react';
import { activityData } from '../data/mockData';

const ActivityFeed = () => {
  const maxAppointments = Math.max(...activityData.chartData.map(d => d.appointments));
  
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-6">Activity</h3>
      
      <div className="mb-6">
        <p className="text-2xl font-bold text-gray-800">{activityData.weeklyAppointments}</p>
        <p className="text-sm text-gray-600">appointments on this week</p>
      </div>
      
      {/* Simple bar chart */}
      <div className="space-y-3">
        <h4 className="font-medium text-gray-700 text-sm">Weekly Overview</h4>
        <div className="flex items-end space-x-2 h-24">
          {activityData.chartData.map((day, index) => (
            <div key={index} className="flex-1 flex flex-col items-center">
              <div
                className="w-full bg-blue-500 rounded-t"
                style={{
                  height: `${(day.appointments / maxAppointments) * 60}px`,
                  minHeight: day.appointments > 0 ? '8px' : '2px',
                  backgroundColor: day.appointments > 0 ? '#3B82F6' : '#E5E7EB'
                }}
              ></div>
              <span className="text-xs text-gray-500 mt-2">{day.day}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityFeed;
