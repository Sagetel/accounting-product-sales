import React, { useState } from 'react'
import '../styles/pages/Reports.scss'
import { useSelector } from 'react-redux'
import RowTable from './../components/RowTable';
import Record from './../components/Record';
import FinalRecord from './../components/FinalRecord';

function Sales() {
  const sales = useSelector(({ sales }) => { return sales.items })
  const properties = ['id', 'Продукт', 'Цена', 'Количество', 'Сумма', 'Налог %']
  const recordsNameList = ['Категории', 'Поставщики', 'Товары']
  const [selectedSection, setSelectedSection] = useState('')
  const changeActiveSelectedSection = (type) => {
    if (selectedSection === type) {
      setSelectedSection('')
    } else {
      setSelectedSection(type)
    }
  }
  return (
    <div className='reports'>
      <div className='reports__container'>
        <div className={"reports__selector " + (selectedSection && "reports__selector-selected")}>
          <div className="reports__cards">
            <div className={"reports__card " + (selectedSection === "sales" ? 'reports__card-active' : '')} onClick={() => { changeActiveSelectedSection("sales") }}>Список продаж
              <img src="./assets/images/clipboard.png" alt="" className='card__image' /></div>
            <div className={"reports__card " + (selectedSection === "reports" ? 'reports__card-active' : '')} onClick={() => { changeActiveSelectedSection("reports") }}>Отчеты по продажам
              <img src="./assets/images/stata.png" alt="" className='card__image' />
            </div>
          </div>
        </div>
        {selectedSection === "sales" ? <>
          <h1 className="reports__titel">Продажи</h1>
          <div className="reports__content">
            <div className="reports__list">
              <div className="reports__header">
                {properties.map((item, index) => <div className='reports__property' key={index}>{item}</div>)}
              </div>
              {sales.map((sale) =>
                <RowTable key={sale.id + sale.created_at} id={sale.id} price={sale.price}
                  products_id={sale.products_id}
                  quantity={sale.quantity} />
              )}
            </div>
          </div>
        </>
          :

          selectedSection === "reports" &&
          <div>

            {recordsNameList.map((item, index) => <Record key={index} nameSection={item} />)}

            <FinalRecord />
          </div>
        }
    </div>
    </div >
  )
}

export default Sales