import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  state = { hidden: false }; //initial state of navbar

  prevScrollpos = null;
  componentDidMount() {
    this.prevScrollpos = window.pageYOffset;
    // When this component mounts, begin listening for scroll changes
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    // If this component is unmounted, stop listening
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    console.log("scrolling");
    var currentScrollPos = window.pageYOffset;
    if (this.prevScrollpos < currentScrollPos) {
      this.setState({ hidden: false });
    } else {
      this.setState({ hidden: true });
    }
    this.prevScrollpos = currentScrollPos;
  };
  render() {
    return (
      <nav className={`navbar ${this.state.hidden ? "hide" : ""}`}>
        <a href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </nav>
    );
  }
}

export default Navbar;
