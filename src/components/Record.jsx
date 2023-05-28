import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import '../styles/Record.scss'
function Record({ nameSection }) {
  const categories = useSelector(({ categories }) => { return categories.items })
  const suppliers = useSelector(({ suppliers }) => { return suppliers.items })
  const products = useSelector(({ products }) => { return products.items })

  const sales = useSelector(({ sales }) => { return sales.items })
  const headerList = ['Название', 'Выручка', 'Прибыль']

  const [data, setData] = useState([])

  const [indicators, setIndicators] = useState({
    revenue: {},
    profit: {},
  })
  const [saleIndicators, setSaleIndicators] = useState([]);

  const accountingIndicatorts = () => {
    const setSaleKeys = new Set();

    for (let index = 0; index < sales.length; index++) {
      setSaleKeys.add(sales[index].products_id)
    }

    const updatedIndicators = Array.from(setSaleKeys).map(index => {
      let initialProfit = 0;
      const filtedSales = sales.filter(item => item.products_id === index)
      const supVal = filtedSales.reduce(
        (accumulator, currentValue) => accumulator + (currentValue.price * currentValue.quantity),
        initialProfit
      );
      let initialAmount = 0;
      const supAmount = filtedSales.reduce(
        (accumulator, currentValue) => accumulator + currentValue.quantity,
        initialAmount
      );

      return { products_id: index, value: supVal, sum: supAmount };
    });

    setSaleIndicators([...saleIndicators, ...updatedIndicators]);
  };

  useEffect(() => {
    switch (nameSection) {
      case 'Поставщики':
        setData(suppliers)
        break

      case 'Категории':
        setData(categories)
        break

      case 'Товары':
        setData(products)
        break

      default:
        break
    }
  }, [categories, suppliers, products])

  return (
    <div className='record' onClick={() => { accountingIndicatorts() }}>
      <h1 className="record__titel" onClick={() => { console.log(saleIndicators) }}>{nameSection}</h1>
      <div className="record__content">
        <div className="record__list">
          <div className="record__header">{headerList.map((item, index) => <div key={index} className='record__head'>{item}</div>)}</div>
          <div className="record__catalog">{data.map((item) => <div className='record__row' key={item.created_at}>
            <div className="record__cell">{item.name}</div>
            <div className="record__cell">100 руб</div>
            <div className="record__cell">200 руб</div>
          </div>)}</div>
        </div>
        <div className="record__histograms">жопа</div>
      </div>
    </div>
  )
}

export default Record