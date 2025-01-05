import React from 'react';
import { MathDisplay } from '../components/Mathematical/DisplayComponents';
import { Question } from '../components/Mathematical/DisplayComponents';

const week24 = {
    topic: "Geometry V: Similar Figures",
    starters: {
        1: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="Find the acceleration of a particle at t = 3s if its velocity is:"
                        math="v = 2t^2 - 4t + 1 \text{ m/s}"
                    />,
                    answer: <MathDisplay
                        math="\frac{dv}{dt} = 4t - 4 \\\\ \text{When } t = 3: \\\\ 4(3) - 4 = 8 \text{ m/s}^2"
                        size="x-large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="If curve y = f(x) is reflected in y = x, it becomes y = g(x) where:"
                        math="f(x) = 2x + 1"
                    />,
                    answer: <MathDisplay
                        math="g(x) = \frac{x-1}{2} \\\\ \text{(swap x and y, solve for y)}"
                        size="x-large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="Triangle A has sides 3cm, 4cm, and 5cm. Triangle B is similar with scale factor 2. Find the perimeter of triangle B."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Perimeter A} = 12\text{ cm} \\\\ \text{Perimeter B} = 24\text{ cm}"
                        size="x-large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="The ratio of two numbers is 3:8. If their product is 600, find the numbers."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\frac{3x \times 8x}{24} = 600 \\\\ x^2 = 25 \\\\ \text{Numbers: } 15 \text{ and } 40"
                        size="x-large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="Two similar prisms have volumes 64cm³ and 216cm³. If the smaller prism is 8cm high, find:"
                        math="\text{a) The height of the larger prism} \\\\ \text{b) The ratio of their surface areas} \\\\ \text{c) The ratio of their cross-sectional areas}"
                    />,
                    answer: <MathDisplay
                        math="\text{Volume ratio} = 27:8 \\\\ \text{Linear scale factor} = \sqrt[3]{\frac{27}{8}} = \frac{3}{2} \\\\ \text{a) Height} = 8 \times \frac{3}{2} = 12\text{ cm} \\\\ \text{b) Surface area ratio} = (\frac{3}{2})^2 = \frac{9}{4} \\\\ \text{c) Cross-section ratio} = (\frac{3}{2})^2 = \frac{9}{4}"
                        size="x-large"
                    />
                }
            }
        },
        2: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="Find the coordinates of the minimum point on the curve:"
                        math="y = 2x^2 + 8x + 7"
                    />,
                    answer: <MathDisplay
                        math="\frac{dy}{dx} = 4x + 8 = 0 \\ x = -2 \\ y = 8 - 16 + 7 = -1 \\ \text{Point: } (-2,-1)"
                        size="large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="A rectangle is enlarged by scale factor k. If its perimeter increases from 20cm to 30cm, find k."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="20k = 30 \\ k = \frac{3}{2} = 1.5"
                        size="large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="If the areas of two similar shapes are in ratio 16:25, find the ratio of their corresponding sides."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Area ratio} = k^2 = \frac{16}{25} \\ k = \frac{4}{5} \\ \text{Side ratio} = 4:5"
                        size="large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="Find the next two terms in the sequence:"
                        math="1, 3, 9, 27, ..."
                    />,
                    answer: <MathDisplay
                        math="81, 243 \\ \text{(multiply by 3 each time)}"
                        size="large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="A cone has base radius 8cm and height 12cm. A similar cone has volume 27 times larger."
                        math="\text{a) Find the scale factor} \\ \text{b) Find the new dimensions} \\ \text{c) Find the ratio of their curved surface areas}"
                        hint="Volume of cone = ⅓πr²h"
                    />,
                    answer: <MathDisplay
                        math="\text{Volume ratio} = 27:1 \\ \text{Linear scale factor} = \sqrt[3]{27} = 3 \\ \text{New radius} = 24\text{ cm} \\ \text{New height} = 36\text{ cm} \\ \text{Surface area ratio} = 9:1"
                        size="large"
                    />
                }
            }
        },
        3: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="The gradient of a curve at point (2,k) is 7. If the curve is:"
                        math="y = x^2 + 3x \text{, find } k"
                    />,
                    answer: <MathDisplay
                        math="\frac{dy}{dx} = 2x + 3 \\ 7 = 2(2) + 3 \\ 7 = 7 ✓ \\ k = 4 + 6 = 10"
                        size="large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="Two rectangles are similar with lengths in ratio 2:5. Rectangle A has area 24cm². Find the area of rectangle B."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Area ratio} = (\frac{5}{2})^2 = \frac{25}{4} \\ \text{Area B} = 24 \times \frac{25}{4} = 150\text{ cm}^2"
                        size="large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="Two cylinders have radii in ratio 1:3. Find the ratio of their:"
                        math="\text{a) Cross-sectional areas} \\ \text{b) Volumes}"
                    />,
                    answer: <MathDisplay
                        math="\text{a) Area ratio} = 1:9 \\ \text{b) Volume ratio} = 1:27"
                        size="large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="A sphere of radius r cm has volume 36π cm³. Find r."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\frac{4}{3}\pi r^3 = 36\pi \\ r^3 = 27 \\ r = 3"
                        size="large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="Two cones are similar. The curved surface area of the larger cone is 16 times the curved surface area of the smaller cone."
                        math="\text{Find:} \\ \text{a) The scale factor} \\ \text{b) The ratio of their heights} \\ \text{c) The ratio of their volumes} \\ \text{d) The ratio of their slant heights}"
                        hint="Curved surface area = πrs where r is radius and s is slant height"
                    />,
                    answer: <MathDisplay
                        math="\text{CSA ratio} = k^2 = 16 \\ \text{a) Scale factor } k = 4 \\ \text{b) Height ratio} = 4:1 \\ \text{c) Volume ratio} = 64:1 \\ \text{d) Slant height ratio} = 4:1"
                        size="large"
                    />
                }
            }
        }
    }
};

export default week24;