

import React, { Component } from 'react';
import './App.css' ;




class Navv extends Component {
  render() {
    return  (
      <div className="navv">
      
      <nav className="navbar navbar-expand-lg navbar-light bg-white" >
     
      
      <a className="navbar-brand">  <b  className="nav1" >Docplanner</b> Groupe</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">



             <div  className="nav1"   > 
            <a className="nav-link"><b className="nav1">About us</b> <span className="sr-only">(current)</span></a>
            </div>
          
          <li className="nav-item">
            <a className="nav-link">career</a>
          </li>
          
          <li className="nav-item">
            <a className="nav-link disabled">departement</a>
          </li>
        </ul>
       
      
      </div>
    </nav>
    
    </div>
      
      );
   }
}

export default Navv;
