import React from 'react';
import { MathDisplay } from '../components/Mathematical/DisplayComponents';
import { Question } from '../components/Mathematical/DisplayComponents';

const week9 = {
    topic: "Number Theory I: Percentages and Ratio",
    starters: {
        1: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="Simplify by first making equivalent denominators:"
                        math="\frac{3}{8} + \frac{5}{12}"
                    />,
                    answer: <MathDisplay
                        math="\frac{9}{24} + \frac{10}{24} = \frac{19}{24}"
                        size="x-large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="Find the missing value when 2 : 5 = 14 : n"
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\frac{14 \times 5}{2} = 35 \\\\ n = 35"
                        size="x-large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="Write as a percentage:"
                        math="\frac{7}{20}"
                    />,
                    answer: <MathDisplay
                        math="\frac{7}{20} \times 100 = 35\%"
                        size="x-large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="Express as a ratio in its simplest form:"
                        math="85\text{cm} : 1.7\text{m}"
                    />,
                    answer: <MathDisplay
                        math="85:170 = 1:2"
                        size="x-large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="In a class, the ratio of boys:girls is 4:5. After 3 boys and 7 girls leave, the ratio becomes 3:2. How many students were originally in the class?"
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Let one part} = x \\\\ \text{Original: } 4x:5x = 9x \text{ total} \\\\ \text{New: } (4x-3):(5x-7) = 3:2 \\\\ 2(4x-3) = 3(5x-7) \\\\ 8x-6 = 15x-21 \\\\ x = 3 \\\\ \text{Total} = 9 \times 3 = 27 \text{ students}"
                        size="x-large"
                    />
                }
            }
        },
        2: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="Express as a single fraction:"
                        math="25\% + \frac{1}{8}"
                    />,
                    answer: <MathDisplay
                        math="25\% = \frac{25}{100} = \frac{1}{4} \\\\ \frac{1}{4} + \frac{1}{8} = \frac{2}{8} + \frac{1}{8} = \frac{3}{8}"
                        size="x-large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="In a group of 150 students, the ratio of boys:girls is 4:6. How many boys are there?"
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Parts} = 4 + 6 = 10 \\\\ \text{One part} = \frac{150}{10} = 15 \\\\ \text{Boys} = 4 \times 15 = 60"
                        size="x-large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="Share £420 in the ratio 5:3:2"
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{One part} = \frac{420}{10} = 42 \\\\ \text{Shares} = £210 : £126 : £84"
                        size="x-large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="A café buys milk for £1.20 and sells it for £1.80 per carton. What is their percentage profit?"
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Profit} = £0.60 \\\\ \text{Percentage} = \frac{0.60}{1.20} \times 100 = 50\%"
                        size="x-large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="Purple paint is made by mixing red and blue paint in the ratio 2:3. How many liters of each color are needed to make 35 liters of purple paint?"
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Total parts} = 5 \\\\ \text{One part} = \frac{35}{5} = 7 \\\\ \text{Red} = 14 \text{ liters} \\\\ \text{Blue} = 21 \text{ liters}"
                        size="x-large"
                    />
                }
            }
        },
        3: {
            standard: {
                lastLesson: {
                    question: <Question
                        instruction="A recipe for 6 scones uses 300g flour and 100g butter. How much flour is needed to make 15 scones?"
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{For 6 scones} = 300\text{g flour} \\\\ \text{For 15 scones} = \frac{300 \times 15}{6} = 750\text{g flour}"
                        size="x-large"
                    />
                },
                lastWeek: {
                    question: <Question
                        instruction="Convert to a fraction:"
                        math="0.7272..."
                    />,
                    answer: <MathDisplay
                        math="0.7272... = \frac{72}{99} = \frac{8}{11}"
                        size="x-large"
                    />
                },
                lastTopic: {
                    question: <Question
                        instruction="In a group of 90 students, the ratio of those who study French:Spanish:Neither is 2:3:4. How many study Spanish?"
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{One part} = \frac{90}{9} = 10 \\\\ \text{Spanish} = 3 \times 10 = 30 \text{ students}"
                        size="x-large"
                    />
                },
                lastYear: {
                    question: <Question
                        instruction="Express this increase as a percentage:"
                        math="£160 \text{ to } £200"
                    />,
                    answer: <MathDisplay
                        math="\frac{40}{160} \times 100 = 25\%"
                        size="x-large"
                    />
                },
                challenge: {
                    question: <Question
                        instruction="In a bag of sweets, the ratio of red:blue:yellow is 2:3:5. After eating 12 red sweets and 8 blue sweets, the ratio becomes 1:2:3. How many sweets were originally in the bag?"
                        math=""
                    />,
                    answer: <MathDisplay
                        math="\text{Let one original part} = x \\\\ \text{Original parts} = 10x \\\\ \text{Red: } 2x - 12 = p \\\\ \text{Blue: } 3x - 8 = 2p \\\\ \text{Yellow: } 5x = 3p \\\\ \text{From Red equation: } p = 2x - 12 \\\\ 3x - 8 = 2(2x - 12) \\\\ 3x - 8 = 4x - 24 \\\\ 16 = x \\\\ \text{Total} = 10x = 160 \text{ sweets}"
                        size="x-large"
                    />
                }
            }
        }
    }
};

export default week9;