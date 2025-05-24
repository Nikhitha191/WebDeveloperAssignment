import React from 'react';
import { upcomingSchedule } from '../data/mockData';
import SimpleAppointmentCard from './SimpleAppointmentCard';

const UpcomingSchedule = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-6">The Upcoming Schedule</h3>
      
      <div className="space-y-6">
        {upcomingSchedule.map((daySchedule, dayIndex) => (
          <div key={dayIndex}>
            <h4 className="font-medium text-gray-700 mb-3">{daySchedule.day}</h4>
            <div className="space-y-3">
              {daySchedule.appointments.map((appointment) => (
                <SimpleAppointmentCard
                  key={appointment.id}
                  appointment={appointment}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingSchedule;
