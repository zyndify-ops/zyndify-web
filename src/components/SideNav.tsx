import React from 'react'
import { FaHome, FaUser, FaCog, FaBars } from 'react-icons/fa'
import { useLocation, Link } from 'react-router-dom'
import '../styles/layout.css'

interface SideNavProps {
  minimized: boolean;
  onToggleMinimize: () => void;
}

interface MenuItem {
  path: string;
  icon: React.ReactNode;
  label: string;
}

const menuItems: MenuItem[] = [
  { path: '/dashboard', icon: <FaHome />, label: 'Dashboard' },
  { path: '/profile', icon: <FaUser />, label: 'Profile' },
  { path: '/settings', icon: <FaCog />, label: 'Settings' }
];

const SideNav: React.FC<SideNavProps> = ({ minimized, onToggleMinimize }) => {
  const location = useLocation();

  return (
    <nav className={`side-nav ${minimized ? 'minimized' : ''}`}>
      <div className="side-nav-header">
        {!minimized && (
          <div className="logo">
            <span>Zyndify</span>
          </div>
        )}
        <button 
          className="hamburger-icon" 
          onClick={onToggleMinimize} 
          title={minimized ? 'Expand menu' : 'Collapse menu'}
        >
          <FaBars className={minimized ? 'rotate-180' : ''} />
        </button>
      </div>
      
      <ul>
        {menuItems.map((item) => (
          <li key={item.path} className={location.pathname === item.path ? 'active' : ''}>
            <Link to={item.path}>
              {item.icon}
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
} 

export default SideNav
