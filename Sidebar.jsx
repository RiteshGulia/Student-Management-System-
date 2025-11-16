import { Link, useNavigate} from 'react-router-dom';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import {
  FaUser, FaAngleDoubleLeft, FaAngleDoubleRight, FaTachometerAlt, FaGem, FaSignOutAlt
} from 'react-icons/fa';
import './Sidebar.css';
const MySidebar = ({
  collapsed,
  toggled,
  handleToggleSidebar,
  handleCollapsedChange
}) => {
     const navigate = useNavigate(); 
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/'); 
  };
  return (
    <Sidebar
      collapsed={collapsed}
      toggled={toggled}
      onToggle={handleToggleSidebar}
      breakPoint="md"
      backgroundColor="#063689ff"
      style={{ minHeight: "100vh" }}
    >
      <div style={{ padding: "1rem", textAlign: "center", color: "#fff", fontWeight: 'bold', background: '#063689ff' }}>
        
        {collapsed ? (
          <FaAngleDoubleRight onClick={handleCollapsedChange} style={{ cursor: "pointer" }} />
        ) : (
          <>
            <span>Management</span>
            <FaAngleDoubleLeft onClick={handleCollapsedChange} style={{ marginLeft: 10, cursor: "pointer" }} />
          </>
        )}
      </div>
      
      <Menu className='dash' iconShape="circle">
        <MenuItem icon={<FaTachometerAlt />}>
        <Link to="/app/dashboard"> Dashboard </Link>
        </MenuItem>
        <SubMenu label="Components" icon={<FaGem />}>
          <MenuItem className='component'> Student Details </MenuItem>
          <MenuItem className='component'> <Link to="/app/studentForm"> Students Form </Link> </MenuItem>
          <MenuItem className='component'> Teacher Details </MenuItem>
          <MenuItem className='component'><Link to="/app/teacherForm"> Teacher Form </Link></MenuItem>
          <MenuItem className='component'> Course Details </MenuItem>
        </SubMenu>
        <MenuItem icon={<FaUser />}>
          My Account <Link to="/account" />
        </MenuItem>
        <MenuItem 
          icon={<FaSignOutAlt />} 
          onClick={handleLogout} 
          className="logout-btn-style"
          style={{ marginTop: '30px' }} 
        >
          Logout
        </MenuItem>
      </Menu>
      <div style={{ marginTop: 'auto', padding: '1rem', color: "#fff", background: '#063a93ff' }}>
        <span style={{ fontSize: 13 }}>© 2025 StudentMS (Ritesh Gulia)</span>
      </div>
    </Sidebar>
  );
};

export default MySidebar;