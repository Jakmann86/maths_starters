import React from 'react';
import { Question, MathDisplay } from '../components/Mathematical/DisplayComponents';

const week28 = {
    topic: "Number Theory V: Surds & Algebraic Fractions",
    starters: {
        1: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="Three numbers have a mean of 8. If two of the numbers are 12 and 5, find the third number."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Sum} = 3 \times 8 = 24 \\ 24 - 12 - 5 = 7 \\ \text{Third number} = 7"
                        size="x-large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="The height of a cylinder is measured as 15cm to the nearest cm. Write down the bounds for the volume if the radius is exactly 5cm."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="14.5 \leq h \leq 15.5 \\ V = \pi \times 5^2 \times h \\ 1140.4 \text{ cm}^3 \leq V \leq 1218.0 \text{ cm}^3"
                        size="x-large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="Show that:"
                        math="1\dfrac{2}{5} + 2\dfrac{3}{5} = 4"
                    />,
                    answer: <MathDisplay
                        math="1\dfrac{2}{5} = \dfrac{7}{5} \\ 2\dfrac{3}{5} = \dfrac{13}{5} \\ \dfrac{7}{5} + \dfrac{13}{5} = \dfrac{20}{5} = 4"
                        size="x-large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="The sum of two prime numbers is 30. Find the two prime numbers."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="30 = 7 + 23 \\ \text{Numbers are 7 and 23}"
                        size="x-large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="Two fractions add to make 1. When each fraction is rounded to 1 decimal place, they add to 1.1. Find the fractions."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Let first fraction be } 0.45 < x \leq 0.55 \\ \text{Second fraction} = 1 - x \\ \text{When rounded: } 0.5 + 0.6 = 1.1 \\ \text{Original fractions: } \dfrac{9}{20} \text{ and } \dfrac{11}{20}"
                        size="x-large"
                    />
                }
            }
        },
        2: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="Show that:"
                        math="3\dfrac{1}{2} \div \dfrac{1}{4} = 14"
                    />,
                    answer: <MathDisplay
                        math="3\dfrac{1}{2} = \dfrac{7}{2} \\ \dfrac{7}{2} \div \dfrac{1}{4} = \dfrac{7}{2} \times \dfrac{4}{1} = \dfrac{28}{2} = 14"
                        size="x-large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="The width of a rectangle is measured as 8.2cm (to 1dp). Find the upper bound of this measurement."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="8.15 \leq w < 8.25 \\ \text{Upper bound} = 8.25\text{ cm}"
                        size="x-large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="Simplify:"
                        math="\sqrt{27} + \sqrt{48}"
                    />,
                    answer: <MathDisplay
                        math="\sqrt{9 \times 3} + \sqrt{16 \times 3} = 3\sqrt{3} + 4\sqrt{3} = 7\sqrt{3}"
                        size="x-large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="Emma sells her bike for £210, making a 20% profit. How much did she pay for the bike?"
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Let original price} = x \\ 1.2x = 210 \\ x = \dfrac{210}{1.2} = 175 \\ \text{Original price} = £175"
                        size="x-large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="Prove algebraically that:"
                        math="(\sqrt{2} + 1)(\sqrt{2} - 1) = 1"
                    />,
                    answer: <MathDisplay
                        math="(\sqrt{2} + 1)(\sqrt{2} - 1) = 2 - 1 = 1 \\ \text{Or expanding:} \\ \sqrt{2}\sqrt{2} - \sqrt{2} + \sqrt{2} - 1 = 2 - 1 = 1"
                        size="x-large"
                    />
                }
            }
        },
        3: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="Simplify:"
                        math="\dfrac{x^2 + 2x}{x^2 - 4} \div \dfrac{x + 2}{x}"
                    />,
                    answer: <MathDisplay
                        math="\dfrac{x^2 + 2x}{x^2 - 4} \times \dfrac{x}{x + 2} = \dfrac{x(x + 2)}{(x - 2)(x + 2)} = \dfrac{x}{x - 2}"
                        size="x-large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="A student records their height as 167.3cm to 1dp. Write down the error interval for this measurement."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="167.25 \leq h < 167.35"
                        size="x-large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="Rationalise the denominator:"
                        math="\dfrac{5}{\sqrt{3} + 2}"
                    />,
                    answer: <MathDisplay
                        math="\dfrac{5(\sqrt{3} - 2)}{(\sqrt{3} + 2)(\sqrt{3} - 2)} = \dfrac{5(\sqrt{3} - 2)}{3 - 4} = 5(\sqrt{3} - 2)"
                        size="x-large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="Show that:"
                        math="3\dfrac{1}{4} + 2\dfrac{3}{4} = 6"
                    />,
                    answer: <MathDisplay
                        math="3\dfrac{1}{4} = \dfrac{13}{4} \\ 2\dfrac{3}{4} = \dfrac{11}{4} \\ \dfrac{13}{4} + \dfrac{11}{4} = \dfrac{24}{4} = 6"
                        size="x-large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="Show that:"
                        math="\dfrac{1}{\sqrt{3} + 1} + \dfrac{1}{\sqrt{3} - 1} = 2"
                    />,
                    answer: <MathDisplay
                        math="\dfrac{1}{\sqrt{3} + 1} = \dfrac{\sqrt{3} - 1}{(\sqrt{3} + 1)(\sqrt{3} - 1)} = \dfrac{\sqrt{3} - 1}{2} \\ \dfrac{1}{\sqrt{3} - 1} = \dfrac{\sqrt{3} + 1}{(\sqrt{3} - 1)(\sqrt{3} + 1)} = \dfrac{\sqrt{3} + 1}{2} \\ \text{Sum} = \dfrac{\sqrt{3} - 1}{2} + \dfrac{\sqrt{3} + 1}{2} = 2"
                        size="x-large"
                    />
                }
            }
        }
    }
};

export default week28;