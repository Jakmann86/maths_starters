import React from 'react';
import { MathDisplay } from '../components/Mathematical/DisplayComponents';

const Question = ({ instruction, math, hint }) => (
    <div className="space-y-2">
        <p className="font-medium text-gray-700">{instruction}</p>
        {hint && <p className="text-gray-500 italic text-sm">*{hint}</p>}
        <MathDisplay math={math} size="large" className="mt-1" />
    </div>
);

const week17 = {
    topic: "Geometry III: Transformations & Shapes (continued)",
    starters: {
        1: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="Describe fully the single transformation that maps triangle A to triangle B:"
                        math="A(0,0), A(2,0), A(1,2) \\\\ \text{onto} \\\\ B(0,0), B(-2,0), B(-1,-2)"
                        size="large"
                    />,
                    answer: <MathDisplay math="\text{Reflection in the y-axis}" size="large" />
                },
                lastWeek: {
                    question: <Question
                        instruction="After rotation by 90° clockwise about the origin, what are the coordinates of:"
                        math="P(3,1)"
                    />,
                    answer: <MathDisplay math="P'(1,-3)" size="large" />
                },
                lastTopic: {
                    question: <Question
                        instruction="Find the area of a regular hexagon with side length 6cm"
                        math=""
                        hint="Area = 6 × area of equilateral triangle"
                    />,
                    answer: <MathDisplay math="\text{Area} = 6 \times \frac{1}{2} \times 6 \times 6\sin(60°) = 108\text{ cm}^2" size="large" />
                },
                lastYear: {
                    question: <Question
                        instruction="Solve:"
                        math="3(2x + 5) = 4(x - 1) - 7"
                    />,
                    answer: <MathDisplay math="6x + 15 = 4x - 4 - 7 \\ 6x - 4x = -26 \\ 2x = -26 \\ x = -13" size="large" />
                },
                challenge: {
                    question: <Question
                        instruction="Triangle ABC has vertices at A(1,1), B(3,1), C(2,3). After a reflection in y = x followed by a reflection in the x-axis, find the coordinates of image A''B''C''."
                        math="A(1,1), B(3,1), C(2,3)"
                        hint="Do one transformation at a time"
                    />,
                    answer: <MathDisplay math="\text{After reflection in } y = x: A'(1,1), B'(1,3), C'(3,2) \\ \text{After reflection in x-axis}: A''(1,-1), B''(1,-3), C''(3,-2)" size="large" />
                }
            }
        },
        2: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="Translate triangle PQR by the vector:"
                        math="\begin{pmatrix} -3 \\ 2 \end{pmatrix} \\ P(1,1), Q(4,1), R(2,3)"
                    />,
                    answer: <MathDisplay math="P'(-2,3), Q'(1,3), R'(-1,5)" size="large" />
                },
                lastWeek: {
                    question: <Question
                        instruction="Reflect point A in the line x = 3:"
                        math="A(2,5)"
                    />,
                    answer: <MathDisplay math="A'(4,5)" size="large" />
                },
                lastTopic: {
                    question: <Question
                        instruction="Calculate the volume of a cuboid with:"
                        math="\text{length} = 5\text{cm}, \text{width} = 3\text{cm}, \text{height} = 4\text{cm}"
                    />,
                    answer: <MathDisplay math="\text{Volume} = 5 \times 3 \times 4 = 60\text{ cm}^3" size="large" />
                },
                lastYear: {
                    question: <Question
                        instruction="Solve these simultaneous equations:"
                        math="2x + 3y = 19 \\ 4x - y = 5"
                    />,
                    answer: <MathDisplay math="x = 4, y = 3.67 \text{ or } \frac{11}{3}" size="large" />
                },
                challenge: {
                    question: <Question
                        instruction="Given that A(1,2) maps to A'(3,4) under enlargement scale factor 2, find the coordinates of the centre of enlargement."
                        math=""
                        hint="Use: New position = Centre + Scale Factor × (Original position - Centre)"
                    />,
                    answer: <MathDisplay math="\text{Let centre be } (h,k) \\ 3 = h + 2(1-h) \\ 4 = k + 2(2-k) \\ \text{Solving gives centre} = (-1,0)" size="large" />
                }
            }
        },
        3: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="Enlarge triangle ABC from centre (0,0) with scale factor 2:"
                        math="A(1,1), B(3,1), C(2,3)"
                    />,
                    answer: <MathDisplay math="A'(2,2), B'(6,2), C'(4,6)" size="large" />
                },
                lastWeek: {
                    question: <Question
                        instruction="Find the coordinates of P after translation by vector:"
                        math="P(2,3), \begin{pmatrix} 4 \\ -5 \end{pmatrix}"
                    />,
                    answer: <MathDisplay math="P'(6,-2)" size="large" />
                },
                lastTopic: {
                    question: <Question
                        instruction="Find the surface area of a cube with edge length 5cm"
                        math=""
                    />,
                    answer: <MathDisplay math="\text{Surface Area} = 6 \times 5^2 = 150\text{ cm}^2" size="large" />
                },
                lastYear: {
                    question: <Question
                        instruction="Solve:"
                        math="5(x - 2) = 2(x + 1)"
                    />,
                    answer: <MathDisplay math="5x - 10 = 2x + 2 \\ 3x = 12 \\ x = 4" size="large" />
                },
                challenge: {
                    question: <Question
                        instruction="Triangle PQR has vertices P(2,1), Q(4,1), R(3,3). After enlargement scale factor -2 from centre (1,1), what is the area of the image triangle?"
                        math=""
                        hint="Area scale factor is (scale factor)²"
                    />,
                    answer: <MathDisplay math="\text{Original area} = \frac{1}{2} \times 2 \times 2 = 2 \\ \text{Scale factor for area} = (-2)^2 = 4 \\ \text{New area} = 2 \times 4 = 8 \text{ square units}" size="large" />
                }
            }
        }
    }
};

export default week17;