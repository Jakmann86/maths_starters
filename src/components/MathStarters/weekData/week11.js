import React from 'react';
import { MathDisplay } from '../components/Mathematical/DisplayComponents';

const Question = ({ instruction, math, hint }) => (
    <div className="space-y-2">
        <p className="font-medium text-gray-700">{instruction}</p>
        {math && (
            <MathDisplay
                math={math}
                size="x-large"
                className="mt-1"
            />
        )}
        {hint && (
            <p className="text-sm text-gray-500 italic mt-1">*{hint}</p>
        )}
    </div>
);

const week11 = {
    topic: "Probability I: Introduction to Probability Theory",
    starters: {
        1: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="Write as a probability between 0 and 1:"
                        math="\text{75}\%"
                    />,
                    answer: <MathDisplay
                        math="\frac{3}{4} \text{ or } 0.75"
                        size="x-large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="Solve:"
                        math="2(3x + 1) = 5(x - 2)"
                    />,
                    answer: <MathDisplay
                        math="6x + 2 = 5x - 10 \\\\ x = -12"
                        size="x-large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="Solve these simultaneous equations:"
                        math="2x + y = 7 \\\\ x - 3y = -8"
                    />,
                    answer: <MathDisplay
                        math="2x + y = 7 \\\\ x - 3y = -8 \\\\ \text{Multiply second by 2:} \\\\ 2x + y = 7 \\\\ 2x - 6y = -16 \\\\ 7y = 23 \\\\ y = \frac{23}{7}, x = 2"
                        size="x-large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="Find the hypotenuse if:"
                        math="\text{Base} = 8\text{ cm}, \text{ Height} = 6\text{ cm}"
                        hint="use Pythagoras"
                    />,
                    answer: <MathDisplay
                        math="10\text{ cm}"
                        size="x-large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="A bag has 3 red and 4 blue marbles. One marble is added and now P(red) = 0.5. What color was added?"
                        hint="find the new fraction for red probability"
                    />,
                    answer: <MathDisplay
                        math="\text{Red marble added:} \\\\ \frac{4}{8} = 0.5"
                        size="x-large"
                    />
                }
            }
        },
        2: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="Find P(red) when you have:"
                        math="\text{5 red and 3 blue counters}"
                    />,
                    answer: <MathDisplay
                        math="\frac{5}{8}"
                        size="x-large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="Factorise:"
                        math="x^2 - 16"
                        hint="difference of two squares"
                    />,
                    answer: <MathDisplay
                        math="(x+4)(x-4)"
                        size="x-large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="Solve:"
                        math="3(2x - 1) = 15"
                    />,
                    answer: <MathDisplay
                        math="x = 3"
                        size="x-large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="Find the area of a circle with radius:"
                        math="6\text{ cm}"
                        hint="use π"
                    />,
                    answer: <MathDisplay
                        math="36\pi \text{ cm}^2"
                        size="x-large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="A spinner has numbers 1 to n. If P(even) = 0.4, find n."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Let } e = \text{number of even numbers} \\\\ \frac{e}{n} = 0.4 \\\\ e = \lfloor \frac{n}{2} \rfloor \\\\ \frac{\lfloor \frac{n}{2} \rfloor}{n} = 0.4 \\\\ n = 5 \text{ (check: } P(\text{even}) = \frac{2}{5} = 0.4)"
                        size="x-large"
                    />
                }
            }
        },
        3: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="Find P(prime) when rolling a fair die"
                        hint="list the prime numbers from 1-6"
                    />,
                    answer: <MathDisplay
                        math="\frac{3}{6} = \frac{1}{2}"
                        size="x-large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="Expand and simplify:"
                        math="(x+3)(x-2)"
                    />,
                    answer: <MathDisplay
                        math="x^2 + x - 6"
                        size="x-large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="Find the mean of:"
                        math="\text{4, 7, 3, 8, 3}"
                    />,
                    answer: <MathDisplay
                        math="\frac{25}{5} = 5"
                        size="x-large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="A regular octagon has exterior angle x°. Find x."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Sum of exterior angles} = 360° \\\\ \text{Number of sides} = 8 \\\\ x = \frac{360}{8} = 45°"
                        size="x-large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="In a bag of 40 counters, P(red) = 0.4 and P(blue) = 0.35. How many are neither red nor blue?"
                        hint="find red and blue amounts first"
                    />,
                    answer: <MathDisplay
                        math="\text{Red} = 16, \text{ Blue} = 14 \\\\ \text{Neither} = 10"
                        size="x-large"
                    />
                }
            }
        }
    }
};

export default week11;