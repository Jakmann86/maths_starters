import React from 'react';
import { MathDisplay } from '../components/Mathematical/DisplayComponents';
import { Question } from '../components/Mathematical/DisplayComponents';

const week12 = {
    topic: "Set Theory I: Introduction to Set Theory",
    starters: {
        1: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="Convert to a fraction:"
                        math="0.444444..."
                    />,
                    answer: <MathDisplay
                        math="\text{Let } x = 0.\dot{4} \\ 10x = 4.\dot{4} \\ 10x - x = 4 \\ 9x = 4 \\ x = \frac{4}{9}"
                        size="large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="Out of 12 marbles in a bag, 4 are red and the rest are blue. What fraction of the marbles are red?"
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\frac{4}{12} = \frac{1}{3}"
                        size="large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="Solve:"
                        math="5(2x - 3) = 30"
                    />,
                    answer: <MathDisplay
                        math="10x - 15 = 30 \\ 10x = 45 \\ x = \frac{9}{2}"
                        size="large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="Find the missing angle x in a triangle where the other angles are 55° and 70°."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="x + 55 + 70 = 180 \\ x = 55°"
                        size="large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="In a class of 40 students, 15 play football and 12 play basketball. If 7 students play both sports, how many play neither sport?"
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Both sports} = 7 \\ \text{Just football} = 8 \\ \text{Just basketball} = 5 \\ \text{Neither} = 40 - 8 - 5 - 7 = 20 \text{ students}"
                        size="large"
                    />
                }
            }
        },
        2: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="Write down all numbers from 1 to 10 that have exactly 2 factors."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\{2, 3, 5, 7\} \text{ (the prime numbers)}"
                        size="large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="Factorise:"
                        math="x^2 + 5x + 6"
                    />,
                    answer: <MathDisplay
                        math="(x+2)(x+3)"
                        size="large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="A triangle has base 8cm and height 10cm. Find its area."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Area} = \frac{1}{2} \times 8 \times 10 = 40 \text{ cm}^2"
                        size="large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="Convert to a decimal:"
                        math="\frac{7}{8}"
                    />,
                    answer: <MathDisplay
                        math="0.875"
                        size="large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="Find all numbers between 1 and 30 that are multiples of both 3 and 4."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Multiples of 12: } \{12, 24\}"
                        size="large"
                    />
                }
            }
        },
        3: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="From numbers 1 to 10, write down the:"
                        math="\text{a) Even numbers} \\ \text{b) Numbers greater than 6}"
                    />,
                    answer: <MathDisplay
                        math="\text{a) } \{2,4,6,8,10\} \\ \text{b) } \{7,8,9,10\}"
                        size="large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="Expand:"
                        math="3(2x + 5)"
                    />,
                    answer: <MathDisplay
                        math="6x + 15"
                        size="large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="Find the mean of:"
                        math="4, 7, 3, 8, 3"
                    />,
                    answer: <MathDisplay
                        math="\frac{4+7+3+8+3}{5} = 5"
                        size="large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="The angles in a triangle are in the ratio 1:2:3. Find each angle."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="1x + 2x + 3x = 180 \\ 6x = 180 \\ x = 30 \\ \text{Angles: } 30°, 60°, 90°"
                        size="large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="Write down all numbers from 1 to 20 that are both multiples of 3 and prime numbers."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Multiples of 3: } \{3,6,9,12,15,18\} \\ \text{Prime numbers: } \{2,3,5,7,11,13,17,19\} \\ \text{Both: } \{3\}"
                        size="large"
                    />
                }
            }
        }
    }
};

export default week12;