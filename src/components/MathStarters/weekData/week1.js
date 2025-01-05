import React from 'react';
import { MathDisplay } from '../components/Mathematical/DisplayComponents';
import { Question } from '../components/Mathematical/DisplayComponents';

const week1 = {
    topic: "Trigonometry I: Theory of Right-Angled Triangles",
    starters: {
        1: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="Find the area of a triangle with base 12cm and height 5cm"
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Area} = \frac{1}{2} \times 12 \times 5 = 30\text{ cm}^2"
                        size="x-large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="The area of a square is 225cm². What is its length?"
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{length} = \sqrt{225} = 15\text{ cm}"
                        size="x-large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="Find the area of a rectangle with length 8cm and width 6cm"
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Area} = 8 \times 6 = 48\text{ cm}^2"
                        size="x-large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="Simplify:"
                        math="\sqrt{144}"
                    />,
                    answer: <MathDisplay
                        math="\sqrt{144} = 12"
                        size="x-large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="A rectangle has width x+2 and length 2x+3. If its area is 77cm², find x."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="(x+2)(2x+3) = 77 \\\\ 2x^2 + 3x + 4x + 6 = 77 \\\\ 2x^2 + 7x - 71 = 0 \\\\ (2x+13)(x-3) = 0 \\\\ x = -\frac{13}{2} \text{ or } x = 3 \\\\ x = 3 \text{ (since dimensions must be positive)} \\\\ \text{Check: width} = 5\text{ cm}, \text{ length} = 9\text{ cm}"
                        size="x-large"
                    />
                }
            }
        },
        2: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="Find the hypotenuse of a right triangle with sides 3cm and 4cm"
                        math="a^2 + b^2 = c^2"
                    />,
                    answer: <MathDisplay
                        math="3^2 + 4^2 = c^2 \\\\ 9 + 16 = c^2 \\\\ c = 5\text{ cm}"
                        size="x-large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="The area of a rectangle is 63cm². If its width is 9cm, find its length"
                        math=""
                    />,
                    answer: <MathDisplay
                        math="63 = \text{length} \times 9 \\\\ \text{length} = 7\text{ cm}"
                        size="x-large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="Find the missing side in a right triangle where the hypotenuse is 13cm and one side is 5cm"
                        math=""
                    />,
                    answer: <MathDisplay
                        math="169 = 25 + x^2 \\\\ x^2 = 144 \\\\ x = 12\text{ cm}"
                        size="x-large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="Find the perimeter of a rectangle with length 15cm and width 8cm"
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Perimeter} = 2(15 + 8) = 2(23) = 46\text{ cm}"
                        size="x-large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="A rectangle has diagonal 17cm and width 8cm. Find its length."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="8^2 + \text{length}^2 = 17^2 \\\\ 64 + \text{length}^2 = 289 \\\\ \text{length}^2 = 225 \\\\ \text{length} = 15\text{ cm}"
                        size="x-large"
                    />
                }
            }
        },
        3: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="Find the missing side in a right triangle where the hypotenuse is 10cm and one side is 6cm"
                        math=""
                    />,
                    answer: <MathDisplay
                        math="100 = 36 + x^2 \\\\ x^2 = 64 \\\\ x = 8\text{ cm}"
                        size="x-large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="A square has area 144cm². What is its perimeter?"
                        math=""
                    />,
                    answer: <MathDisplay
                        math="144 = \text{side}^2 \\\\ \text{side} = 12 \\\\ \text{Perimeter} = 4 \times 12 = 48\text{ cm}"
                        size="x-large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="In a right triangle with angle 30°, find the opposite side if the hypotenuse is 8cm"
                        math="\sin 30° = \frac{\text{opposite}}{\text{hypotenuse}}"
                    />,
                    answer: <MathDisplay
                        math="\text{opposite} = 8 \times \sin 30° = 8 \times 0.5 = 4\text{ cm}"
                        size="x-large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="The area of a triangle is 24cm². If its base is 8cm, what is its height?"
                        math=""
                    />,
                    answer: <MathDisplay
                        math="24 = \frac{1}{2} \times 8 \times \text{height} \\\\ \text{height} = 6\text{ cm}"
                        size="x-large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="A ladder of length 10m reaches a height of 8m up a wall. What angle does it make with the ground?"
                        math="\sin \theta = \frac{\text{opposite}}{\text{hypotenuse}} = \frac{8}{10}"
                    />,
                    answer: <MathDisplay
                        math="\theta = \sin^{-1}(\frac{8}{10}) = 53.1°\text{ (1dp)}"
                        size="x-large"
                    />
                }
            }
        }
    }
};

export default week1;