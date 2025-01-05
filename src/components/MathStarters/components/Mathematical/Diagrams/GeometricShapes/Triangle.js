import React from 'react';

const Triangle = ({
    type = 'right', // right, isosceles, scalene, equilateral
    base = 100,
    height = 80,
    color = 'blue',
    showAngles = true,
    showSides = false,
    labels = {},
    className = ""
}) => {
    const shapeTheme = {
        fill: {
            pink: "#fce7f3",
            blue: "#e0f2fe",
            green: "#dcfce7",
            orange: "#ffedd5",
            purple: "#f3e8ff"
        },
        stroke: {
            pink: "#db2777",
            blue: "#0284c7",
            green: "#16a34a",
            orange: "#f97316",
            purple: "#9333ea"
        }
    };

    const styles = {
        shape: {
            fill: shapeTheme.fill[color],
            stroke: shapeTheme.stroke[color],
            strokeWidth: 1.5
        },
        text: {
            fontSize: "0.67em",
            fill: shapeTheme.stroke[color]
        }
    };

    // Calculate points based on type
    const getPoints = () => {
        switch (type) {
            case 'right':
                return `50,150 150,150 150,50`;
            case 'isosceles':
                return `50,150 150,150 100,50`;
            case 'equilateral':
                const side = base;
                const h = side * Math.sqrt(3) / 2;
                return `50,150 ${50 + side},150 ${50 + side / 2},${150 - h}`;
            case 'scalene':
                return `50,150 150,150 100,70`;
            default:
                return `50,150 150,150 150,50`;
        }
    };

    // Render right angle marker if needed
    const RightAngleMarker = () => {
        if (type !== 'right') return null;
        return (
            <path
                d="M 145,145 L 145,135 L 135,135"
                fill="none"
                style={styles.shape}
            />
        );
    };

    return (
        <svg viewBox="0 0 200 200" className={`w-full max-w-md mx-auto ${className}`}>
            <polygon
                points={getPoints()}
                style={styles.shape}
            />
            <RightAngleMarker />

            {/* Optional labels */}
            {labels.angles && showAngles && Object.entries(labels.angles).map(([pos, angle]) => (
                <text
                    key={pos}
                    x={pos.split(',')[0]}
                    y={pos.split(',')[1]}
                    style={styles.text}
                >
                    {angle}°
                </text>
            ))}
        </svg>
    );
};

export default Triangle;