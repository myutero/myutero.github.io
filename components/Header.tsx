import React from 'react';
import Tabs from './Tabs';
import UserWidget from './UserWidget';

interface HeaderProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Header: React.FC<HeaderProps> = ({ tabs, activeTab, onTabChange }) => {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
             <div className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-500" fill="currentColor" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M8 16a6 6 0 0 0 6-6c0-2-1-3.9-3-5.5s-3.5-4-3.5-4-1.5 2.5-3.5 4S2 8 2 10a6 6 0 0 0 6 6zM8 4.31C8.75 5.204 9.582 6.27 10.15 7.21C10.5 7.85 11 8.82 11 10a3 3 0 1 1-6 0c0-1.18.5-2.15 1.01-2.9C6.418 6.27 7.25 5.204 8 4.31z"/>
                </svg>
                <span className="font-bold text-xl text-gray-900">Utero</span>
            </div>
            <Tabs tabs={tabs} activeTab={activeTab} onTabChange={onTabChange} />
          </div>
          <UserWidget onTabChange={onTabChange} />
        </div>
      </div>
    </header>
  );
};

export default Header;