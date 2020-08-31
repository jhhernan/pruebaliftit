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

    genPath = (path:any) => {
        const { points } = this.props;
        let route = [];
        route.push({lat:points[0].lat, lng:points[0].lng});
        for (let i=0; i<path.length; i++){
            route.push({lat:points[path[i]].lat, lng:points[path[i]].lng});
        }
        return route;
    }
    

    render() {
      return (
          <div className="inside">
            <Map  
              google={this.props.google}     
              zoom={12}
              //style={mapStyles}
              containerStyle={{ position: 'relative', width: '400px', height: '300px' }}
              initialCenter={
                {lng: -74.0378165, lat: 4.8120468}
              }
            >
                {this.showMarkers(this.props.points)}

                <Polyline
                  path={this.genPath(this.props.path)}
                  strokeColor="#0000FF"
                  strokeOpacity={0.5}
                  strokeWeight={2}
                />
            </Map>
        </div>
      );
    }
  }
  

export default GoogleApiWrapper({
    apiKey: `${process.env.REACT_APP_APIKEY}`
})(MapBox);