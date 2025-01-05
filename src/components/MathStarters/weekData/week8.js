import React from 'react';
import { MathDisplay } from '../components/Mathematical/DisplayComponents';

const Question = ({ instruction, math }) => (
    <div className="space-y-2">
        <p className="font-medium text-gray-700">{instruction}</p>
        <MathDisplay math={math} size="x-large" className="mt-1" />
    </div>
);

const week8 = {
    topic: "Statistics II: Grouped Data",
    starters: {
        1: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="In a biology experiment, students measured plant heights (in cm). Find the total number of plants measured:"
                        math="\begin{array}{|c|c|} \hline \text{Height (cm)} & \text{Number of Plants} \\ \hline 5 & 4 \\ 8 & 6 \\ 11 & 3 \\ 14 & 2 \\ \hline \end{array}"
                    />,
                    answer: <MathDisplay
                        math="4 + 6 + 3 + 2 = 15"
                        size="x-large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="Find the mean and range of:"
                        math="5, 8, 4, 9, 4"
                    />,
                    answer: <MathDisplay
                        math="\text{Mean} = \frac{5 + 8 + 4 + 9 + 4}{5} = 6 \\ \text{Range} = 9 - 4 = 5"
                        size="x-large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="Find x if alternate angles on parallel lines are:"
                        math="2x°\text{ and }76°"
                    />,
                    answer: <MathDisplay
                        math="2x = 76 \\ x = 38"
                        size="x-large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="Find the mode of:"
                        math="3, 7, 4, 7, 2, 7, 5, 8"
                    />,
                    answer: <MathDisplay
                        math="7"
                        size="x-large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="The table shows the ages of members in a tennis club. Using the midpoints, calculate the mean age:"
                        math="\begin{array}{|c|c|} \hline \text{Age (years)} & \text{Frequency} \\ \hline 15-24 & 12 \\ 25-34 & 15 \\ 35-44 & 8 \\ 45-54 & 5 \\ \hline \end{array}"
                    />,
                    answer: <MathDisplay
                        math="\text{Midpoints: } 19.5, 29.5, 39.5, 49.5 \\ \text{Mean} = \frac{19.5(12) + 29.5(15) + 39.5(8) + 49.5(5)}{40} = 30.4 \text{ years}"
                        size="x-large"
                    />
                }
            }
        },
        2: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="The table shows test scores in a class quiz. Calculate the mean score:"
                        math="\begin{array}{|c|c|} \hline \text{Score (out of 10)} & \text{Number of Students} \\ \hline 4 & 2 \\ 6 & 3 \\ 8 & 3 \\ 10 & 2 \\ \hline \end{array}"
                    />,
                    answer: <MathDisplay
                        math="\frac{1(2) + 2(3) + 3(3) + 4(2)}{10} = \frac{25}{10} = 2.5"
                        size="x-large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="Find the median and mode of:"
                        math="4, 7, 4, 8, 5, 4, 6"
                    />,
                    answer: <MathDisplay
                        math="\text{Median} = 5, \text{ Mode} = 4"
                        size="x-large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="Find the size of an interior angle in a regular hexagon:"
                        math=""
                    />,
                    answer: <MathDisplay
                        math="120°"
                        size="x-large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="In a right angled triangle, one angle is (3x)°, another is (x + 20)°. Find x."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="3x + (x + 20) + 90 = 180 \\ 4x + 110 = 180 \\ x = 32.5"
                        size="x-large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="This table shows the daily rainfall (mm) recorded over 10 days. If one reading of 20mm is found to be incorrect, find the new mean rainfall:"
                        math="\begin{array}{|c|c|} \hline \text{Rainfall (mm)} & \text{Number of Days} \\ \hline 10 & 3 \\ 20 & 4 \\ 30 & 2 \\ 40 & 1 \\ \hline \end{array}"
                    />,
                    answer: <MathDisplay
                        math="\text{Original total} = 30 + 80 + 60 + 40 = 210 \\ \text{New total} = 210 - 20 = 190 \\ \text{New mean} = \frac{190}{9} = 21.1"
                        size="x-large"
                    />
                }
            }
        },
        3: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="The table shows journey times to school (in minutes). Find how many students were surveyed:"
                        math="\begin{array}{|c|c|} \hline \text{Time (mins)} & \text{Number of Students} \\ \hline 0-9 & 4 \\ 10-19 & 6 \\ 20-29 & 5 \\ \hline \end{array}"
                    />,
                    answer: <MathDisplay
                        math="4 + 6 + 5 = 15"
                        size="x-large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="The mean of 5 numbers is 7. One number is 11. Find the mean of the other 4."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="5 × 7 = 35 \\ 35 - 11 = 24 \\ \frac{24}{4} = 6"
                        size="x-large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="In a triangle ABC, angle BAC = 70°, angle ABC = (2x)°, angle BCA = x°. Find x."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="70 + 2x + x = 180 \\ 3x = 110 \\ x = 37"
                        size="x-large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="Find the range of:"
                        math="13, 8, 15, 7, 12, 9"
                    />,
                    answer: <MathDisplay
                        math="15 - 7 = 8"
                        size="x-large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="The table shows the heights of sunflower plants (in cm) after 4 weeks. Estimate the mean height using the midpoints:"
                        math="\begin{array}{|c|c|} \hline \text{Height (cm)} & \text{Frequency} \\ \hline 20-29 & 8 \\ 30-39 & 15 \\ 40-49 & 7 \\ \hline \end{array}"
                    />,
                    answer: <MathDisplay
                        math="\text{Midpoints: } 24.5, 34.5, 44.5 \\ \text{Mean} = \frac{24.5(8) + 34.5(15) + 44.5(7)}{30} = 34.1 \text{ cm}"
                        size="x-large"
                    />
                }
            }
        }
    }
};

export default week8;