/*!

=========================================================
* Paper Dashboard React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "reactstrap";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

import logo from "logo.svg";
import { menuItems } from '../Menu/MenuItems.js';
import { statePool } from "variables/statePool.js";

var ps;

function Sidebar(props) {
  const sidebar = React.useRef();
  const [menu, setMenu] = React.useState(statePool);
  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(sidebar.current, {
        suppressScrollX: true,
        suppressScrollY: false
      });
    }
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
    };
  });

  const sidebarMenu = (name) => {
    setMenu({ ...menu, sidebarMenu: name }); // update selectedMenu di dalam state-pool
    statePool.sidebarMenu = name;
  };

  const getMenuType = () => {
    // let menuType = "";
    // menuItems.map((prop, key) => {
    //   if (prop.submenu) {
    //     prop.submenu.map((child, keyChild) => {
    //       if (child.submenu) {
    //         child.submenu.map((child2, keyChild2) => {
    //           if (window.location.href.indexOf("admin/" + child2.url) !== -1) {
    //             menuType = child2.url;
    //             return menuType;
    //           }
    //           return null;
    //         });
    //       }

    //       if (window.location.href.indexOf("admin/" + child.url) !== -1) {
    //         menuType = child.url;
    //         return menuType;
    //       }
    //       return null;
    //     });
    //   }
    //   if (window.location.href.indexOf("admin/" + prop.url) !== -1) {
    //     menuType = prop.url;
    //     return menuType;
    //   }
    //   return null;
    // });
    
    return window.location.href;
  };

  return (
    <div
      className="sidebar"
      data-color={props.bgColor}
      data-active-color={props.activeColor}
    >
      <div className="logo">
        <a
          href="https://www.creative-tim.com"
          className="simple-text logo-mini"
        >
          <div className="logo-img">
            <img src={logo} alt="react-logo" />
          </div>
        </a>
        <a
          href="https://www.creative-tim.com"
          className="simple-text logo-normal"
        >
          Creative Tim
        </a>
      </div>
      <div className="sidebar-wrapper" ref={sidebar}>
        <Nav>
          {props.routes.map((prop, key) => {
            return (
              <li
                className={
                  activeRoute(prop.path) + (prop.pro ? " active-pro" : "")
                }
                key={key}
                data-toggle={prop.childItems ? "collapse" : ""}
              >
                <NavLink
                  to={prop.childItems ? "#" : prop.layout + prop.path}
                  className="nav-link"
                  activeClassName="active"
                  onClick={prop.childItems ? () => {toggleDropdown(); sidebarMenu('with-child')} : () => sidebarMenu('without-child')}
                >
                  <i className={prop.icon} />
                  <p>{prop.name}
                  {prop.childItems && (
                    <b>{isDropdownOpen ? "▼" : "▲"}</b>
                  )}
                  </p>
                </NavLink>
                  {prop.childItems && isDropdownOpen && (
                    <div className="collapse show">
                  <ul className="nav">
                    {prop.childItems.map((childItem, childIndex) => (
                      <li 
                        key={childIndex} 
                        className={
                          activeRoute(childItem.path) + (childItem.pro ? " active-pro" : "")
                        }>
                         <NavLink
                            to={childItem.layout + childItem.path}
                            activeClassName="active"
                            onClick={() => sidebarMenu('without-child')}
                          >
                            <span className="sidebar-mini-icon">{childItem.icon}</span>
                            <span className="sidebar-normal">{childItem.name}</span>
                          </NavLink>
                      </li>
                    ))}
                  </ul>
                  </div>
                  )}
              </li>
            );
          })}
        </Nav>
      </div>
    </div>
  );
}

export default Sidebar;
