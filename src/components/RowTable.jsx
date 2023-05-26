import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import '../styles/RowTabel.scss'
function RowTable({ id, name, region, tax, inn, delivery, product_categories, quantity, price, supplier, products_id }) {
  const [actualProduct, setActualProduct] = useState({})

  const products = useSelector(({ products }) => { return products.items })

  useEffect(() => {
    const product = products.find(item => item.id === products_id)
    setActualProduct(product)
  }, [])
  return (
    <div className={'row ' + (inn ? 'row-suppliers' : product_categories ? 'row-product' : products_id && 'row-sale')}>
      <div className='row__cell'>
        {id}
      </div>
      {name &&
        <div className='row__cell'>
          {name}
        </div>
      }
      {products_id &&
        <div className='row__cell'>
          {actualProduct?.name}
        </div>
      }
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
          {price} ₽
        </div>
      }
      {quantity &&
        <div className='row__cell'>
          {quantity}
        </div>
      }
      {quantity &&
        <div className='row__cell'>
          {quantity * price} ₽
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
        {tax ? `${tax} %` : actualProduct ? `${actualProduct?.tax} %` : inn}
      </div>
      <div className='row__cell'>
        <img src="./assets/images/edit.png" alt="edit" className="row__image row__image-edit" />
        <img src="./assets/images/bin.png" alt="delete" className="row__image row__image-delete" />
      </div>
    </div>
  )
}

export default RowTable