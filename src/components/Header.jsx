import React from 'react'
import '../styles/Header.scss'
import { Link } from 'react-router-dom';
function Header() {
  return (
    <header className='header'>
      <div className="header__container">
        <Link to="/">
          <img src="./assets/images/accounting-sales-logo.png" alt="" className='header__logo' />
        </Link>
        <nav className="home__nav nav">
          <Link to="/">
            <div className="nav__link">Категории</div>
          </Link>
          <div className="nav__link">Поставщики</div>
          <div className="nav__link">Товары</div>
        </nav>
      </div>
    </header>
  )
}

export default Header