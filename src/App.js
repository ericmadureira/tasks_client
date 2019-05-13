import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './App.scss';

import Container from 'react-bootstrap/Container'
import TaskList from './components/TaskList';
import Header from './components/Header';
   
library.add(faCheckCircle, faTrashAlt)

function App() {
  return (
    <div className="App">
      <Header/>
      <Container>
        <TaskList/>
      </Container>
    </div>
  );
}

export default App;
