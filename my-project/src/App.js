import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { Button } from 'react-bootstrap';
// import component
import Header from './component/header'
// import Content from './component/content'
import Footer from './component/footer'
import './App.css' 
// import component
// import pages
import Home from './Pages/home'
import Aboutus from './Pages/aboutus'
import Contactus from './Pages/contactus'
import Modal from './Pages/modal'
// import pages
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Header/>
        <div className="container theme-showcase" role="main">
          <Route exact path="/" component={Home}/>
          <Route exact path="/Aboutus" component={Aboutus}/>
          <Route exact path="/Contactus" component={Contactus}/>
          <Route exact path="/Modal" component={Modal}/>
        </div>
        <Button bsStyle="success">Success</Button>
        <Footer/> 
        </div>
      </Router>
    );
  }
}

export default App;
