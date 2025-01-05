import React from 'react';
import { MathDisplay } from '../components/Mathematical/DisplayComponents';

const Question = ({ instruction, math }) => (
    <div className="space-y-2">
        <p className="font-medium text-gray-700">{instruction}</p>
        <MathDisplay math={math} size="large" className="mt-1" />
    </div>
);

const week6 = {
    topic: "Geometry I: Introduction to Geometrical Concepts",
    starters: {
        1: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="When two lines intersect, one angle is 115°. Find the value of the vertically opposite angle."
                        math=""
                    />,
                    answer: <MathDisplay math="115°" size="large" />
                },
                lastWeek: {
                    question: <Question
                        instruction="Make x the subject:"
                        math="5(2x - 1) = 3(x + 4)"
                    />,
                    answer: <MathDisplay
                        math="10x - 5 = 3x + 12 \\\\ 7x = 17 \\\\ x = \frac{17}{7}"
                        size="x-large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="Factorise:"
                        math="x^2 - 4x - 12"
                    />,
                    answer: <MathDisplay math="(x - 6)(x + 2)" size="large" />
                },
                lastYear: {
                    question: <Question
                        instruction="In a triangle, angles are (x + 10)°, (2x)° and 50°. Find x."
                        math=""
                    />,
                    answer: <MathDisplay math="x = 40" size="large" />
                },
                challenge: {
                    question: <Question
                        instruction="Two parallel lines are cut by a transversal. If one corresponding angle is 3x° and another is (x + 40)°, find x."
                        math=""
                    />,
                    answer: <MathDisplay math="x = 20" size="large" />
                }
            }
        },
        2: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="When parallel lines are cut by a transversal, one alternate angle is 135°. Find the other alternate angle."
                        math=""
                    />,
                    answer: <MathDisplay math="135°" size="large" />
                },
                lastWeek: {
                    question: <Question
                        instruction="Find the size of an exterior angle in a regular hexagon"
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Interior angle} = 120° \\\\ \text{Exterior angle} = 180° - 120° = 60°"
                        size="x-large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="Solve:"
                        math="x^2 - 6x = -5"
                    />,
                    answer: <MathDisplay math="x = 5 \\ \text{ or } \\ x = 1" size="large" />
                },
                lastYear: {
                    question: <Question
                        instruction="In a right-angled triangle, one angle is x°. If the other acute angle is (3x)°, find x."
                        math=""
                    />,
                    answer: <MathDisplay math="x = 22.5" size="large" />
                },
                challenge: {
                    question: <Question
                        instruction="Two parallel lines are cut by two transversals, forming a quadrilateral. If one interior angle is 3x°, find x, given that interior angles of a quadrilateral sum to 360°."
                        math=""
                    />,
                    answer: <MathDisplay math="x = 30" size="large" />
                }
            }
        },
        3: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="When two parallel lines are cut by a transversal, one corresponding angle is 100°. Find the value of the other angle."
                        math=""
                    />,
                    answer: <MathDisplay math="100°" size="large" />
                },
                lastWeek: {
                    question: <Question
                        instruction="Convert this recurring decimal to a fraction:"
                        math="0.2727..."
                    />,
                    answer: <MathDisplay
                        math="\text{This is equal to } \frac{3}{11}"
                        size="large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="Make x the subject:"
                        math="y = 2x + 3a"
                    />,
                    answer: <MathDisplay
                        math="x = \frac{y - 3a}{2}"
                        size="x-large"  // Changed to x-large as per week5
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="A triangle has angles in the ratio 2:3:4. Find the size of each angle."
                        math=""
                    />,
                    answer: <MathDisplay math="40°, 60°, 80°" size="large" />
                },
                challenge: {
                    question: <Question
                        instruction="In a regular polygon, each exterior angle is 24°. How many sides does the polygon have?"
                        hint="Remember: sum of exterior angles = 360°"
                        math=""
                    />,
                    answer: <MathDisplay math="15 \\ \text{sides}" size="large" />
                }
            }
        }
    }
};

export default week6;