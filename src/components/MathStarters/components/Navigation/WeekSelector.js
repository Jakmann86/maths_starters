// components/Navigation/WeekSelector.js
import React from 'react';

const WeekSelector = ({ currentWeek, setCurrentWeek, weeks }) => {
    const handleWeekChange = (e) => {
        setCurrentWeek(Number(e.target.value));
    };

    return (
        <select
            value={currentWeek}
            onChange={handleWeekChange}
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 
                    sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px] truncate"
        >
            {Object.entries(weeks).map(([week, data]) => (
                <option key={week} value={week}>
                    Week {week}: {data.topic}
                </option>
            ))}
        </select>
    );
};

export default WeekSelector;