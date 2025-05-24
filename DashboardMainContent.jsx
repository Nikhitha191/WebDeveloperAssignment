import React from 'react';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards.jsx';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';

const DashboardMainContent = () => {
  return (
    <main className="flex-1 p-6 bg-gray-50">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Anatomy and Health Status */}
        <div className="lg:col-span-1 space-y-6">
          <AnatomySection />
          <HealthStatusCards />
        </div>
        
        {/* Middle Column - Calendar */}
        <div className="lg:col-span-1">
          <CalendarView />
        </div>
        
        {/* Right Column - Schedule and Activity */}
        <div className="lg:col-span-1 space-y-6">
          <UpcomingSchedule />
          <ActivityFeed />
        </div>
      </div>
    </main>
  );
};

export default DashboardMainContent;
