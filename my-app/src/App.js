import React, { Component } from 'react'
import '../src/css/styles.css'
import Header from './components/Header/Header'
import First from './components/First/First'
import Footer from './components/Footer/Footer'
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <First />
        <Footer />
      </div>
    )
  }
}

export default App;
