import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'
import logo from '../../assets/images/logo.png'

const Navbar = () => {
    return (
        <header className={s.header}>
            <div>
                <img src={logo} alt='logo' />
            </div>
            <nav className={s.nav}>
                <div className={s.item}>
                    <NavLink
                        to='/'
                    >
                        Home
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink
                        to='/info'
                    >
                        Color Palette
                    </NavLink>
                </div>
            </nav >
        </header>
    )
}

export default Navbar