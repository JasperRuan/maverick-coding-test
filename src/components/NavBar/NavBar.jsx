import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './NavBar.css';
import Logo from '../../media/img/South Sea Sailing logo.png';
import MenuIcon from '@mui/icons-material/Menu';

function NavBar(props) {
    return (
        <div className='NavBar grid-container flex'>
            <div className='NavBar--logo'>
                <img src={Logo} alt='logo'/>
            </div>
            <div className='NavBar--menu flex'>
                <div className='NavBar--menu--item'><Link to="/">experiences</Link></div>
                <div className='NavBar--menu--item'><Link to="/product">the boat</Link></div>
                <div className='NavBar--menu--item'><Link to="/itinerary">the region</Link></div>
                <div className='NavBar--menu--item NavBar--menu--book_now btn'>book now</div>
            </div>
            <div className='NavBar--burger_menu'>
                <MenuIcon/>
            </div>
        </div>
    );
}

export default NavBar;