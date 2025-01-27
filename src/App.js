import React from 'react';
import logo from './logo.svg';
import './App.css';
import './css/main.css'
import { Route, HashRouter as Router, Link, Redirect, Switch } from 'react-router-dom';

import SideBar from './layouts/SideBar'
import CityMeter from './layouts/CityMeter'
import WardMeter from './layouts/WardMeter'
import WealthMeter from './layouts/WealthMeter'
import Visualize from './containers/Visualise'
import Context,{Provider} from './config/context'

function App() {
  return (
    <Provider>
      
     <Router>

     <Context.Consumer>
        {
          value=>{
            return(
             <div className="app">
                
                <SideBar />
                <main ref={value.mainRef}>
              
                  <Switch>
                    <Route exact path="/" component={CityMeter} />
                    <Route exact path="/ward" component={WardMeter} />
                    <Route exact path="/wealth" component={WealthMeter} />
                  </Switch>
               
                  <Visualize
                  myObj={value[value.current]}

                  />
                </main>

             </div>
            )
          }
        }
      </Context.Consumer>
     </Router>
      
    </Provider>
  );
}

export default App;
