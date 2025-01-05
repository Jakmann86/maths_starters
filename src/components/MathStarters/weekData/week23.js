import React from 'react';
import { Question } from '../components/Mathematical/DisplayComponents';
import { MathDisplay } from '../components/Mathematical/DisplayComponents';

const week23 = {
    topic: "Calculus I: Differentiation",
    starters: {
        1: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="Find where y = x² - 2x intersects y = 2x + 1"
                        math=""
                    />,
                    answer: <MathDisplay
                        math="x^2 - 2x = 2x + 1 \\ x^2 - 4x - 1 = 0 \\ x = \frac{4 \pm \sqrt{16 + 4}}{2} \\ x = 2.24 \text{ or } x = -1.76 \text{ (2dp)}"
                        size="x-large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="Complete the table for y = x² - 3x"
                        math="x: 0, 1, 2, 3, 4"
                    />,
                    answer: <MathDisplay
                        math="x: 0 \quad 1 \quad 2 \quad 3 \quad 4 \\ y: 0 \quad -2 \quad -2 \quad 0 \quad 4"
                        size="x-large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="Find the gradient of the line passing through:"
                        math="(1,3) \text{ and } (4,9)"
                    />,
                    answer: <MathDisplay
                        math="\text{Gradient} = \frac{9-3}{4-1} = 2"
                        size="x-large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="A rectangular gardening plot has length 3m more than its width. If 30m of fencing is needed to surround it, find the dimensions that give the maximum area."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Let width} = x \\ \text{Length} = x + 3 \\ 2x + 2(x+3) = 30 \\ 4x + 6 = 30 \\ x = 6 \\ \text{Dimensions: } 6\text{m } \times 9\text{m} \\ \text{Area} = 54\text{m}^2"
                        size="x-large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="A company makes photo frames. They have found that to produce x frames per hour, their total cost (C) in pounds and selling price (P) in pounds are given by:"
                        math="C = x^2 + 20x + 100 \\ P = 50x \\ \text{Find how many frames give a profit of £300}"
                    />,
                    answer: <MathDisplay
                        math="\text{Profit} = P - C \\ 300 = 50x - (x^2 + 20x + 100) \\ 300 = -x^2 + 30x - 100 \\ x^2 - 30x + 400 = 0 \\ (x - 10)(x - 20) = 0 \\ x = 10 \text{ or } x = 20 \\ \text{Check: }x = 20 \text{ gives £300 profit}"
                        size="x-large"
                    />
                }
            }
        },
        2: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="Differentiate:"
                        math="y = 3x^2 - 4x + 1"
                    />,
                    answer: <MathDisplay
                        math="\frac{dy}{dx} = 6x - 4"
                        size="x-large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="Find the coordinates of the points where the line y = 3x - 2 intersects:"
                        math="y = x^2 + x"
                    />,
                    answer: <MathDisplay
                        math="x^2 + x = 3x - 2 \\ x^2 - 2x + 2 = 0 \\ (x - 1)^2 + 1 = 0 \\ \text{No real solutions}"
                        size="x-large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="Find the gradient function of:"
                        math="y = x^3 - 2x"
                    />,
                    answer: <MathDisplay
                        math="\frac{dy}{dx} = 3x^2 - 2"
                        size="x-large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="A farmer has 100m of fencing to make a rectangular enclosure against a straight wall. What dimensions give the maximum area?"
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Let width} = x \\ \text{Length} = \frac{100-2x}{2} = 50-x \\ \text{Area} = x(50-x) = 50x - x^2 \\ \text{Maximum at } x = 25 \\ \text{Dimensions: } 25\text{m } \times 25\text{m}"
                        size="x-large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="Find the coordinates of all stationary points on the curve:"
                        math="y = x^3 - 3x^2 - 9x + 2"
                    />,
                    answer: <MathDisplay
                        math="\frac{dy}{dx} = 3x^2 - 6x - 9 = 3(x^2 - 2x - 3) = 3(x+1)(x-3) \\ \text{When } x = -1: y = -1 - 3 + 9 + 2 = 7 \\ \text{When } x = 3: y = 27 - 27 - 27 + 2 = -25 \\ \text{Points: } (-1,7) \text{ maximum and } (3,-25) \text{ minimum}"
                        size="x-large"
                    />
                }
            }
        },
        3: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="Find the coordinates of the maximum point on the curve:"
                        math="y = -x^2 + 6x - 5"
                    />,
                    answer: <MathDisplay
                        math="\frac{dy}{dx} = -2x + 6 \\ 0 = -2x + 6 \\ x = 3 \\ y = -9 + 18 - 5 = 4 \\ \text{Maximum point: } (3,4)"
                        size="x-large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="For y = x³ + x, find:"
                        math="\text{a) } y(0) \\ \text{b) } y(1) \\ \text{c) } y(-1)"
                    />,
                    answer: <MathDisplay
                        math="\text{a) } y(0) = 0 \\ \text{b) } y(1) = 2 \\ \text{c) } y(-1) = -2"
                        size="x-large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="A particle has velocity v = 6t - 2 m/s. Find its acceleration."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="a = \frac{dv}{dt} = 6 \text{ m/s}^2"
                        size="x-large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="A cylindrical can of radius r and height h has surface area 120π cm². If r = 3cm, find h."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Surface area} = 2\pi r^2 + 2\pi rh = 120\pi \\ 2\pi(9) + 2\pi(3)h = 120\pi \\ 18\pi + 6\pi h = 120\pi \\ 6\pi h = 102\pi \\ h = 17\text{ cm}"
                        size="x-large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="A particle moves with velocity v = t² - 4t + 3 m/s. Find:"
                        math="\text{a) Its acceleration when } t = 2\text{s} \\ \text{b) The times when it is stationary}"
                    />,
                    answer: <MathDisplay
                        math="\text{a) } a = \frac{dv}{dt} = 2t - 4 \\ \text{When } t = 2, a = 0 \text{ m/s}^2 \\ \text{b) } v = 0 \text{ when } t^2 - 4t + 3 = 0 \\ (t - 1)(t - 3) = 0 \\ t = 1 \text{ or } t = 3"
                        size="x-large"
                    />
                }
            }
        }
    }
};

export default week23;




