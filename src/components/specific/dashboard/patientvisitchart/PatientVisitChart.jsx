import React, { useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import './style.css';

const dataMonthly = [
  { name: 'Jan', visits: 120 },
  { name: 'Feb', visits: 180 },
  { name: 'Mar', visits: 80 },
  { name: 'Apr', visits: 60 },
  { name: 'May', visits: 90 },
  { name: 'Jun', visits: 130 },
  { name: 'Jul', visits: 100 },
  { name: 'Aug', visits: 160 },
  { name: 'Sep', visits: 70 },
  { name: 'Oct', visits: 110 },
  { name: 'Nov', visits: 190 },
  { name: 'Dec', visits: 150 },
];

const dataDaily = [
  { name: '01', visits: 20 },
  { name: '02', visits: 30 },
  { name: '03', visits: 10 },
  // Add more data for days...
];

const PatientVisitChart = () => {
  const [timeScale, setTimeScale] = useState('Monthly');
  const [data, setData] = useState(dataMonthly);

  const handleTimeScaleChange = (e) => {
    const scale = e.target.value;
    setTimeScale(scale);
    if (scale === 'Monthly') {
      setData(dataMonthly);
    } else if (scale === 'Daily') {
      setData(dataDaily);
    }
    // Add more scales as needed
  };

  return (
    <div className="patient-visit-chart-container">
      <div className="patient-visit-chart-header">
        <h3 className="patient-visit-chart-title">Patient Visit</h3>
        <select
          value={timeScale}
          onChange={handleTimeScaleChange}
          className="patient-visit-chart-select"
        >
          <option value="Monthly">Monthly</option>
          <option value="Daily">Daily</option>
          {/* Add more options for different scales */}
        </select>
      </div>
      <div className="patient-visit-chart">
        <ResponsiveContainer className="patient-visit-responsive-container">
          <LineChart
            data={data}
            margin={{
              top: 5, right: 30, left: 20, bottom: 5,
            }}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis axisLine={false}  tickMargin={10} padding={10}/>
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="visits" stroke="#3371EB" activeDot={{ r: 10 }} strokeWidth={4} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PatientVisitChart;
