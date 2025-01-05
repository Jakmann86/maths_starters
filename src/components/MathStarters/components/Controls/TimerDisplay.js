import React, { useEffect } from 'react';
import { Timer as TimerIcon } from 'lucide-react';

const TimerDisplay = ({
    isActive,
    timeRemaining,
    setTimeRemaining,
    onTimerComplete
}) => {
    useEffect(() => {
        let timer;
        if (isActive && timeRemaining > 0) {
            timer = setInterval(() => {
                setTimeRemaining((prevTime) => {
                    if (prevTime <= 1) {
                        clearInterval(timer);
                        onTimerComplete?.();
                        return 0;
                    }
                    return prevTime - 1;
                });
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [isActive, timeRemaining, setTimeRemaining, onTimerComplete]);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const getTimeColor = () => {
        if (timeRemaining <= 60) return 'text-red-600';
        if (timeRemaining <= 120) return 'text-orange-500';
        return 'text-gray-800';
    };

    return (
        <div className="flex items-center space-x-4">
            <div className={`flex items-center space-x-2 px-4 py-2 bg-gray-200 rounded-lg ${getTimeColor()}`}>
                <TimerIcon className="w-5 h-5" />
                <span className="text-xl font-mono">
                    {formatTime(timeRemaining)}
                </span>
            </div>
            <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                    className="h-full bg-blue-500 transition-all duration-1000"
                    style={{
                        width: `${(timeRemaining / 300) * 100}%`,
                        backgroundColor: getTimeColor()
                    }}
                />
            </div>
        </div>
    );
};

export default TimerDisplay;