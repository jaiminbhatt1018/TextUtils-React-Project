import './Navbar.css'
import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
   
    const changeGreenTheme=()=>{
        props.setTheme('lightgreen');
        props.showAlert("Light green theme has been Applied","success");
    }

    const changeBlueTheme=()=>{
        props.setTheme('#101d31');
        props.showAlert("Dark Blue theme has been Applied","success");

    }
    const changeBlackTheme=()=>{
        props.setTheme('black');
        props.showAlert("Classic Black theme has been Applied","success");

    }
    const changeWhiteTheme=()=>{
        props.setTheme('white');
        props.showAlert("Snow White theme has been Applied","success");

    }
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.bg==='lightgreen'||'white'?'dark':'light'} bg-${props.bg==='lightgreen'||'white'?'dark':'light'}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="#">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
         
       </ul>
       <button className="btn btn-primary green" onClick={changeGreenTheme}> </button>
        <button className=" mx-2 btn btn-primary blue "onClick={changeBlueTheme}> </button>
        <button className=" mx-1 btn btn-primary black" onClick={changeBlackTheme}></button>
        <button className=" mx-1 btn btn-primary white" onClick={changeWhiteTheme}></button>

      </div>
    </div>
    
      
       
    
  </nav>
  )
}

Navbar.propTypes={
    title: PropTypes.string.isRequired
}
Navbar.defaultProps={
    title:'set title here'
}
