import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <nav className="app-header navbar navbar-light">
            <ul className="nav navbar-nav">
                <li className="nav-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/mypage">My page</Link>
                </li>
                <li className="nav-item">
                    <Link to="/addbook">Add Book</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Header;
