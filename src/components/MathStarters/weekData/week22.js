import React from 'react';
import { Question } from '../components/Mathematical/DisplayComponents';
import { MathDisplay } from '../components/Mathematical/DisplayComponents';


const week22 = {
    topic: "Graphs II: Curved Graphs",
    starters: {
        1: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="Complete the table of values for y = x² - 2x - 3"
                        math={`\\begin{array}{|c|c|c|c|c|c|}
\\hline
x & -1 & 0 & 1 & 2 & 3 \\\\
\\hline
y & ? & ? & ? & ? & ? \\\\
\\hline
\\end{array}`}
                    />,
                    answer: <MathDisplay
                        math={`\\begin{array}{|c|c|c|c|c|c|}
\\hline
x & -1 & 0 & 1 & 2 & 3 \\\\
\\hline
y & 0 & -3 & -4 & -3 & 0 \\\\
\\hline
\\end{array}`}
                        size="x-large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="In triangle ABC, calculate angle A given:"
                        math="a = 12\text{ cm}\\ B = 45°\\ C = 75°"
                    />,
                    answer: <MathDisplay
                        math="A + B + C = 180°\\ A + 45° + 75° = 180°\\ A = 60°"
                        size="x-large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="Find the coordinates of the minimum point of:"
                        math="y = x^2 + 4x + 3"
                    />,
                    answer: <MathDisplay
                        math="x = -\frac{b}{2a} = -\frac{4}{2(1)} = -2\\ y = (-2)^2 + 4(-2) + 3 = -1\\ \text{Minimum point: } (-2, -1)"
                        size="x-large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="Find the mode and range of these numbers:"
                        math="4, 7, 3, 8, 3"
                    />,
                    answer: <MathDisplay
                        math="\text{Mode } = 3\\ \text{Range } = 8 - 3 = 5"
                        size="x-large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction={`Find the equation of the quadratic curve with:
minimum point (-1, 2)
passing through (1, 6)`}
                        math=""
                    />,
                    answer: <MathDisplay
                        math="y = a(x + 1)^2 + 2\\ 6 = a(1 + 1)^2 + 2\\ 6 = 4a + 2\\ a = 1\\ y = (x + 1)^2 + 2"
                        size="x-large"
                    />
                }
            }
        },
        2: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction={`For y = x² - 4, find:
a) y-intercept
b) x-intercepts
c) line of symmetry`}
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{a) y-intercept: } (0, -4)\\ \text{b) x-intercepts: } x = \pm 2\\ \text{c) line of symmetry: } x = 0"
                        size="x-large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="Using the cosine rule, find the largest angle in a triangle with sides:"
                        math="\text{a } = 5\text{ cm},\\ \text{b } = 7\text{ cm},\\ \text{c } = 9\text{ cm}"
                    />,
                    answer: <MathDisplay
                        math="\cos A = \frac{7^2 + 5^2 - 9^2}{2 \times 7 \times 5}\\ A = 104.5° \text{ (1dp)}"
                        size="x-large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="Complete the table for y = x³"
                        math={`\\begin{array}{|c|c|c|c|c|c|}
\\hline
x & -2 & -1 & 0 & 1 & 2 \\\\
\\hline
y & ? & ? & ? & ? & ? \\\\
\\hline
\\end{array}`}
                    />,
                    answer: <MathDisplay
                        math={`\\begin{array}{|c|c|c|c|c|c|}
\\hline
x & -2 & -1 & 0 & 1 & 2 \\\\
\\hline
y & -8 & -1 & 0 & 1 & 8 \\\\
\\hline
\\end{array}`}
                        size="x-large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="Find the mean of:"
                        math="12, 5, 8, 15, 7, 11"
                    />,
                    answer: <MathDisplay
                        math="\frac{12 + 5 + 8 + 15 + 7 + 11}{6} = \frac{58}{6} = 9.67"
                        size="x-large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction={`A quadratic curve has x-intercepts at (2,0) and (6,0).
The curve passes through (4,12).
Find its equation.`}
                        math=""
                    />,
                    answer: <MathDisplay
                        math="y = a(x-2)(x-6)\\ 12 = a(4-2)(4-6)\\ 12 = -8a\\ a = -\frac{3}{2}\\ y = -\frac{3}{2}(x-2)(x-6)"
                        size="x-large"
                    />
                }
            }
        },
        3: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="Find where these graphs intersect:"
                        math="y = 2x - 1\\ y = x^2 + x"
                    />,
                    answer: <MathDisplay
                        math="x^2 + x = 2x - 1\\ x^2 - x - 1 = 0\\ \text{Using quadratic formula:}\\ x = 1.62 \text{ or } x = -0.62 \text{ (2dp)}"
                        size="x-large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction={`In triangle ABC, find angle B given:
b = 8 cm
c = 10 cm
angle A = 60°`}
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Using sine rule:}\\ \frac{\sin B}{8} = \frac{\sin 60°}{10}\\ B = 44.4° \text{ (1dp)}"
                        size="x-large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="Complete the table for y = 1/x"
                        math={`\\begin{array}{|c|c|c|c|c|}
\\hline
x & -2 & -1 & 1 & 2 \\\\
\\hline
y & ? & ? & ? & ? \\\\
\\hline
\\end{array}`}
                    />,
                    answer: <MathDisplay
                        math={`\\begin{array}{|c|c|c|c|c|}
\\hline
x & -2 & -1 & 1 & 2 \\\\
\\hline
y & -0.5 & -1 & 1 & 0.5 \\\\
\\hline
\\end{array}`}
                        size="x-large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction={`The mean of three numbers is 12.
Two of the numbers are 15 and 8.
Find the third number.`}
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\frac{15 + 8 + x}{3} = 12\\ 23 + x = 36\\ x = 13"
                        size="x-large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="Find the coordinates of the points where these graphs intersect:"
                        math="y = x^2 - 4x + 3\\ y = 2x - 1"
                    />,
                    answer: <MathDisplay
                        math="x^2 - 4x + 3 = 2x - 1\\ x^2 - 6x + 4 = 0\\ (x - 2)(x - 4) = 0\\ x = 2 \text{ or } x = 4\\ \text{Points: } (2,3) \text{ and } (4,7)"
                        size="x-large"
                    />
                }
            }
        }
    }
};

export default week22;