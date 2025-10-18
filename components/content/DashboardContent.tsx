import React, { useState } from 'react';
import CircularCalendar from './CircularCalendar';
import LogModal from './LogModal';

const DashboardContent: React.FC = () => {
  const [isLogModalOpen, setIsLogModalOpen] = useState(false);

  return (
    <>
      <div className="animate-fade-in flex flex-col items-center justify-center w-full py-8">
        <CircularCalendar />
        <button
          onClick={() => setIsLogModalOpen(true)}
          className="mt-8 h-14 px-8 bg-pink-500 rounded-full text-white shadow-lg hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 flex items-center justify-center space-x-3 transition-transform transform hover:scale-110"
          aria-label="Track your day"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          <span className="font-semibold text-lg">Track</span>
        </button>
        <style>{`
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
      </div>
      <LogModal isOpen={isLogModalOpen} onClose={() => setIsLogModalOpen(false)} />
    </>
  );
};

export default DashboardContent;