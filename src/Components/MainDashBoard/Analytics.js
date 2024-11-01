import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid, ResponsiveContainer
} from "recharts";
import "../../Styles/Analytics.css";
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className='custom-tooltip'>
        <p className='tooltip-date'>{label}</p>
        <p className='tooltip-price'>${payload[0].value.toFixed(2)}</p>
      </div>
    );
  }
  return null;
};

const CustomizedActiveDot = ({ cx, cy, cz }) => (
  <>
    <rect
      x={cx - 30}
      y={0}
      width='60'
      height='400'
      fill='#e8f0fe'
      className='hover-bar'
    />
    <circle
      cx={cx}
      cy={cy}
      r={4}
      fill='#0066ff'
      stroke='white'
      strokeWidth={4}
    />
  </>
);

const EventsAnalytics = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("Monthly");

  const data = [
    { name: "Jan", offline: 220, online: 335, price: 2000 },
    { name: "Feb", offline: 125, online: 332, price: 2000 },
    { name: "Mar", offline: 255, online: 425, price: 2200 },
    { name: "Apr", offline: 145, online: 165, price: 924 },
    { name: "May", offline: 240, online: 622, price: 700 },
    { name: "Jun", offline: 342, online: 528, price: 560 },
    { name: "Jul", offline: 645, online: 728, price: 270 },
    { name: "Aug", offline: 242, online: 528, price: 550 },
    { name: "Sep", offline: 165, online: 418, price: 560 },
    { name: "Oct", offline: 625, online: 1000, price: 850 },
    { name: "Nov", offline: 165, online: 1248, price: 1250 },
    { name: "Dec", offline: 165, online: 148, price: 2180 },
  ];
  const totalPrice = data.reduce(
    (accumulator, current) => accumulator + current.price,
    0,
  );
  const CircularProgress = () => (
    <div className='earnings-circle'>
      <svg viewBox='0 0 200 200'>
        <defs>
          {/* Gradient for the blue circle */}
          <linearGradient id='blueGradient' x1='0%' y1='0%' x2='100%' y2='100%'>
            <stop
              offset='29.91%'
              style={{ stopColor: "#0041E3", stopOpacity: 1 }}
            />
            <stop
              offset='90%'
              style={{ stopColor: "#E6EEFF", stopOpacity: 1 }}
            />
          </linearGradient>

          {/* Gradient for the orange circle */}
          <linearGradient
            id='orangeGradient'
            x1='0%'
            y1='0%'
            x2='100%'
            y2='100%'>
            <stop
              offset='29.91%'
              style={{ stopColor: "#ff9933", stopOpacity: 1 }}
            />
            <stop
              offset='73.04%'
              style={{ stopColor: "#fff6e6", stopOpacity: 1 }}
            />
          </linearGradient>

          {/* Gradient for the green circle */}
          <linearGradient
            id='greenGradient'
            x1='0%'
            y1='0%'
            x2='100%'
            y2='100%'>
            <stop
              offset='23.91%'
              style={{ stopColor: "#33cc33", stopOpacity: 1 }}
            />
            <stop
              offset='70.04%'
              style={{ stopColor: "#ccffcc", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>

        {/* Outer Circle */}
        <circle
          cx='100'
          cy='100'
          r='90'
          fill='none'
          stroke='#f0f0f0'
          strokeWidth='10'
          strokeLinecap='round'
        />

        {/* Animated Blue Circle with Gradient */}
        <circle
          cx='100'
          cy='100'
          r='90'
          fill='none'
          stroke='url(#blueGradient)' 
          strokeWidth='10'
          strokeDasharray='502'
          strokeDashoffset='100' 
          className='circle-trade animate'
          strokeLinecap='round'
        />

        {/* Animated Orange Circle with Gradient */}
        <circle
          cx='100'
          cy='100'
          r='60'
          fill='none'
          stroke='url(#orangeGradient)' 
          strokeWidth='10'
          strokeDasharray='502'
          strokeDashoffset='100' 
          className='circle-online animate'
          strokeLinecap='round'
        />

        {/* Animated Green Circle with Gradient */}
        <circle
          cx='100'
          cy='100'
          r='40'
          fill='none'
          stroke='url(#greenGradient)' 
          strokeWidth='10'
          strokeDasharray='502'
          strokeDashoffset='200' 
          className='circle-offline animate'
          strokeLinecap='round'
        />
      </svg>
      <div className='legend'>
        <div className='legend-item'>
          <span className='dot offline'></span>
          <span>Offline</span>
        </div>
        <div className='legend-item'>
          <span className='dot online'></span>
          <span>Online</span>
        </div>
        <div className='legend-item'>
          <span className='dot trade'></span>
          <span>Trade</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className='analytics-container'>
      <div className='chart-section'>
        <div className='header'>
          <h2>Events Analytics</h2>
          <div className='controls'>
            <div className='legend-container'>
              <span className='legend-dot offline'></span>
              <span>Offline orders</span>
              <span className='legend-dot online'></span>
              <span>Online orders</span>
            </div>
            <div className='period-selector'>
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}>
                <option>Monthly</option>
                <option>Weekly</option>
                <option>Daily</option>
              </select>
            </div>
          </div>
        </div>
        <div className='selected-value'>
          <div className='date'>15 Aug 2022</div>
          <div className='amount'> ${totalPrice}</div>
        </div>
        <div className='chart-container'>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid vertical={false} />
              <XAxis dataKey='name' stroke='#666' axisLine={false} tickLine={false} />
              <YAxis stroke='#666' axisLine={false} tickLine={false} tickCount={6} />
              <Tooltip content={<CustomTooltip />} cursor={false} />
              <Line
                type='monotone'
                dataKey='price'
                stroke='#0066ff'
                strokeWidth={2}
                dot={false}
                activeDot={<CustomizedActiveDot />}
                className='animate-line'
              />
              <Line
                type='monotone'
                dataKey='online'
                stroke='#ff9933'
                strokeWidth={2}
                dot={false}
                activeDot={<CustomizedActiveDot />}
                className='animate-line'
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className='earnings-section'>
        <div className='earningsHeader'>
          <h2>Earnings</h2>
          <button className='more-options'>•••</button>
        </div>
        <CircularProgress />
      </div>
    </div>
  );
};

export default EventsAnalytics;
