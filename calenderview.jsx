import React from 'react';
import { calendarAppointments, appointmentDetails } from '../data/mockData';

const CalendarView = () => {
  const currentMonth = "October 2021";
  const daysInMonth = 31;
  const startDay = 5; // October 1st was a Friday (0 = Sunday)
  
  const generateCalendarDays = () => {
    const days = [];
    const totalCells = 42; // 6 rows × 7 days
    
    // Add empty cells for days before the month starts
    for (let i = 0; i < startDay; i++) {
      days.push(null);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    
    // Fill remaining cells with null
    while (days.length < totalCells) {
      days.push(null);
    }
    
    return days;
  };

  const hasAppointment = (day) => {
    if (!day) return false;
    const dateKey = `2021-10-${day.toString().padStart(2, '0')}`;
    return calendarAppointments[dateKey];
  };

  const getAppointmentTimes = (day) => {
    if (!day) return [];
    const dateKey = `2021-10-${day.toString().padStart(2, '0')}`;
    return calendarAppointments[dateKey] || [];
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800">{currentMonth}</h3>
      </div>
      
      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1 mb-6">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
            {day}
          </div>
        ))}
        
        {generateCalendarDays().map((day, index) => (
          <div
            key={index}
            className={`aspect-square flex flex-col items-center justify-center text-sm border rounded-lg relative ${
              day ? 'hover:bg-gray-50 cursor-pointer' : ''
            } ${hasAppointment(day) ? 'bg-blue-50 border-blue-200' : 'border-gray-100'}`}
          >
            {day && (
              <>
                <span className={`font-medium ${hasAppointment(day) ? 'text-blue-700' : 'text-gray-700'}`}>
                  {day}
                </span>
                {hasAppointment(day) && (
                  <div className="absolute bottom-1 flex space-x-1">
                    {getAppointmentTimes(day).slice(0, 2).map((apt, i) => (
                      <div key={i} className="w-1 h-1 bg-blue-500 rounded-full"></div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>
      
      {/* Appointment Details */}
      <div className="space-y-3">
        <h4 className="font-semibold text-gray-800">Scheduled Appointments</h4>
        {appointmentDetails.map((appointment) => (
          <div key={appointment.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <p className="font-medium text-gray-800">{appointment.type}</p>
              <p className="text-sm text-gray-600">{appointment.doctor}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-800">{appointment.time}</p>
              <p className="text-xs text-gray-500">{appointment.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;