import React from 'react';
import classNames from 'classnames';

const QuestionDisplay = ({ type, data, showAnswers }) => {
    const backgroundColors = {
        lastLesson: 'bg-pink-100 hover:bg-pink-200',
        lastWeek: 'bg-blue-100 hover:bg-blue-200',
        lastTopic: 'bg-green-100 hover:bg-green-200',
        lastYear: 'bg-orange-100 hover:bg-orange-200',
        challenge: 'bg-purple-100 hover:bg-purple-200'
    };

    const formatTitle = (type) =>
        type === 'challenge'
            ? 'Challenge Question'
            : type.replace(/([A-Z])/g, ' $1').trim();

    const containerClasses = classNames(
        backgroundColors[type],
        'p-6 rounded-lg shadow min-h-[200px]',
        { 'col-span-2': type === 'challenge' }
    );

    // Helper function to render content that might be either string or React element
    const renderContent = (content) => {
        if (React.isValidElement(content)) {
            return content;
        }
        return <div dangerouslySetInnerHTML={{ __html: content }} />;
    };

    return (
        <div className={containerClasses}>
            <h3 className="font-bold mb-4 text-gray-700 text-xl capitalize">
                {formatTitle(type)}
            </h3>

            <div className="text-lg mb-4">
                {renderContent(data?.question)}
            </div>

            {showAnswers && data?.answer && (
                <div className="mt-4 pt-4 border-t border-gray-300">
                    <div className="font-bold">
                        {renderContent(data?.answer)}
                    </div>
                </div>
            )}
        </div>
    );
};

export default QuestionDisplay;