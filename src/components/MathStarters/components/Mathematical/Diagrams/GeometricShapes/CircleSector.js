import React from 'react';
import PropTypes from 'prop-types';

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
}; // ... (your shapeTheme remains the same)

const CircleSector = ({ radius, angle, color = "blue", showAngle = true, width = 200 }) => {

    const cx = width / 2;
    const cy = width / 2;
    const angleRad = (angle * Math.PI) / 180;
    const startX = cx + radius * Math.cos(0);
    const startY = cy - radius * Math.sin(0);
    const endX = cx + radius * Math.cos(angleRad);
    const endY = cy - radius * Math.sin(angleRad);
    const largeArcFlag = angle > 180 ? 1 : 0;  // Correct large arc flag calculation

    return (
        <svg viewBox={`0 0 ${width} ${width}`} width={width} preserveAspectRatio="xMidYMid meet">
            {/* Main Circle */}
            <circle cx={cx} cy={cy} r={radius * 0.8} fill="none" stroke="#555" strokeWidth="2" />

            {/* Sector path */}
            <path
                d={`M ${cx} ${cy} L ${startX} ${startY} A ${radius * 0.8} ${radius * 0.8} 0 ${largeArcFlag} 1 ${endX} ${endY} Z`}
                fill={shapeTheme.fill[color]}
                strokeWidth="2"
                fillOpacity="0.7"
            />


            {showAngle && (
                <>
                    {/* Angle Arc */}
                    <path
                        d={`M ${cx + 20} ${cy} A 20 20 0 0 1 ${cx + 20 * Math.cos(angleRad)} ${cy - 20 * Math.sin(angleRad)}`}
                        fill="none"
                        stroke={shapeTheme.stroke[color]}
                        strokeWidth="2"
                    />
                    {/* Angle Label */}
                    <text x={cx + 30 * Math.cos(angleRad / 2)} y={cy - 20 * Math.sin(angleRad / 2)} fontSize="16" textAnchor="middle" dominantBaseline="middle" fill={shapeTheme.stroke[color]}>{angle}°</text>
                </>
            )}

        </svg>
    );
};


CircleSector.propTypes = {
    radius: PropTypes.number.isRequired,
    angle: PropTypes.number.isRequired,
    color: PropTypes.oneOf(Object.keys(shapeTheme.fill)), // Use keys from theme
    showAngle: PropTypes.bool,
    width: PropTypes.number,
};


export default CircleSector;

