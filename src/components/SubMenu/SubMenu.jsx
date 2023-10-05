import React from "react";
import "./SubMenu.css";

function SubMenu({ menuItems, idFirstNivel, activeMenuItem, openSubMenus, handleMenuItemClick, data }) {
  const renderMenuItem = (menuItem) => {
    const isActive = activeMenuItem === menuItem.id;
    const itemStyle = {
      background: isActive ? data.configColor.itemActive : data.configColor.itemBackground,
      color: data.configColor.itemColor,
      padding: 10,
      cursor: "pointer",
    };

    const nivel1Items = menuItems.filter(
      (item) => item.idPadre === null || item.idPadre === idFirstNivel
    );
    const nivel2Items = menuItems.filter((item) => {
      return nivel1Items.some((nivel1Item) => nivel1Item.id === item.idPadre);
    });
    const nivel3Items = menuItems.filter((item) => {
      return nivel2Items.some((nivel2Item) => nivel2Item.id === item.idPadre);
    });
    let itemClassName = "";
    if (nivel1Items.includes(menuItem)) {
      itemClassName = "nivel1Item";
    } else if (nivel2Items.includes(menuItem)) {
      itemClassName = "nivel2Item";
    } else if (nivel3Items.includes(menuItem)) {
      itemClassName = "nivel3Item";
    }

    const arrow = menuItem.isFolder ? (
      openSubMenus.includes(menuItem.id) ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="arrowRight"
          viewBox="0 0 16 16"
        >
          <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          className="arrowDown"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
        </svg>
      )
    ) : null;

    return (
      <a
        href="/#"
        key={menuItem.id}
        style={itemStyle}
        className={itemClassName}
        onClick={() => handleMenuItemClick(menuItem.id)}
      >
        <p>
          {menuItem.name}
          <span className="flecha">{arrow}</span>
        </p>
      </a>
    );
  };

  const renderSubMenu = (menuItems, parentId) => {
    return (
      <ul>
        {menuItems
          .filter((item) => item.idPadre === parentId)
          .map((item) => (
            <div key={item.id}>
              {renderMenuItem(item)}
              {item.isFolder &&
                openSubMenus.includes(item.id) &&
                renderSubMenu(menuItems, item.id)}
            </div>
          ))}
      </ul>
    );
  };

  return <div>{renderSubMenu(menuItems, idFirstNivel)}</div>;
}

export default SubMenu;
