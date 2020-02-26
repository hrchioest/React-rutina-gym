import React from 'react';
import {Link} from 'react-router-dom';
import './Links.scss';

const Links = () => {
    return (
        <div className="wrapper">
            <nav className="nav">
                <Link to="/rutina1">DIA 1</Link>
                <Link to="/rutina2">DIA 2</Link>
                <Link to="/rutina3">DIA 3</Link>
                <Link to="/rutina4">DIA 4</Link>
                <Link to="/rutina5">DIA 5</Link>
                
            </nav>
        </div>
    );
}

export default Links;