import React from 'react';

import './video.css';

function Video() {
  return (
    <div className="video">
      <div className="itemvideo">
        <iframe
          src="https://www.youtube.com/embed/Xjs6fnpPWy4"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    </div>
  );
}

export default Video;
