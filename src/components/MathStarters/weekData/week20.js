import React from 'react';
import { Question } from '../components/Mathematical/DisplayComponents';
import { MathDisplay } from '../components/Mathematical/DisplayComponents';


const week20 = {
    topic: "Direct and Inverse Proportion",
    starters: {
        1: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="Write down all integer values that satisfy:"
                        math="2x + 1 < 7 \text{ and } x \geq 0"
                    />,
                    answer: <MathDisplay
                        math="2x < 6 \rightarrow x < 3\\ \text{Combined with } x \geq 0\\ \text{Integer values: } 0, 1, 2"
                        size="x-large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="Solve and find integer values:"
                        math="3x - 2 \leq 10 \text{ and } x + 1 > 3"
                    />,
                    answer: <MathDisplay
                        math="3x \leq 12 \rightarrow x \leq 4\\ x > 2\\ \text{Therefore: } 2 < x \leq 4\\ \text{Integer values: } 3, 4"
                        size="x-large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="A recipe for 6 people uses 300g of flour and 240g of sugar. Calculate the amount of each ingredient needed for:"
                        math="\text{a) 9 people}\\ \text{b) 4 people}"
                    />,
                    answer: <MathDisplay
                        math="\text{For 9 people:}\\ \text{Flour: } \frac{300 \times 9}{6} = 450\text{g}\\ \text{Sugar: } \frac{240 \times 9}{6} = 360\text{g}\\ \text{For 4 people:}\\ \text{Flour: } \frac{300 \times 4}{6} = 200\text{g}\\ \text{Sugar: } \frac{240 \times 4}{6} = 160\text{g}"
                        size="x-large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="Two parallel lines are cut by a transversal forming angles of 3x° and (x + 40)°. Find x."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="3x = x + 40 \text{ (corresponding angles)}\\ 2x = 40\\ x = 20"
                        size="x-large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="A recipe uses 3 eggs for every 200g of flour. The recipe also states that for every egg, you need 60ml of milk. How many eggs and how much milk is needed if you use 500g of flour?"
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Eggs needed: } \frac{3 \times 500}{200} = 7.5 \text{ eggs}\\ \text{Round up to 8 eggs}\\ \text{Milk needed: } 8 \times 60 = 480\text{ml}"
                        size="x-large"
                    />
                }
            }
        },
        2: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="y is inversely proportional to x. When x = 2, y = 15. Find y when x = 6."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="y = \frac{k}{x}\\ 15 = \frac{k}{2}\\ k = 30\\ y = \frac{30}{6} = 5"
                        size="x-large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="Solve and find all integer values:"
                        math="-2 < 3x + 1 \leq 13"
                    />,
                    answer: <MathDisplay
                        math="-3 < 3x \leq 12\\ -1 < x \leq 4\\ \text{Integer values: } 0, 1, 2, 3, 4"
                        size="x-large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="p is directly proportional to the square of q. When q = 3, p = 27. Find the equation connecting p and q."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="p = kq^2\\ 27 = k(3^2)\\ 27 = 9k\\ k = 3\\ p = 3q^2"
                        size="x-large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="Find x, given corresponding angles on parallel lines are 2x° and 100°"
                        math=""
                    />,
                    answer: <MathDisplay
                        math="2x = 100 \text{ (corresponding angles)}\\ x = 50"
                        size="x-large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="y varies jointly as x and the square root of z. When x = 2 and z = 16, y = 24. Find y when x = 3 and z = 36."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="y = kx\sqrt{z}\\ 24 = 2k\sqrt{16}\\ 24 = 8k\\ k = 3\\ y = 3x\sqrt{z}\\ y = 3(3)\sqrt{36} = 54"
                        size="x-large"
                    />
                }
            }
        },
        3: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="t is inversely proportional to the square of d. When d = 2, t = 45. Find t when d = 3."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="t = \frac{k}{d^2}\\ 45 = \frac{k}{4}\\ k = 180\\ t = \frac{180}{9} = 20"
                        size="x-large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="Write down all integer values that satisfy:"
                        math="-1 < x \leq 5 \text{ and } x < 4"
                    />,
                    answer: <MathDisplay
                        math="\text{Combining inequalities:}\\ -1 < x < 4\\ \text{Integer values: } 0, 1, 2, 3"
                        size="x-large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="Force (F) is jointly proportional to mass (m) and acceleration (a). If F = 24 when m = 3 and a = 4, find F when m = 2 and a = 9."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="F = kma\\ 24 = k(3)(4)\\ k = 2\\ F = 2ma\\ F = 2(2)(9) = 36"
                        size="x-large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="In a regular octagon, find the size of each interior angle."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Interior angle} = \frac{(n-2) \times 180°}{n}\\ = \frac{(8-2) \times 180°}{8}\\ = 135°"
                        size="x-large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="V is proportional to r² and inversely proportional to h, where r and h are positive. When r = 3 and h = 2, V = 27. Find the smallest value of h when r = 6 and V must be greater than 100."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="V = \frac{kr^2}{h}\\ 27 = \frac{k(9)}{2}\\ k = 6\\ V = \frac{6r^2}{h}\\ 100 < \frac{6(36)}{h}\\ h < 2.16\\ \text{Smallest } h \text{ for } V > 100: h = 2.15"
                        size="x-large"
                    />
                }
            }
        }
    }
};

export default week20;