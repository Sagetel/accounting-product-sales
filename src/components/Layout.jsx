import React from 'react';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import '../styles/Layout.scss'
import Home from './../pages/Home';
import Categories from '../pages/Categories';

function Layout() {
  return (
    <div className='layout'>
      <Header />
      <main className='layout__content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Categories />} />
        </Routes>
      </main>
    </div>
  );
}

export default Layout;