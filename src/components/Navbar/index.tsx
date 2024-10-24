import { memo } from 'react'
import'./styles.css';

export default memo(() => (
    <nav className="navbar">
        <a href="#" className="navLink">Blog</a>
        <a href="#" className="navLink">Sobre</a>
        <a href="#" className="navLink">Descrição</a>
    </nav>
))