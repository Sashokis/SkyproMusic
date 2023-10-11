import '../style/NavMenu.css';
import React from 'react';

export default function NavMenu() {
    return ( 
        <nav className="main__nav nav">
            <Logo />
            <Burger />
            <Menu />
        </nav>
    );
}


function Logo() {
    return (
        <div className="nav__logo logo">
            <img className="logo__image" src="img/logo.png" alt="logo" />
        </div>
    );
}


 function Burger() {
    return (
        <div className="nav__burger burger">
            <span className="burger__line"></span>
            <span className="burger__line"></span>
            <span className="burger__line"></span>
        </div>
    );
}

function Menu() {
    return (
        <div className="nav__menu menu">
            <ul className="menu__list">
                <li className="menu__item">
                    <a href="#" className="menu__link">Главное</a>
                </li>
                <li className="menu__item">
                    <a href="#" className="menu__link">Мой плейлист</a>
                </li>
                <li className="menu__item">
                    <a href="../signin.html" className="menu__link">Войти</a>
                </li>
            </ul>
        </div>
    );
}

