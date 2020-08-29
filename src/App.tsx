import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import './App.css';


const mapStyles = {
  width: '60%',
  height: '60%',
};

class App extends React.Component<any>{
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Map  
            google={this.props.google}     
            zoom={12}
            style={mapStyles}
            initialCenter={
              { lng: -74.06725643633541, lat: 4.8293179395713 }
            }
          >
          </Map>

        </header>
      </div>
    );
  }
}

//export default App;
export default GoogleApiWrapper({
  apiKey: 'AIzaSyAePvgmHTkh7fyL1UdIAv-uEmS4snQ3Mz4'
})(App);