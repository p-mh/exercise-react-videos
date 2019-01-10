import React from 'react';
import VideoFirstImage from './Videofirstimage.js';

import './videolist.css';

function VideoList(props) {
  return (
    <div className="videolist">
      <div>
        <p>
          Il y a <b>{props.videosURL.length}</b> vidéos
        </p>
        <div className="itemvideolist" />
        <div className="itemvideolist" />
      </div>
      <VideoFirstImage />
    </div>
  );
}

export default VideoList;
