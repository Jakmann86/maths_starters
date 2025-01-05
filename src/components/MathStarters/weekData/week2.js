import React from 'react';
import { MathDisplay } from '../components/Mathematical/DisplayComponents';
import { Question } from '../components/Mathematical/DisplayComponents';

const week2 = {
    topic: "Algebra I: Introduction to Basic Concepts",
    starters: {
        1: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="Simplify:"
                        math="4x + 2x + 7x"
                    />,
                    answer: <MathDisplay
                        math="13x"
                        size="x-large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="Find the hypotenuse of a right triangle with sides 5cm and 12cm"
                        math=""
                    />,
                    answer: <MathDisplay
                        math="13\text{ cm}"
                        size="x-large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="Expand:"
                        math="3(x + 5)"
                    />,
                    answer: <MathDisplay
                        math="3x + 15"
                        size="x-large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="Substitute x = 4 into:"
                        math="2x + 7"
                    />,
                    answer: <MathDisplay
                        math="2(4) + 7 = 15"
                        size="x-large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="If y = x² + 3 and z = 2x - 1, find the value of y + z when x = 3"
                        math=""
                    />,
                    answer: <MathDisplay
                        math="y = 3^2 + 3 = 12 \\\\ z = 2(3) - 1 = 5 \\\\ y + z = 14"
                        size="x-large"
                    />
                }
            }
        },
        2: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="Simplify:"
                        math="5x^2 + 2x - x^2 + 3x"
                    />,
                    answer: <MathDisplay
                        math="4x^2 + 5x"
                        size="x-large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="In a right triangle, the hypotenuse is 15cm and one side is 9cm. Find the other side."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="15^2 = 9^2 + x^2 \\\\ 225 = 81 + x^2 \\\\ x^2 = 144 \\\\ x = 12\text{ cm}"
                        size="x-large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="Expand:"
                        math="4(2x - 3)"
                    />,
                    answer: <MathDisplay
                        math="8x - 12"
                        size="x-large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="Simplify:"
                        math="3(x + 2) + 2(x - 1)"
                    />,
                    answer: <MathDisplay
                        math="3x + 6 + 2x - 2 = 5x + 4"
                        size="x-large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="If 2x + 5 = 21 and 3y - 4 = 11, find the value of xy"
                        math=""
                    />,
                    answer: <MathDisplay
                        math="2x + 5 = 21 \\\\ x = 8 \\\\ 3y - 4 = 11 \\\\ y = 5 \\\\ xy = 8 \times 5 = 40"
                        size="x-large"
                    />
                }
            }
        },
        3: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="Expand:"
                        math="5(3x - 2)"
                    />,
                    answer: <MathDisplay
                        math="15x - 10"
                        size="x-large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="Find the missing side in a right triangle where one side is 8cm and the hypotenuse is 17cm"
                        math=""
                    />,
                    answer: <MathDisplay
                        math="17^2 = 8^2 + x^2 \\\\ 289 = 64 + x^2 \\\\ x^2 = 225 \\\\ x = 15\text{ cm}"
                        size="x-large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="Expand:"
                        math="(x + 3)(x + 2)"
                    />,
                    answer: <MathDisplay
                        math="x^2 + 5x + 6"
                        size="x-large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="Substitute x = 3 and y = 2 into:"
                        math="4x - 3y"
                    />,
                    answer: <MathDisplay
                        math="4(3) - 3(2) = 12 - 6 = 6"
                        size="x-large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="Expand and simplify:"
                        math="(x + 4)(x - 2) - 3(x + 1)"
                    />,
                    answer: <MathDisplay
                        math="x^2 + 4x - 2x - 8 - 3x - 3 \\\\ = x^2 - x - 11"
                        size="x-large"
                    />
                }
            }
        }
    }
};

export default week2;