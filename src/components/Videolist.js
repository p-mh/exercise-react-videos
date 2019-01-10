import React from 'react';
import VideoFirstImage from './Videofirstimage.js';

import './videolist.css';

function VideoList() {
  return (
    <div className="videolist">
      <div>
        <div className="itemvideolist" />
        <div className="itemvideolist" />
      </div>
      <VideoFirstImage />
    </div>
  );
}

export default VideoList;
