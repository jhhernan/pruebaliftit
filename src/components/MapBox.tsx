import React from 'react';
import { Map, GoogleApiWrapper, Marker, Polyline } from 'google-maps-react';


const mapStyles = {
    width: '60%',
    height: '60%',
  };

interface IPoints {
    label: string, 
    lng: number,
    lat: number,
  } 

class MapBox extends React.Component<any, any>{
    showMarkers = (points:IPoints[]) => {
        return points.map((point, index) => {
          return <Marker key={index} position={{
             lat: point.lat,
             lng: point.lng,
            }}
            label={{
              text: point.label,
              fontFamily: "Arial",
              fontSize: "14px",
            }}
          />
        })
      }
    

    render() {
      return (
        <div className="App">
          <header className="App-header">
            <Map  
              google={this.props.google}     
              zoom={12}
              style={mapStyles}
              initialCenter={
                {lng: -74.0378165, lat: 4.8120468}
              }
            >
                {this.showMarkers(this.props.points)}
            </Map>
  
          </header>
        </div>
      );
    }
  }
  

export default GoogleApiWrapper({
    apiKey: `${process.env.REACT_APP_APIKEY}`
})(MapBox);