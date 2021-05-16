import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from './NavBar'
import { Route} from "react-router-dom"
import reportWebVitals from './reportWebVitals';
import Home from './Home'
import Contact from './Contact'
import Projects from './Projects'
import About from './About'

function ProductCards() {
  return (
    <div className="ProductCards">
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/contact" component={Contact} />
    </div>
  );
}

export default ProductCards;
