import React from 'react';
import './SubMenu.css'

function SubMenu({ menuItems, idFirstNivel, activeMenuItem, openSubMenus, handleMenuItemClick, data }) {
  function renderMenuItem(menuItem) {
    const isActive = activeMenuItem === menuItem.id;
    const itemStyle = {
      background: isActive ? data.configColor.itemActive : data.configColor.itemBackground,
      color: data.configColor.itemColor,
      padding: 10,
      cursor: "pointer"
    };

    const arrow = menuItem.isFolder ? (openSubMenus.includes(menuItem.id) ? 'v' : '>') : null;

    const nivel1Items = menuItems.filter(item => item.idPadre === null || item.idPadre === idFirstNivel);
    const nivel2Items = menuItems.filter(item => {return nivel1Items.some(nivel1Item => nivel1Item.id === item.idPadre);});
    const nivel3Items = menuItems.filter(item => {return nivel2Items.some(nivel2Item => nivel2Item.id === item.idPadre);});
    let itemClassName = ''
    if (nivel1Items.includes(menuItem)) {
      itemClassName = 'nivel-1-item';
    } else if (nivel2Items.includes(menuItem)) {
      itemClassName = 'nivel-2-item';
    } else if (nivel3Items.includes(menuItem)) {
      itemClassName = 'nivel-3-item';
    }

    return (
      <a
        href='/#'
        key={menuItem.id}
        style={itemStyle}
        className={itemClassName}
        onClick={() => handleMenuItemClick(menuItem.id)}
      >
      <p>{menuItem.name} {arrow}</p>
      </a>
    );
  }

  function renderSubMenu(menuItems, parentId) {
    return (
      <ul>
        {menuItems
          .filter((item) => item.idPadre === parentId)
          .map((item) => (
            <div key={item.id}>
              {renderMenuItem(item)}
              {item.isFolder && openSubMenus.includes(item.id) && (
                
                renderSubMenu(menuItems, item.id)
              )}
            </div>
          ))}
      </ul>
    );
  }

  return (
    <div>
      {renderSubMenu(menuItems, idFirstNivel)}
    </div>
  );
}

export default SubMenu;