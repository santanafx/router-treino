import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import styles from './Header.module.css'

export const Header = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/sobre')
    }

    return (
        <div className={styles}>
            <NavLink NavLink to='/' end > Home</NavLink > | <NavLink to='sobre'>Sobre</NavLink>
            <button onClick={handleClick}>Clicar aqui</button>
        </div>
    )
}
