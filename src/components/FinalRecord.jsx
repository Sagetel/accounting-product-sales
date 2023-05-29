import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import '../styles/Record.scss'

function FinalRecord() {
  const products = useSelector(({ products }) => { return products.items })
  const sales = useSelector(({ sales }) => { return sales.items })

  const [saleIndicators, setSaleIndicators] = useState([]);

  const [totalProfit, setTotalProfit] = useState(0)
  const [totalValue, setTotalValue] = useState(0)
  const [totalTax, setTotalTax] = useState(0)

  const findProductById = (id) => {
    let result = products.filter(item => item.id === id)
    return result[0]
  }
  const accountingIndicatorts = () => {
    const setSaleKeys = new Set();
    for (let i = 0; i < sales.length; i++) {
      setSaleKeys.add(sales[i].products_id)
    }
    const updatedIndicators = Array.from(setSaleKeys).map(index => {
      const filtedSales = sales.filter(item => item.products_id === index)
      const supVal = filtedSales.reduce(
        (accumulator, currentValue) => accumulator + (currentValue.price * currentValue.quantity), 0
      );
      const supAmount = filtedSales.reduce(
        (accumulator, currentValue) => accumulator + currentValue.quantity,
        0
      );
      let productCard = findProductById(index)
      let purchasePrice = productCard.purchasePrice
      let name = productCard.name
      let tax = productCard.tax
      let profit = supVal * ((100 - tax) / 100) - purchasePrice * supAmount

      return { productId: index, name, tax, value: supVal, sum: supAmount, profit };
    });

    setTotalProfit(updatedIndicators.reduce((accum, current) => accum + current.profit, 0))
    setTotalValue(updatedIndicators.reduce((accum, current) => accum + current.value, 0))
    setTotalTax(updatedIndicators.reduce((accum, current) => accum + current.value * (current.tax / 100), 0))

    setSaleIndicators(updatedIndicators);

  };
  useEffect(() => {
    accountingIndicatorts();
  }, [sales]);
  return (
    <div className='record'>
      <h1 className="record__titel" onClick={() => { console.log(saleIndicators) }}>Итог</h1>
      <div className="record__content record__content-final">
        <div className="record__point">Оборот: <span></span>{totalValue} ₽</div>
        <div className="record__point">Уплачено налогов: <span></span>{totalTax} ₽</div>
        <div className="record__point">Всего прибыль:<span></span> {totalProfit} ₽</div>
        <div className="record__point">Рентабельность:<span></span> {(totalValue / totalProfit).toFixed(1)}</div>
      </div>
    </div>
  )
}

export default FinalRecord