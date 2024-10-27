import React from 'react';
import { Users, DollarSign, Ticket, Heart } from 'lucide-react';
import "../../Styles/NumericStats.css";
const MetricsCard = ({ icon: Icon, title, value, subValue, change, isPositive }) => {
  return (
    <div className="metric-card">
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
        <Icon className="card-icon" size={20} />
      </div>
      <p className="metric-value">{value}</p>
      <div className="metric-stats">
        <span className={`stat-value ${isPositive ? 'positive' : 'negative'}`}>
          {isPositive ? '↑' : '↓'} {subValue}
        </span>
        <span className="stat-change">{change}</span>
      </div>
    </div>
  );
};

const NumericStats = () => {
  const metrics = [
    {
      icon: Users,
      title: "Total users",
      value: "9,935",
      subValue: "10.2",
      change: "+1.01% this week",
      isPositive: true
    },
    {
      icon: DollarSign,
      title: "Venitul total",
      value: "52.439$",
      subValue: "3.1",
      change: "+0.49% this week",
      isPositive: true
    },
    {
      icon: Ticket,
      title: "Bilete Vandute",
      value: "26,827",
      subValue: "2.56",
      change: "-0.91% this week",
      isPositive: false
    },
    {
      icon: Heart,
      title: "Favorite",
      value: "124,854",
      subValue: "7.2",
      change: "+1.51% this week",
      isPositive: true
    }
  ];

  return (
    <div className="metrics-container">
      {metrics.map((metric, index) => (
        <MetricsCard key={index} {...metric} />
      ))}
    </div>
  );
};

export default NumericStats;