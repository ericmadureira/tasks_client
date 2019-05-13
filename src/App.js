import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import Header from './components/Header';
   
library.add(faCheckCircle, faTrashAlt)

function App() {
  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
