import React from 'react';
import {Link} from 'react-router';

export const Header = (props) => {
    return (
        <div className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li><Link to={"/home"}>Home</Link></li>
                        <li><Link to={"/user/10"}>User</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}