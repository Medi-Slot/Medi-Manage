// PatientSatisfaction.js
import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './style.css';

const PatientSatisfaction = () => {
  const totalReviews = 5000;
  const satisfactionData = [
    { label: 'Excellent', value: 60, color: '#3b82f6' }, // Blue color
    { label: 'Good', value: 25, color: '#f59e0b' }, // Orange color
    { label: 'Poor', value: 15, color: '#10b981' }  // Green color
  ];

  const gap = 3.5; // Adjust this value to control the gap size

  return (
    <div className="patient-satisfaction-chart-container">
      <h3 className='patient-satisfaction-chart-header'>Patient Satisfaction</h3>
      <div className="patient-satisfaction-chart-sub-container">
        <div className="patient-satisfaction-chart-wrapper">
          {/* Excellent Progress Bar */}
          <div className="patient-satisfaction-progress-bar">
            <CircularProgressbar
              value={satisfactionData[0].value - gap}
              styles={buildStyles({
                pathColor: satisfactionData[0].color,
                trailColor: '#d6d6d6',
                rotation: 0,
              })}
            />
          </div>
          {/* Good Progress Bar */}
          <div className="patient-satisfaction-progress-bar">
            <CircularProgressbar
              value={satisfactionData[1].value - gap}
              styles={buildStyles({
                pathColor: satisfactionData[1].color,
                trailColor: 'transparent',
                rotation: satisfactionData[0].value / 100, // Offset to start after Excellent
              })}
            />
          </div>
          {/* Poor Progress Bar */}
          <div className="patient-satisfaction-progress-bar">
            <CircularProgressbar
              value={satisfactionData[2].value - gap}
              styles={buildStyles({
                pathColor: satisfactionData[2].color,
                trailColor: 'transparent',
                rotation: (satisfactionData[0].value + satisfactionData[1].value) / 100, // Offset to start after Good
              })}
            />
          </div>
          {/* Centered Total Text */}
          <div className="patient-satisfaction-chart-center-text">
            Total<br />{totalReviews}
          </div>
        </div>
        <div className="patient-satisfaction-legend">
          {satisfactionData.map((item, index) => (
            <div key={index} className="patient-satisfaction-legend-item">
              <div className="patient-satisfaction-legend-color" style={{ backgroundColor: item.color }}></div>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PatientSatisfaction;
