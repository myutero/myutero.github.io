import React from 'react';
import CycleHeatmap from './CycleHeatmap';

const InsightsContent: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Your Cycle Insights</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Cycle Length Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Average Cycle Length</h2>
          <p className="text-5xl font-bold text-pink-500">28 <span className="text-2xl text-gray-500 font-medium">days</span></p>
          <p className="text-gray-500 mt-2">Based on your last 3 cycles.</p>
        </div>
        {/* Period Prediction Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Next Period Prediction</h2>
          <p className="text-5xl font-bold text-pink-500">12 <span className="text-2xl text-gray-500 font-medium">days</span></p>
          <p className="text-gray-500 mt-2">Around October 25th.</p>
        </div>
      </div>
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Log Activity</h2>
        <p className="text-gray-600 mb-4">Your activity over the last year. Hover over a square for more details.</p>
        <div className="overflow-x-auto">
            <CycleHeatmap />
        </div>
      </div>
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
  );
};

export default InsightsContent;