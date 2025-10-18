import React from 'react';

const LogContent: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Log Your Day</h1>
      <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
        <form className="space-y-6">
          {/* Date Selector */}
          <div>
            <label htmlFor="log-date" className="block text-sm font-medium text-gray-700">Date</label>
            <input type="date" id="log-date" name="log-date" defaultValue={new Date().toISOString().split('T')[0]} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm" />
          </div>
          
          {/* Flow */}
          <div>
            <h3 className="text-lg font-medium text-gray-900">Flow</h3>
            <fieldset className="mt-2">
              <legend className="sr-only">Period Flow</legend>
              <div className="flex items-center space-x-4 flex-wrap gap-y-2">
                {['None', 'Spotting', 'Light', 'Medium', 'Heavy'].map(flow => (
                  <div key={flow} className="flex items-center">
                    <input id={`flow-${flow}`} name="flow" type="radio" className="focus:ring-pink-500 h-4 w-4 text-pink-600 border-gray-300" />
                    <label htmlFor={`flow-${flow}`} className="ml-2 block text-sm font-medium text-gray-700">{flow}</label>
                  </div>
                ))}
              </div>
            </fieldset>
          </div>

          {/* Symptoms */}
          <div>
            <h3 className="text-lg font-medium text-gray-900">Symptoms</h3>
            <fieldset className="mt-2">
              <legend className="sr-only">Symptoms</legend>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {['Cramps', 'Headache', 'Bloating', 'Fatigue', 'Acne', 'Nausea'].map(symptom => (
                  <div key={symptom} className="relative flex items-start">
                    <div className="flex items-center h-5">
                      <input id={`symptom-${symptom}`} name="symptoms" type="checkbox" className="focus:ring-pink-500 h-4 w-4 text-pink-600 border-gray-300 rounded" />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor={`symptom-${symptom}`} className="font-medium text-gray-700">{symptom}</label>
                    </div>
                  </div>
                ))}
              </div>
            </fieldset>
          </div>
          
          {/* Notes */}
          <div>
            <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Notes</label>
            <div className="mt-1">
              <textarea id="notes" name="notes" rows={3} className="shadow-sm focus:ring-pink-500 focus:border-pink-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="Any additional details..."></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button type="submit" className="px-6 py-2 text-sm font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 bg-pink-500 text-white shadow-md hover:bg-pink-600">Save Log</button>
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

export default LogContent;