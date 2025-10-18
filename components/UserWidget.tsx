import React, { useState, useEffect, useRef } from 'react';

interface UserWidgetProps {
  onTabChange: (tab: string) => void;
}

const UserWidget: React.FC<UserWidgetProps> = ({ onTabChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  const handleProfileClick = () => {
    onTabChange('Account');
    setIsOpen(false);
  };

  const handleSettingsClick = () => {
    onTabChange('Settings');
    setIsOpen(false);
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-3 p-2 rounded-full hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-white"
      >
        <img
          className="h-8 w-8 rounded-full object-cover"
          src="https://picsum.photos/100/100"
          alt="User avatar"
        />
        <span className="text-sm font-medium text-gray-800 hidden sm:block">Alex Hartman</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 hidden sm:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-20 animate-fade-in-down">
          <button
            onClick={handleProfileClick}
            className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-pink-100 hover:text-pink-800"
          >
            Your Profile
          </button>
          <button
            onClick={handleSettingsClick}
            className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-pink-100 hover:text-pink-800"
          >
            Settings
          </button>
          <div className="border-t border-gray-200 my-1"></div>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-100 hover:text-pink-800"
          >
            Sign out
          </a>
        </div>
      )}
      <style>{`
        @keyframes fade-in-down {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.2s ease-out;
        }
      `}</style>
    </div>
  );
};

export default UserWidget;