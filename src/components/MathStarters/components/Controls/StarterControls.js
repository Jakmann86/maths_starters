import React from 'react';
import { Timer, Eye, EyeOff, Maximize2 } from 'lucide-react';
import { WeekSelector } from '../Navigation';

const StarterControls = ({
    currentWeek,
    setCurrentWeek,
    showChallenge,
    setShowChallenge,
    showAnswers,
    setShowAnswers,
    isTimerActive,
    setIsTimerActive,
    timeRemaining,
    setTimeRemaining,
    weeks
}) => {
    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const handleTimerToggle = () => {
        if (!isTimerActive) setTimeRemaining(300);
        setIsTimerActive(!isTimerActive);
    };

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    };

    return (
        <div className="bg-gray-100 p-4 flex items-center justify-between">
            {/* Timer Controls Group */}
            <div className="flex items-center space-x-3">
                <button
                    onClick={handleTimerToggle}
                    className="flex items-center space-x-2 px-3 py-1.5 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                >
                    <Timer className="w-4 h-4" />
                    <span>{isTimerActive ? 'Stop' : 'Start'}</span>
                </button>

                <div className="flex items-center space-x-2 px-3 py-1.5 bg-gray-200 rounded-md">
                    <Timer className="w-4 h-4" />
                    <span className="font-mono">{formatTime(timeRemaining)}</span>
                </div>
            </div>

            {/* Week Selector */}
            <WeekSelector
                currentWeek={currentWeek}
                setCurrentWeek={setCurrentWeek}
                weeks={weeks}
            />

            {/* Right Side Controls Group */}
            <div className="flex items-center space-x-3">
                <button
                    onClick={() => setShowChallenge(!showChallenge)}
                    className="px-4 py-1.5 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition-colors min-w-[100px]"
                >
                    {showChallenge ? 'Standard' : 'Challenge'}
                </button>

                <button
                    onClick={() => setShowAnswers(!showAnswers)}
                    className="flex items-center justify-center space-x-2 px-4 py-1.5 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors min-w-[100px]"
                >
                    {showAnswers ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    <span>Answers</span>
                </button>

                <button
                    onClick={toggleFullscreen}
                    className="p-1.5 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
                    title="Toggle Fullscreen"
                >
                    <Maximize2 className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
};

export default StarterControls;