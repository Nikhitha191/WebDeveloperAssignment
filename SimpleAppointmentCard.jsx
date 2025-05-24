import React from 'react';
import { Clock, User, Heart, Eye, Brain } from 'lucide-react';

const getAppointmentIcon = (type) => {
  const iconMap = {
    checkup: User,
    specialist: Heart,
    ophthalmologist: Eye,
    cardiologist: Heart,
    neurologist: Brain
  };
  
  const Icon = iconMap[type] || Clock;
  return <Icon className="w-4 h-4" />;
};

const getAppointmentColor = (type) => {
  const colorMap = {
    checkup: 'text-green-600 bg-green-100',
    specialist: 'text-blue-600 bg-blue-100',
    ophthalmologist: 'text-purple-600 bg-purple-100',
    cardiologist: 'text-red-600 bg-red-100',
    neurologist: 'text-indigo-600 bg-indigo-100'
  };
  
  return colorMap[type] || 'text-gray-600 bg-gray-100';
};

const SimpleAppointmentCard = ({ appointment }) => {
  const colorClass = getAppointmentColor(appointment.type);
  
  return (
    <div className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
      <div className={`p-2 rounded-lg ${colorClass}`}>
        {getAppointmentIcon(appointment.type)}
      </div>
      
      <div className="flex-1">
        <h5 className="font-medium text-gray-800">{appointment.title}</h5>
        <p className="text-sm text-gray-600">{appointment.time}</p>
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;