import React from 'react';
import { MathDisplay } from '../components/Mathematical/DisplayComponents';

const Question = ({ instruction, math }) => (
    <div className="space-y-2">
        <p className="font-medium text-gray-700">{instruction}</p>
        <MathDisplay math={math} size="x-large" className="mt-1" />
    </div>
);

const week7 = {
    topic: "Statistics I: Introduction to Statistics",
    starters: {
        1: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="Find the mean of:"
                        math="4, 7, 3, 8, 3"
                    />,
                    answer: <MathDisplay
                        math="\frac{4 + 7 + 3 + 8 + 3}{5} = 5"
                        size="x-large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="Find x when two angles in parallel lines are co-interior:"
                        math="x°, 125°"
                    />,
                    answer: <MathDisplay
                        math="x = 55"
                        size="x-large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="Expand:"
                        math="(x + 4)(x - 2)"
                    />,
                    answer: <MathDisplay
                        math="x^2 + 2x - 8"
                        size="x-large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="Find the median of:"
                        math="12, 4, 8, 15, 6, 3, 9"
                    />,
                    answer: <MathDisplay
                        math="8"
                        size="x-large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="The mean of 6 numbers is 8. When a seventh number is added, the mean increases to 9. Find the seventh number."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="6 × 8 = 48 \\ 7 × 9 = 63 \\ \text{Seventh number} = 15"
                        size="x-large"
                    />
                }
            }
        },
        2: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="Find the mode of:"
                        math="5, 6, 7, 5, 9, 10, 5"
                    />,
                    answer: <MathDisplay
                        math="5"
                        size="x-large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="Convert to a fraction:"
                        math="0.272727..."
                    />,
                    answer: <MathDisplay
                        math="\frac{3}{11}"
                        size="x-large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="Factorise:"
                        math="x^2 - 4x - 12"
                    />,
                    answer: <MathDisplay
                        math="(x - 6)(x + 2)"
                        size="x-large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="Find the range of:"
                        math="3, 8, 15, 7, 12, 9"
                    />,
                    answer: <MathDisplay
                        math="15 - 3 = 12"
                        size="x-large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="The mean of three numbers is 12. If two of the numbers are 15 and 8, find the third number."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\frac{15 + 8 + x}{3} = 12 \\ x = 13"
                        size="x-large"
                    />
                }
            }
        },
        3: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="Find the range of:"
                        math="6, 9, 4, 7, 10"
                    />,
                    answer: <MathDisplay
                        math="10 - 4 = 6"
                        size="x-large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="Find the median of:"
                        math="13, 5, 7, 9, 15"
                    />,
                    answer: <MathDisplay
                        math="9"
                        size="x-large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="Expand and simplify:"
                        math="(x + 2)(x - 3)"
                    />,
                    answer: <MathDisplay
                        math="x^2 - x - 6"
                        size="x-large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="The mean of these five numbers is 12, find x:"
                        math="15, 8, x, 11, 16"
                    />,
                    answer: <MathDisplay
                        math="\frac{15 + 8 + x + 11 + 16}{5} = 12 \\\\ 50 + x = 60 \\\\ x = 10"
                        size="x-large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="The mean of five numbers is 20. Four of the numbers have a mean of 18. Find the fifth number."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="5 × 20 = 100 \\ 4 × 18 = 72 \\ \text{Fifth number} = 28"
                        size="x-large"
                    />
                }
            }
        }
    }
};

export default week7;