import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
    state={open:false}
    navRef = React.createRef()

    toggleMenu = () => {
       // this.navRef.classList.toggle('responsive')
       console.log("tototo")
        this.setState({open:!this.state.open})
    }
    render() {
        return (
            <nav className={`topnav ${this.state.open?"responsive":""}`} ref={this.navRef} >
                <a href="#home" className="active">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
                <a role="button" className="icon" onClick={this.toggleMenu}>
                    <i className="fa fa-bars"></i>
                </a>

            </nav>
        );
    }
}

export default Navbar;
