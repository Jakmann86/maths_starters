import React from 'react';
import { Question, MathDisplay } from '../components/Mathematical/DisplayComponents';

const week31 = {
    topic: "Vectors I: Introduction to Vectors",
    starters: {
        1: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="Given that f(x) = 3x + 1 and g(x) = x², find:"
                        math="gf(2) \text{ and } fg(-1)"
                    />,
                    answer: <MathDisplay
                        math="gf(2): f(2) = 7, g(7) = 49 \\ fg(-1): g(-1) = 1, f(1) = 4"
                        size="x-large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="Find the inverse of:"
                        math="f(x) = 3x - 4"
                    />,
                    answer: <MathDisplay
                        math="y = 3x - 4 \\ x = 3y - 4 \\ y = \dfrac{x + 4}{3} \\ \text{Therefore } f^{-1}(x) = \dfrac{x + 4}{3}"
                        size="x-large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="Solve the quadratic equation by completing the square:"
                        math="2x^2 + 12x + 7 = 0"
                    />,
                    answer: <MathDisplay
                        math="2(x^2 + 6x) + 7 = 0 \\ 2(x + 3)^2 - 18 + 7 = 0 \\ 2(x + 3)^2 = 11 \\ x = -3 \pm \sqrt{\dfrac{11}{2}}"
                        size="x-large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="In a circle, two tangents of length 8cm are drawn to a circle from point P. If angle between the tangents is 70°, find the radius of the circle."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{angle between radius and tangent} = 90° \\ \text{angle between radii} = 110° \\ r = 8\sin(55°) = 6.56\text{ cm}"
                        size="x-large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="A solid cube has total surface area 150cm². Find its volume."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="150 = 6x^2 \text{ where x is edge length} \\ x^2 = 25 \\ x = 5 \\ \text{Volume} = 125\text{ cm}^3"
                        size="x-large"
                    />
                }
            }
        },
        2: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="For the vectors p = 3i - 2j and q = 2i + kj, find k if p and q are perpendicular."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{For perpendicular vectors, } p \cdot q = 0 \\ 3(2) + (-2)(k) = 0 \\ 6 - 2k = 0 \\ k = 3"
                        size="x-large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="Find f(x + 1) given that:"
                        math="f(x) = x^2 - 2x"
                    />,
                    answer: <MathDisplay
                        math="f(x + 1) = (x + 1)^2 - 2(x + 1) \\ = x^2 + 2x + 1 - 2x - 2 \\ = x^2 - 1"
                        size="x-large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="Find the distance between A and B where:"
                        math="\text{A}(2,1) \text{ and } \text{B}(5,5)"
                    />,
                    answer: <MathDisplay
                        math="\text{Distance} = \sqrt{(5-2)^2 + (5-1)^2} \\ = \sqrt{9 + 16} = \sqrt{25} = 5 \text{ units}"
                        size="x-large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="A square has area 72cm². One of its diagonals is 12cm. Find the perimeter of the square."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{diagonal}^2 = 2 \times \text{side}^2 \\ 12^2 = 2s^2 \\ s^2 = 72 \\ s = 8.485... \\ \text{Perimeter} = 4s = 33.94\text{ cm}"
                        size="x-large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="The vectors a and b are perpendicular. Given that |a| = 6 and |b| = 8, find the magnitude of (2a + 3b)."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="|2\textbf{a} + 3\textbf{b}|^2 = (2\textbf{a} + 3\textbf{b})\cdot(2\textbf{a} + 3\textbf{b}) \\ = 4|\textbf{a}|^2 + 9|\textbf{b}|^2 \\ = 4(36) + 9(64) \\ = 144 + 576 = 720 \\ |2\textbf{a} + 3\textbf{b}| = 2\sqrt{180}"
                        size="x-large"
                    />
                }
            }
        },
        3: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="Find f⁻¹(x) where:"
                        math="f(x) = \dfrac{2x + 1}{x - 2}"
                    />,
                    answer: <MathDisplay
                        math="y = \dfrac{2x + 1}{x - 2} \\ y(x - 2) = 2x + 1 \\ yx - 2y = 2x + 1 \\ yx - 2x = 2y + 1 \\ x(y - 2) = 2y + 1 \\ x = \dfrac{2y + 1}{y - 2} \\ f^{-1}(x) = \dfrac{2x + 1}{x - 2}"
                        size="x-large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="Given that p = 2i + 3j and q = ki + 2j are parallel vectors, find the value of k."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{For parallel vectors, components are proportional:} \\ \dfrac{2}{k} = \dfrac{3}{2} \\ 4 = 3k \\ k = \dfrac{4}{3}"
                        size="x-large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="Find the magnitude of vector:"
                        math="\textbf{p} = 3\textbf{i} - 4\textbf{j} + 12\textbf{k}"
                    />,
                    answer: <MathDisplay
                        math="|\textbf{p}| = \sqrt{3^2 + (-4)^2 + 12^2} \\ = \sqrt{9 + 16 + 144} \\ = \sqrt{169} = 13"
                        size="x-large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="The arc length of a sector is 15cm and its area is 45cm². Find the radius of the sector."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Let radius} = r \text{ and angle} = \theta \\ 15 = r\theta \\ 45 = \dfrac{1}{2}r^2\theta \\ \text{Substitute: } 45 = \dfrac{1}{2}r^2(\dfrac{15}{r}) \\ 45 = \dfrac{15r}{2} \\ r = 6\text{ cm}"
                        size="x-large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="Vector a has magnitude 5 and vector b has magnitude 4. If |a + b| = 7, find the angle between the vectors."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="|a + b|^2 = |a|^2 + |b|^2 + 2|a||b|\cos\theta \\ 49 = 25 + 16 + 40\cos\theta \\ 40\cos\theta = 8 \\ \cos\theta = 0.2 \\ \theta = 78.5\text{°}"
                        size="x-large"
                    />
                }
            }
        }
    }
};

export default week31;