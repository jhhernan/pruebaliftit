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
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <MapBox points={this.state.points}/>
        </header>
      </div>
    );
  }
}

export default App;