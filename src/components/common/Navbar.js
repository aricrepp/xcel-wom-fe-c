import React from 'react';
import { Menu } from 'antd';
import { useHistory } from 'react-router-dom';
import xcel from '../assets/xcel.png';
import { Layout } from 'antd';
const { Header } = Layout;

function Navbar() {
  const history = useHistory();

  const handlePush = () => {
    history.push('/login');
  };

  return (
    <Header style={headerStyle}>
      <div style={logo}>
        <img alt="Xcel WO" width="150px" src={xcel} />
      </div>
      <Menu
        style={menuStyle}
        width="200px"
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
      >
        <Menu.Item style={itemStyle} key="1">
          Home
        </Menu.Item>
        <Menu.Item style={itemStyle} key="2">
          About Us
        </Menu.Item>
        <Menu.Item style={itemStyle} key="3">
          Contact Us
        </Menu.Item>
        <Menu.Item style={itemStyle} key="4" onClick={handlePush}>
          Login
        </Menu.Item>
      </Menu>
    </Header>
  );
}

let headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '15px 0',
  background: 'white',
  height: '150px',
};

let logo = {
  display: 'flex',
  justifyContent: 'flex-start',
  marginLeft: '4%',
};

let menuStyle = {
  width: '60%',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  padding: '0 auto',
  height: '40px',
  background: 'none',
};

let itemStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '33.33%',
  fontSize: '20px',
  color: 'black',
  fontWeight: '600',
  boxSizing: 'border-box',
};

export default Navbar;
