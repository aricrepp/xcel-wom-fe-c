import React from 'react';
//import { Link } from 'react-router-dom';
import { Button } from '../../common';

function RenderDashboard(props) {
  const { userInfo, authService } = props;
  return (
    <div>
      <h1>Hi {userInfo.name} Welcome to your Dashboard</h1>
      <div>
        <p>This is placeholder for the Dashboard</p>
        <p>
          <Button
            handleClick={() => authService.logout()}
            buttonText="Logout"
          />
        </p>
      </div>
    </div>
  );
}
export default RenderDashboard;
