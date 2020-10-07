import React from 'react';

class Sidebar extends React.Component{
    render(){
        return (
            <div className="sideNav">
                    <div className="side-nav-button center-text">Home</div>
                    <div className="side-nav-button center-text">Live Code</div>
                    <div className="side-nav-button center-text">Component Demo</div>
                    <div className="side-nav-button center-text">Functional Component</div>
                    <div className="side-nav-button center-text">Props & State</div>
                    <div className="side-nav-button center-text">React Life Cycle Method</div>
                    <div className="side-nav-button center-text">React Hooks</div>
                    <div className="side-nav-button center-text">Form Handling</div>
                    <div className="side-nav-button center-text">To Do List App</div>
                    <div className="side-nav-button center-text">Redux & Reducers</div>
                    <div className="side-nav-button center-text">Fetching Data</div>
                    <div className="side-nav-button center-text">Weather App</div>
                    <div className="side-nav-button center-text">Contact Us</div>
            </div>
        
        );
    }
}

export default Sidebar;