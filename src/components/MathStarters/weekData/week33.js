import React from 'react';
import { Question, MathDisplay } from '../components/Mathematical/DisplayComponents';

const week33 = {
    topic: "Mixed Topics Revision - Week 1",
    starters: {
        1: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="Three numbers x, y and z are inversely proportional. When x = 2 and y = 3, z = 12. Find z when x = 4 and y = 1."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="xyz = k \\ 2 \times 3 \times 12 = k \\ k = 72 \\ 4 \times 1 \times z = 72 \\ z = 18"
                        size="x-large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="Two cards are drawn with replacement from a pack of 52 cards. Find the probability of getting:"
                        math="\text{a) Two aces} \\ \text{b) At least one ace}"
                    />,
                    answer: <MathDisplay
                        math="\text{a) } P(\text{two aces}) = (\dfrac{4}{52})^2 = \dfrac{1}{169} \\ \text{b) } 1 - P(\text{no aces}) = 1 - (\dfrac{48}{52})^2 = \dfrac{15}{169}"
                        size="x-large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="Find the area of a sector with radius 12cm and angle 150°. Give your answer in terms of π."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Area} = \dfrac{150}{360} \times \pi \times 12^2 = 60\pi \text{ cm}^2"
                        size="x-large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="Two rectangles are similar with scale factor 1:3. If the area of the smaller rectangle is 24cm², find the area of the larger rectangle."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Area scale factor} = (1:3)^2 = 1:9 \\ 24 \times 9 = 216\text{ cm}^2"
                        size="x-large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="A cube has surface area 96cm². Find the length of its diagonal."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Surface area} = 6x^2 = 96 \\ x^2 = 16 \\ x = 4 \\ \text{Diagonal} = 4\sqrt{3}\text{ cm}"
                        size="x-large"
                    />
                }
            }
        },
        2: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="A sequence has first term a = 2 and common ratio r = 3. Find:"
                        math="\text{a) The 4th term} \\ \text{b) The sum of the first 4 terms}"
                    />,
                    answer: <MathDisplay
                        math="\text{a) } ar^3 = 2 \times 3^3 = 54 \\ \text{b) } \dfrac{2(1-3^4)}{1-3} = 80"
                        size="x-large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="Find the equation of the circle with center (2,-1) and radius 5."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="(x-2)^2 + (y+1)^2 = 25"
                        size="x-large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="Rationalise the denominator and simplify:"
                        math="\dfrac{3}{\sqrt{5} + 2}"
                    />,
                    answer: <MathDisplay
                        math="\dfrac{3(\sqrt{5} - 2)}{(\sqrt{5} + 2)(\sqrt{5} - 2)} = \dfrac{3(\sqrt{5} - 2)}{5 - 4} = 3\sqrt{5} - 6"
                        size="x-large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="Find all angles in a triangle if they are in the ratio 2:3:4."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="2x + 3x + 4x = 180 \\ 9x = 180 \\ x = 20 \\ \text{Angles: } 40°, 60°, 80°"
                        size="x-large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="The line y = mx + c passes through (2,5) and is perpendicular to y = 3x + 1. Find its equation."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Perpendicular gradient} = -\dfrac{1}{3} \\ 5 = -\dfrac{1}{3}(2) + c \\ c = \dfrac{17}{3} \\ y = -\dfrac{1}{3}x + \dfrac{17}{3}"
                        size="x-large"
                    />
                }
            }
        },
        3: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="Find dy/dx when:"
                        math="y = 3x^4 - 2x^2 + 5x - 1"
                    />,
                    answer: <MathDisplay
                        math="\dfrac{dy}{dx} = 12x^3 - 4x + 5"
                        size="x-large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="Find the length of side AB in triangle ABC where:"
                        math="\text{BC} = 8\text{ cm}, \text{ AC} = 12\text{ cm and angle BCA} = 115°"
                    />,
                    answer: <MathDisplay
                        math="AB^2 = 8^2 + 12^2 - 2(8)(12)\cos(115°) \\ = 64 + 144 - 192(-0.423) \\ = 289 \\ AB = 17\text{ cm}"
                        size="x-large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="A quadratic curve has roots 3 and -2, and passes through (0,12). Find its equation."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Form: } y = a(x-3)(x+2) \\ 12 = a(0-3)(0+2) \\ 12 = -6a \\ a = -2 \\ y = -2(x-3)(x+2)"
                        size="x-large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="Solve the inequality:"
                        math="3x - 1 < 2(x + 3)"
                    />,
                    answer: <MathDisplay
                        math="3x - 1 < 2x + 6 \\ 3x - 2x < 6 + 1 \\ x < 7"
                        size="x-large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="The sum of four consecutive integers is 90. The product of the first and last numbers is 506. Find the numbers."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Let numbers be } n, n+1, n+2, n+3 \\ n + (n+1) + (n+2) + (n+3) = 90 \\ 4n + 6 = 90 \\ n = 21 \\ \text{Numbers: } 21, 22, 23, 24"
                        size="x-large"
                    />
                }
            }
        }
    }
};

export default week33;