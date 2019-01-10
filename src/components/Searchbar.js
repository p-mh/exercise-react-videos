import React, { Component } from 'react';

import './searchbar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: '',
    };
  }
  onChangeInput(e) {
    this.setState({
      searchValue: e.target.value,
    });
    // console.log(this.state.searchValue);
  }
  render() {
    return (
      <div className="searchbar">
        <i className="fas fa-search" />
        <input
          type="text"
          placeholder="Search"
          onChange={this.onChangeInput.bind(this)}
          value={this.state.searchValue}
        />
      </div>
    );
  }
}

export default SearchBar;
