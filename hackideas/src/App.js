
import React from 'react';
import './App.css';

import RouteWithLayout from './common/routeWithLayout';
import Landing from './landingpage/Landing'
import Home from './home/Home';
import Datadisplay from './home/Datadisplay';
import Addchalenge  from './addchalenge/Addchalenge';

import { BrowserRouter, Switch, Route } from 'react-router-dom';




function App() {
  return (
    <div className="main">

      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Landing} />
           
            

            <RouteWithLayout exact path="/mainpage" component={Datadisplay} layout={Home} />
            <RouteWithLayout exact path="/addchallenge" component={Addchalenge} layout={Home} />
           
            
           
           
          
        </Switch>
        
      </div>
    </BrowserRouter>
    
  </div>
  );
}

export default App;
