import React, { type ReactNode, useState } from 'react'
import SideNav from '../components/SideNav'
import TopHeader from '../components/TopHeader'
import '../styles/layout.css'

interface MainLayoutProps {
  children: ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [minimized, setMinimized] = useState(false)

  return (
    <>
      <SideNav minimized={minimized} onToggleMinimize={() => setMinimized(!minimized)} />
      <TopHeader />
      <div className={`main-content ${minimized ? 'minimized' : ''}`}>
        {children}
      </div>
    </>
  )
}

export default MainLayout
