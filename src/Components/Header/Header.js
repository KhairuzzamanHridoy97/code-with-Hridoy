import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css' ;

const Header = () => {
    return (
        <div>
            <h1 className='title'>Code With Hridoy</h1>
            <nav>
                <NavLink  
                activeStyle={{
                fontWeight: "bold",
                color: "red"
              }}
              className="navlink"
              to='/home'
              >Home</NavLink>

                <NavLink  activeStyle={{
                fontWeight: "bold",
                color: "red"
              }} 
              to='/services'
              className="navlink"
              >Services</NavLink>

                <NavLink  activeStyle={{
                fontWeight: "bold",
                color: "red"
              }}
               to='/blogs'
               className="navlink"
              >Blogs</NavLink>

                <NavLink  activeStyle={{
                fontWeight: "bold",
                color: "red"
              }}
               to='/about'
               className="navlink"
              >About</NavLink>
            </nav>
        </div>
    );
};

export default Header;