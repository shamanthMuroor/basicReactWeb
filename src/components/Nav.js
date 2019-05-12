import React from 'react';
import {Link} from 'react-router-dom';
import '../style/style.css'

class Nav extends React.Component {
    render() {
        return (
            <div className="navbar navbar-light bg-light" style={{height:'80px'}}>
                <Link className="navbar-brand font-weight-bold" exact path to='./'>React App</Link>
                
                <span className="navbar-nav font-weight-bold links">
                    <Link className="nav-link text-danger" exact path to='./'>Home</Link>
                    <Link className="nav-link text-danger" exact path to='./about'>About</Link>
                    <Link className="nav-link text-danger" exact path to='./services'>Services</Link>
                    <Link className="nav-link text-danger" exact path to='./blog'>Blog</Link>
                    <Link className="nav-link text-danger" exact path to='./contact'>Contact</Link>
                </span>
            </div>
        )
    }
}

export default Nav;