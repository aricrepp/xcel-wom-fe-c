import React from 'react';
import { LoginPage } from '../Login';
import { Image } from 'antd';

function RenderLandingPage(props) {
  return (
    <section style={welcomeContainer}>
      <div style={welcomePicture}>
        <Image src="https://img.wallpapersafari.com/desktop/1920/1080/62/79/bYdv3O.jpg" />
      </div>
      <div style={loginBox}>
        <LoginPage />
      </div>
    </section>
  );
}

let welcomeContainer = {
  position: 'relative',
};

let welcomePicture = {
  width: '100%',
  height: 'auto',
};

let loginBox = {
  position: 'absolute',
  top: '0.2%',
  left: '70%',
};

export default RenderLandingPage;
