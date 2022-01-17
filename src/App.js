import './App.css';
import React from 'react'
import Board from './components/board'

function App({knightPosition}) {
  return (
    <div className="App">
          <Board knightPosition={knightPosition} />
    </div>
  );
}

export default App;
