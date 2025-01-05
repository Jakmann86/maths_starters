import React from 'react';
// src/weekData/week4.js
import { MathDisplay } from '../components/Mathematical/DisplayComponents';

// Reusable question wrapper to maintain consistent styling
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

const week4 = {
    topic: "Algebra III: Factorising Expressions",
    starters: {
        1: {
            standard: {
                lastLesson: {
                    question: <Question instruction="Factorise:" math="12x + 8" />,
                    answer: <MathDisplay math="4(3x + 2)" size="large" />
                },
                lastWeek: {
                    question: <Question instruction="Solve:" math="5(x - 3) = 30" />,
                    answer: <MathDisplay math="x = 9" size="large" />
                },
                lastTopic: {
                    question: <Question instruction="Expand:" math="(x + 2)(x + 5)" />,
                    answer: <MathDisplay math="x^2 + 7x + 10" size="large" />
                },
                lastYear: {
                    question: <Question instruction="Expand:" math="4(2x - 3)" />,
                    answer: <MathDisplay math="8x - 12" size="large" />
                },
                challenge: {
                    question: <Question instruction="Factorise:" math="x^2 - 8x + 15" />,
                    answer: <MathDisplay math="(x - 3)(x - 5)" size="large" />
                }
            }
        },
        2: {
            standard: {
                lastLesson: {
                    question: <Question instruction="Factorise:" math="x^2 + 7x + 12" />,
                    answer: <MathDisplay math="(x + 3)(x + 4)" size="large" />
                },
                lastWeek: {
                    question: <Question instruction="Solve:" math="3(x + 2) = 2(x + 5)" />,
                    answer: <MathDisplay math="x = 4" size="large" />
                },
                lastTopic: {
                    question: <Question instruction="Expand:" math="(x + 1)(x + 2)(x + 3)" />,
                    answer: <MathDisplay math="x^3 + 6x^2 + 11x + 6" size="large" />
                },
                lastYear: {
                    question: <Question instruction="Simplify:" math="5x^2 - 2x + 3x^2 + 4x" />,
                    answer: <MathDisplay math="8x^2 + 2x" size="large" />
                },
                challenge: {
                    question: <Question instruction="Factorise completely:" math="x^3 - 4x" />,
                    answer: <MathDisplay math="x(x + 2)(x - 2)" size="large" />
                }
            }
        },
        3: {
            standard: {
                lastLesson: {
                    question: <Question instruction="Factorise:" math="x^2 - 16" />,
                    answer: <MathDisplay math="(x + 4)(x - 4)" size="large" />
                },
                lastWeek: {
                    question: (
                        <div className="space-y-2">
                            <p className="font-medium text-gray-700">Solve the following simultaneous equations:</p>
                            <div className="space-y-1">
                                <MathDisplay math="3x + y = 11" size="large" />
                                <MathDisplay math="x - y = 1" size="large" />
                            </div>
                        </div>
                    ),
                    answer: <MathDisplay math="x = 3, y = 2" size="large" />
                },
                lastTopic: {
                    question: <Question instruction="Expand and simplify:" math="(x + 3)(x - 2) - 2(x + 1)" />,
                    answer: <MathDisplay math="x^2 + x - 8" size="large" />
                },
                lastYear: {
                    question: <Question instruction="Solve:" math="4x + 3 = 2x - 5" />,
                    answer: <MathDisplay math="x = -4" size="large" />
                },
                challenge: {
                    question: <Question instruction="Factorise completely:" math="3x^2 - 27" />,
                    answer: <MathDisplay math="3(x + 3)(x - 3)" size="large" />
                }
            }
        }
    }
};

export default week4;