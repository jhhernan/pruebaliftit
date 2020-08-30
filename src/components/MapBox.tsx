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

const testPath = [{ lng:-74.06725643633541, lat:4.8293179395713},
    {lng:-74.05756710463811, lat:4.82986054103117}, 
    {lng:-74.03924781023824, lat:4.82714752833579},
    {lng:-74.01069658088244, lat:4.81536530246677},
    {lng:-74.01718197256992, lat:4.79115489288404}];

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

    genPath = (path:any) => {
        const { points } = this.props;
        let route = [];
        for (let i=0; i<path.length; i++){
            route.push({lat:points[path[i]].lat, lng:points[path[i]].lng});
        }
        return route;
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

                <Polyline
                  path={this.genPath([0,1,2,3,4])}
                  strokeColor="#0000FF"
                  strokeOpacity={0.5}
                  strokeWeight={2}
                />
            </Map>
  
          </header>
        </div>
      );
    }
  }
  

export default GoogleApiWrapper({
    apiKey: `${process.env.REACT_APP_APIKEY}`
})(MapBox);