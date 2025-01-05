import React from 'react';
import { Question, MathDisplay } from '../components/Mathematical/DisplayComponents';

const week15 = {
    topic: "Geometry II: The Circle Properties",
    starters: {
        1: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="Find the circumference of a circle with radius 8cm. Give your answer in terms of π."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="C = 2\pi r = 2\pi \times 8 = 16\pi \text{ cm}"
                        size="large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="Let A = {vowels in 'EQUATION'} and B = {vowels in 'SOLUTION'}. Find A ∪ B"
                        math=""
                    />,
                    answer: <MathDisplay
                        math="A = \{E,U,A,I,O\} \\ B = \{O,U,I,O\} \\ A \cup B = \{A,E,I,O,U\}"
                        size="large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="A spinner has sections numbered 1 to 5. Find P(getting an odd number)."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\frac{3}{5}"
                        size="large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="Find the area of a circle with diameter 10cm. Give your answer in terms of π."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="r = 5 \\ A = \pi r^2 = 25\pi \text{ cm}^2"
                        size="large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="The radius of circle A is r cm. Circle B has radius 3r cm. Find:"
                        math="\text{a) The ratio of their circumferences} \\ \text{b) The ratio of their areas}"
                    />,
                    answer: <MathDisplay
                        math="\text{a) } \frac{2\pi(3r)}{2\pi r} = 3:1 \\ \text{b) } \frac{\pi(3r)^2}{\pi r^2} = 9:1"
                        size="large"
                    />
                }
            }
        },
        2: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="A circle has radius 12cm. Find the length of an arc of 90°. Give your answer in terms of π."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Arc length} = \frac{90}{360} \times 2\pi r = 6\pi \text{ cm}"
                        size="large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="In a class of 32 students: 20 study French, 18 study Spanish, and 12 study both. How many study neither language?"
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{French OR Spanish} = 20 + 18 - 12 = 26 \\ \text{Neither} = 32 - 26 = 6 \text{ students}"
                        size="large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="Two coins are tossed. If P(two heads) = 0.25 and P(two tails) = 0.25, find P(different outcomes)."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="P(\text{different}) = 1 - 0.25 - 0.25 = 0.5"
                        size="large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="Find the area of a sector of radius 6cm and angle 120°. Give your answer in terms of π."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Area} = \frac{120}{360} \times \pi r^2 = \frac{1}{3} \times \pi \times 36 = 12\pi \text{ cm}^2"
                        size="large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="A circle has radius 8cm. A sector has area 24π cm². Find:"
                        math="\text{a) The sector angle} \\ \text{b) The arc length}"
                    />,
                    answer: <MathDisplay
                        math="\text{a) } 24\pi = \frac{\theta}{360} \times \pi \times 64 \\ \theta = 135° \\ \text{b) Arc} = \frac{135}{360} \times 2\pi \times 8 = 18\pi \text{ cm}"
                        size="large"
                    />
                }
            }
        },
        3: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="If the angle at the centre of a circle is 80°, find the angle at the circumference that subtends the same arc."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="40° \text{ (angle at centre is twice angle at circumference)}"
                        size="large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="Let P = {prime numbers < 10} and Q = {factors of 12}. Find P ∩ Q"
                        math=""
                    />,
                    answer: <MathDisplay
                        math="P = \{2,3,5,7\} \\ Q = \{1,2,3,4,6,12\} \\ P \cap Q = \{2,3\}"
                        size="large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="A fair spinner has 3 equal sections: red, blue, yellow. It is spun twice. Find P(same colour)."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\frac{1}{3} \times 1 = \frac{1}{3}"
                        size="large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="In a circle, if two angles in the same segment are 52° and x°, find x."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="x = 52 \text{ (angles in same segment are equal)}"
                        size="large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="A circle has centre O and diameter AB. Point P lies on the circle. If angle AOP = 35°, find:"
                        math="\text{a) Angle APB} \\ \text{b) Angle BAP} \\ \text{c) Arc AP as a fraction of the full circumference}"
                    />,
                    answer: <MathDisplay
                        math="\text{a) } 90° \text{ (angle in semicircle)} \\ \text{b) } 55° \text{ (isosceles triangle)} \\ \text{c) } \frac{35}{180} = \frac{7}{36} \text{ of circumference}"
                        size="large"
                    />
                }
            }
        }
    }
};


export default week15;
