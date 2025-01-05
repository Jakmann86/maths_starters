// components/Navigation/StarterNavigation.js
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const StarterNavigation = ({ currentWeek, topic, onNext, onPrevious }) => {
    const getCurrentDate = () => {
        return new Date().toLocaleDateString('en-GB', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className="bg-gray-800 text-white p-4 flex items-center justify-between">
            <button
                onClick={onPrevious}
                className="p-2 hover:bg-gray-700 rounded transition-colors"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="text-center">
                <h1 className="text-2xl font-bold">
                    Week {currentWeek}: {topic}
                </h1>
                <p className="text-sm text-gray-300">{getCurrentDate()}</p>
            </div>

            <button
                onClick={onNext}
                className="p-2 hover:bg-gray-700 rounded transition-colors"
            >
                <ChevronRight className="w-6 h-6" />
            </button>
        </div>
    );
};

export default StarterNavigation;