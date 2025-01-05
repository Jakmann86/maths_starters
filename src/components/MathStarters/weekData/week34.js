import React from 'react';
import { Question, MathDisplay } from '../components/Mathematical/DisplayComponents';


const week34 = {
    topic: "Mixed Topics Revision - Week 2",
    starters: {
        1: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="The graph of y = f(x) has minimum point (2,-1). Write down the minimum point of:"
                        math="y = f(x + 3)"
                    />,
                    answer: <MathDisplay
                        math="\text{Shift 3 units left} \\ \text{Minimum point: } (-1,-1)"
                        size="x-large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="The volume of a sphere is proportional to its radius cubed. When r = 2cm, V = 32πcm³. Find the radius when V = 108πcm³."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="V = kr^3 \\ 32\pi = k(8) \\ k = 4\pi \\ 108\pi = 4\pi r^3 \\ r^3 = 27 \\ r = 3\text{ cm}"
                        size="x-large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="Evaluate:"
                        math="2\dfrac{3}{4} \div 1\dfrac{1}{2}"
                    />,
                    answer: <MathDisplay
                        math="2\dfrac{3}{4} = \dfrac{11}{4} \\ 1\dfrac{1}{2} = \dfrac{3}{2} \\ \dfrac{11}{4} \div \dfrac{3}{2} = \dfrac{11}{4} \times \dfrac{2}{3} \\ = \dfrac{22}{12} = 1\dfrac{5}{6}"
                        size="x-large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="A metal block measures 3.0cm by 2.0cm by 4.0cm, all to 1dp. Calculate the minimum possible volume."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Min length} = 2.95\text{ cm} \\ \text{Min width} = 1.95\text{ cm} \\ \text{Min height} = 3.95\text{ cm} \\ \text{Min volume} = 22.7\text{ cm}^3 \text{ (1dp)}"
                        size="x-large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="A wheel has radius 5m and makes 3 complete turns in t seconds. The total distance travelled is 105m. Form and solve an equation to find t, given that the wheel travels at a constant speed."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{One turn distance} = 2\pi \times 5 = 10\pi \text{ m} \\ \text{Three turns} = 30\pi \text{ m} \\ \text{Speed} = \dfrac{105}{t} \text{ m/s} \\ \text{Also speed} = \dfrac{30\pi}{t} \text{ m/s} \\ 105 = 30\pi \\ t = \dfrac{30\pi}{105} \times t \\ t = 2 \text{ seconds}"
                        size="x-large"
                    />
                }
            }
        },
        2: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="The graph of y = f(x) has minimum point (2,-1). Write down the minimum point of:"
                        math="\text{a) } y = f(x + 3) \\ \text{b) } y = -2f(x) - 1"
                    />,
                    answer: <MathDisplay
                        math="\text{a) Shift 3 units left: } (-1,-1) \\ \text{b) Stretch SF 2, reflect in x-axis, shift down 1: } (2,1)"
                        size="x-large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="Find the product of 5 + 2√3 and its conjugate, hence simplify:"
                        math="\dfrac{5 + 2\sqrt{3}}{5 - 2\sqrt{3}}"
                    />,
                    answer: <MathDisplay
                        math="(5 + 2\sqrt{3})(5 - 2\sqrt{3}) = 25 - 12 = 13 \\ \dfrac{5 + 2\sqrt{3}}{5 - 2\sqrt{3}} = \dfrac{(5 + 2\sqrt{3})^2}{13} \\ = \dfrac{25 + 20\sqrt{3} + 12}{13} = \dfrac{37 + 20\sqrt{3}}{13}"
                        size="x-large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="Two boxes A and B contain coloured balls:
        Box A: 3 red, 2 blue
        Box B: 2 red, 5 blue
        A ball is taken from A and put in B, then a ball is drawn from B. Find P(blue)."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="P(\text{move red}) \times P(\text{blue}|\text{red moved}) + P(\text{move blue}) \times P(\text{blue}|\text{blue moved}) \\ = \dfrac{3}{5} \times \dfrac{5}{8} + \dfrac{2}{5} \times \dfrac{6}{8} \\ = \dfrac{15}{40} + \dfrac{12}{40} = \dfrac{27}{40}"
                        size="x-large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="Find the equation of the perpendicular bisector of the line joining (1,3) and (5,-1)."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Midpoint} = (3,1) \\ \text{Gradient of line} = \dfrac{-4}{4} = -1 \\ \text{Perpendicular gradient} = 1 \\ y - 1 = 1(x - 3) \\ y = x - 2"
                        size="x-large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="A rectangle has perimeter 28cm and area 48cm². Set up and solve a quadratic equation to find its dimensions."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Let length} = x \\ \text{Width} = 14 - x \\ \text{Area} = x(14 - x) = 48 \\ x^2 - 14x + 48 = 0 \\ (x - 6)(x - 8) = 0 \\ x = 6 \text{ or } 8 \\ \text{Dimensions: } 6\text{ cm by } 8\text{ cm}"
                        size="x-large"
                    />
                }
            }
        },
        3: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="On curve y = x³ - 3x² - 9x + 2:"
                        math="\text{a) Find stationary points} \\ \text{b) State their nature}"
                    />,
                    answer: <MathDisplay
                        math="\dfrac{dy}{dx} = 3x^2 - 6x - 9 = 3(x^2 - 2x - 3) = 3(x + 1)(x - 3) \\ x = -1 \text{ or } 3 \\ \text{When } x = -1: y = -1 - 3 + 9 + 2 = 7 \text{ (maximum)} \\ \text{When } x = 3: y = 27 - 27 - 27 + 2 = -25 \text{ (minimum)}"
                        size="x-large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="A line l passes through A(1,2) and B(7,5). Point P lies on l such that AP:PB = 2:3. Find the coordinates of P."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="P \text{ divides AB in ratio } 2:3 \\ x = 1 + \dfrac{2}{5} \times 6 = 3.4 \\ y = 2 + \dfrac{2}{5} \times 3 = 3.2 \\ P(3.4, 3.2)"
                        size="x-large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="Triangle ABC has sides 7cm, 9cm and 11cm. Using the cosine rule, find the largest angle to 1dp."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\cos C = \dfrac{7^2 + 9^2 - 11^2}{2 \times 7 \times 9} \\ C = 125.3°"
                        size="x-large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="Find two consecutive terms in the sequence 2, 5, 11, 23, ... between 100 and 500."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Term rule: multiply by 2, add 1} \\ 2, 5, 11, 23, 47, 95, 191, 383, ... \\ \text{Terms between 100 and 500 are } 191 \text{ and } 383"
                        size="x-large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="Find the set of values of k where the line y = kx - 2 intersects the curve y = x² + x in exactly one point."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="x^2 + x = kx - 2 \\ x^2 + (1-k)x + 2 = 0 \\ \text{For one point, discriminant} = 0 \\ (1-k)^2 - 4(1)(2) = 0 \\ (1-k)^2 = 8 \\ k = 1 \pm 2\sqrt{2} \\ k \approx -1.83 \text{ or } 3.83"
                        size="x-large"
                    />
                }
            }
        }
    }
};

export default week34;