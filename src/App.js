import React, { Component } from 'react';
import TitleHeader from './components/title-header'
import LocationDropdown from './containers/location-dropdown'
import ResourceBox from './containers/resource-box'

class App extends Component {
  render() {
    return(
      <div>
        <TitleHeader />
        <LocationDropdown />
        <ResourceBox />
      </div>
    );
  }
}

export default App;
