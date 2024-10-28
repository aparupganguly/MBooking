import React, { useEffect } from 'react';
import { Users, BriefcaseBusiness, CircleCheckBig, Heart } from 'lucide-react';
import gsap from 'gsap'; // Import GSAP
import "../../Styles/NumericStats.css";

const MetricsCard = ({ icon: Icon, title, value, subValue, change, isPositive }) => {
  return (
    <div className="metric-card">
      <div className="card-header">
        <p className="metric-value">{value}</p>

        <Icon className="card-icon" size={20} />
      </div>
      <h3 className="card-title">{title}</h3>

      <div className="metric-stats">
        <span className={`stat-value ${isPositive ? 'positive' : 'negative'}`}>
          {isPositive ? '↗' : '↙'} {subValue}
        </span>
        <span className="stat-change">{change}</span>
      </div>
    </div>
  );
};

const NumericStats = () => {
  useEffect(() => {
    const metricValues = document.querySelectorAll('.metric-value');

    metricValues.forEach((value) => {
      value.addEventListener('mouseenter', () => {
        gsap.to(value, { scale: 1.1, color: "#0066ff", duration: 0.3 });
      });

      value.addEventListener('mouseleave', () => {
        gsap.to(value, { scale: 1, color: "#000", duration: 0.3 }); // Change back to original color
      });
    });

    // Cleanup event listeners on component unmount
    return () => {
      metricValues.forEach((value) => {
        value.removeEventListener('mouseenter', () => { });
        value.removeEventListener('mouseleave', () => { });
      });
    };
  }, []);

  const metrics = [
    {
      icon: Users,
      value: "9,935",
      title: "Total users",
      subValue: "10.2",
      change: "+1.01% this week",
      isPositive: true
    },
    {
      icon: BriefcaseBusiness,
      title: "Venitul total",
      value: "52.439$",
      subValue: "3.1",
      change: "+0.49% this week",
      isPositive: true
    },
    {
      icon: CircleCheckBig,
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
