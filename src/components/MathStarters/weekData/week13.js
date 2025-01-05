import React from 'react';
import { MathDisplay } from '../components/Mathematical/DisplayComponents';
import { Question } from '../components/Mathematical/DisplayComponents';


const week13 = {
    topic: "Probability II: Graphical Representation of Probabilities",
    starters: {
        1: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="Let A = {factors of 12} and B = {factors of 8}. Find A ∪ B"
                        math=""
                    />,
                    answer: <MathDisplay
                        math="A = \{1,2,3,4,6,12\} \\ B = \{1,2,4,8\} \\ A \cup B = \{1,2,3,4,6,8,12\}"
                        size="x-large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="Let P = {prime numbers < 10} and Q = {square numbers < 10}. Find P ∩ Q"
                        math=""
                    />,
                    answer: <MathDisplay
                        math="P = \{2,3,5,7\} \\ Q = \{1,4,9\} \\ P \cap Q = \{ \}"
                        size="x-large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="Find the nth term of the sequence:"
                        math="25, 21, 17, 13, ..."
                    />,
                    answer: <MathDisplay
                        math="29 - 4n"
                        size="x-large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="Convert to standard form:"
                        math="0.00072"
                    />,
                    answer: <MathDisplay
                        math="7.2 \times 10^{-4}"
                        size="x-large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="A password must contain exactly four characters and can only use the letters A, B, C and the numbers 1, 2. How many different passwords are possible where:
                        - The password must start with a letter
                        - The password must end with a number
                        - Letters and numbers can be repeated"/>,
                    answer: <MathDisplay math="
                        Total = 3 × 5 × 5 × 2 = 150"
                        size="x-large"
                    />
                }
            }
        },
        2: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="In a group of 40 students: 25 study French (F), 20 study German (G), and 12 study both. Calculate n(F ∪ G)'"
                        math=""
                    />,
                    answer: <MathDisplay
                        math="n(F \cup G) = 25 + 20 - 12 = 33 \\ n(F \cup G)' = 40 - 33 = 7"
                        size="x-large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="Let X be the universal set {1, 2, 3, 4, 5, 6}. If A = {2, 4, 6}, find A'"
                        math=""
                    />,
                    answer: <MathDisplay
                        math="A' = \{1, 3, 5\}"
                        size="x-large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="Complete the table showing all possible outcomes when two coins are tossed:"
                        math="\begin{array}{|c|c|c|} \hline \text{Coin 1} & \text{Coin 2} & \text{Outcome} \\ \hline & & \\ \hline \end{array}"
                    />,
                    answer: <MathDisplay
                        math="\begin{array}{|c|c|c|} \hline \text{H} & \text{H} & \text{HH} \\ \hline \text{H} & \text{T} & \text{HT} \\ \hline \text{T} & \text{H} & \text{TH} \\ \hline \text{T} & \text{T} & \text{TT} \\ \hline \end{array}"
                        size="x-large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="A ball is chosen at random from a bag. Express each probability in decimals:"
                        math="\dfrac{1}{2}, \dfrac{3}{4}, \dfrac{5}{8}, \dfrac{7}{10}"
                    />,
                    answer: <MathDisplay
                        math="0.5, 0.75, 0.625, 0.7"
                        size="x-large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="Create a tree diagram showing all possible outcomes for breakfast: two choices of drink (tea/coffee) and three choices of food (toast/cereal/fruit). How many different combinations are possible?"
                        math=""
                    />,
                    answer: <MathDisplay
                        math="2 \times 3 = 6 \text{ possible combinations}"
                        size="x-large"
                    />
                }
            }
        },
        3: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="A card is drawn from a deck. Write the following events in set notation: A = 'red cards', B = 'picture cards'. Find A ∩ B"
                        math=""
                    />,
                    answer: <MathDisplay
                        math="A \cap B = \{\text{red J, red Q, red K}\} \\ n(A \cap B) = 6"
                        size="x-large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="Draw and label a Venn diagram for: A = {even numbers ≤ 10}, B = {factors of 12}"
                        math=""
                    />,
                    answer: <MathDisplay
                        math="A = \{2,4,6,8,10\} \\ B = \{1,2,3,4,6,12\} \\ A \cap B = \{2,4,6\}"
                        size="x-large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="Use a two-way table to show all possible outcomes when rolling two dice and finding their sum"
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\begin{array}{c|c|c|c|c|c|c|} & 1 & 2 & 3 & 4 & 5 & 6 \\ \hline 1 & 2 & 3 & 4 & 5 & 6 & 7 \\ \hline 2 & 3 & 4 & 5 & 6 & 7 & 8 \\ \hline 3 & 4 & 5 & 6 & 7 & 8 & 9 \\ \hline 4 & 5 & 6 & 7 & 8 & 9 & 10 \\ \hline 5 & 6 & 7 & 8 & 9 & 10 & 11 \\ \hline 6 & 7 & 8 & 9 & 10 & 11 & 12 \\ \hline \end{array}"
                        size="x-large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="Express the following as a single fraction in its simplest form:"
                        math="\dfrac{1}{4} + \dfrac{3}{8}"
                    />,
                    answer: <MathDisplay
                        math="\dfrac{5}{8}"
                        size="x-large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="Create a sample space diagram for rolling a die and flipping a coin. Mark all outcomes where either a 6 is rolled OR heads is obtained."
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Marked outcomes: 1H, 2H, 3H, 4H, 5H, 6H, 6T} \\ \text{Total marked outcomes = 7}"
                        size="x-large"
                    />
                }
            }
        }
    }
};

export default week13;