// components/Settings/StarterSettings.js
import React from 'react';
import { Settings as SettingsIcon } from 'lucide-react';

const StarterSettings = ({
    settings,
    onSettingsChange,
    isOpen,
    onToggle
}) => {
    // These are the settings that might be useful for starters
    const defaultSettings = {
        timerDuration: 300, // 5 minutes in seconds
        showTimerProgress: true,
        autoShowAnswers: false,
        highContrastMode: false,
        fontSize: 'normal', // 'small', 'normal', 'large'
        questionLayout: 'grid' // 'grid' or 'list'
    };

    // Merge default settings with any user changes
    const currentSettings = { ...defaultSettings, ...settings };

    const SettingsRow = ({ label, children }) => (
        <div className="flex items-center justify-between py-3 border-b border-gray-200">
            <span className="text-gray-700">{label}</span>
            <div className="flex items-center space-x-2">
                {children}
            </div>
        </div>
    );

    return (
        <div className="relative">
            {/* Settings Toggle Button */}
            <button
                onClick={onToggle}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Toggle settings"
            >
                <SettingsIcon className="w-6 h-6" />
            </button>

            {/* Settings Panel */}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg border border-gray-200 p-4 z-50">
                    <h3 className="text-lg font-semibold mb-4">Starter Settings</h3>

                    {/* Timer Duration */}
                    <SettingsRow label="Timer Duration">
                        <select
                            value={currentSettings.timerDuration}
                            onChange={e => onSettingsChange({
                                ...currentSettings,
                                timerDuration: Number(e.target.value)
                            })}
                            className="form-select rounded border-gray-300"
                        >
                            <option value={180}>3 minutes</option>
                            <option value={300}>5 minutes</option>
                            <option value={600}>10 minutes</option>
                        </select>
                    </SettingsRow>

                    {/* Show Timer Progress */}
                    <SettingsRow label="Show Timer Progress">
                        <input
                            type="checkbox"
                            checked={currentSettings.showTimerProgress}
                            onChange={e => onSettingsChange({
                                ...currentSettings,
                                showTimerProgress: e.target.checked
                            })}
                            className="form-checkbox h-5 w-5 text-blue-600"
                        />
                    </SettingsRow>

                    {/* Font Size */}
                    <SettingsRow label="Font Size">
                        <div className="flex space-x-2">
                            {['small', 'normal', 'large'].map(size => (
                                <button
                                    key={size}
                                    onClick={() => onSettingsChange({
                                        ...currentSettings,
                                        fontSize: size
                                    })}
                                    className={`px-3 py-1 rounded ${currentSettings.fontSize === size
                                            ? 'bg-blue-500 text-white'
                                            : 'bg-gray-100'
                                        }`}
                                >
                                    {size.charAt(0).toUpperCase() + size.slice(1)}
                                </button>
                            ))}
                        </div>
                    </SettingsRow>

                    {/* High Contrast Mode */}
                    <SettingsRow label="High Contrast Mode">
                        <input
                            type="checkbox"
                            checked={currentSettings.highContrastMode}
                            onChange={e => onSettingsChange({
                                ...currentSettings,
                                highContrastMode: e.target.checked
                            })}
                            className="form-checkbox h-5 w-5 text-blue-600"
                        />
                    </SettingsRow>

                    {/* Layout Toggle */}
                    <SettingsRow label="Question Layout">
                        <button
                            onClick={() => onSettingsChange({
                                ...currentSettings,
                                questionLayout: currentSettings.questionLayout === 'grid' ? 'list' : 'grid'
                            })}
                            className="px-3 py-1 rounded bg-gray-100"
                        >
                            {currentSettings.questionLayout === 'grid' ? 'Grid View' : 'List View'}
                        </button>
                    </SettingsRow>
                </div>
            )}
        </div>
    );
};

export default StarterSettings;