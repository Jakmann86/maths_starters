import React from 'react';
import { Question } from '../components/Mathematical/DisplayComponents';
import { MathDisplay } from '../components/Mathematical/DisplayComponents';

const week21 = {
    topic: "Trigonometry II: Theory of Non-Right Angles",
    starters: {
        1: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="y is directly proportional to x. When x = 3, y = 12.
                        Find:"
                        math="\text{a) The equation connecting x and y} \\ \text{b) The value of x when y = 20}"

                    />,
                    answer: <MathDisplay
                        math="\text{a) } y = kx\\ 12 = k(3)\\ k = 4\\ y = 4x\\ \\ \text{b) } 20 = 4x\\ x = 5"
                        size="x-large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="t is inversely proportional to d. When d = 2, t = 8. "
                        math="\text{Find t when d = 4.}"
                    />,
                    answer: <MathDisplay
                        math="t = \frac{k}{d}\\ 8 = \frac{k}{2}\\ k = 16\\ t = \frac{16}{4} = 4"
                        size="x-large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction={`Find the area of a right-angled triangle with:
                                    base = 8 cm
                                    height = 6 cm`}
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Area} = \frac{1}{2} \times 8 \times 6 = 24 \text{ cm}^2"
                        size="x-large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="Find the mean and range of these numbers:"
                        math="4, 7, 3, 8, 3"
                    />,
                    answer: <MathDisplay
                        math="\text{Mean} = \frac{4 + 7 + 3 + 8 + 3}{5} = 5\\ \text{Range} = 8 - 3 = 5"
                        size="x-large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction={`A recipe for 8 people needs 400g of flour. Calculate the amount needed for:
a) 12 people
b) 20 people`}
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{a) } \frac{400 \times 12}{8} = 600\text{ g}\\ \text{b) } \frac{400 \times 20}{8} = 1000\text{ g}"
                        size="x-large"
                    />
                }
            }
        },
        2: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction={`Find the missing side in a right-angled triangle where:
hypotenuse = 13 cm
one side = 5 cm`}
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Using Pythagoras:}\\ 13^2 = 5^2 + x^2\\ 169 = 25 + x^2\\ x^2 = 144\\ x = 12\text{ cm}"
                        size="x-large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="V is proportional to r². When r = 2, V = 8. Find V when r = 3."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="V = kr^2\\ 8 = k(4)\\ k = 2\\ V = 2r^2\\ V = 2(9) = 18"
                        size="x-large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction={`In triangle ABC, if BC = 12 cm and angle ABC = 90°.
Calculate AC if angle BAC = 30°.`}
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Using trigonometry:}\\ \cos(30°) = \frac{12}{AC}\\ AC = \frac{12}{\cos(30°)} = 13.9\text{ cm}"
                        size="x-large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="Find the mode and median of:"
                        math="3, 8, 3, 4, 7, 3, 8"
                    />,
                    answer: <MathDisplay
                        math="\text{Mode } = 3\\ \text{Ordered: } 3,3,3,4,7,8,8\\ \text{Median } = 4"
                        size="x-large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction={`Triangle ABC has sides a = 8cm, b = 6cm and angle C = 90°.
Work out the area of the triangle.`}
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Area } = \frac{1}{2} \times 8 \times 6 = 24\text{ cm}^2"
                        size="x-large"
                    />
                }
            }
        },
        3: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction={`In a right-angled triangle, if the hypotenuse is 10cm and one angle is 40°.
Find the length of the opposite side.`}
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Using sine:}\\ \sin(40°) = \frac{\text{opposite}}{10}\\ \text{opposite } = 10\sin(40°) = 6.4\text{ cm}"
                        size="x-large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="p is inversely proportional to q. When p = 12, q = 2. Find the value of p when q = 6."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="p = \frac{k}{q}\\ 12 = \frac{k}{2}\\ k = 24\\ p = \frac{24}{6} = 4"
                        size="x-large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction={`Using the sine rule, find x in this right-angled triangle:
hypotenuse = 10 cm
angle = 35°`}
                        math=""
                    />,
                    answer: <MathDisplay
                        math="x = 10\sin(35°) = 5.7\text{ cm}"
                        size="x-large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction={`The mean of four numbers is 6.
When one number is removed, the mean becomes 5.
What number was removed?`}
                        math=""
                    />,
                    answer: <MathDisplay
                        math="4 \times 6 = 24 \text{ (original sum)}\\ 3 \times 5 = 15 \text{ (new sum)}\\ 24 - 15 = 9 \text{ (removed number)}"
                        size="x-large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction={`If angle A = 30° and the hypotenuse is 8cm in a right-angled triangle.
Find the other two sides.`}
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Adjacent } = 8\cos(30°) = 6.9\text{ cm}\\ \text{Opposite } = 8\sin(30°) = 4\text{ cm}"
                        size="x-large"
                    />
                }
            }
        }
    }
};

export default week21;