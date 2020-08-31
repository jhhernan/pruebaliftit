import React from 'react';
import MapBox from './components/MapBox';
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
      <div className="container">
        {routes && routes.length > 0 && routes.map((route:number[],idx:number) => { 
          return <div className="box"> Ruta {idx}
            <MapBox points={points} path={route}/>
          </div>
        })}
        </div>
    );
  }
}

export default App;