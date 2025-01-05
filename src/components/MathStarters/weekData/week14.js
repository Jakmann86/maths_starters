import React from 'react';
import { MathDisplay } from '../components/Mathematical/DisplayComponents';
import { Question } from '../components/Mathematical/DisplayComponents';

const week14 = {
    topic: "Geometry II: Circles, Sectors and Arcs",
    starters: {
        1: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="Find the area of a sector with radius 12cm and angle 75°. Give your answer in terms of π."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Area} = \frac{75}{360} \times \pi \times 12^2 = 25\pi \text{ cm}^2"
                        size="large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="Let A = {letters in 'CIRCLE'}, B = {letters in 'CENTRE'}. Find:"
                        math="\text{a) } A \cap B \\ \text{b) } A \cup B"
                    />,
                    answer: <MathDisplay
                        math="A = \{C,I,R,L,E\} \\ B = \{C,E,N,T,R,E\} \\ A \cap B = \{C,E,R\} \\ A \cup B = \{C,I,R,L,E,N,T\}"
                        size="large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="Point P(3,5) is translated by vector:"
                        math="\begin{pmatrix} -2 \\ 4 \end{pmatrix} \text{ Find the coordinates of P'}"
                    />,
                    answer: <MathDisplay
                        math="P'(3 + (-2), 5 + 4) = (1,9)"
                        size="large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="In a right-angled triangle, angle A is 32° and the adjacent side is 15cm. Find the opposite side, giving your answer to 1 decimal place."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\tan(32°) = \frac{\text{opposite}}{15} \\ \text{opposite} = 15\tan(32°) = 9.4\text{ cm}"
                        size="large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="A circle has radius 8cm. A sector has area 48π cm². Find:"
                        math="\text{a) The sector angle} \\ \text{b) The arc length} \\ \text{c) The perimeter of the sector}"
                    />,
                    answer: <MathDisplay
                        math="\text{a) } 48\pi = \frac{\theta}{360} \times \pi \times 64 \\ \theta = 270° \\ \text{b) Arc} = \frac{270}{360} \times 2\pi \times 8 = 12\pi \text{ cm} \\ \text{c) Perimeter} = 12\pi + 16 \text{ cm}"
                        size="large"
                    />
                }
            }
        },
        2: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="Find the circumference and area of a circle with radius 7cm. Give your answers in terms of π."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Circumference} = 2\pi \times 7 = 14\pi \text{ cm} \\ \text{Area} = \pi \times 7^2 = 49\pi \text{ cm}^2"
                        size="large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="A circle has radius 4cm. Calculate:"
                        math="\text{a) The area of a sector with angle } 135° \\ \text{b) The length of the arc with angle } 135°"
                    />,
                    answer: <MathDisplay
                        math="\text{a) Area} = \frac{135}{360} \times \pi \times 16 = 6\pi \text{ cm}^2 \\ \text{b) Arc} = \frac{135}{360} \times 2\pi \times 4 = 3\pi \text{ cm}"
                        size="large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="Point B(4,1) is reflected in the line y = x. Find the coordinates of its image."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Swap x and y coordinates: } B'(1,4)"
                        size="large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="Find the perimeter of a triangle with vertices at A(-2,1), B(4,1) and C(1,5), giving your answer to 1 decimal place."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="AB = 6 \\ BC = 5 \\ AC = 5 \\ \text{Perimeter} = 16 \text{ units}"
                        size="large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="A circular pond has radius 5m. A straight path of width 2m is built across it through its center. Find:"
                        math="\text{a) The area of the path} \\ \text{b) The percentage of the pond covered by the path}"
                    />,
                    answer: <MathDisplay
                        math="\text{Path area} = 2 \times 10 = 20\text{ m}^2 \\ \text{Pond area} = 25\pi \text{ m}^2 \\ \text{Percentage} = \frac{20}{25\pi} \times 100 = 25.5\%"
                        size="large"
                    />
                }
            }
        },
        3: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="A circle has radius 6cm. Find the area of the segment formed when the chord AB is 8cm from the center. Give your answer in terms of π."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Angle} = 2\cos^{-1}(\frac{8}{12}) = 97.2° \\ \text{Sector area} = \frac{97.2}{360} \times 36\pi = 9.72\pi \\ \text{Triangle area} = \frac{1}{2} \times 8 \times 8 = 32 \\ \text{Segment area} = 9.72\pi - 32 \text{ cm}^2"
                        size="large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="A chord is 10cm long and is 3cm from the center of a circle. Find the radius of the circle."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Using Pythagoras: } r^2 = 3^2 + 5^2 \\ r = \sqrt{34} \approx 5.8\text{ cm}"
                        size="large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="Find the angle between a tangent and radius at the point of contact."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="90°"
                        size="large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="Two circles have radii 6cm and 8cm. The distance between their centers is 20cm. Find the length of their common tangent."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Using Pythagoras: } t^2 = 20^2 - (8+6)^2 \\ t = \sqrt{400 - 196} = \sqrt{204} \approx 14.3\text{ cm}"
                        size="large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="A circle has radius r. A sector has angle θ°. If the arc length equals the radius, find:"
                        math="\text{a) The value of } θ \\ \text{b) The ratio of the sector's area to the circle's area}"
                    />,
                    answer: <MathDisplay
                        math="\frac{\theta}{360} \times 2\pi r = r \\ \theta = \frac{180}{\pi} \approx 57.3° \\ \text{Area ratio} = \frac{57.3}{360} = \frac{1}{2\pi}"
                        size="large"
                    />
                }
            }
        }
    }
};

export default week14;