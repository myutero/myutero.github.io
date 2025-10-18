import React from 'react';

interface TabsProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onTabChange }) => {
  return (
    <nav className="flex space-x-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-white
            ${
              activeTab === tab
                ? 'bg-pink-500 text-white shadow-md'
                : 'text-gray-500 hover:bg-pink-100 hover:text-pink-700'
            }
          `}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
};

export default Tabs;