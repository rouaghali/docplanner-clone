import React, { Component } from 'react';
import './App.css' ;
import Navv from './Navbar'; 
import Sousbar from './Sousbar';
import Phrase from './Phrase';
import Parag from './Parag';
import Box  from './Box';
import List from './list';
import Mapp from './Mapp';

class App extends Component {
  render() { 
    return  (
      <div>
        <Navv/>
        <Sousbar/>
        <Phrase/>
        <Parag/>
        <Box/>
        
        <Mapp/>
        
        </div>
      );
   }
}

export default App;
