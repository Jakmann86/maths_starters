import React from 'react';


const CompoundShape = ({
    width1,
    width2,
    height1,
    height2,
    className = ""
}) => {
    const viewBoxWidth = 200;
    const viewBoxHeight = 150;

    const styles = {
        shape: {
            fill: "#E5E7EB",
            stroke: "#6B7280",
            strokeWidth: 1.5
        },
        text: {
            fontSize: "0.67em", // Reduced by 33%
            fill: "#4B5563"
        }
    };

    // Helper to create label with math notation
    const createLabel = (text, x, y, rotate = 0) => (
        <text
            x={x}
            y={y}
            transform={rotate ? `rotate(${rotate} ${x} ${y})` : undefined}
            style={styles.text}
            textAnchor="middle"
            dominantBaseline="middle"
        >
            {text}
        </text>
    );

    return (
        <svg
            viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
            className={`w-full max-w-md mx-auto ${className}`}
        >
            {/* Main shape */}
            <path
                d="M 40,40 
                   L 140,40 
                   L 140,80 
                   L 160,80 
                   L 160,120 
                   L 40,120 
                   Z"
                style={styles.shape}
            />

            {/* Labels - no dimension lines */}
            {createLabel("x + 2", 90, 35)}
            {createLabel("x", 155, 75)} {/* Moved right slightly */}
            {createLabel("2", 30, 80, -90)}
            {createLabel("x + 1", 175, 100, -90)}
        </svg>
    );
};

export default CompoundShape;