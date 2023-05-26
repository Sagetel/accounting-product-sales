import React, { useEffect } from 'react'
import '../styles/Header.scss'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
function Header() {
  const navList = [{ name: "Категории", path: "/category" }, { name: "Поставщики", path: "/suppliers" }, { name: "Товары", path: "/products" }, { name: "Отчеты", path: "/reports" }];
  let location = useLocation().pathname;
  return (
    <header className='header'>
      <div className="header__container">
        <Link to="/">
          <img src="./assets/images/accounting-sales-logo.png" alt="" className='header__logo' />
        </Link>
        <nav className="home__nav nav">
          {navList.map((item) =>
            <Link to={item.path} className={"nav__link " + (location === item.path && 'nav__link-active')} key={item.path}>
              {item.name}
            </Link>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Header