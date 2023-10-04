import React from 'react'

function Submenu({ submenuItems, configColor }) {
  return (
    <ul style={{ marginLeft: '20px' }}>
      {submenuItems.map((subMenuItem) => (
        <li
          key={subMenuItem.id}
          style={{
            background: configColor.itemBackground,
            color: configColor.itemColor
          }}
        >
          {subMenuItem.name}
        </li>
      ))}
    </ul>
  )
}

export default Submenu
