import React from 'react'
import '../styles/pages/Suppliers.scss'

import { useSelector } from 'react-redux'
import RowTable from './../components/RowTable';
function Suppliers() {
  const products = useSelector(({ products }) => { return products.items })
  const properties = ['id', 'Название', 'Категория', 'Поставщик', 'Цена', 'Налог']
  return (
    <div className={'suppliers '}>
      <div className='suppliers__container'>
        <h1 className="suppliers__titel">Продукты</h1>
        <div className="suppliers__content">
          <div className="suppliers__list">
            <div className={"suppliers__header " + (products && 'suppliers__header-product')}>
              {properties.map((item, index) => <div className='suppliers__property' key={index}>{item}</div>)}
            </div>
            {products.map((product) =>
              <RowTable key={product.id + product.created_at} id={product.id} product_categories={product.product_categories_id} supplier={product.suppliers_id} name={product.name} price={product.purchasePrice} tax={product.tax} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Suppliers