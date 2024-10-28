import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Users, Briefcase, List, Settings, ShoppingBag } from 'lucide-react';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as ArrowDown } from "../../Assets/NavBar/arrow-up.svg"; // Adjust the path accordingly
import { ReactComponent as ArrowUp } from "../../Assets/NavBar/arrow-down.svg"; // Adjust the path accordingly
import '../../Styles/Sidebar.css';
import { gsap } from 'gsap';

const SidebarComp = () => {
  const [activeMenu, setActiveMenu] = useState('overview');
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  const handleMouseEnter = (e) => {
    if (activeMenu !== e.currentTarget.getAttribute('menu-item')) {
      gsap.to(e.currentTarget, { scale: 0.95, duration: 0.2 });
    }
  };

  const handleMouseLeave = (e) => {
    if (activeMenu !== e.currentTarget.getAttribute('menu-item')) {
      gsap.to(e.currentTarget, { scale: 1, duration: 0.2 });
    }
  };

  return (
    <div className="custom-sidebar">
      <div className="line" />
      <div className="menu-items">
        <div
          className={`menu-item ${activeMenu === 'overview' ? 'active' : ''}`}
          onClick={() => handleMenuClick('overview')}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          data-menu="overview"
        >
          <FontAwesomeIcon icon={faChartSimple} />
          <span className="sideText">Overview</span>
        </div>

        <div
          className={`menu-item ${activeMenu === 'product' ? 'active' : ''}`}
          onClick={() => handleMenuClick('product')}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          data-menu="product"
        >
          <Briefcase />
          <span className="sideText">Product</span>
          <span className="chevron">{openSubmenu === 'product' ? <ArrowDown /> : <ArrowUp />}</span>
        </div>
        {openSubmenu === 'product' && (
          <div className="submenu">
            <div className="submenu-item" onClick={() => setActiveMenu('addProduct')}>
              Add Product
            </div>
            <div className="submenu-item" onClick={() => setActiveMenu('viewProducts')}>
              View Products
            </div>
          </div>
        )}

        <div
          className={`menu-item ${activeMenu === 'orders' ? 'active' : ''}`}
          onClick={() => handleMenuClick('orders')}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          data-menu="orders"
        >
          <List />
          <span className="sideText">Orders</span>
          <span className="chevron">{openSubmenu === 'orders' ? <ArrowDown /> : <ArrowUp />}</span>
        </div>
        {openSubmenu === 'orders' && (
          <div className="submenu">
            <div className="submenu-item" onClick={() => setActiveMenu('pendingOrders')}>
              Pending Orders
            </div>
            <div className="submenu-item" onClick={() => setActiveMenu('completedOrders')}>
              Completed Orders
            </div>
          </div>
        )}

        <div
          className={`menu-item ${activeMenu === 'checkout' ? 'active' : ''}`}
          onClick={() => handleMenuClick('checkout')}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          data-menu="checkout"
        >
          <ShoppingBag />
          <span className="sideText">Checkout</span>
        </div>

        <div
          className={`menu-item ${activeMenu === 'settings' ? 'active' : ''}`}
          onClick={() => handleMenuClick('settings')}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          data-menu="settings"
        >
          <Settings />
          <span className="sideText">Settings</span>
        </div>
      </div>
    </div>
  );
};

export default SidebarComp;
