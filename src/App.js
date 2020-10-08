import React from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Link} from 'react-router-dom';

//import Header from './CommonComponents/Header/Header';
import Header from './CommonComponents/Header';  //this way index.jsx inside "Header" folder is imported by default & we can can export Header.jsx from index.jsx
import Sidebar from './CommonComponents/Sidebar'

function App() {
  return (
// to use router, wrap the whole application inside Router tag
// Replace the variable component with switch tag having self closing Route tags having path(relative url) & component to render
// React see for prefix '/' in every path & renders Home component for every route without looking for the name following. 
// Thus we we use "exact" attribute with home component to differentiate between paths. 
    <Router>
      <div className='main-div'>  
        <Link to="/">
          <Header />
        </Link>
        <div className="body">
          <Sidebar />
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/contactus" component={ContactUs}/>
            <Route path="/propsAndState" component={PropsAndState}/>
            <Route path="/lifeCycle" component={LifeCycleMethods}/>
            <Route path="/functionalComponents" component={Container}/>
            <Route path="/hooks" component={Hooks}/>
            <Route path="/redux" component={ReduxAndReducer}/>
            <Route path="/formHandling" component={FormHandling}/>
            <Route path="/todolist" component={ToDoList}/>
            <Route path="/weather" component={WeatherApp}/>
            <Route path="/componentdemo" component={ComponentDemo}/>
          </Switch>
        </div>
      
      </div>
    </Router>
    
  );
}

export default App;
