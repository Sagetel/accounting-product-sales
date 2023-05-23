import React from 'react'
import '../styles/pages/Categories.scss'
import { useSelector } from 'react-redux'
import RowTable from './../components/RowTable';
function Categories() {
  const categories = useSelector(({ categories }) => { return categories.items })
  const properties = ['id', 'Название', 'Налог %']
  return (
    <div className='categories'>
      <div className='categories__container'>
        <h1 className="categories__titel">Категории</h1>
        <div className="categories__content">
          <div className="categories__list">
            <div className="categories__header">
              {properties.map((item, index) => <div className='categories__property' key={index}>{item}</div>)}
            </div>
            {categories.map((category) =>
              <RowTable key={category.id + category.created_at} id={category.id} name={category.name} tax={category.tax} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories