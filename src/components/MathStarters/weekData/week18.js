import React from 'react';
import { MathDisplay } from '../components/Mathematical/DisplayComponents';

const Question = ({ instruction, math, hint }) => (
    <div className="space-y-2">
        <p className="font-medium text-gray-700">{instruction}</p>
        {hint && <p className="text-gray-500 italic text-sm">*{hint}</p>}
        <MathDisplay math={math} size="large" className="mt-1" />
    </div>
);

const week18 = {
    topic: "Geometry IV: Coordinate Geometry and Linear Graphs",
    starters: {
        1: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="Calculate the perimeter of triangle ABC where:"
                        math="A(-2,1), B(4,1), C(1,4)"

                    />,
                    answer: <MathDisplay
                        math="AB = \sqrt{(4-(-2))^2 + (1-1)^2} = 6 \\ BC = \sqrt{(1-4)^2 + (4-1)^2} = \sqrt{18} = 4.24... \\ AC = \sqrt{(1-(-2))^2 + (4-1)^2} = \sqrt{18} = 4.24... \\ \text{Perimeter} = 14.48 \text{ units (2dp)}"
                        size="large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="Find the HCF and LCM of:"
                        math="108 \text{ and } 144"
                    />,
                    answer: <MathDisplay
                        math="108 = 2^2 \times 3^3 \\ 144 = 2^4 \times 3^2 \\ HCF = 2^2 \times 3^2 = 36 \\ LCM = 2^4 \times 3^3 = 432"
                        size="large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="Point A(3,4) is translated by vector:"
                        math="\begin{pmatrix} 5 \\ -2 \end{pmatrix}"   // Note: this is the key format that works
                    />,
                    answer: <MathDisplay math="A'(8,2)" size="large" />
                },
                lastYear: {
                    question: <Question
                        instruction="Find the hypotenuse of a right triangle with sides:"
                        math="9\text{cm and }12\text{cm}"
                    />,
                    answer: <MathDisplay math="15\text{cm}" size="large" />
                },
                challenge: {
                    question: <Question
                        instruction="Triangle ABC has vertices at A(1,1), B(5,1) and C(3,5). Find the area."
                        math="A(1,1), B(5,1), C(3,5)"
                        hint="Use: Area = ½ × base × height"
                    />,
                    answer: <MathDisplay
                        math="\text{base} = 4\\ \text{height} = 4\\ \text{Area} = \frac{1}{2} \times 4 \times 4 = 8 \text{ square units}"
                        size="large"
                    />
                }
            }
        },
        2: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="Find the coordinates of the midpoint of the line joining:"
                        math="P(-3,5) \text{ and } Q(7,1)"
                    />,
                    answer: <MathDisplay math="x = \frac{-3 + 7}{2} = 2 \\ y = \frac{5 + 1}{2} = 3 \\ \text{Midpoint} = (2,3)" size="large" />
                },
                lastWeek: {
                    question: <Question
                        instruction="Points A(k,5) and B(2k,9) lie on a line with gradient 2. Find k."
                        math="k \text{ is a variable}"
                    />,
                    answer: <MathDisplay math="2 = \frac{9-5}{2k-k} \\ 2 = \frac{4}{k} \\ k = 2" size="large" />
                },
                lastTopic: {
                    question: <Question
                        instruction="Find the equation of the line passing through"
                        math="(1,3) and (4,9)"
                    />,
                    answer: <MathDisplay math="m = \frac{9-3}{4-1} = 2 \\ y - 3 = 2(x - 1) \\ y = 2x + 1" size="large" />
                },
                lastYear: {
                    question: <Question
                        instruction="What is the gradient of:"
                        math="y = 3 - 3x"
                    />,
                    answer: <MathDisplay math="\text{Gradient} = -3" size="large" />
                },
                challenge: {
                    question: <Question
                        instruction="Find the equation of the circle with center (2,-1) and radius 5"
                        math="(2,-1), r = 5"
                        hint="Use: (x-h)² + (y-k)² = r² where (h,k) is the center"
                    />,
                    answer: <MathDisplay
                        math="(x-2)^2 + (y+1)^2 = 25"
                        size="large"
                    />
                }
            }
        },
        3: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="Find the equation of the line parallel to y = 2x + 1 passing through (3,4) "
                        math=""
                    />,
                    answer: <MathDisplay math="\text{Same gradient } m = 2 \\ y - 4 = 2(x - 3) \\ y = 2x - 2" size="large" />
                },
                lastWeek: {
                    question: <Question
                        instruction="Calculate the distance from"
                        math="A(1,5) \\ B(4,-1)"
                    />,
                    answer: <MathDisplay math="\text{Distance} = \sqrt{(4-1)^2 + (-1-5)^2} \\ = \sqrt{9 + 36} = \sqrt{45} \\ = 6.7 \text{ units (1dp)}" size="large" />
                },
                lastTopic: {
                    question: <Question
                        instruction="Find the equation of the line perpendicular to y = 3x + 1 through (4,3)"
                        math=""
                    />,
                    answer: <MathDisplay math="\text{Original gradient} = 3 \\ \text{Perpendicular gradient} = -\frac{1}{3} \\ y - 3 = -\frac{1}{3}(x - 4) \\ y = -\frac{1}{3}x + \frac{13}{3}" size="large" />
                },
                lastYear: {
                    question: <Question
                        instruction="Find the gradient of the line passing through:"
                        math="(2,5) \text{ and } (4,-1)"
                    />,
                    answer: <MathDisplay math="m = \frac{-1-5}{4-2} = -3" size="large" />
                },
                challenge: {
                    question: <Question
                        instruction="Points A(1,2), B(5,6) and C(3,8) form a triangle. Is it right-angled? Prove your answer."
                        math="A(1,2), B(5,6), C(3,8)"
                        hint="Use the distance formula and Pythagoras' Theorem"
                    />,
                    answer: <MathDisplay
                        math="AB^2 = (5-1)^2 + (6-2)^2 = 32 \\ BC^2 = (3-5)^2 + (8-6)^2 = 8 \\ AC^2 = (3-1)^2 + (8-2)^2 = 40 \\ 32 + 8 = 40 \text{ therefore right-angled at B}"
                        size="large"
                    />
                }
            }
        }
    }
};

export default week18;