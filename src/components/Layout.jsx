import React from 'react';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import '../styles/Layout.scss'
import Home from './../pages/Home';
import Categories from '../pages/Categories';
import Suppliers from './../pages/Suppliers';
import Products from './../pages/Products';
import Reports from './../pages/Reports';

function Layout() {
  return (
    <div className='layout'>
      <Header />
      <main className='layout__content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Categories />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/products" element={<Products />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </main>
    </div>
  );
}

export default Layout;