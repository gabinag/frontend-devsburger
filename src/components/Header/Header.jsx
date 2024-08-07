import { useState } from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.headerNav}>
        <img src={logo} alt="Logotipo da Devs Burger" className={styles.logo}/>
        <ul className={`${styles.headerList} ${isMenuOpen ? styles.active : ''}`}>
            <li><Link to="/" className={styles.link}>Produtos</Link></li>
            <li><Link to="/sobre" className={styles.link}>Sobre</Link></li> 
            <li><Link to="/pedido" className={styles.link}>Meu Pedido</Link></li>
        </ul>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </div>
      </nav>
    </header>
  )
}
