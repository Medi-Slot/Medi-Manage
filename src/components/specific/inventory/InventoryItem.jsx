import React from 'react'
import "./style.css"

const InventoryItem = ({name , icon}) => {
  return (
    <div className="inventory-item-container">
      <div className="inventory-item-icon">{icon}</div>
      <div className="inventory-item-name">{name}</div>
    </div>
  )
}

export default InventoryItem
