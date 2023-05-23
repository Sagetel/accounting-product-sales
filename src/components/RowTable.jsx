import React from 'react'
import '../styles/RowTabel.scss'
function RowTable({ id, name, region, tax, inn, delivery, product_categories, price, supplier }) {
  return (
    <div className={'row ' + (inn ? 'row-suppliers' : product_categories && 'row-product')}>
      <div className='row__cell'>
        {id}
      </div>
      <div className='row__cell'>
        {name}
      </div>
      {product_categories &&
        <div className='row__cell'>
          {product_categories}
        </div>
      }
      {supplier &&
        <div className='row__cell'>
          {supplier}
        </div>
      }
      {price &&
        <div className='row__cell'>
          {price}
        </div>
      }
      {region &&
        <div className='row__cell'>
          {region}
        </div>
      }
      {delivery &&
        <div className='row__cell'>
          {delivery}
        </div>
      }
      <div className='row__cell'>
        {tax ? `${tax} %` : inn}
      </div>
      <div className='row__cell'>
        <img src="./assets/images/edit.png" alt="edit" className="row__image row__image-edit" />
        <img src="./assets/images/bin.png" alt="delete" className="row__image row__image-delete" />
      </div>
    </div>
  )
}

export default RowTable