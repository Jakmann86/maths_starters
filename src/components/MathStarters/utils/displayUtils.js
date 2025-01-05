// Utility functions for rendering math elements

/**
 * Create a fraction rendering as an SVG.
 * @param {string} numerator - The numerator of the fraction.
 * @param {string} denominator - The denominator of the fraction.
 * @param {string} [equals] - An optional value to show after "=".
 * @param {number} [width=200] - Width of the SVG.
 * @param {number} [height=60] - Height of the SVG.
 * @returns {string} - SVG string representation of the fraction.
 */
// In displayUtils.js
const createFraction = (numerator, denominator, equals = '', width = 150, height = 50) => {
    const numLength = numerator.length;
    const denLength = denominator.length;
    const maxLength = Math.max(numLength, denLength);
    const lineWidth = Math.max(40, maxLength * 10);

    // Further adjusted numerator position (more to the left)
    const numX = 8 + (lineWidth - numLength * 10) / 2;

    return `<svg viewBox="0 0 120 50" style="display:inline-block; vertical-align:middle; width:${lineWidth + 40}px; height:${height}px;">
        <text x="${numX}" y="15" class="math-text" style="font-size:18px;">${numerator}</text>
        <line x1="5" y1="25" x2="${lineWidth + 5}" y2="25" stroke="black" stroke-width="1"/>
        <text x="${5 + (lineWidth - denLength * 6) / 2}" y="42" class="math-text" style="font-size:18px;">${denominator}</text>
        ${equals ? `<text x="${lineWidth + 10}" y="30" class="math-text" style="font-size:18px;">= ${equals}</text>` : ''}
    </svg>`;
};



// Export all utility functions
export { createFraction };
