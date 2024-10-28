import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCog, faChartSimple, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import '../../Styles/Sidebar.css';
import { gsap } from 'gsap';

const SidebarComp = () => {
  const [activeMenu, setActiveMenu] = useState('overview');
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    if (menu === openSubmenu) {
      setOpenSubmenu(null);
    } else {
      setOpenSubmenu(menu);
    }
  };

  const handleMouseEnter = (e) => {
    gsap.to(e.currentTarget, { scale: 1.05, duration: 0.2 });
  };

  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget, { scale: 1, duration: 0.2 });
  };

  return (
    <div className="custom-sidebar">
      <div className="line" />
      <div className="menu-items">
        {['overview', 'product', 'orders', 'checkout', 'settings'].map((item) => (
          <React.Fragment key={item}>
            <div
              className="menu-item"
              onClick={() => handleMenuClick(item)}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{ color: activeMenu === item ? '#4F55F1' : 'gray' }}
            >
              <FontAwesomeIcon
              className="fa-icon"
                icon={item === 'checkout' || item === 'settings' ? faCog : faChartSimple}
                style={{ color: activeMenu === item ? '#4F55F1' : 'gray' }}
              />
              <span className="sideText">{item.charAt(0).toUpperCase() + item.slice(1)}</span>
              {item === 'product' || item === 'orders' ? (
                <FontAwesomeIcon
                className="fa-icon"
                  icon={openSubmenu === item ? faChevronUp : faChevronDown}
                  style={{ marginLeft: 'auto', color: activeMenu === item ? '#4F55F1' : 'gray' }}
                />
              ) : null}
            </div>

            {openSubmenu === item && (item === 'product' || item === 'orders') && (
              <div className="submenu open">
                {item === 'product' && (
                  <>
                    <div className="submenu-item" onClick={() => handleMenuClick('addProduct')}>
                      Add Product
                    </div>
                    <div className="submenu-item" onClick={() => handleMenuClick('viewProducts')}>
                      View Products
                    </div>
                  </>
                )}
                {item === 'orders' && (
                  <>
                    <div className="submenu-item" onClick={() => handleMenuClick('pendingOrders')}>
                      Pending Orders
                    </div>
                    <div className="submenu-item" onClick={() => handleMenuClick('completedOrders')}>
                      Completed Orders
                    </div>
                  </>
                )}
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SidebarComp;
