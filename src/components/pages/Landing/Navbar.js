import React from 'react';
import { Menu } from 'antd';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useHistory,
} from 'react-router-dom';
import { Security } from '@okta/okta-react';
import { config } from '../../../utils/oktaConfig';
import { LoginPage } from '../Login';

function Navbar() {
  const history = useHistory();
  const authHandler = () => {
    // We pass this to our <Security /> component that wraps our routes.
    // It'll automatically check if userToken is available and push back to login if not :)
    history.push('/login');
  };

  return (
    <Router>
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
        <Menu.Item style={itemStyle} key="4">
          Login
          <Link to="/login" />
        </Menu.Item>
      </Menu>
      {/* <Security {...config} onAuthRequired={authHandler}>
      <Switch>
      </Switch>

      </Security> */}
    </Router>
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
