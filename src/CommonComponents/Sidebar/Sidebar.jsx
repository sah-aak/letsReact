import React from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends React.Component{
    render(){
        return (
            <div className="sideNav">
                <Link to='/'>
                    <div className="side-nav-button center-text">Home</div>
                </Link>
                    <div className="side-nav-button center-text">Live Code</div>
                <Link to='/livecode'>
                    <div className="side-nav-button center-text">Component Demo</div>
                </Link>
                    
                <Link to='/functionalComponents'>
                    <div className="side-nav-button center-text">Functional Component</div>
                </Link>
                <Link to='/propsAndState'>
                    <div className="side-nav-button center-text">Props & State</div>
                </Link>
                <Link to='/lifeCycle'>
                    <div className="side-nav-button center-text">React Life Cycle Method</div>
                </Link>
                <Link to='/hooks'>
                    <div className="side-nav-button center-text">React Hooks</div>
                </Link>
                <Link to='/formHandling'>
                    <div className="side-nav-button center-text">Form Handling</div>
                </Link>
                <Link to='/todolist'>
                    <div className="side-nav-button center-text">To Do List App</div>
                </Link>
                <Link to='/redux'>
                    <div className="side-nav-button center-text">Redux & Reducers</div>
                </Link>
                <Link to=''>
                    <div className="side-nav-button center-text">Fetching Data</div>
                </Link>
                <Link to='/weather'>
                    <div className="side-nav-button center-text">Weather App</div>
                </Link>
                <Link to='/contactus'>
                    <div className="side-nav-button center-text">Contact Us</div>
                </Link>   
            </div>
        
        );
    }
}

export default Sidebar;