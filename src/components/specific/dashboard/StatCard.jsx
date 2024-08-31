import React from 'react';
import { Chart } from 'react-google-charts';
import "./style.css"

const StatCard = ({ icon, title, value = 0, change = 0 }) => {
  const data = [
    ['Day', 'Earnings'],
    ['Mon', 200],
    ['Tue', 300],
    ['Wed', 400],
    ['Thu', 500],
    ['Fri', 600],
  ];

  const options = {
    legend: 'none',
    hAxis: { title: 'Day' },
    vAxis: { title: 'Earnings' },
    series: { 0: { color: change > 0 ? 'green' : 'red' } },
    width: '100%',
    height: '100%',
    chartArea: { width: '70%', height: '70%' },
  };

  return (
    <div className="stat-card-container">
      <div className="stat-card-header">
        <div className="stat-card-icon">{icon}</div>
        <div className="stat-card-title">{title}</div>
      </div>
      <div className="stat-card-body">
        <div className="stat-card-value">
          ${typeof value === 'number' ? value.toLocaleString() : '0'}
        </div>
        <div className="stat-card-change" style={{ color: change > 0 ? 'green' : 'red' }}>
          {change > 0 ? '▲' : '▼'} {change}
        </div>
      </div>
      <div className="stat-card-chart">
        <Chart
          chartType="LineChart"
          data={data}
          options={options}
          width="100%"
          height="100px"
        />
      </div>
    </div>
  );
};

export default StatCard;
