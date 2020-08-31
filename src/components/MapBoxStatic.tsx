import React from 'react';
import { StaticGoogleMap, Marker, Path, Direction} from 'react-static-google-map';

interface IPoints {
    label: string, 
    lng: number,
    lat: number,
  } 

class MapBoxStatic extends React.Component<any, any>{
        showMarkers = (points:IPoints[]) => {
        return points.map((point, index) => {
          return <Marker key={index} location={{
             lat: point.lat,
             lng: point.lng,
            }}
            label={point.label}
            color="red"
          />
        })
      }
    pathName = (path:any) => {
      const { points } = this.props;
      let ret = points[0].label ;
      for (let i=0; i<path.length; i++){
        ret += "->" + points[path[i]].label;
      }
      return ret;
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
        <React.Fragment>
          Ruta {this.props.index + 1}: {this.pathName(this.props.path)}
            <StaticGoogleMap zoom={12}
              size="400x300" className="box-img"
              apiKey={process.env.REACT_APP_APIKEY}
              >
                
                {this.showMarkers(this.props.points)}

                <Path
                  points={this.genPath(this.props.path)}
                  weight="2"
                  color="blue" 
                />
            </StaticGoogleMap>
        </React.Fragment>
        
      );
    }
  }
  

export default MapBoxStatic;
