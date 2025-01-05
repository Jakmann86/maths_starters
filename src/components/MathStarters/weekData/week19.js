import React from 'react';
import { Question } from '../components/Mathematical/DisplayComponents';
import { MathDisplay } from '../components/Mathematical/DisplayComponents';

const week19 = {
    topic: "Algebra VI: Linear Inequalities",
    starters: {
        1: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="Find the equation of the line passing through (3,4) and perpendicular to y = 2x + 1"
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Perpendicular gradient} = -\frac{1}{2}\\ y - 4 = -\frac{1}{2}(x - 3)\\ y = -\frac{1}{2}x + 5.5"
                        size="x-large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="Find the gradient of the line passing through (2,5) and (4,-1)"
                        math=""
                    />,
                    answer: <MathDisplay
                        math="m = \frac{y_2-y_1}{x_2-x_1} = \frac{-1-5}{4-2} = -3"
                        size="x-large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="Write down all the integer values of x that satisfy:"
                        math="-2 \leq x < 3"
                    />,
                    answer: <MathDisplay
                        math="-2, -1, 0, 1, 2"
                        size="x-large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="Solve by factoring:"
                        math="x^2 + 7x + 10 = 0"
                    />,
                    answer: <MathDisplay
                        math="(x + 2)(x + 5) = 0\\ x = -2 \text{ or } x = -5"
                        size="x-large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="Find the set of values of x for which:"
                        math="3x + 2 > 2x - 1 \text{ and } 5x - 3 \leq 12"
                    />,
                    answer: <MathDisplay
                        math="3x + 2 > 2x - 1 \rightarrow x > -3\\ 5x - 3 \leq 12 \rightarrow x \leq 3\\ \text{Therefore: } -3 < x \leq 3"
                        size="x-large"
                    />
                }
            }
        },
        2: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="Find the equation of the line parallel to y = 3x - 2 passing through (0,5)"
                        math=""
                    />,
                    answer: <MathDisplay
                        math="y = 3x + 5"
                        size="x-large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="Find the equation of the line through (1,4) with gradient -2"
                        math=""
                    />,
                    answer: <MathDisplay
                        math="y - 4 = -2(x - 1)\\ y = -2x + 6"
                        size="x-large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="Solve:"
                        math="2x + 3 \leq 11 \text{ and } x - 1 > 2"
                    />,
                    answer: <MathDisplay
                        math="2x \leq 8 \rightarrow x \leq 4\\ x > 3\\ \text{Therefore: } 3 < x \leq 4"
                        size="x-large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="Using the quadratic formula, solve:"
                        math="2x^2 + 5x - 3 = 0"
                    />,
                    answer: <MathDisplay
                        math="x = \frac{-5 \pm \sqrt{25 + 24}}{4}\\ x = \frac{-5 \pm 7}{4}\\ x = 0.5 \text{ or } -3"
                        size="x-large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="Given that x < 3 and 2x + 1 ≥ 5, write down all possible integer values of x."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="2x + 1 \geq 5 \rightarrow x \geq 2\\ x < 3\\ \text{Therefore: } x = 2"
                        size="x-large"
                    />
                }
            }
        },
        3: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="Find coordinates of point P where lines intersect:"
                        math="2x + y = 7 \text{ and } 3x - y = 2"
                    />,
                    answer: <MathDisplay
                        math="\text{Add equations: } 5x = 9\\ x = 1.8\\ y = 3.4\\ P(1.8, 3.4)"
                        size="x-large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="Find the perpendicular distance from point (2,3) to the line y = 2x + 1"
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\frac{|2(2) + 1 - 3|}{\sqrt{1 + 2^2}}\\ = \frac{|2|}{\sqrt{5}}\\ = 0.89 \text{ units (2dp)}"
                        size="x-large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="Write down all integer values of x that satisfy:"
                        math="3 < x \leq 7"
                    />,
                    answer: <MathDisplay
                        math="4, 5, 6, 7"
                        size="x-large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="Solve by completing the square:"
                        math="x^2 - 6x + 5 = 0"
                    />,
                    answer: <MathDisplay
                        math="(x - 3)^2 = 4\\ x - 3 = \pm2\\ x = 5 \text{ or } x = 1"
                        size="x-large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="For what values of k do the inequalities have exactly two integer solutions?"
                        math="2x + 1 > 5 \text{ and } x - k \leq 2"
                    />,
                    answer: <MathDisplay
                        math="2x + 1 > 5 \rightarrow x > 2\\ x - k \leq 2 \rightarrow x \leq k + 2\\ \text{For 2 integer solutions, } k = 2\\ \text{Giving } x = 3, 4"
                        size="x-large"
                    />
                }
            }
        }
    }
};

export default week19;