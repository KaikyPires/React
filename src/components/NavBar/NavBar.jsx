import React from "react";
import './styles.css';
import image from "../../assets/images/file (6).png"

export class NavBar extends React.Component {
  render() {
    return (
      <header>
        <nav id="navbar">
       
          <div className="nav-brand">
            <img src= {image} alt="" />
            <h1>Space Flight News</h1>
          </div>
          <ul className="nav-list">
            <li><a href="/">Home</a></li>
            <li><a href="/">Trending</a></li>
            <li><a href="/">Categories</a></li>
            <li><a href="/">About us</a></li>
          </ul>
        </nav>
      </header>
    );
  }
}

