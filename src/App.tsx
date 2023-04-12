import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tile from './components/tile'
import Board from './components/board'

function App() {
  const Child : React.FC = () => <h1> Hello! </h1>
  const range = Array.from(Array(9).keys()).map(x => x + 1);

  return (
    <div className="App">
      <Board tiles={range.map(i => <Tile content={<h1>{i}</h1>}/>)}/>
    </div>
  )
}

export default App
