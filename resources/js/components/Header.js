import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Header extends Component {
    render() {
        return (
     <nav className='navbar navbar-expand-md navbar-light navbar-laravel'>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Login</a>
                </li>
                <li className="nav-item dropdown">
                {/* <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                </a> */}
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Contact Us</a>
                    {/* <a className="dropdown-item" href="#"></a> */}
                    <div className="dropdown-divider"></div>
                    {/* <a className="dropdown-item" href="#">Something else here</a> */}
                </div>
                </li>
                <li className="nav-item">
                {/* <a className="nav-link disabled" href="#">Disabled</a> */}
                </li>
                {/* <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form> */}
            </ul>
        </div>
      </nav>
        );
    }
}

if (document.getElementById('header')) {
    ReactDOM.render(<Header />, document.getElementById('header'));
}
