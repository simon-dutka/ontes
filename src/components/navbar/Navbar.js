import React, { useState } from 'react';
import './navbar.scss';

//Images
import { bin, bookmark, logo, notes, tags, time } from './imports';

const Menu = () => (
    <>
        <ul className='navbar-menu__container'>
            <li className='navbar-menu__item'>
                <img src={notes} alt='notes' />
                <a href='#'>All notes</a>
            </li>

            <li className='navbar-menu__item'>
                <img src={bookmark} alt='bookmark' />
                <a href='#'>Favorites</a>
            </li>

            <li className='navbar-menu__item'>
                <img src={time} alt='time' />
                <a href='#'>Last notes</a>
            </li>

            <li className='navbar-menu__item'>
                <img src={bin} alt='bin' />
                <a href='#'>Deleted</a>
            </li>

            <li className='navbar-menu__item'>
                <img src={tags} alt='tags' />
                <a href='#'>Tags</a>
            </li>
        </ul>
    </>
);

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <div className='navbar'>
            <img className='navbar-logo' src={logo} alt='Ontes' />

            {openMenu ? (
                <div className='navbar-menu navbar-menu--open'>
                    <div
                        className='navbar-menu__hamburger_container'
                        onClick={() => setOpenMenu(false)}
                    >
                        <div className='navbar-menu__hamburger navbar-menu__hamburger--open'></div>
                    </div>
                    <Menu />
                </div>
            ) : (
                <div
                    className='navbar-menu__hamburger_container navbar-menu__hamburger_container--close'
                    onClick={() => setOpenMenu(true)}
                >
                    <div className='navbar-menu__hamburger'></div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
