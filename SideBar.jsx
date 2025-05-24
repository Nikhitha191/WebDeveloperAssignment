import React from 'react';
import { 
  LayoutDashboard, 
  History, 
  Calendar, 
  Clock, 
  BarChart3, 
  TestTube, 
  MessageCircle, 
  HelpCircle, 
  Settings 
} from 'lucide-react';
import { navigationItems } from '../data/mockData';

const iconMap = {
  LayoutDashboard,
  History,
  Calendar,
  Clock,
  BarChart3,
  TestTube,
  MessageCircle,
  HelpCircle,
  Settings
};

const Sidebar = () => {
  return (
    <aside className="bg-gray-50 w-64 min-h-screen border-r border-gray-200">
      <div className="p-6">
        <h2 className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-4">
          General
        </h2>
        
        <nav className="space-y-2">
          {navigationItems.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <a
                key={item.title}
                href="#"
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                  item.active
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.title}</span>
              </a>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;