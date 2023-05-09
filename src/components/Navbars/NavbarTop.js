import { menuItems } from '../Menu/MenuItems.js';
import Menus from '../Menu/Menus.js';

const NavbarTop = (props) => {
  return (
    <nav>
      <ul className="menus">
        {menuItems.map((menu, index) => {
          const depthLevel = 0;
          return <Menus {...props} items={menu} key={index} depthLevel={depthLevel} selectedMenu={props.selectedMenu}
          onMenuSelect={props.setSelectedMenu} />;
        })}
      </ul>
    </nav>
  );
};

export default NavbarTop;