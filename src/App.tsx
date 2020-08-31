import React from 'react';
import MapBox from './components/MapBox';
import MapBoxStatic from './components/MapBoxStatic';
import './App.css';

class App extends React.Component<any, any>{
  constructor(props:any){
    super(props);
    this.state={
      points:[{label:"1", lng:-74.06725643633541, lat:4.8293179395713},
            {label:"2", lng:-74.05756710463811, lat:4.82986054103117},
            {label:"3", lng:-74.03924781023824, lat:4.82714752833579},
            {label:"4", lng:-74.01069658088244, lat:4.81536530246677},
            {label:"5", lng:-74.01718197256992, lat:4.79115489288404}]
    }
  }

  componentDidMount(){
    let routes = this.permutation([1,2,3,4]);
    this.setState({ routes });
  }

  permutation:any = (arr:number[]) => {
    let ret = [];
  
    for (let i = 0; i < arr.length; i = i + 1) {
      let rest = this.permutation(arr.slice(0, i).concat(arr.slice(i + 1)));
  
      if(!rest.length) { 
         ret.push([arr[i]])
      } else {
        for(let j = 0; j < rest.length; j = j + 1) {
          ret.push([arr[i]].concat(rest[j]))
        }
      }
    }
    return ret;
  }

  render() {
    const { routes, points } = this.state;
    return (
      <div>
      <div className="header">
        <h1>Posibles Rutas</h1>
      </div>
      <div className="container">
        {routes && routes.length > 0 && routes.map((route:number[],idx:number) => { 
          return <div className="box" key={idx}> 
            <MapBoxStatic points={points} path={route} index={idx}/>
            {/* <img src="https://maps.googleapis.com/maps/api/staticmap?size=400x300&scale=1&format=png&maptype=roadmap&markers=size:normal%7Ccolor:blue%7Clabel:P%7C6.4488387,3.5496361&key=AIzaSyAePvgmHTkh7fyL1UdIAv-uEmS4snQ3Mz4" alt="nada"/> */}

          </div>
        })}
      </div>
      </div>
    );
  }
}

export default App;