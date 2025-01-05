import React, { useState, useEffect } from 'react';
import { StarterLayout } from './components/Layout';
import { QuestionDisplay } from './components/Questions';

// Import weeks
import week1 from './weekData/week1';
import week2 from './weekData/week2';
import week3 from './weekData/week3';
import week4 from './weekData/week4';
import week5 from './weekData/week5';
import week6 from './weekData/week6';
import week7 from './weekData/week7';
import week8 from './weekData/week8';
import week9 from './weekData/week9';
import week10 from './weekData/week10';
import week11 from './weekData/week11';
import week12 from './weekData/week12';
import week13 from './weekData/week13';
import week14 from './weekData/week14';
import week15 from './weekData/week15';
import week16 from './weekData/week16';
import week17 from './weekData/week17';
import week18 from './weekData/week18';
import week19 from './weekData/week19';
import week20 from './weekData/week20';
import week21 from './weekData/week21';
import week22 from './weekData/week22';
import week23 from './weekData/week23';
import week24 from './weekData/week24';
import week25 from './weekData/week25';
import week26 from './weekData/week26';
import week27 from './weekData/week27';
import week28 from './weekData/week28';
import week29 from './weekData/week29';
import week30 from './weekData/week30';
import week31 from './weekData/week31';
import week32 from './weekData/week32';
import week33 from './weekData/week33';
import week34 from './weekData/week34';

const weeks = {
    1: week1,
    2: week2,
    3: week3,
    4: week4,
    5: week5,
    6: week6,
    7: week7,
    8: week8,
    9: week9,
    10: week10,
    11: week11,
    12: week12,
    13: week13,
    14: week14,
    15: week15,
    16: week16,
    17: week17,
    18: week18,
    19: week19,
    20: week20,
    21: week21,
    22: week22,
    23: week23,
    24: week24,
    25: week25,
    26: week26,
    27: week27,
    28: week28,
    29: week29,
    30: week30,
    31: week31,
    32: week32,
    33: week33,
    34: week34
};

const MathStarters = () => {
    const [currentWeek, setCurrentWeek] = useState(1);
    const [currentStarter, setCurrentStarter] = useState(0);
    const [showAnswers, setShowAnswers] = useState(false);
    const [showChallenge, setShowChallenge] = useState(false);
    const [isTimerActive, setIsTimerActive] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState(300);

    useEffect(() => {
        let timer;
        if (isTimerActive && timeRemaining > 0) {
            timer = setInterval(() => setTimeRemaining(prev => prev - 1), 1000);
        } else if (timeRemaining === 0) {
            setIsTimerActive(false);
        }
        return () => clearInterval(timer);
    }, [isTimerActive, timeRemaining]);

    const handleNext = () => {
        const totalStarters = Object.keys(weeks[currentWeek].starters).length;
        if (currentStarter < totalStarters - 1) {
            setCurrentStarter(prev => prev + 1);
        } else if (currentWeek < Object.keys(weeks).length) {
            setCurrentWeek(prev => prev + 1);
            setCurrentStarter(0);
        }
    };

    const handlePrevious = () => {
        if (currentStarter > 0) {
            setCurrentStarter(prev => prev - 1);
        } else if (currentWeek > 1) {
            setCurrentWeek(prev => prev - 1);
            setCurrentStarter(Object.keys(weeks[currentWeek - 1].starters).length - 1);
        }
    };

    const renderQuestions = () => {
        const currentWeekData = weeks[currentWeek]?.starters[currentStarter + 1];
        return showChallenge
            ? <QuestionDisplay type="challenge" data={currentWeekData?.standard?.challenge} showAnswers={showAnswers} />
            : Object.entries(currentWeekData?.standard || {})
                .filter(([type]) => type !== 'challenge')
                .map(([type, data]) => <QuestionDisplay key={type} type={type} data={data} showAnswers={showAnswers} />);
    };

    return (
        <StarterLayout
            currentWeek={currentWeek}
            currentStarter={currentStarter}
            showAnswers={showAnswers}
            showChallenge={showChallenge}
            isTimerActive={isTimerActive}
            timeRemaining={timeRemaining}
            onNext={handleNext}
            onPrevious={handlePrevious}
            setCurrentWeek={setCurrentWeek}
            setShowAnswers={setShowAnswers}
            setShowChallenge={setShowChallenge}
            setIsTimerActive={setIsTimerActive}
            setTimeRemaining={setTimeRemaining}
            weeks={weeks}
        >
            {renderQuestions()}
        </StarterLayout>
    );
};

export default MathStarters;