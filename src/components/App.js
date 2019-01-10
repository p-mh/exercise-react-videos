import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Title from './Title.js';
import SearchBar from './Searchbar.js';
import Video from './Video.js';
import VideoList from './Videolist.js';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [
        'https://www.youtube.com/watch?v=Q6amwKTI9VY',
        'https://www.youtube.com/watch?v=cggl4WN77Mw',
      ],
    };
  }
  render() {
    return (
      <div className="app">
        <Title />
        <div className="searchbarbloc">
          <SearchBar />
        </div>
        <div className="blocvideos">
          <Video />
          <VideoList videos={} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));
