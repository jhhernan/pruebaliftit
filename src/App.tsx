import React from 'react';
import { Map, GoogleApiWrapper, Marker, Polyline } from 'google-maps-react';
import './App.css';


const mapStyles = {
  width: '60%',
  height: '60%',
};

const testPath=[{ lng: -74.06725643633541, lat: 4.8293179395713 },
  { lng: -74.05756710463811, lat: 4.82986054103117}];

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
            <Marker  
              position={{ lng: -74.06725643633541, lat: 4.8293179395713 }}
              label={{
                text: "1",
                fontFamily: "Arial",
                fontSize: "14px",
              }}/>
            <Marker  
              position={{ lng: -74.05756710463811, lat: 4.82986054103117 }}
              label={{
                text: "2",
                fontFamily: "Arial",
                fontSize: "14px",
              }}/>

            <Polyline
              path={testPath}
              strokeColor="#0000FF"
              strokeOpacity={0.8}
              strokeWeight={2}
            />
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