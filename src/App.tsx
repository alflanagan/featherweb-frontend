import React, { ReactElement } from 'react'
import logo from './logo.svg'
import { Counter } from './features/counter/Counter'
import './App.css'

function App (): ReactElement {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <title>Experimental Varmint Control Dashboard</title>
    </div>
  )
}

export default App
