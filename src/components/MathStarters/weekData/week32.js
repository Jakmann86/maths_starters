import React from 'react';
import { Question, MathDisplay } from '../components/Mathematical/DisplayComponents';

const week32 = {
    topic: "Functions II: Transformation of Functions and Trigonometric Graphs",
    starters: {
        1: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="Given that f(x) = x² + 4, state the coordinates of its minimum point. Hence find the minimum point of g(x) = x² + 4 + 3."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{For } f(x): \text{ minimum at } (0,4) \\ \text{For } g(x): \text{ shift up 3 units} \\ \text{New minimum point: } (0,7)"
                        size="x-large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="Solve by completing the square:"
                        math="2x^2 - 12x + 7"
                    />,
                    answer: <MathDisplay
                        math="2(x^2 - 6x) + 7 \\ = 2(x - 3)^2 - 18 + 7 \\ = 2(x - 3)^2 - 11"
                        size="x-large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="Expand and simplify:"
                        math="(x - 2)(x + 5)(x - 1)"
                    />,
                    answer: <MathDisplay
                        math="x^3 + 2x^2 - 13x + 10"
                        size="x-large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="A sector has radius 8cm and arc length 12cm. Find its area in terms of π."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Angle} = \dfrac{12}{8} = \dfrac{3}{2} \text{ radians} \\ \text{Area} = \dfrac{1}{2} \times 8^2 \times \dfrac{3}{2} = 24\pi \text{ cm}^2"
                        size="x-large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="The maximum point of f(x) is at (3,7). Write down the coordinates of the maximum point of:"
                        math="y = f(x - 2) + 4"
                    />,
                    answer: <MathDisplay
                        math="\text{Shift 2 units right and 4 units up} \\ \text{New maximum point: } (5,11)"
                        size="x-large"
                    />
                }
            }
        },
        2: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="Describe the transformations that map y = sin(x) onto:"
                        math="y = 2\sin(x) - 1"
                    />,
                    answer: <MathDisplay
                        math="\text{1. Stretch scale factor 2 parallel to y-axis} \\ \text{2. Shift down 1 unit}"
                        size="x-large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="If f(x) = x² - 4 and g(x) = 2x + 1, find:"
                        math="(gf)(3)"
                    />,
                    answer: <MathDisplay
                        math="f(3) = 9 - 4 = 5 \\ g(5) = 2(5) + 1 = 11 \\ (gf)(3) = 11"
                        size="x-large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="For y = sin(x), state the period and amplitude of:"
                        math="y = 3\sin(2x)"
                    />,
                    answer: <MathDisplay
                        math="\text{Period} = \dfrac{\pi}{1} = \pi \\ \text{Amplitude} = 3"
                        size="x-large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="Find the size of an interior angle in a regular octagon."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Interior angle} = \dfrac{(8-2) \times 180}{8} = 135°"
                        size="x-large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="Describe fully the single transformation that maps y = f(x) onto:"
                        math="y = -f(x + 2)"
                    />,
                    answer: <MathDisplay
                        math="\text{1. Translation 2 units left} \\ \text{2. Reflection in x-axis}"
                        size="x-large"
                    />
                }
            }
        },
        3: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="Find the period, amplitude and y-coordinates of the maxima and minima of:"
                        math="y = 2\cos(3x)"
                    />,
                    answer: <MathDisplay
                        math="\text{Period} = \dfrac{2\pi}{3} \\ \text{Amplitude} = 2 \\ \text{Maximum y = 2} \\ \text{Minimum y = -2}"
                        size="x-large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="Given that g(x) = f(x - 1) - 2 and g(4) = 5, find:"
                        math="f(3)"
                    />,
                    answer: <MathDisplay
                        math="\text{When }x = 4\text{ in }g(x), x = 3\text{ in }f(x) \\ g(4) = f(3) - 2 = 5 \\ f(3) = 7"
                        size="x-large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="Write down the range of values of:"
                        math="y = 3\sin(x) + 2"
                    />,
                    answer: <MathDisplay
                        math="\text{Range is } [-3 + 2, 3 + 2] \\ = [-1, 5]"
                        size="x-large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="A triangle has area 24cm² and base 8cm. A similar triangle has base 12cm. Find its area."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Scale factor} = \dfrac{12}{8} = \dfrac{3}{2} \\ \text{Area SF} = (\dfrac{3}{2})^2 \\ \text{New area} = 24 \times \dfrac{9}{4} = 54\text{ cm}^2"
                        size="x-large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="Find the coordinates of the points of intersection of:"
                        math="y = \sin(x) \text{ and } y = \cos(x) \text{ in the first quadrant}"
                    />,
                    answer: <MathDisplay
                        math="\sin(x) = \cos(x) \\ \tan(x) = 1 \\ x = \dfrac{\pi}{4} \\ y = \sin(\dfrac{\pi}{4}) = \dfrac{1}{\sqrt{2}} \\ \text{Point: } (\dfrac{\pi}{4}, \dfrac{1}{\sqrt{2}})"
                        size="x-large"
                    />
                }
            }
        }
    }
};

export default week32;