import React, { Component } from 'react'
class Navbar extends Component {
  render(){
    return <nav className="navbar navbar-dark bg-dark">
      <a href="#" className="navbar-brand">React - Example</a>
        <div >
      <ul classname ="navbar-nav">
        <li classname = "nav-list">
          <a classname="nav-links" href="#">home</a>
        </li>
      </ul>
    </div>
    </nav>
  }
}

export default Navbar