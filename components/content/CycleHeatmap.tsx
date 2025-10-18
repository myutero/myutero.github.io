import React from 'react';

const CycleHeatmap: React.FC = () => {
  const today = new Date();
  const days = Array.from({ length: 365 }).map((_, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    // Mock data generation
    const dayOfMonth = date.getDate();
    let level = 0; // 0: No Log, 1: Spotting, 2: Light, 3: Medium, 4: Heavy
    if (dayOfMonth >= 1 && dayOfMonth <= 5) {
      level = Math.max(1, 5 - dayOfMonth + 1); // Simulate a 5-day period
    } else if (Math.random() > 0.95) { // some random spotting
      level = 1;
    }
    return { date, level };
  }).reverse();

  const getTooltipText = (level: number) => {
    switch (level) {
      case 1: return 'Spotting';
      case 2: return 'Light';
      case 3: return 'Medium';
      case 4: return 'Heavy';
      default: return 'No Log';
    }
  };

  const getColor = (level: number) => {
    switch (level) {
      case 1: return 'bg-pink-200';
      case 2: return 'bg-pink-300';
      case 3: return 'bg-pink-400';
      case 4: return 'bg-pink-500';
      default: return 'bg-gray-100';
    }
  };

  const firstDay = days[0].date;
  const startDayOfWeek = firstDay.getDay(); // 0 for Sunday, 1 for Monday, etc.

  const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const monthLabels = [];
  let lastMonth = -1;

  for (let i = 0; i < 53; i++) {
    const dayIndex = i * 7;
    if (dayIndex >= days.length) break;
    const month = days[dayIndex].date.getMonth();
    if (month !== lastMonth) {
      monthLabels.push(
        <div key={i} style={{ gridColumn: i + 2 }} className="text-xs text-gray-500 text-center">
          {MONTHS[month]}
        </div>
      );
      lastMonth = month;
    }
  }

  return (
    <div className="inline-grid grid-flow-col gap-1 auto-cols-max">
      {/* Day labels */}
      <div className="grid grid-rows-7 gap-1 pr-2 text-xs text-gray-400">
        <div className="h-4"></div>
        <div className="h-4">Mon</div>
        <div className="h-4"></div>
        <div className="h-4">Wed</div>
        <div className="h-4"></div>
        <div className="h-4">Fri</div>
        <div className="h-4"></div>
      </div>
      <div className="grid grid-flow-col grid-rows-8 gap-1">
        {/* Month labels */}
        <div className="row-start-1 col-span-53 grid grid-cols-53 gap-1">
           {monthLabels}
        </div>
        
        {/* Empty cells for alignment */}
        {Array.from({ length: startDayOfWeek }).map((_, i) => (
          <div key={`empty-${i}`} className="w-4 h-4" />
        ))}

        {/* Data cells */}
        {days.map(({ date, level }, index) => (
          <div key={index} className="relative group">
            <div
              className={`w-4 h-4 rounded-sm ${getColor(level)}`}
            />
            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-max px-2 py-1 bg-gray-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
              {getTooltipText(level)} on {date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CycleHeatmap;