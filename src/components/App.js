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
      videosURL: [
        'https://www.youtube.com/embed/Q6amwKTI9VY',
        'https://www.youtube.com/embed/cggl4WN77Mw',
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
          <VideoList videosURL={this.state.videosURL} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));
