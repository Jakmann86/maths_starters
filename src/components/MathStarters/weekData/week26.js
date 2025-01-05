import React from 'react';
import { MathDisplay } from '../components/Mathematical/DisplayComponents';
import { Question } from '../components/Mathematical/DisplayComponents';

const week26 = {
    topic: "Mock Week - Mixed Topics Revision",
    starters: {
        1: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="Find the point on the curve where the gradient equals 2:"
                        math="y = x^2 + x"
                    />,
                    answer: <MathDisplay
                        math="\text{Gradient function} = 2x + 1 \\ 2x + 1 = 2 \\ x = \frac{1}{2} \\ y = \frac{1}{4} + \frac{1}{2} = \frac{3}{4} \\ \text{Point: } (\frac{1}{2}, \frac{3}{4})"
                        size="large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="Two triangles are similar with scale factor 1:3. If the area of the smaller triangle is 16cm², find the area of the larger triangle."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Area ratio} = 1:9 \\ \text{Larger area} = 16 \times 9 = 144\text{ cm}^2"
                        size="large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="For y = x² - 6x + 5, find:"
                        math="\text{a) The coordinates of turning point} \\ \text{b) The y-intercept} \\ \text{c) The roots}"
                    />,
                    answer: <MathDisplay
                        math="\text{a) } x = 3, y = -4 \\ \text{b) } (0,5) \\ \text{c) } x = 1 \text{ or } x = 5"
                        size="large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="Write as a single fraction in its simplest form:"
                        math="\frac{2x}{x-3} + \frac{5}{x+2}"
                    />,
                    answer: <MathDisplay
                        math="\displaystyle \frac{2x(x+2) + 5(x-3)}{(x-3)(x+2)} = \frac{2x^2 + 4x + 5x - 15}{x^2 - x - 6} = \frac{2x^2 + 9x - 15}{x^2 - x - 6}"
                        size="x-large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="A cuboid has length (x+2)cm, width xcm and height (2x-1)cm. Given that its volume is 180cm³:"
                        math="\text{a) Form and solve an equation to find x} \\ \text{b) Find the surface area when x has this value} \\ \text{c) Show that no other positive value of x is possible}"
                    />,
                    answer: <MathDisplay
                        math="x(x+2)(2x-1) = 180 \\ 2x^3 + 3x^2 - 2x = 180 \\ 2x^3 + 3x^2 - 2x - 180 = 0 \\ (2x-12)(x^2 + 9x + 15) = 0 \\ x = 6 \\ \text{SA} = 284\text{ cm}^2 \\ \text{Other factor has no real roots}"
                        size="large"
                    />
                }
            }
        },
        2: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="A fair die is rolled twice. Find the probability that:"
                        math="\text{a) Both numbers are even} \\ \text{b) The sum is 7}"
                    />,
                    answer: <MathDisplay
                        math="\text{a) } P(\text{even}) = \frac{1}{2} \\ P(\text{both even}) = \frac{1}{4} \\ \text{b) } P(\text{sum } 7) = \frac{6}{36} = \frac{1}{6}"
                        size="large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="Line L passes through points A(1,3) and B(4,9). Find:"
                        math="\text{a) The gradient of L} \\ \text{b) The equation of L} \\ \text{c) The midpoint of AB}"
                    />,
                    answer: <MathDisplay
                        math="\text{a) } m = \frac{9-3}{4-1} = 2 \\ \text{b) } y - 3 = 2(x - 1) \rightarrow y = 2x + 1 \\ \text{c) } (\frac{5}{2}, 6)"
                        size="large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="Find the length of arc AB on a circle radius 8cm if angle AOB = 135°"
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Arc length} = \frac{135}{360} \times 2\pi \times 8 = 18.85\text{ cm}"
                        size="large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="Make x the subject:"
                        math="y = \frac{3x + 2}{x - 1}"
                    />,
                    answer: <MathDisplay
                        math="y(x-1) = 3x + 2 \\ yx - y = 3x + 2 \\ yx - 3x = y + 2 \\ x(y-3) = y + 2 \\ x = \frac{y + 2}{y - 3}"
                        size="large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="The line y = mx + c passes through A(1,5) and is tangent to the curve y = x² + 2 at point P."
                        math="\text{a) Find the coordinates of P} \\ \text{b) Hence find m and c} \\ \text{c) Find the area of triangle OAP where O is the origin}"
                    />,
                    answer: <MathDisplay
                        math="\text{Gradient at P} = 2x = m \\ \text{Point on curve: } x^2 + 2 = mx + c \\ \text{At A: } 5 = m + c \\ \text{At P: } p^2 + 2 = 2p^2 + c \\ p^2 = 2 \\ p = \sqrt{2} \\ m = 2\sqrt{2} \\ c = 5 - 2\sqrt{2} \\ \text{Area} = \frac{1}{2} \times 1 \times 5 = 2.5\text{ units}^2"
                        size="large"
                    />
                }
            }
        },
        3: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="Three numbers are in arithmetic sequence. Their product is 120 and their sum is 15. Find the numbers."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Let numbers be } (x-d), x, (x+d) \\ (x-d)x(x+d) = 120 \\ x^3 - d^2x = 120 \\ 3x = 15 \\ x = 5 \\ 25 - d^2 \times 5 = 120 \\ d^2 = 1 \\ d = 1 \\ \text{Numbers: } 4, 5, 6"
                        size="large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="Find the equation of the parallel line to y = 3x - 2 that passes through point (4,5)"
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Same gradient} = 3 \\ y - 5 = 3(x - 4) \\ y = 3x - 7"
                        size="large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="Triangle ABC has vertices at A(1,1), B(7,1) and C(4,5). Find:"
                        math="\text{a) The area} \\\\ \text{b) The equation of the perpendicular} \\\\ \text{bisector of AB}"
                    />,
                    answer: <MathDisplay
                        math="\text{a) Area} = \frac{1}{2} \times 6 \times 4 = 12\text{ units}^2 \\\\ \text{b) } x = 4 \text{ (midpoint)} (4,1) \text{ gradient} = \infty"
                        size="large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="A sphere has surface area 100π cm². Find its volume in terms of π."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="4\pi r^2 = 100\pi \\ r^2 = 25 \\ r = 5 \\ V = \frac{4}{3}\pi r^3 = \frac{500\pi}{3}\text{ cm}^3"
                        size="large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="Two curves have equations y = ax² + bx + c and y = px + q where a, b, c, p, q are constants. The curves intersect at (2,5) and (3,8), and the quadratic curve has a minimum point at (1,3)."
                        math="\text{a) Find a, b, c} \\ \text{b) Find p and q} \\ \text{c) Find the area between the curves}"
                    />,
                    answer: <MathDisplay
                        math="\text{At minimum: } 2a + b = 0 \text{ and } x = 1 \\ \text{Points: } 4a + 2b + c = 5 \\ 9a + 3b + c = 8 \\ 2p + q = 5 \\ 3p + q = 8 \\ p = 3, q = -1 \\ a = 1, b = -2, c = 4 \\ \text{Area} = \int_2^3 (x^2 - 2x + 4 - 3x + 1)dx = \frac{1}{3}"
                        size="large"
                    />
                }
            }
        }
    }
};

export default week26;