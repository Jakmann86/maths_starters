import React from 'react';
import { MathDisplay } from '../components/Mathematical/DisplayComponents';
import { Question } from '../components/Mathematical/DisplayComponents';

const week10 = {
    topic: "Number Theory II: Standard Form",
    starters: {
        1: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="Simplify:"
                        math="(2x + 3) - (4x - 1)"
                    />,
                    answer: <MathDisplay
                        math="-2x + 4"
                        size="large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="£400 is invested at 5% compound interest for 2 years. Find the final amount."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="400 \times 1.05^2 = 441"
                        size="large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="Share £360 in the ratio 3:5"
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{3 parts} = \frac{3}{8} \times 360 = £135 \\ \text{5 parts} = \frac{5}{8} \times 360 = £225"
                        size="large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="Write in standard form:"
                        math="0.0034"
                    />,
                    answer: <MathDisplay
                        math="3.4 \times 10^{-3}"
                        size="large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="The distance between two stars is approximately 2,400,000,000,000 km. A spaceship can travel at 40,000 km/h. How long would it take to travel between the stars? Give your answer in standard form in years."
                        math=""
                        hint="There are 8760 hours in a year"
                    />,
                    answer: <MathDisplay
                        math="\text{Time in hours} = \frac{2.4 \times 10^{12}}{4 \times 10^4} = 6 \times 10^7 \text{ hours} \\ \text{Time in years} = \frac{6 \times 10^7}{8760} = 6.85 \times 10^3 \text{ years}"
                        size="large"
                    />
                }
            }
        },
        2: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="Write in standard form:"
                        math="0.000456"
                    />,
                    answer: <MathDisplay
                        math="4.56 \times 10^{-4}"
                        size="x-large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="Simplify and write as a single fraction:"
                        math="\left(\frac{25x^6y^4}{16x^2y^8}\right)^{-\frac{3}{2}}"
                    />,
                    answer: <MathDisplay
                        math="\left(\frac{16x^2y^8}{25x^6y^4}\right)^{\frac{3}{2}} = \frac{64x^3y^{12}}{125x^9y^6} = \frac{64y^6}{125x^6}"
                        size="x-large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="A rectangular field has length 4m more than its width. If its area is 60m², find its dimensions."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Let width} = x \\\\ \text{Length} = x + 4 \\\\ x(x + 4) = 60 \\\\ x^2 + 4x - 60 = 0 \\\\ (x + 10)(x - 6) = 0 \\\\ x = 6 \\\\ \text{Dimensions: } 6\text{m by }10\text{m}"
                        size="x-large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="A recipe uses 2.5 pints of milk to make 15 servings. How many milliliters of milk are needed for 4 servings? (1 pint = 568ml)"
                        math=""
                    />,
                    answer: <MathDisplay
                        math="2.5 \text{ pints} = 2.5 \times 568 = 1420\text{ ml} \\\\ \text{For 4 servings: } \frac{1420 \times 4}{15} = 379\text{ ml}"
                        size="x-large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="The mass of Saturn is approximately 5.68 × 10²⁶ kg and the mass of Earth is 5.97 × 10²⁴ kg. How many times heavier is Saturn than Earth? Give your answer in standard form."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\frac{5.68 \times 10^{26}}{5.97 \times 10^{24}} = 9.51 \times 10^1 \\\\ \text{Saturn is about } 95.1 \text{ times heavier}"
                        size="x-large"
                    />
                }
            }
        },
        3: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="Write as an ordinary number:"
                        math="2.381 \times 10^{-5}"
                    />,
                    answer: <MathDisplay
                        math="0.00002381"
                        size="large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="A phone increases in price by 10% then decreases by 10%. If the final price is £99, what was the original price?"
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Original} \times 1.1 \times 0.9 = 99 \\ \text{Original} = \frac{99}{0.99} = £100"
                        size="large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="Express as a percentage:"
                        math="\frac{24}{40}"
                    />,
                    answer: <MathDisplay
                        math="\frac{24}{40} \times 100 = 60\%"
                        size="large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="Simplify and write as a single fraction:"
                        math="\left(\frac{27a^9b^6}{3a^3b^{12}}\right)^{-\frac{2}{3}}"
                    />,
                    answer: <MathDisplay
                        math="\left(\frac{3a^3b^{12}}{27a^9b^6}\right)^{\frac{2}{3}} = \frac{3^{\frac{2}{3}}a^2b^8}{27^{\frac{2}{3}}a^6b^4} = \frac{b^4}{9a^4}"
                        size="x-large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="The mass of an electron is approximately 9.1093837015 × 10⁻³¹ kg and the mass of a proton is 1.67262192369 × 10⁻²⁷ kg. How many electrons would have the same mass as one proton? Give your answer in standard form to 3 significant figures."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\frac{1.67262192369 \times 10^{-27}}{9.1093837015 \times 10^{-31}} = 1.84 \times 10^3"
                        size="large"
                    />
                }
            }
        }
    }
};
export default week10;
