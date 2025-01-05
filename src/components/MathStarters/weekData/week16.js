import React from 'react';
import { Question } from '../components/Mathematical/DisplayComponents';
import { MathDisplay } from '../components/Mathematical/DisplayComponents';

const week16 = {
    topic: "Geometry III: Introduction to Transformations & Shapes",
    starters: {
        1: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="Find the area of this compound shape:"
                        math="\text{Rectangle: length } 12\text{cm, width } 5\text{cm}\\ \text{Semicircle on top: radius } 5\text{cm}"
                    />,
                    answer: <MathDisplay
                        math="\text{Rectangle} = 12 \times 5 = 60\text{ cm}^2\\ \text{Semicircle} = \frac{1}{2} \times \pi \times 5^2 = 39.27\text{ cm}^2\\ \text{Total} = 99.27\text{ cm}^2"
                        size="x-large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="In a circle with radius 8cm, find:"
                        math="\text{a) Arc length of a sector angle } 135°\\ \text{b) Area of the sector}"
                    />,
                    answer: <MathDisplay
                        math="\text{a) } \frac{135}{360} \times 2\pi \times 8 = 18.85\text{ cm}\\ \text{b) } \frac{135}{360} \times \pi \times 8^2 = 75.40\text{ cm}^2"
                        size="x-large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="Solve the equation:"
                        math="5(2x - 3) = 3(x + 4) - 7"
                    />,
                    answer: <MathDisplay
                        math="10x - 15 = 3x + 12 - 7\\ 10x - 3x = 20\\ 7x = 20\\ x = \frac{20}{7}"
                        size="x-large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="Find the volume and surface area of this cylinder:"
                        math="\text{radius } = 4\text{ cm}\\ \text{height } = 10\text{ cm}"
                    />,
                    answer: <MathDisplay
                        math="\text{Volume } = \pi \times 4^2 \times 10 = 502.65\text{ cm}^3\\ \text{Surface Area } = 2\pi r^2 + 2\pi rh = 351.86\text{ cm}^2"
                        size="x-large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="A solid metal cube of side length 8cm is melted down and reformed into a sphere. Given that no metal is lost in the process:"
                        math="\text{a) Find the volume of metal}\\ \text{b) Calculate the radius of the sphere}\\ \text{c) How much has the surface area changed?}"
                    />,
                    answer: <MathDisplay
                        math="\text{a) Cube volume } = 8^3 = 512\text{ cm}^3\\ \text{b) } \frac{4}{3}\pi r^3 = 512\\ r = \sqrt[3]{\frac{512 \times 3}{4\pi}} = 5.0\text{ cm}\\ \text{c) Cube SA } = 6 \times 8^2 = 384\text{ cm}^2\\ \text{Sphere SA } = 4\pi r^2 = 314.2\text{ cm}^2\\ \text{Decrease of }69.8\text{ cm}^2"
                        size="x-large"
                    />
                }
            }
        },
        2: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="Find the coordinates of P after reflecting in the x-axis:"
                        math="P(3,-4)"
                    />,
                    answer: <MathDisplay
                        math="P'(3,4)"
                        size="x-large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="A sector has radius 12cm and arc length 15cm. Find:"
                        math="\text{a) The sector angle}\\ \text{b) The area of the sector}"
                    />,
                    answer: <MathDisplay
                        math="\text{a) } 15 = \frac{\theta}{360} \times 2\pi \times 12\\ \theta = 71.6°\\ \text{b) Area } = \frac{71.6}{360} \times \pi \times 12^2 = 90\text{ cm}^2"
                        size="x-large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="Find the missing angle x:"
                        math="\text{In a circle, angle at center } = 124°\\ \text{angle at circumference } = x°"
                    />,
                    answer: <MathDisplay
                        math="x = 62°\\ \text{(angle at circumference is}\\ \text{half angle at center)}"
                        size="x-large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="Find the surface area of a sphere with:"
                        math="\text{radius } = 6\text{ cm}"
                    />,
                    answer: <MathDisplay
                        math="\text{Surface Area } = 4\pi r^2 = 4\pi \times 6^2 = 452.39\text{ cm}^2"
                        size="x-large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="Find the volume of a sphere that has the same surface area as a cube of side length 12cm"
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Cube SA } = 6 \times 12^2 = 864\\ 4\pi r^2 = 864\\ r = \sqrt{\frac{864}{4\pi}} = 8.28\text{ cm}\\ \text{Volume } = \frac{4}{3}\pi r^3 = 2376.8\text{ cm}^3"
                        size="x-large"
                    />
                }
            }
        },
        3: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="The point P(3,2) is rotated 90° clockwise about the origin. Find:"
                        math="\text{a) Its new coordinates}\\ \text{b) Its distance from the origin} \\ \text{before and after rotation}"
                    />,
                    answer: <MathDisplay
                        math="\text{a) } P'(2,-3)\\ \text{b) Distance } = \sqrt{3^2 + 2^2} = \sqrt{13}\\ \text{Distance is preserved under rotation}"
                        size="x-large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="In a circle with center O, chord AB is 16cm long. If OA = 10cm, find:"
                        math="\text{The perpendicular height from O to AB}"
                    />,
                    answer: <MathDisplay
                        math="\text{Using Pythagoras: } h^2 + 8^2 = 10^2\\ h = \sqrt{100 - 64} = 6\text{ cm}"
                        size="x-large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="A right circular cylinder has height 10cm. If its total surface area is 628cm², find:"
                        math="\text{a) The radius of the cylinder}\\ \text{b) Its volume}"
                    />,
                    answer: <MathDisplay
                        math="\text{SA } = 2\pi r^2 + 2\pi rh = 628\\ 2\pi r^2 + 20\pi r - 628 = 0\\ r = 6\text{ cm}\\ \text{Volume } = \pi r^2 h = 1130.97\text{ cm}^3"
                        size="x-large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="A cone has radius 8cm and height 15cm. Find:"
                        math="\text{a) Its volume}\\ \text{b) The angle between its}\\ \text{slant height and base}"
                    />,
                    answer: <MathDisplay
                        math="\text{a) } V = \frac{1}{3}\pi r^2 h = 301.59\text{ cm}^3\\ \text{b) } \tan \theta = \frac{8}{15}, \theta = 28.1°"
                        size="x-large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="What is the radius of the largest sphere that can fit inside a cube with diagonal 12cm?"
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Cube diagonal } = a\sqrt{3} \text{ where } a = \text{side length}\\ 12 = a\sqrt{3}\\ a = \frac{12}{\sqrt{3}} \approx 6.93\\ \text{Radius of sphere } = \frac{a}{2} = 3.46\text{ cm}"
                        size="x-large"
                    />
                }
            }
        }
    }
};

export default week16;