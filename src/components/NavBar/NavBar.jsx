import React from 'react';
import './NavBar.css';
import Logo from '../../media/img/South Sea Sailing logo.png';

function NavBar(props) {
    return (
        <div className='NavBar grid-container flex'>
            <div className='NavBar--logo'>
                <img src={Logo} alt='logo'/>
            </div>
            <div className='NavBar--menu flex'>
                <div className='NavBar--menu--item'>experiences</div>
                <div className='NavBar--menu--item'>the boat</div>
                <div className='NavBar--menu--item'>the region</div>
                <div className='NavBar--menu--item NavBar--menu--book_now btn'>book now</div>
            </div>
        </div>
    );
}

export default NavBar;