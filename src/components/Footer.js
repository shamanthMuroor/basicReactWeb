import React from 'react';
import {Link} from 'react-router-dom';
import '../style/style.css'

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="container-fluid bg-light navbar-fixed-bottom">
                    <div className="row">
                        <div className="col-12 text-center text-danger foot">
                            <h1 style={{padding:'15px'}}>React App</h1>
                            <ul className="font-weight-bold footerUL" >
                                <li>
                                    <Link className="text-decoration-none" exact path to='./'>Home</Link>
                                </li>                                <li>
                                    <Link className="text-decoration-none" exact path to='./about'>About</Link>
                                </li>
                                <li>
                                    <Link className="text-decoration-none" exact path to='./services'>Services</Link>
                                </li>
                                <li>
                                    <Link className="text-decoration-none" exact path to='./blog'>Blog</Link>
                                </li>
                                <li>
                                    <Link className="text-decoration-none" exact path to='./contact'>Contact</Link>
                                </li>
                            </ul> 
                            <span>© Copyright 2012 - 2019</span>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;