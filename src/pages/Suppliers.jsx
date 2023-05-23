import React from 'react'
import '../styles/pages/Suppliers.scss'

import { useSelector } from 'react-redux'
import RowTable from './../components/RowTable';
function Suppliers() {
  const suppliers = useSelector(({ suppliers }) => { return suppliers.items })
  const properties = ['id', 'Название', 'Регион', 'Доставка', 'ИНН']
  return (
    <div className='suppliers'>
      <div className='suppliers__container'>
        <h1 className="suppliers__titel">Поставщики</h1>
        <div className="suppliers__content">
          <div className="suppliers__list">
            <div className="suppliers__header">
              {properties.map((item, index) => <div className='suppliers__property' key={index}>{item}</div>)}
            </div>
            {suppliers.map((supplier) =>
              <RowTable key={supplier.id + supplier.created_at} id={supplier.id} name={supplier.name} delivery={supplier.typeDelivery} region={supplier.region} inn={supplier.inn} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Suppliers