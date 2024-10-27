
// import React, { useState, useEffect } from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// import "../Styles/Test.css";cha
// const mockData = [
//   { month: 'Jan', offline: 20, online: 30 },
//   { month: 'Feb', offline: 35, online: 25 },
//   { month: 'Mar', offline: 45, online: 45 },
//   { month: 'Apr', offline: 40, online: 60 },
//   { month: 'May', offline: 45, online: 65 },
//   { month: 'Jun', offline: 40, online: 62 },
//   { month: 'Jul', offline: 60, online: 58 },
// ];

// const eventsList = [
//   { id: '#12594', date: 'Dec 1, 2025', name: 'SATOSHI - Sport Cluj', location: 'Romania, Cluj', amount: '$847.69', status: 'Active' },
//   { id: '#12490', date: 'Nov 15, 2025', name: 'Evenimente Sport', location: 'Moldova, Chisinau', amount: '$477.14', status: 'Finished' },
//   { id: '#12306', date: 'Nov 02, 2025', name: 'Conferinta 2025', location: 'Portugal, Lisbon', amount: '$477.14', status: 'On Delivery' },
// ];

// const Dashboard = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [hoveredRow, setHoveredRow] = useState(null);

//   useEffect(() => {
//     setTimeout(() => setIsLoading(false), 1000);
//   }, []);

//   if (isLoading) {
//     return <div className="loading-spinner"></div>;
//   }

//   return (
//     <div className="dashboard">
//       <header className="dashboard-header">
//         <div className="header-left">
//           <div className="logo">THEMYDA</div>
//           <div className="search-container">
//             <input type="text" placeholder="Search..." className="search-input" />
//             <span className="search-icon">🔍</span>
//           </div>
//         </div>
//         <div className="header-right">
//           <button className="btn btn-primary">Create</button>
//           <button className="btn">Discover</button>
//           <button className="btn">Favorites</button>
//           <span className="notification-icon">🔔</span>
//           <div className="profile-avatar"></div>
//         </div>
//       </header>

//       <main className="dashboard-main">
//         <div className="welcome-section">
//           <h1>Welcome, Marci</h1>
//           <p>Here is the information about all your events</p>
//         </div>

//         {/* Stats Grid */}
//         <div className="stats-grid">
//           {[{ label: 'Total users', value: '9,935', change: '+1.01% this week', up: true },
//           { label: 'Total Revenue', value: '$52,439', change: '+0.49% this week', up: true },
//           { label: 'Tickets Sold', value: '26,827', change: '-0.91% this week', up: false },
//           { label: 'Favorites', value: '124,854', change: '+1.51% this week', up: true }]
//             .map((stat, index) => (
//               <div key={index} className="stat-card">
//                 <div className="stat-value">{stat.value}</div>
//                 <div className="stat-label">{stat.label}</div>
//                 <div className={`stat-change ${stat.up ? 'positive' : 'negative'}`}>
//                   {stat.change}
//                 </div>
//               </div>
//             ))}
//         </div>

//         <div className="chart-section">
//           <div className="chart-header">
//             <h2>Events Analytics</h2>
//             <div className="chart-legend">
//               <div className="legend-item">
//                 <span className="legend-dot offline"></span>
//                 <span>Offline orders</span>
//               </div>
//               <div className="legend-item">
//                 <span className="legend-dot online"></span>
//                 <span>Online orders</span>
//               </div>
//               <button className="btn-dropdown">
//                 Monthly <span className="dropdown-arrow">▼</span>
//               </button>
//             </div>
//           </div>

//           <ResponsiveContainer width="100%" height={300}>
//             <LineChart data={mockData}>
//               <CartesianGrid strokeDasharray="3 3" vertical={false} />
//               <XAxis dataKey="month" />
//               <YAxis />
//               <Tooltip />
//               <Line type="monotone" dataKey="offline" stroke="#3B82F6" strokeWidth={2} />
//               <Line type="monotone" dataKey="online" stroke="#F97316" strokeWidth={2} />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Events List */}
//         <div className="events-section">
//           <div className="events-header">
//             <h2>Event List</h2>
//             <button className="btn-dropdown">
//               Monthly <span className="dropdown-arrow">▼</span>
//             </button>
//           </div>

//           <table className="events-table">
//             <thead>
//               <tr>
//                 <th>No</th>
//                 <th>ID</th>
//                 <th>Date</th>
//                 <th>Event Name</th>
//                 <th>Location</th>
//                 <th>Amount</th>
//                 <th>Status</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {eventsList.map((event, index) => (
//                 <tr
//                   key={event.id}
//                   className={hoveredRow === index ? 'hovered' : ''}
//                   onMouseEnter={() => setHoveredRow(index)}
//                   onMouseLeave={() => setHoveredRow(null)}
//                 >
//                   <td>{index + 1}</td>
//                   <td>{event.id}</td>
//                   <td>{event.date}</td>
//                   <td>{event.name}</td>
//                   <td>{event.location}</td>
//                   <td>{event.amount}</td>
//                   <td>
//                     <span className={`status-badge ${event.status.toLowerCase()}`}>
//                       {event.status}
//                     </span>
//                   </td>
//                   <td>
//                     <button className="action-btn">⋮</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Dashboard;
