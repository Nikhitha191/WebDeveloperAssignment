import React from 'react';
import { Search, Bell, Plus } from 'lucide-react';
import { userProfile } from '../data/mockData';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-blue-600">Healthcare.</h1>
      </div>
      
      <div className="flex items-center space-x-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
          />
        </div>
        
        <button className="relative p-2 text-gray-600 hover:text-gray-800 transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        
        <button className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors">
          <Plus className="w-5 h-5" />
        </button>
        
        <div className="flex items-center space-x-3">
          <img
            src={userProfile.avatar}
            alt={userProfile.name}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="text-gray-700 font-medium">{userProfile.name}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;