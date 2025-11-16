import React from 'react';
import Navbar from './Navbar';
import { Outlet, Navigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import './AppLayout.css';
function AppLayout() {
  const [collapsed, setCollapsed] = React.useState(false);
  const [toggled, setToggled] = React.useState(false);
  const handleToggleSidebar = () => {
    setToggled(!toggled);
  }
  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  }
  const token = localStorage.getItem('token');
  if (!token) {
    return <Navigate to="/" replace />;
  }
  return (
    <div className='app-layout'>
      <Sidebar
        collapsed={collapsed}
        image={true}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
        handleCollapsedChange={handleCollapsedChange}
      />
      <div className='content-area'>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <Outlet />     
    </div>
      </div>
  </div>
  );
}

export default AppLayout;