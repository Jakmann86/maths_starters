import React from 'react';
import { Question, MathDisplay } from '../components/Mathematical/DisplayComponents';

const week27 = {
    topic: "Number Theory IV: Upper and Lower bounds",
    starters: {
        1: {
            standard: {
                lastLesson: {
                    question: (
                        <Question
                            instruction="A factory packs biscuits into boxes that each weigh between 395g and 405g. What is the maximum number of boxes that could be made from 20kg of biscuits?"
                            className="text-gray-700"
                        />
                    ),
                    answer: <MathDisplay math="\text{Minimum weight per box} = 395\text{g} = 0.395\text{kg} \\ 20 \div 0.395 = 50.63... \\ \text{Maximum number of boxes} = 50" size="x-large" />
                },
                lastWeek: {
                    question: (
                        <Question
                            instruction="Simplify fully: 3x² + 2x - x² - 5x + 1"
                            className="text-gray-700"
                        />
                    ),
                    answer: <MathDisplay math="2x^2 - 3x + 1" size="x-large" />
                },
                lastTopic: {
                    question: (
                        <Question
                            instruction="A recipe requires 2.4 kg of flour to make 30 cakes. James makes the recipe but accidentally uses 2.5 kg. How many cakes will this mixture make if rounded to the nearest whole cake?"
                            className="text-gray-700"
                        />
                    ),
                    answer: <MathDisplay math="2.5 \div 2.4 \times 30 = 31.25 \\ \text{Rounds to 31 cakes}" size="x-large" />
                },
                lastYear: {
                    question: (
                        <Question
                            instruction="In a bag of 360 marbles, the ratio of red to blue to green is 5:3:4. How many red marbles are there?"
                            className="text-gray-700"
                        />
                    ),
                    answer: <MathDisplay math="\text{Parts} = 5 + 3 + 4 = 12 \\ \text{One part} = 360 \div 12 = 30 \\ \text{Red marbles} = 5 \times 30 = 150" size="x-large" />
                },
                challenge: {
                    question: (
                        <Question
                            instruction="A builder estimates the area of a rectangular floor as 24m². If his measurements of 6.2m and 3.8m were each rounded to 1 decimal place, what is the maximum possible percentage error in his estimate?"
                            className="text-gray-700"
                        />
                    ),
                    answer: <MathDisplay math="\text{Max length} = 6.25\text{m}, \text{ Max width} = 3.85\text{m} \\ \text{Max area} = 24.0625\text{m}² \\ \text{Percentage error} = \dfrac{24.0625 - 24}{24} \times 100 = 0.26\%" size="x-large" />
                }
            }
        },
        2: {
            standard: {
                lastLesson: {
                    question: (
                        <Question
                            instruction="A cylindrical water tank has a diameter of 1.2m (to 1d.p.) and height 1.8m (to 1d.p.). Calculate the minimum possible volume of water it can hold. Use π = 3.142."
                            className="text-gray-700"
                        />
                    ),
                    answer: <MathDisplay math="\text{Min diameter} = 1.15\text{m}, \text{ Min height} = 1.75\text{m} \\ \text{Min radius} = 0.575\text{m} \\ \text{Min volume} = \pi r^2 h = 3.142 \times 0.575^2 \times 1.75 = 1.82\text{m}^3" size="x-large" />
                },
                lastWeek: {
                    question: (
                        <Question
                            instruction="Solve: 4x + 7 = 3x - 5"
                            className="text-gray-700"
                        />
                    ),
                    answer: <MathDisplay math="4x + 7 = 3x - 5 \\ x + 7 = -5 \\ x = -12" size="x-large" />
                },
                lastTopic: {
                    question: (
                        <Question
                            instruction="A company sells paint claiming each tin covers 12m². If this measurement is accurate to the nearest m², what is the minimum number of tins needed to guarantee coverage of a wall measuring 85m²?"
                            className="text-gray-700"
                        />
                    ),
                    answer: <MathDisplay math="\text{Min coverage per tin} = 11.5\text{m}² \\ 85 \div 11.5 = 7.39... \\ \text{Need 8 tins to guarantee coverage}" size="x-large" />
                },
                lastYear: {
                    question: (
                        <Question
                            instruction="Calculate 13.5% of £1247.50, giving your answer to the nearest penny."
                            className="text-gray-700"
                        />
                    ),
                    answer: <MathDisplay math="13.5\% \text{ of } \text{£}1247.50 = \dfrac{13.5}{100} \times 1247.50 = \text{£}168.41" size="x-large" />
                },
                challenge: {
                    question: (
                        <Question
                            instruction="A shop sells chocolate bars for £3.45 each. They round all their prices to the nearest 5p. If a customer buys 7 bars, what is the maximum possible amount they could save compared to the unrounded total?"
                            className="text-gray-700"
                        />
                    ),
                    answer: <MathDisplay math="\text{Exact total} = 7 \times 3.45 = 24.15 \\ \text{Each bar rounded} = 3.45 \text{ rounds to } 3.45 \\ \text{No saving in this case} \\ \text{Maximum saving} = 0" size="x-large" />
                }
            }
        },
        3: {
            standard: {
                lastLesson: {
                    question: (
                        <Question
                            instruction="A farmer's field is approximately rectangular. When measured to the nearest 5 meters, the length is 125m and width is 85m. What is the maximum possible perimeter of the field?"
                            className="text-gray-700"
                        />
                    ),
                    answer: <MathDisplay math="\text{Max length} = 127.5\text{m} \\ \text{Max width} = 87.5\text{m} \\ \text{Max perimeter} = 2(127.5 + 87.5) = 430\text{m}" size="x-large" />
                },
                lastWeek: {
                    question: (
                        <Question
                            instruction="Factorise completely: x² - 16"
                            className="text-gray-700"
                        />
                    ),
                    answer: <MathDisplay math="x^2 - 16 = (x+4)(x-4)" size="x-large" />
                },
                lastTopic: {
                    question: (
                        <Question
                            instruction="Calculate the area of a triangle with base 8cm and height 15cm."
                            className="text-gray-700"
                        />
                    ),
                    answer: <MathDisplay math="\text{Area} = \dfrac{1}{2} \times 8 \times 15 = 60\text{ cm}^2" size="x-large" />
                },
                lastYear: {
                    question: (
                        <Question
                            instruction="A shop sells paint mixing system that claims to be accurate to within 1ml. For a 2.5L mix, they charge £3.20 per 100ml. What is the maximum possible difference in price between two identical orders?"
                            className="text-gray-700"
                        />
                    ),
                    answer: <MathDisplay math="\text{2.5L} = 2500\text{ml} \\ \text{Max difference} = 2\text{ml} \\ \text{Price per ml} = \dfrac{3.20}{100} = £0.032 \\ \text{Max price difference} = 2 \times 0.032 = £0.064" size="x-large" />
                },
                challenge: {
                    question: (
                        <Question
                            instruction="A cube has sides measured as 5cm to the nearest millimeter. What is the difference between the maximum and minimum possible volumes of the cube?"
                            className="text-gray-700"
                        />
                    ),
                    answer: <MathDisplay math="\text{Max side} = 5.05\text{cm} \\ \text{Min side} = 4.95\text{cm} \\ \text{Max volume} = 5.05^3 = 128.78\text{cm}^3 \\ \text{Min volume} = 4.95^3 = 121.29\text{cm}^3 \\ \text{Difference} = 7.49\text{cm}^3" size="x-large" />
                }
            }
        }
    }
};

export default week27;