import React from 'react'
import '../styles/Header.scss'
function Header() {
  return (
    <header className='header'>
      <div className="header__container">
        <img src="./assets/images/accounting-sales-logo.png" alt="" className='header__logo' />
        <nav className="home__nav nav">
          <div className="nav__link">Категории</div>
          <div className="nav__link">Поставщики</div>
          <div className="nav__link">Товары</div>
        </nav>
      </div>
    </header>
  )
}

export default Header