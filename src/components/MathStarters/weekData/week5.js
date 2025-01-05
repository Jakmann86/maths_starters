import React from 'react';
import { MathDisplay } from '../components/Mathematical/DisplayComponents';
import { Question } from '../components/Mathematical/DisplayComponents';

const week5 = {
    topic: "Algebra IV: Quadratic Equations & Formula Rearrangement",
    starters: {
        1: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="Factorise fully:"
                        math="12x^2 - 27x"
                    />,
                    answer: <MathDisplay
                        math="3x(4x - 9)"
                        size="x-large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="Solve by factoring:"
                        math="x^2 + 7x + 12 = 0"
                    />,
                    answer: <MathDisplay
                        math="(x + 3)(x + 4) = 0 \\\\ x = -3 \text{ or } x = -4"
                        size="x-large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="Make h the subject:"
                        math="P = 2(l + h)"
                    />,
                    answer: <MathDisplay
                        math="P = 2l + 2h \\\\ 2h = P - 2l \\\\ h = \frac{P - 2l}{2}"
                        size="x-large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="Evaluate:"
                        math="2^{-3} \times 2^5"
                    />,
                    answer: <MathDisplay
                        math="2^{-3 + 5} = 2^2 = 4"
                        size="x-large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="A rectangle has area 48cm² and perimeter 28cm. Form and solve a quadratic equation to find its dimensions."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Let width} = x \\\\ \text{Then length} = 14-x \\\\ x(14-x) = 48 \\\\ 14x - x^2 = 48 \\\\ x^2 - 14x + 48 = 0 \\\\ (x-6)(x-8) = 0 \\\\ x = 6 \text{ or } 8 \\\\ \text{Dimensions: } 6\text{ cm by } 8\text{ cm}"
                        size="x-large"
                    />
                }
            }
        },
        2: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="Solve:"
                        math="x^2 - 5x = 14"
                    />,
                    answer: <MathDisplay
                        math="x^2 - 5x - 14 = 0 \\\\ (x - 7)(x + 2) = 0 \\\\ x = 7 \text{ or } x = -2"
                        size="x-large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="Make r the subject:"
                        math="A = \pi r^2"
                    />,
                    answer: <MathDisplay
                        math="r^2 = \frac{A}{\pi} \\\\ r = \pm \sqrt{\frac{A}{\pi}}"
                        size="x-large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="Factorise the difference of two squares:"
                        math="25x^2 - 16"
                    />,
                    answer: <MathDisplay
                        math="(5x+4)(5x-4)"
                        size="x-large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="Solve:"
                        math="5(2x - 3) = 3(x + 1)"
                    />,
                    answer: <MathDisplay
                        math="10x - 15 = 3x + 3 \\\\ 7x = 18 \\\\ x = \frac{18}{7}"
                        size="x-large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="The sum of two numbers is 11 and their product is 28. Form and solve a quadratic equation to find the numbers."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Let one number be } x \\\\ \text{Other number} = 11-x \\\\ x(11-x) = 28 \\\\ 11x - x^2 = 28 \\\\ x^2 - 11x + 28 = 0 \\\\ (x-4)(x-7) = 0 \\\\ x = 4 \text{ or } 7 \\\\ \text{Numbers are 4 and 7}"
                        size="x-large"
                    />
                }
            }
        },
        3: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="Make t the subject:"
                        math="v = u + at"
                    />,
                    answer: <MathDisplay
                        math="v - u = at \\\\ t = \frac{v-u}{a}"
                        size="x-large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="Solve:"
                        math="x^2 + 6x + 8 = 0"
                    />,
                    answer: <MathDisplay
                        math="(x + 2)(x + 4) = 0 \\\\ x = -2 \text{ or } x = -4"
                        size="x-large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="Expand and simplify:"
                        math="(2x + 3)(x - 1) - (x + 2)(x + 3)"
                    />,
                    answer: <MathDisplay
                        math="2x^2 - 2x + 3x - 3 - (x^2 + 5x + 6) \\\\ = 2x^2 + x - 3 - x^2 - 5x - 6 \\\\ = x^2 - 4x - 9"
                        size="x-large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="Factorise completely:"
                        math="8x^2 - 32"
                    />,
                    answer: <MathDisplay
                        math="8(x^2 - 4) \\\\ 8(x+2)(x-2)"
                        size="x-large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="A number is increased by 5 and then squared. The same number is decreased by 2 and then squared. The difference between these results is 63. Form and solve a quadratic equation to find the number."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Let the number be } x \\\\ (x+5)^2 - (x-2)^2 = 63 \\\\ x^2 + 10x + 25 - (x^2 - 4x + 4) = 63 \\\\ 14x + 21 = 63 \\\\ 14x = 42 \\\\ x = 3"
                        size="x-large"
                    />
                }
            }
        }
    }
};

export default week5;