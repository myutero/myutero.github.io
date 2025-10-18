import React from 'react';

const SettingsContent: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Settings</h1>
      <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
        <form className="space-y-8">
          {/* Cycle Info */}
          <div>
            <h3 className="text-lg font-medium text-gray-900">Cycle Information</h3>
            <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              <div>
                <label htmlFor="cycle-length" className="block text-sm font-medium text-gray-700">Average Cycle Length (days)</label>
                <input type="number" name="cycle-length" id="cycle-length" defaultValue="28" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="period-duration" className="block text-sm font-medium text-gray-700">Average Period Duration (days)</label>
                <input type="number" name="period-duration" id="period-duration" defaultValue="5" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm" />
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200"></div>

          {/* Notifications */}
          <div>
            <h3 className="text-lg font-medium text-gray-900">Notifications</h3>
            <fieldset className="mt-4 space-y-4">
              <div className="relative flex items-start">
                <div className="flex items-center h-5">
                  <input id="period-prediction" name="notifications" type="checkbox" defaultChecked className="focus:ring-pink-500 h-4 w-4 text-pink-600 border-gray-300 rounded" />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="period-prediction" className="font-medium text-gray-700">Period Predictions</label>
                  <p className="text-gray-500">Get notified a few days before your period is expected to start.</p>
                </div>
              </div>
              <div className="relative flex items-start">
                <div className="flex items-center h-5">
                  <input id="ovulation-prediction" name="notifications" type="checkbox" className="focus:ring-pink-500 h-4 w-4 text-pink-600 border-gray-300 rounded" />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="ovulation-prediction" className="font-medium text-gray-700">Fertile Window Estimates</label>
                  <p className="text-gray-500">Receive alerts when you're likely entering your fertile window.</p>
                </div>
              </div>
            </fieldset>
          </div>

          <div className="border-t border-gray-200"></div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button type="submit" className="px-6 py-2 text-sm font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 bg-pink-500 text-white shadow-md hover:bg-pink-600">Save Changes</button>
          </div>
        </form>
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

export default SettingsContent;