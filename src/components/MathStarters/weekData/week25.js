import React from 'react';
import { MathDisplay } from '../components/Mathematical/DisplayComponents';
import { Question } from '../components/Mathematical/DisplayComponents';


const week25 = {
    topic: "Geometry V: Similar Figures (continued)",
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
                        math="\frac{2x(x+2) + 5(x-3)}{(x-3)(x+2)} = \frac{2x^2 + 4x + 5x - 15}{x^2 - x - 6} = \frac{2x^2 + 9x - 15}{x^2 - x - 6}"
                        size="large"
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
                        instruction="Two similar prisms have volumes in ratio 27:8. Find:"
                        math="\text{a) The linear scale factor} \\ \text{b) The ratio of their surface areas}"
                    />,
                    answer: <MathDisplay
                        math="\text{a) } k = \sqrt[3]{\frac{27}{8}} = \frac{3}{2} \\ \text{b) } k^2 = (\frac{3}{2})^2 = \frac{9}{4}"
                        size="large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="The perimeter of a pentagon is enlarged by scale factor 1.5. By what factor is its area enlarged?"
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Area scale factor} = 1.5^2 = 2.25 \\ \text{Area is 2.25 times larger}"
                        size="large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="Find the stationary points on the curve:"
                        math="y = x^3 - 3x"
                    />,
                    answer: <MathDisplay
                        math="\frac{dy}{dx} = 3x^2 - 3 = 0 \\ x^2 = 1 \\ x = \pm 1 \\ \text{Points: } (-1,2) \text{ and } (1,-2)"
                        size="large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="The first term of a sequence is a and common ratio is r. If third term = 54 and fourth term = 162, find a and r."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="ar^2 = 54 \\ ar^3 = 162 \\ r = 3 \\ a = 6"
                        size="large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="A sphere of radius R cm is cut by a plane at distance d cm from its center, creating a circular cross-section of radius r cm. Given that r = 12cm and R = 13cm:"
                        math="\text{a) Find d} \\ \text{b) Express the area of the circular section as a fraction of the surface area of the sphere} \\ \text{c) Find the ratio of the volume above the plane to the total volume}"
                        hint="Use: r² = R² - d²"
                    />,
                    answer: <MathDisplay
                        math="r^2 = R^2 - d^2 \\ 12^2 = 13^2 - d^2 \\ d = 5\text{ cm} \\ \text{Circle area} = 144\pi \text{ cm}^2 \\ \text{Sphere SA} = 676\pi \text{ cm}^2 \\ \text{Ratio} = \frac{144}{676} = \frac{18}{84.5} \\ \text{Volume ratio} = \frac{h(3R-h)}{4R} = \frac{8}{13}"
                        size="large"
                    />
                }
            }
        },
        3: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="Shape A is enlarged to B by scale factor 3, then B is enlarged to C by scale factor 2. Find:"
                        math="\text{a) The scale factor from A to C} \\ \text{b) The ratio of areas of A to C}"
                    />,
                    answer: <MathDisplay
                        math="\text{a) Overall scale factor} = 3 \times 2 = 6 \\ \text{b) Area ratio} = 6^2 = 1:36"
                        size="large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="Find the coordinates of the points where the line y = 2x - 3 intersects:"
                        math="y = x^2"
                    />,
                    answer: <MathDisplay
                        math="x^2 = 2x - 3 \\ x^2 - 2x + 3 = 0 \\ (x - 3)(x + 1) = 0 \\ x = 3 \text{ or } x = -1 \\ \text{Points: } (3,9), (-1,1)"
                        size="large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="In similar triangles ABC and PQR:"
                        math="\text{AB} = 8\text{ cm}, \text{ PR} = 12\text{ cm}, \text{ Area ABC} = 24\text{ cm}^2"
                    />,
                    answer: <MathDisplay
                        math="\text{Scale factor} = \frac{12}{8} = \frac{3}{2} \\ \text{Area PQR} = 24 \times (\frac{3}{2})^2 = 54\text{ cm}^2"
                        size="large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="Find x if the sum of the series is 270:"
                        math="x + (x+4) + (x+8) + ... + (x+28)"
                    />,
                    answer: <MathDisplay
                        math="8 \text{ terms, d} = 4 \\ 8x + 4(28) = 270 \\ 8x + 112 = 270 \\ x = 19.75"
                        size="large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="A cube of side length 10cm is cut by a plane parallel to its base at height h cm from the base. The cross section divides the cube into two parts with volumes in ratio 1:3. Find:"
                        math="\text{a) The value of h} \\\\ \text{b) The ratio of the surface areas of the two parts} \\\\ \text{c) If the cube is enlarged by scale factor k so that the volume of the smaller part} \\\\ \text{equals the original cube's volume, find the value of k}"
                        hint="Volume of cuboid = area of base × height"
                    />,
                    answer: <MathDisplay
                        math="\text{a) } \frac{h}{10-h} = \frac{1}{3} \\\\ h = 2.5\text{ cm} \\\\ \text{b) SA ratio} = 225:525 = 3:7 \\\\ \text{c) } k^3 \times \frac{1}{4} = 1 \\\\ k = 2"
                        size="x-large"
                    />
                }
            }
        }
    }
};


export default week25;