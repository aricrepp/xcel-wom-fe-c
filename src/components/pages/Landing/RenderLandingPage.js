import React from 'react';
import { Image } from 'antd';

function RenderLandingPage(props) {
  return (
    <section style={welcomeContainer}>
      <div style={welcomePicture}>
        <Image
          alt="Xcel Work Order"
          preview={false}
          src="https://img.wallpapersafari.com/desktop/1920/1080/62/79/bYdv3O.jpg"
        />
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

export default RenderLandingPage;
