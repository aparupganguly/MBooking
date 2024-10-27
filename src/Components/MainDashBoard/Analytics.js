import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import "../../Styles/Analytics.css";
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="tooltip-date">{label}</p>
        <p className="tooltip-price">${payload[0].value.toFixed(2)}</p>
      </div>
    );
  }
  return null;
};

const CustomizedActiveDot = ({ cx, cy }) => (
  <>
    <rect
      x={cx - 30}
      y={0}
      width="60"
      height="400"
      fill="#e8f0fe"
      className="hover-bar"
    />
    <circle cx={cx} cy={cy} r={4} fill="#0066ff" stroke="white" strokeWidth={2} />
  </>
);

const EventsAnalytics = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('Monthly');

  const data = [
    { name: 'Jan', offline: 20, online: 35, price: 45000 },
    { name: 'Feb', offline: 25, online: 32, price: 48000 },
    { name: 'Mar', offline: 55, online: 45, price: 52000 },
    { name: 'Apr', offline: 45, online: 65, price: 59492.10 },
    { name: 'May', offline: 40, online: 62, price: 57000 },
    { name: 'Jun', offline: 42, online: 58, price: 55000 },
    { name: 'Jul', offline: 65, online: 48, price: 58000 },
  ];

  const CircularProgress = () => (
    <div className="earnings-circle">
      <svg viewBox="0 0 200 200">
        <circle
          cx="100"
          cy="100"
          r="80"
          fill="none"
          stroke="#f0f0f0"
          strokeWidth="20"
        />
        <circle
          cx="100"
          cy="100"
          r="80"
          fill="none"
          stroke="#0066ff"
          strokeWidth="20"
          strokeDasharray="502"
          strokeDashoffset="100"
          className="circle-trade animate"
        />
        <circle
          cx="100"
          cy="100"
          r="80"
          fill="none"
          stroke="#ff9933"
          strokeWidth="20"
          strokeDasharray="502"
          strokeDashoffset="200"
          className="circle-online animate"
        />
        <circle
          cx="100"
          cy="100"
          r="80"
          fill="none"
          stroke="#33cc33"
          strokeWidth="20"
          strokeDasharray="502"
          strokeDashoffset="300"
          className="circle-offline animate"
        />
      </svg>
      <div className="legend">
        <div className="legend-item">
          <span className="dot offline"></span>
          <span>Offline</span>
        </div>
        <div className="legend-item">
          <span className="dot online"></span>
          <span>Online</span>
        </div>
        <div className="legend-item">
          <span className="dot trade"></span>
          <span>Trade</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="analytics-container">
      <div className="chart-section">
        <div className="header">
          <h2>Events Analytics</h2>
          <div className="controls">
            <div className="legend-container">
              <span className="legend-dot offline"></span>
              <span>Offline orders</span>
              <span className="legend-dot online"></span>
              <span>Online orders</span>
            </div>
            <div className="period-selector">
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
              >
                <option>Monthly</option>
                <option>Weekly</option>
                <option>Daily</option>
              </select>
            </div>
            <button className="more-options">•••</button>
          </div>
        </div>
        <div className="selected-value">
          <div className="date">15 Aug 2022</div>
          <div className="amount">$59,492.10</div>
        </div>
        <div className="chart-container">
          <LineChart
            width={800}
            height={300}
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#f0f0f0"
            />
            <XAxis
              dataKey="name"
              stroke="#666"
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              stroke="#666"
              axisLine={false}
              tickLine={false}
              tickCount={6}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={false}
            />
            <Line
              type="monotone"
              dataKey="offline"
              stroke="#0066ff"
              strokeWidth={2}
              dot={false}
              activeDot={<CustomizedActiveDot />}
              className="animate-line"
            />
            <Line
              type="monotone"
              dataKey="online"
              stroke="#ff9933"
              strokeWidth={2}
              dot={false}
              activeDot={<CustomizedActiveDot />}
              className="animate-line"
            />
          </LineChart>
        </div>
      </div>
      <div className="earnings-section">
        <h2>Earnings</h2>
        <CircularProgress />
      </div>
    </div>
  );
};

export default EventsAnalytics;