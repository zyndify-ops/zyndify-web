import React, { useState } from 'react'
import { FaBell, FaUserCircle, FaSearch, FaCog } from 'react-icons/fa'
import '../styles/layout.css'

const TopHeader: React.FC = () => {
  const [searchFocused, setSearchFocused] = useState(false)

  return (
    <div className="top-header">
      <div className="header-brand">
        <h4>Zyndify</h4>
      </div>
      
      <div className={`search-container ${searchFocused ? 'focused' : ''}`}>
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search..."
          onFocus={() => setSearchFocused(true)}
          onBlur={() => setSearchFocused(false)}
        />
      </div>

      <div className="header-actions">
        <div className="action-icon">
          <FaBell />
          <span className="notification-badge">3</span>
        </div>
        <div className="action-icon">
          <FaCog />
        </div>
        <div className="user-profile">
          <FaUserCircle />
          <span>John Doe</span>
        </div>
      </div>
    </div>
  )
}

export default TopHeader
