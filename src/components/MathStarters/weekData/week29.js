import React from 'react';
import { Question, MathDisplay } from '../components/Mathematical/DisplayComponents';


const week29 = {
    topic: "Algebra VII: Additional Quadratic Equations",
    starters: {
        1: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="Simplify:"
                        math="\dfrac{3x - 1}{x^2 - 4} \times \dfrac{x + 2}{2x + 1}"
                    />,
                    answer: <MathDisplay
                        math="\dfrac{(3x - 1)(x + 2)}{(x + 2)(x - 2)(2x + 1)} = \dfrac{3x - 1}{(2x + 1)(x - 2)}"
                        size="x-large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="Simplify:"
                        math="(3 + \sqrt{5})(2 - \sqrt{5})"
                    />,
                    answer: <MathDisplay
                        math="6 - 3\sqrt{5} + 2\sqrt{5} - 5 = 1 - \sqrt{5}"
                        size="x-large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="Find the area and perimeter of a rectangle with length (2x + 3) and width (x + 1)."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Area} = (2x + 3)(x + 1) = 2x^2 + 5x + 3 \\ \text{Perimeter} = 2(2x + 3) + 2(x + 1) = 6x + 8"
                        size="x-large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="In a sale, a coat's price is reduced by 20%. If the sale price is £140, what was the original price?"
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Let original price} = x \\ 0.8x = 140 \\ x = \dfrac{140}{0.8} = 175 \\ \text{Original price} = £175"
                        size="x-large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="The difference of two numbers is 5 and their product is 84. Form and solve an equation to find the numbers."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Let numbers be } x \text{ and } (x+5) \\ x(x+5) = 84 \\ x^2 + 5x - 84 = 0 \\ (x + 12)(x - 7) = 0 \\ x = 7 \text{ or } x = -12 \\ \text{Numbers are } 7 \text{ and } 12"
                        size="x-large"
                    />
                }
            }
        },
        2: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="Complete the square for:"
                        math="x^2 + 6x + 5"
                    />,
                    answer: <MathDisplay
                        math="(x + 3)^2 - 4"
                        size="x-large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="Rationalise the denominator:"
                        math="\dfrac{2}{\sqrt{3} + 2}"
                    />,
                    answer: <MathDisplay
                        math="\dfrac{2(\sqrt{3} - 2)}{(\sqrt{3} + 2)(\sqrt{3} - 2)} = \dfrac{2(\sqrt{3} - 2)}{3 - 4} = 2(\sqrt{3} - 2)"
                        size="x-large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="Solve by completing the square:"
                        math="x^2 - 10x + 21 = 0"
                    />,
                    answer: <MathDisplay
                        math="(x - 5)^2 = 4 \\ x - 5 = \pm 2 \\ x = 7 \text{ or } x = 3"
                        size="x-large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="A triangle has sides 6cm, 8cm and angle 30° between them. Find its area."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Area} = \dfrac{1}{2} \times 6 \times 8 \times \sin(30°) = 12\text{ cm}^2"
                        size="x-large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="Given that (x - p)² + q = x² - 6x + 13, find the values of p and q."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Expand: } x^2 - 2px + p^2 + q = x^2 - 6x + 13 \\ \text{Coefficients of }x^2\text{: } 1 = 1 \\ \text{Coefficients of }x\text{: } -2p = -6 \text{ so } p = 3 \\ \text{Constants: } p^2 + q = 13 \\ 9 + q = 13 \\ q = 4"
                        size="x-large"
                    />
                }
            }
        },
        3: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="Solve by completing the square:"
                        math="2x^2 - 12x + 7 = 0"
                    />,
                    answer: <MathDisplay
                        math="2(x^2 - 6x) + 7 = 0 \\ 2(x - 3)^2 - 18 + 7 = 0 \\ 2(x - 3)^2 = 11 \\ (x - 3)^2 = 5.5 \\ x = 3 \pm \sqrt{5.5}"
                        size="large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="Find the minimum value of:"
                        math="y = 2x^2 + 8x + 11"
                    />,
                    answer: <MathDisplay
                        math="y = 2(x^2 + 4x) + 11 \\ = 2(x + 2)^2 - 8 + 11 \\ = 2(x + 2)^2 + 3 \\ \text{Minimum value} = 3 \text{ when } x = -2"
                        size="large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="The quadratic curve y = x² - 6x + 5 intersects the x-axis at points A and B. Find the coordinates of A and B."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{When } y = 0: \\ x^2 - 6x + 5 = 0 \\ (x - 1)(x - 5) = 0 \\ x = 1 \text{ or } x = 5 \\ \text{Points: } A(1,0) \text{ and } B(5,0)"
                        size="large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="Find all angles in a triangle where two of the angles are in the ratio 2:3 and the smallest angle is 40°."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="40° \text{ is smallest so other angles are } 2x \text{ and } 3x \\ 40 + 2x + 3x = 180 \\ 5x = 140 \\ x = 28 \\ \text{Angles are } 40°, 56°, 84°"
                        size="large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="For what value of k does y = x² + kx + 4 have exactly one x-intercept?"
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{For one solution, discriminant} = 0 \\ k^2 - 16 = 0 \\ k = \pm 4 \\ \text{Check x-coordinate is reasonable for } k = 4 \text{ or } k = -4"
                        size="x-large"
                    />
                }
            }
        }
    }
};

export default week29;