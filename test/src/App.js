import React from 'react';
import logo from './logo.svg';
import './App.css';
import ItemApartment from './components/Item'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function App() {
  return (
    <div className="App">

      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

      <header className="App-header">
        
      </header>
      <div className="general-container">
         <ItemApartment></ItemApartment>
      </div>
    </div>
  );
}

export default App;
