import React, { useState } from 'react';
import SubMenu from './SubMenu';

const Menu = ({ data }) => {
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const [openSubMenus, setOpenSubMenus] = useState([]);

  const handleMenuItemClick = (id) => {
    const updatedOpenSubMenus = openSubMenus.includes(id)
      ? openSubMenus.filter((menuId) => menuId !== id)
      : [...openSubMenus, id];

    setOpenSubMenus(updatedOpenSubMenus);
    setActiveMenuItem(id);
  };

  return (
    <div style={{ background: data.configColor.background }} className='nav'>
      <SubMenu
        menuItems={data.menuItems}
        idFirstNivel={data.idFirstNivel}
        activeMenuItem={activeMenuItem}
        openSubMenus={openSubMenus}
        handleMenuItemClick={handleMenuItemClick}
        data={data} // Pasa data como propiedad a SubMenu
      />
    </div>
  );
};

export default Menu;
