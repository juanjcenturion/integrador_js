import React, { Component } from 'react'
import Submenu from './SubMenu'

class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openSubmenuId: null
    }
  }

  toggleSubmenu = (id) => {
    this.setState((prevState) => ({
      openSubmenuId: prevState.openSubmenuId === id ? null : id
    }))
  }

  render() {
    const { data } = this.props
    const { openSubmenuId } = this.state

    return (
      <nav>
        <ul style={{ background: data.configColor.background }}>
          {data.menuItems.map((menuItem) => (
            <li key={menuItem.id}>
              {menuItem.isFolder ? (
                <div onClick={() => this.toggleSubmenu(menuItem.id)} style={{background: openSubmenuId === menuItem.id ? data.configColor.itemActive : data.configColor.itemBackground,color: data.configColor.itemColor}}>
                  {menuItem.name}
                </div>
                ) : (
                <div style={{background: data.configColor.background, color: data.configColor.itemColor}}>
                  {menuItem.name}
                </div>
              )}
              {menuItem.isFolder && openSubmenuId === menuItem.id && (
                <Submenu submenuItems={data.menuItems.filter((subMenuItem) => subMenuItem.idPadre === menuItem.id)} configColor={data.configColor}/>
              )}
            </li>
          ))}
        </ul>
      </nav>
    )
  }
}

export default Menu
