import React, { useState } from 'react';

interface LogModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SYMPTOMS = ['Cramps', 'Headache', 'Bloating', 'Fatigue', 'Acne', 'Nausea', 'Tender Breasts', 'Mood Swings'];
const SEVERITY_LEVELS = ['Mild', 'Moderate', 'Severe'];

const LogModal: React.FC<LogModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [loggedSymptoms, setLoggedSymptoms] = useState<Record<string, string>>({});

  const handleSymptomToggle = (symptom: string) => {
    setLoggedSymptoms(prev => {
      const newSymptoms = { ...prev };
      if (newSymptoms[symptom]) {
        delete newSymptoms[symptom]; // Deselect if already selected
      } else {
        newSymptoms[symptom] = 'Mild'; // Select with default severity
      }
      return newSymptoms;
    });
  };

  const handleSeverityChange = (symptom: string, severity: string) => {
    setLoggedSymptoms(prev => ({
      ...prev,
      [symptom]: severity,
    }));
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-fade-in-fast"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div 
        className="bg-white p-8 rounded-lg shadow-2xl max-w-2xl w-full mx-auto relative animate-slide-up"
        onClick={e => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          aria-label="Close log entry form"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Log Your Day</h1>
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
            <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {SYMPTOMS.map(symptom => {
                const isSelected = !!loggedSymptoms[symptom];
                return (
                  <div key={symptom} className={`p-3 border rounded-lg transition-all duration-200 ${isSelected ? 'bg-pink-50 border-pink-300' : 'bg-white border-gray-200 hover:border-gray-300'}`}>
                    <button
                      type="button"
                      onClick={() => handleSymptomToggle(symptom)}
                      className="w-full text-left font-medium text-gray-700"
                    >
                      {symptom}
                    </button>
                    {isSelected && (
                      <div className="mt-3 flex items-center space-x-1 animate-fade-in-fast">
                        {SEVERITY_LEVELS.map(level => (
                          <button
                            key={level}
                            type="button"
                            onClick={() => handleSeverityChange(symptom, level)}
                            className={`px-2 py-1 text-xs rounded-md flex-1 transition-colors duration-200 ${
                              loggedSymptoms[symptom] === level
                                ? 'bg-pink-500 text-white font-semibold'
                                : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                            }`}
                          >
                            {level}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
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
        @keyframes fade-in-fast { 0% { opacity: 0; } 100% { opacity: 1; } }
        @keyframes slide-up { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
        .animate-fade-in-fast { animation: fade-in-fast 0.2s ease-out; }
        .animate-slide-up { animation: slide-up 0.3s ease-out; }
      `}</style>
    </div>
  );
};

export default LogModal;