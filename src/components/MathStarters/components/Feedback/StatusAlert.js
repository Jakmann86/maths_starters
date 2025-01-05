// components/Feedback/StatusAlert.js
import React from 'react';
import { AlertCircle, Clock, CheckCircle, XCircle } from 'lucide-react';

const StatusAlert = ({
    message,
    type = 'info',  // can be 'info', 'warning', 'success', 'error'
    isVisible = true,
    onDismiss
}) => {
    // Define styling based on alert type
    const alertStyles = {
        info: {
            bg: 'bg-blue-50',
            border: 'border-blue-200',
            text: 'text-blue-800',
            icon: AlertCircle
        },
        warning: {
            bg: 'bg-yellow-50',
            border: 'border-yellow-200',
            text: 'text-yellow-800',
            icon: Clock
        },
        success: {
            bg: 'bg-green-50',
            border: 'border-green-200',
            text: 'text-green-800',
            icon: CheckCircle
        },
        error: {
            bg: 'bg-red-50',
            border: 'border-red-200',
            text: 'text-red-800',
            icon: XCircle
        }
    };

    const style = alertStyles[type];
    const Icon = style.icon;

    // If not visible, don't render anything
    if (!isVisible) return null;

    return (
        <div className={`
            fixed top-4 right-4 max-w-sm w-full
            ${style.bg} ${style.border} ${style.text}
            border rounded-lg shadow-lg
            transform transition-all duration-500 ease-in-out
        `}>
            <div className="p-4 flex items-start">
                <Icon className="w-5 h-5 mr-3 mt-0.5" />
                <div className="flex-1">
                    {message}
                </div>
                {onDismiss && (
                    <button
                        onClick={onDismiss}
                        className="ml-4 hover:opacity-70 transition-opacity"
                        aria-label="Dismiss"
                    >
                        <XCircle className="w-5 h-5" />
                    </button>
                )}
            </div>
        </div>
    );
};

// Helper component for displaying timer warnings
const TimerAlert = ({ timeRemaining, isVisible }) => {
    if (timeRemaining > 60) return null;

    return (
        <StatusAlert
            message={timeRemaining <= 30
                ? "Less than 30 seconds remaining!"
                : "One minute remaining!"
            }
            type="warning"
            isVisible={isVisible}
        />
    );
};

export { StatusAlert, TimerAlert };