import React from 'react';
import { Question, MathDisplay } from '../components/Mathematical/DisplayComponents';

const week30 = {
    topic: "Functions I: Introduction to Functions",
    starters: {
        1: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="Solve by completing the square:"
                        math="2x^2 + 12x + 15 = 0"
                    />,
                    answer: <MathDisplay
                        math="2(x^2 + 6x) + 15 = 0 \\ 2(x + 3)^2 - 18 + 15 = 0 \\ 2(x + 3)^2 = 3 \\ (x + 3)^2 = \dfrac{3}{2} \\ x = -3 \pm \sqrt{\dfrac{3}{2}}"
                        size="x-large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="Simplify:"
                        math="\dfrac{x^2 + 2x}{x^2 - 4} \div \dfrac{x + 2}{x}"
                    />,
                    answer: <MathDisplay
                        math="\dfrac{x^2 + 2x}{x^2 - 4} \times \dfrac{x}{x + 2} = \dfrac{x(x + 2)}{(x - 2)(x + 2)} = \dfrac{x}{x - 2}"
                        size="x-large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="The minimum point of a quadratic curve f(x) is at (1,2). Write down the minimum point of:"
                        math="f(x) + 4"
                    />,
                    answer: <MathDisplay
                        math="\text{Adding }+4\text{ moves the curve up 4 units} \\ \text{Minimum point} = (1,6)"
                        size="x-large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="Find the area of a sector of radius 8cm with angle 135°. Give your answer in terms of π."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Area} = \dfrac{135}{360} \times \pi \times 8^2 = 24\pi \text{ cm}^2"
                        size="x-large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="A rectangle has perimeter 28cm and area 48cm². Find its dimensions."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Let length} = x \\ \text{Width} = 14 - x \\ x(14-x) = 48 \\ x^2 - 14x + 48 = 0 \\ (x-6)(x-8) = 0 \\ x = 6 \text{ or } 8 \\ \text{Dimensions: } 6\text{ cm by } 8\text{ cm}"
                        size="x-large"
                    />
                }
            }
        },
        2: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="If f(x) = 2x + 1 and g(x) = x², find:"
                        math="fg(2)"
                    />,
                    answer: <MathDisplay
                        math="g(2) = 2^2 = 4 \\ f(4) = 2(4) + 1 = 9"
                        size="x-large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="Complete the square:"
                        math="x^2 - 8x + 10"
                    />,
                    answer: <MathDisplay
                        math="(x - 4)^2 - 16 + 10 = (x - 4)^2 - 6"
                        size="x-large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="If f(x) = 3x - 2, find f⁻¹(x)"
                        math=""
                    />,
                    answer: <MathDisplay
                        math="y = 3x - 2 \\ y + 2 = 3x \\ x = \dfrac{y + 2}{3} \\ \text{Therefore } f^{-1}(x) = \dfrac{x + 2}{3}"
                        size="x-large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="In the diagram, O is the centre of the circle and angle ABC = 35°. Find angle AOC."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Angle at centre} = 2 \times \text{angle at circumference} \\ \text{AOC} = 2 \times 35° = 70°"
                        size="x-large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="Find all values of x where:"
                        math="f(x) = g(x) \text{ where } f(x) = x + 2 \text{ and } g(x) = x^2"
                    />,
                    answer: <MathDisplay
                        math="x + 2 = x^2 \\ x^2 - x - 2 = 0 \\ (x-2)(x+1) = 0 \\ x = 2 \text{ or } x = -1"
                        size="x-large"
                    />
                }
            }
        },
        3: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="Find the inverse of f(x) where:"
                        math="f(x) = 2x - 3"
                    />,
                    answer: <MathDisplay
                        math="y = 2x - 3 \\ y + 3 = 2x \\ x = \dfrac{y + 3}{2} \\ f^{-1}(x) = \dfrac{x + 3}{2}"
                        size="x-large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="Solve:"
                        math="(x - 2)^2 = 18"
                    />,
                    answer: <MathDisplay
                        math="x - 2 = \pm \sqrt{18} \\ x = 2 \pm \sqrt{18} \\ x \approx 6.24 \text{ or } -2.24"
                        size="x-large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="If f(x + 1) = x² - 3x + 2, find f(x)"
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Replace } x \text{ with } (x-1): \\ f(x) = (x-1)^2 - 3(x-1) + 2 \\ = x^2 - 2x + 1 - 3x + 3 + 2 \\ = x^2 - 5x + 6"
                        size="x-large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="The interior angle of a regular polygon is 140°. How many sides does it have?"
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Interior angle} = \dfrac{(n-2) \times 180}{n} = 140 \\ 140n = 180n - 360 \\ 40n = 360 \\ n = 9 \text{ sides}"
                        size="x-large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="If f(x) = x² - 2x and g(x) = 3x + 1, find:"
                        math="(f + g)(x) \text{ and } (fg)(2)"
                    />,
                    answer: <MathDisplay
                        math="(f + g)(x) = (x^2 - 2x) + (3x + 1) = x^2 + x + 1 \\ (fg)(2) = f(2) \times g(2) = (4 - 4) \times (7) = 0"
                        size="x-large"
                    />
                }
            }
        }
    }
};

export default week30;