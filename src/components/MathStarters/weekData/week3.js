import React from 'react';
import { MathDisplay } from '../components/Mathematical/DisplayComponents';

const Question = ({ instruction, math }) => (
    <div className="space-y-2">
        <p className="font-medium text-gray-700">{instruction}</p>
        <MathDisplay
            math={math}
            size="large"
            className="mt-1"
        />
    </div>
);

const week3 = {
    topic: "Algebra II: Simple Linear Equations",
    starters: {
        1: {
            standard: {
                lastLesson: {
                    question: <Question instruction="Solve:" math="3x + 4 = 19" />,
                    answer: <MathDisplay math="x = 5" size="large" />,
                },
                lastWeek: {
                    question: <Question instruction="Simplify:" math="7x + 3 - 2x - 5" />,
                    answer: <MathDisplay math="5x - 2" size="large" />,
                },
                lastTopic: {
                    question: <Question instruction="In a right triangle with angle 30°, if the hypotenuse is 10cm, find the opposite side." math="" />,
                    answer: <MathDisplay math="5cm" size="large" />,
                },
                lastYear: {
                    question: <Question instruction="Find the perimeter of a triangle with sides 6cm, 8cm, and 10cm" math="" />,
                    answer: <MathDisplay math="24cm" size="large" />,
                },
                challenge: {
                    question: <Question instruction="If x + y = 10 and xy = 21, find x² + y²" math="" />,
                    answer: <MathDisplay math="58" size="large" />,
                },
            },
        },
        2: {
            standard: {
                lastLesson: {
                    question: <Question instruction="Solve:" math="4(x + 2) = 24" />,
                    answer: <MathDisplay math="x = 4" size="large" />,
                },
                lastWeek: {
                    question: <Question instruction="Expand:" math="(x + 5)(x - 2)" />,
                    answer: <MathDisplay math="x² + 3x - 10" size="large" />,
                },
                lastTopic: {
                    question: <Question instruction="Find the hypotenuse of a right triangle with sides 8cm and 15cm" math="" />,
                    answer: <MathDisplay math="17cm" size="large" />,
                },
                lastYear: {
                    question: <Question instruction="Solve:" math="3x - 7 = 14" />,
                    answer: <MathDisplay math="x = 7" size="large" />,
                },
                challenge: {
                    question: <Question
                        instruction="Solve:"
                        math="\frac{2x - 3}{4} = 5"
                    />,
                    answer: <MathDisplay
                        math="2x - 3 = 20 \\\\ 2x = 23 \\\\ x = 11.5"
                        size="x-large"
                    />,
                },
            },
        },
        3: {
            standard: {
                lastLesson: {
                    question: <Question instruction="Solve:" math="5(x - 1) = 2(x + 7)" />,
                    answer: <MathDisplay math="x = 4" size="large" />,
                },
                lastWeek: {
                    question: <Question instruction="When x = 3, find the value of:" math="2x² - 5x + 1" />,
                    answer: <MathDisplay math="4" size="large" />,
                },
                lastTopic: {
                    question: <Question instruction="In a right triangle with angle 30°, if the hypotenuse is 12cm, find the opposite side" math="" />,
                    answer: <MathDisplay math="6cm" size="large" />,
                },
                lastYear: {
                    question: <Question instruction="Solve:" math="4x + 3 = 2x + 9" />,
                    answer: <MathDisplay math="x = 3" size="large" />,
                },
                challenge: {
                    question: <Question instruction="The sum of three consecutive integers is 42. Find the integers." math="" />,
                    answer: (
                        <MathDisplay
                            math={`\\text{Let } x \\text{ be the smallest number:} \\\\
                            x + (x + 1) + (x + 2) = 42 \\\\
                            3x + 3 = 42 \\\\
                            3x = 39 \\\\
                            x = 13 \\\\
                            \\text{The integers are 13, 14, and 15.}`}
                            size="large"
                        />
                    ),
                },
            },
        },
    },
};

export default week3;
