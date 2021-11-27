import { Switch,Route,BrowserRouter as Router } from 'react-router-dom';
import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Products from './components/Products'
import Cart from './components/Cart'
import About from './components/About'
import Details from './components/Details'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className="App">
      <Router>
      <Navbar/>

        <Switch>
        <Route exact path="/" component={Home}/>
        <Route  path="/products" component={Products}/>
        <Route  path="/cart" component={Cart}/>
        <Route  path="/about" component={About}/>
        <Route  path="/details/:id" component={Details}/>
        <Route  path="/contact" component={Contact}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App
