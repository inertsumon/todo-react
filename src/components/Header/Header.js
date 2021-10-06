import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
    return (
        <div className="header-container">
            <Link className='link' to="/home">Home</Link> 
            <Link className='link' to="/todos">Todos</Link> 
            
        </div>
    );
};

export default Header;