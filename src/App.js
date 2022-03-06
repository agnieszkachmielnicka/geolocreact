import './App.css';
import 'semantic-ui-css/semantic.min.css'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import MainComponent from './components/MainComponent';

function App() {

  return (
    <Router>
        <div className="App">
            <MainComponent/>
        </div>
    </Router>
  );
}

export default App;
