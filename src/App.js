import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import SidebarComp from './Components/SideBar/Sidebar';
import Heading from './Components/MainDashBoard/Heading';
import NumericStats from './Components/MainDashBoard/NumericStats';
import Analytics from './Components/MainDashBoard/Analytics';
import List from './Components/MainDashBoard/List';
import EventDetail from './Components/MainDashBoard/EventDetail';
import { ReactLenis } from "@studio-freight/react-lenis";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/event/:eventName" element={<EventDetail />} />
      </Routes>
    </Router>
  );
};

const MainLayout = () => {
  return (
    <>
      <ReactLenis root>
        <div className="app-container">
          <Navbar />
          <div className="main-container">
            <SidebarComp />
            <div className="content">
              <Heading />
              <NumericStats />
              <Analytics />
              <List />
            </div>
          </div>
        </div>
      </ReactLenis>
    </>

  );
};

export default App;
