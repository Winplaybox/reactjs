import React, { Component } from 'react';
// import component
import Header from './component/header'
import Content from './component/content'
import Footer from './component/footer'
// import component
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
