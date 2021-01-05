import React from 'react';
import { Menu } from 'antd';

function Navbar() {
  return (
    <>
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
      </Menu>
    </>
  );
}

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
