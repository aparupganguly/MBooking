import React from 'react';
import Test from './Components/Test';
import Navbar from './Components/Navbar/Navbar';
import SidebarComp from './Components/SideBar/Sidebar';
import Heading from './Components/MainDashBoard/Heading';
import Analytics from './Components/MainDashBoard/Analytics';
import NumericStats from './Components/MainDashBoard/NumericStats';
import Earnings from './Components/MainDashBoard/Earnings';
import List from './Components/MainDashBoard/List';

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-container">
        <SidebarComp />
        <div className="content">
          <Heading />
          <NumericStats />
          <Analytics />
          <Earnings />
          <List />
          {/* Render other components here, like <Test /> */}
        </div>
      </div>
    </div>
  );
};

export default App;
