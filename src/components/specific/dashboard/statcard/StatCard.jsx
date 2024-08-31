import React from 'react'
import wallet from "../../../../assets/images/wallet.png"
import "./style.css"

const StatCard = ({name="Earnings",image1=wallet,value="$254523",change=453}) => {
  return (
    <div className='stat-card-container'>
      <div className="stat-card-container-image"><img src={image1} alt="" className='stat-card-image'/></div>
      <div className="stat-card-header">{name}</div>
      <div className="stat-card-content">
        <h2 className="stat-card-value">{value}</h2>
        <h3 className="stat-card-stats" style={{ color: change > 0 ? '#14CC26' : 'red' }}>{change > 0 ? '▲  + ' : '▼  - '}{change}</h3>
      </div>
    </div>
  )
}

export default StatCard
