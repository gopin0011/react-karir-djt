import { useState, useEffect, useRef } from "react";
import Dropdown from './Dropdown.js';
import { Link } from 'react-router-dom';
import { statePool } from "variables/statePool.js";

const Menus = (props) => { //{ items, depthLevel, selectedMenu, setSelectedMenu }) => {
  const [dropdown, setDropdown] = useState(false);
  const [menu, setMenu] = useState(statePool);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
   };
   
   const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
   };

   const closeDropdown = () => {
    dropdown && setDropdown(false);
   };

  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
     if (dropdown && ref.current && !ref.current.contains(event.target)) {
      setDropdown(false);
     }
    };
    
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
     // Cleanup the event listener
     document.removeEventListener("mousedown", handler);
     document.removeEventListener("touchstart", handler);
    };
   }, [dropdown]);

   function handleMenuSelect(name) {
    setMenu({ ...menu, selectedMenu: name }); // update selectedMenu di dalam state-pool
    statePool.selectedMenu = name;
    // console.log(statePool.selectedMenu);
  }

   return (
    <li
      className="menu-items"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={closeDropdown}
    >
      {props.items.url && props.items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {window.innerWidth < 960 && props.depthLevel === 0 ? (
              props.items.title
            ) : (
              <Link to={props.items.url} onClick={()=> handleMenuSelect(props.items.url)}>{props.items.title}</Link>
            )}

            {props.depthLevel > 0 &&
            window.innerWidth < 960 ? null : props.depthLevel > 0 &&
              window.innerWidth > 960 ? (
              <span>&raquo;</span>
            ) : (
              <span className="arrow" />
            )}
          </button>
          <Dropdown
            depthLevel={props.depthLevel}
            submenus={props.items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : !props.items.url && props.items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {props.items.title}{' '}
            {props.depthLevel > 0 ? (
              <span>&raquo;</span>
            ) : (
              <span className="arrow" />
            )}
          </button>
          <Dropdown
            depthLevel={props.depthLevel}
            submenus={props.items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : (
        <Link to={props.items.url} onClick={()=> handleMenuSelect(props.items.url)}>{props.items.title}</Link>
      )}
    </li>
  );
};

export default Menus;