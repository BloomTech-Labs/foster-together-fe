import React from 'react'
import { Counter } from './features/counter/Counter'
import './App.css'
import SignUp from './features/SignUpForm/SignUpOverlay';
import {BrowserRouter as Router, Route} from "react-router-dom"


function App() {
  return (
    <div>
      <header>
        <Route exact path ="/signup" component={SignUp}/>
      </header>
    </div>
  )
}

export default App
