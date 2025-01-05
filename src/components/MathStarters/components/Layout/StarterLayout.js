// components/Layout/StarterLayout.js
import React from 'react';
import { StarterNavigation } from '../Navigation';
import { StarterControls } from '../Controls';

const StarterLayout = ({
    children,
    currentWeek,
    currentStarter,
    showAnswers,
    showChallenge,
    isTimerActive,
    timeRemaining,
    onNext,
    onPrevious,
    setCurrentWeek,
    setShowAnswers,
    setShowChallenge,
    setIsTimerActive,
    setTimeRemaining,
    weeks
}) => {
    return (
        // We maintain the exact same structure as your original
        <div className="min-h-screen bg-gray-50 py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    {/* Navigation section */}
                    <StarterNavigation
                        currentWeek={currentWeek}
                        topic={weeks[currentWeek]?.topic}
                        onNext={onNext}
                        onPrevious={onPrevious}
                    />

                    {/* Controls section */}
                    <StarterControls
                        currentWeek={currentWeek}
                        setCurrentWeek={setCurrentWeek}
                        showChallenge={showChallenge}
                        setShowChallenge={setShowChallenge}
                        showAnswers={showAnswers}
                        setShowAnswers={setShowAnswers}
                        isTimerActive={isTimerActive}
                        setIsTimerActive={setIsTimerActive}
                        timeRemaining={timeRemaining}
                        setTimeRemaining={setTimeRemaining}
                        weeks={weeks}
                    />

                    {/* Questions grid - passed in as children */}
                    <div className="grid grid-cols-2 gap-4 p-4">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StarterLayout;