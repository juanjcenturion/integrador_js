import React, { useState } from "react";
import SubMenu from "../SubMenu/SubMenu";
import "./Menu.css";

function Menu({ data }) {
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const [openSubMenus, setOpenSubMenus] = useState([]);

  function handleMenuItemClick(id) {
    const updatedOpenSubMenus = openSubMenus.includes(id)
      ? openSubMenus.filter((menuId) => menuId !== id)
      : openSubMenus.concat(id);

    setOpenSubMenus(updatedOpenSubMenus);
    setActiveMenuItem(id);
  }

  return (
    <nav style={{ background: data.configColor.background }} className="nav">
      <ul className="menu-list">
        <SubMenu
          menuItems={data.menuItems}
          idFirstNivel={data.idFirstNivel}
          activeMenuItem={activeMenuItem}
          openSubMenus={openSubMenus}
          handleMenuItemClick={handleMenuItemClick}
          data={data}
        />
      </ul>
    </nav>
  );
}

export default Menu;
