import Menus from "./Menus.js";

const Dropdown = ({ submenus, dropdown, depthLevel }) => {
    depthLevel = depthLevel + 1;
    const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
    return (
      <ul className={`dropdown-custom ${dropdownClass} ${dropdown ? "show" : ""}`}>
        {submenus.map((submenu, index) => (
            <Menus items={submenu} key={index} depthLevel={depthLevel}  />
        ))}
      </ul>
    );
  };
  
export default Dropdown;