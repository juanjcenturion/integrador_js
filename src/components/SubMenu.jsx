import React from 'react';

const SubMenu = ({ menuItems, idFirstNivel, activeMenuItem, openSubMenus, handleMenuItemClick, data }) => {
  const renderMenuItem = (menuItem) => {
    const isActive = activeMenuItem === menuItem.id;

    const itemStyle = {
      background: isActive ? data.configColor.itemActive : data.configColor.itemBackground,
      color: data.configColor.itemColor,
      padding: 10,
      cursor: "pointer"
    };

    const arrow = menuItem.isFolder ? (openSubMenus.includes(menuItem.id) ? 'v' : '>') : null;

    return (
      <div
        key={menuItem.id}
        style={itemStyle}
        className='itemstyle'
        onClick={() => handleMenuItemClick(menuItem.id)}
      >
        <p>{menuItem.name} {arrow}</p>
      </div>
    );
  };

  const renderSubMenu = (menuItems, parentId) => {
    return (
      <div className='menu-box'>
        {menuItems
          .filter((item) => item.idPadre === parentId)
          .map((item) => (
            <div key={item.id} className='submenu-item'>
              {renderMenuItem(item)}
              {item.isFolder && openSubMenus.includes(item.id) && (
                <div>
                  {renderSubMenu(menuItems, item.id)}
                </div>
              )}
            </div>
          ))}
      </div>
    );
  };

  return (
    <div>
      {renderSubMenu(menuItems, idFirstNivel)}
    </div>
  );
};

export default SubMenu;
