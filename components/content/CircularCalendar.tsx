import React, { useState, useEffect } from 'react';

const CircularCalendar: React.FC = () => {
    const [dateInfo, setDateInfo] = useState({
        dayOfMonth: 1,
        monthAbbr: 'JAN',
        daysInMonth: 31,
    });
    const [animatedArcLength, setAnimatedArcLength] = useState(0);

    useEffect(() => {
        const today = new Date();
        const dayOfMonth = today.getDate();
        const monthIndex = today.getMonth();
        const year = today.getFullYear();
        const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

        const MONTH_ABBREVIATIONS = [
            'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
            'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
        ];
        const monthAbbr = MONTH_ABBREVIATIONS[monthIndex];

        setDateInfo({ dayOfMonth, monthAbbr, daysInMonth });
    }, []);

    const { dayOfMonth, monthAbbr, daysInMonth } = dateInfo;

    // --- SVG & Style Constants ---
    const SVG_SIZE = 300;
    const CENTER = SVG_SIZE / 2;
    const ARC_THICKNESS = 18;
    const RING_THICKNESS = 2;
    const DOT_RADIUS = 3;
    const PADDING = 30; // Increased padding to make space for the widget

    const ARC_RADIUS = CENTER - PADDING - ARC_THICKNESS / 2;
    const DOT_RADIUS_PATH = ARC_RADIUS;
    const INNER_RING_RADIUS = ARC_RADIUS - ARC_THICKNESS / 2 - RING_THICKNESS / 2 - 2;
    const OUTER_RING_RADIUS = ARC_RADIUS + ARC_THICKNESS / 2 + RING_THICKNESS / 2 + 2;
    
    // --- Calculations for Rendering ---
    const circumference = 2 * Math.PI * ARC_RADIUS;
    const visibleArcLength = (dayOfMonth / daysInMonth) * circumference;

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimatedArcLength(visibleArcLength);
        }, 100);

        return () => clearTimeout(timer);
    }, [visibleArcLength]);

    const dots = Array.from({ length: daysInMonth }).map((_, i) => {
        const dayNumber = i + 1;
        const angle = (dayNumber / daysInMonth) * 360;
        const angleInRadians = (angle - 90) * (Math.PI / 180);

        const x = CENTER + DOT_RADIUS_PATH * Math.cos(angleInRadians);
        const y = CENTER + DOT_RADIUS_PATH * Math.sin(angleInRadians);

        const isDayPassed = dayNumber <= dayOfMonth;
        const dotColor = isDayPassed ? 'fill-pink-500' : 'fill-gray-300';

        return <circle key={`dot-${i}`} cx={x} cy={y} r={DOT_RADIUS} className={dotColor} />;
    });

    // --- Next Period Widget Calculation ---
    const nextPeriodDays = 12; // Using hardcoded value
    const nextPeriodDate = new Date();
    nextPeriodDate.setDate(new Date().getDate() + nextPeriodDays);
    const formattedNextPeriod = nextPeriodDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    
    const nextPeriodDayNumber = dayOfMonth + nextPeriodDays;
    const widgetAngle = (nextPeriodDayNumber / daysInMonth) * 360;
    const widgetAngleInRadians = (widgetAngle - 90) * (Math.PI / 180);

    const lineStartX = CENTER + (ARC_RADIUS + ARC_THICKNESS / 2) * Math.cos(widgetAngleInRadians);
    const lineStartY = CENTER + (ARC_RADIUS + ARC_THICKNESS / 2) * Math.sin(widgetAngleInRadians);
    const lineEndX = CENTER + (OUTER_RING_RADIUS + 5) * Math.cos(widgetAngleInRadians);
    const lineEndY = CENTER + (OUTER_RING_RADIUS + 5) * Math.sin(widgetAngleInRadians);

    const textX = CENTER + (OUTER_RING_RADIUS + 8) * Math.cos(widgetAngleInRadians);
    const textY = CENTER + (OUTER_RING_RADIUS + 8) * Math.sin(widgetAngleInRadians);

    let textAnchor: 'start' | 'end' | 'middle' = 'start';
    if (Math.cos(widgetAngleInRadians) < -0.1) {
        textAnchor = 'end';
    } else if (Math.abs(Math.cos(widgetAngleInRadians)) <= 0.1) {
        textAnchor = 'middle';
    }

    const NextPeriodWidget = (
        <g className="widget-fade-in">
            <line
                x1={lineStartX}
                y1={lineStartY}
                x2={lineEndX}
                y2={lineEndY}
                className="stroke-pink-400"
                strokeWidth="1.5"
            />
            <text
                x={textX}
                y={textY}
                textAnchor={textAnchor}
                dominantBaseline="middle"
                className="fill-pink-600 font-semibold text-xs"
            >
                Next: {formattedNextPeriod}
            </text>
        </g>
    );

    return (
        <div className="relative" style={{ width: SVG_SIZE, height: SVG_SIZE }}>
            <svg width={SVG_SIZE} height={SVG_SIZE} viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}>
                <style>{`
                    @keyframes fade-in-delay {
                        0% { opacity: 0; }
                        50% { opacity: 0; }
                        100% { opacity: 1; }
                    }
                    .widget-fade-in {
                        animation: fade-in-delay 2s ease-out forwards;
                    }
                `}</style>
                <circle
                    cx={CENTER}
                    cy={CENTER}
                    r={OUTER_RING_RADIUS}
                    fill="none"
                    className="stroke-gray-200"
                    strokeWidth={RING_THICKNESS}
                />
                <circle
                    cx={CENTER}
                    cy={CENTER}
                    r={INNER_RING_RADIUS}
                    fill="none"
                    className="stroke-gray-200"
                    strokeWidth={RING_THICKNESS}
                />
                {dots}
                <circle
                    cx={CENTER}
                    cy={CENTER}
                    r={ARC_RADIUS}
                    fill="none"
                    className="stroke-pink-500 transition-[stroke-dasharray] duration-1000 ease-out"
                    strokeWidth={ARC_THICKNESS}
                    strokeDasharray={`${animatedArcLength} ${circumference}`}
                    strokeLinecap="round"
                    transform={`rotate(-90 ${CENTER} ${CENTER})`}
                />
                {NextPeriodWidget}
                <text
                    x="50%"
                    y="30%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="fill-gray-800 font-mono font-black select-none"
                >
                    <tspan x="50%" dy="-0.6em" className="text-3xl tracking-widest">{monthAbbr}</tspan>
                    <tspan x="50%" dy="0.9em" className="text-7xl">{dayOfMonth}</tspan>
                    <tspan x="50%" dy="4.0em">
                        <tspan className="text-3xl font-bold text-pink-500" dominantBaseline="middle">12</tspan>
                        <tspan className="text-sm tracking-wider fill-gray-500 font-medium" dominantBaseline="middle"> DAYS TILL NEXT PERIOD</tspan>
                    </tspan>
                </text>
            </svg>
        </div>
    );
};

export default CircularCalendar;