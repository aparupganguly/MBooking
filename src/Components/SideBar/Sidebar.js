import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCog, faChartSimple, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import '../../Styles/Sidebar.css';

const SidebarComp = () => {
  const [activeMenu, setActiveMenu] = useState('overview'); // Track active menu item
  const [openSubmenu, setOpenSubmenu] = useState(null); // Track which submenu is open

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    if (menu === openSubmenu) {
      setOpenSubmenu(null); // Close the submenu if it's already open
    } else {
      setOpenSubmenu(menu); // Open the clicked submenu
    }
  };

  return (
    <div className="custom-sidebar">
      <div
        className="menu-item"
        onClick={() => handleMenuClick('overview')}
        style={{ color: activeMenu === 'overview' ? '#4F55F1' : 'gray' }}
      >
        <FontAwesomeIcon icon={faChartSimple} style={{ color: activeMenu === 'overview' ? '#4F55F1' : 'gray' }} />
        <span className="sideText">Overview</span>
      </div>
      <div
        className="menu-item"
        onClick={() => handleMenuClick('product')}
        style={{ color: activeMenu === 'product' ? '#4F55F1' : 'gray' }}
      >
        <FontAwesomeIcon icon={faUser} style={{ color: activeMenu === 'product' ? '#4F55F1' : 'gray' }} />
        <span className="sideText">Product</span>
        <FontAwesomeIcon
          icon={openSubmenu === 'product' ? faChevronUp : faChevronDown}
          style={{ marginLeft: 'auto', color: activeMenu === 'product' ? '#4F55F1' : 'gray' }}
        />
      </div>
      <div
        className={`submenu ${openSubmenu === 'product' ? 'open' : ''}`} // Add 'open' class for CSS transition
      >
        <div
          className="submenu-item"
          onClick={() => handleMenuClick('addProduct')}
          style={{ color: activeMenu === 'addProduct' ? '#4F55F1' : 'gray' }}
        >
          Add Product
        </div>
        <div
          className="submenu-item"
          onClick={() => handleMenuClick('viewProducts')}
          style={{ color: activeMenu === 'viewProducts' ? '#4F55F1' : 'gray' }}
        >
          View Products
        </div>
      </div>
      <div
        className="menu-item"
        onClick={() => handleMenuClick('orders')}
        style={{ color: activeMenu === 'orders' ? '#4F55F1' : 'gray' }}
      >
        <FontAwesomeIcon icon={faCog} style={{ color: activeMenu === 'orders' ? '#4F55F1' : 'gray' }} />
        <span className="sideText">Orders</span>
        <FontAwesomeIcon
          icon={openSubmenu === 'orders' ? faChevronUp : faChevronDown}
          style={{ marginLeft: 'auto', color: activeMenu === 'orders' ? '#4F55F1' : 'gray' }}
        />
      </div>
      <div
        className={`submenu ${openSubmenu === 'orders' ? 'open' : ''}`} // Add 'open' class for CSS transition
      >
        <div
          className="submenu-item"
          onClick={() => handleMenuClick('pendingOrders')}
          style={{ color: activeMenu === 'pendingOrders' ? '#4F55F1' : 'gray' }}
        >
          Pending Orders
        </div>
        <div
          className="submenu-item"
          onClick={() => handleMenuClick('completedOrders')}
          style={{ color: activeMenu === 'completedOrders' ? '#4F55F1' : 'gray' }}
        >
          Completed Orders
        </div>
      </div>
      <div
        className="menu-item"
        onClick={() => handleMenuClick('checkout')}
        style={{ color: activeMenu === 'checkout' ? '#4F55F1' : 'gray' }}
      >
        <FontAwesomeIcon icon={faCog} style={{ color: activeMenu === 'checkout' ? '#4F55F1' : 'gray' }} />
        <span className="sideText">Checkout</span>
      </div>
      <div
        className="menu-item"
        onClick={() => handleMenuClick('settings')}
        style={{ color: activeMenu === 'settings' ? '#4F55F1' : 'gray' }}
      >
        <FontAwesomeIcon icon={faCog} style={{ color: activeMenu === 'settings' ? '#4F55F1' : 'gray' }} />
        <span className="sideText">Settings</span>
      </div>
    </div>
  );
};

export default SidebarComp;
