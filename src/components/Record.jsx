import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import '../styles/Record.scss'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);
function Record({ nameSection }) {
  const categories = useSelector(({ categories }) => { return categories.items })
  const suppliers = useSelector(({ suppliers }) => { return suppliers.items })
  const products = useSelector(({ products }) => { return products.items })

  const sales = useSelector(({ sales }) => { return sales.items })
  const headerList = ['Название', 'Выручка', 'Прибыль']

  const [data, setData] = useState([])
  const [selectedPie, setSelectedHistogramm] = useState(true)

  const [saleIndicators, setSaleIndicators] = useState([]);
  const [supplierIndicators, setSupplierIndicators] = useState([]);
  const [categoryIndicators, setCategoryIndicators] = useState([]);

  const findProductById = (id) => {
    let result = products.filter(item => item.id === id)
    return result[0]
  }

  const accountingCategories = () => {
    const newCategoryIndicators = [];
    for (let index = 0; index < categories.length; index++) {
      const categoryId = categories[index].id;
      let filtredSaleIndicators = saleIndicators.filter(item => item.categoryId === categoryId)
      let profit = filtredSaleIndicators.reduce((accum, curr) => accum + curr.profit, 0)
      let value = filtredSaleIndicators.reduce((accum, curr) => accum + curr.value, 0)
      const name = categories[index].name;
      newCategoryIndicators.push({ name, categoryId, profit, value });
    }
    setCategoryIndicators(newCategoryIndicators);
  }
  const accountingSuppliers = () => {
    const newSupplierIndicators = [];
    for (let index = 0; index < suppliers.length; index++) {
      const supplierId = suppliers[index].id;
      let filtredSaleIndicators = saleIndicators.filter(item => item.supplierId === supplierId)
      let profit = filtredSaleIndicators.reduce((accum, curr) => accum + curr.profit, 0)
      let value = filtredSaleIndicators.reduce((accum, curr) => accum + curr.value, 0)
      const name = suppliers[index].name;
      newSupplierIndicators.push({ name, supplierId, profit, value });
    }
    setSupplierIndicators(newSupplierIndicators);
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
      let categoryId = productCard.product_categories_id
      let supplierId = productCard.suppliers_id
      let profit = supVal * ((100 - tax) / 100) - purchasePrice * supAmount

      return { productId: index, name, value: supVal, sum: supAmount, profit, categoryId, supplierId };
    });
    setSaleIndicators(updatedIndicators);

  };
  const setIndicators = () => {
    accountingIndicatorts()
    switch (nameSection) {
      case 'Поставщики':
        setData(supplierIndicators)
        break

      case 'Категории':
        setData(categoryIndicators)
        break

      case 'Товары':
        setData(saleIndicators)
        break
      default:
        break
    }
  }
  useEffect(() => {
    accountingIndicatorts();
  }, [sales]);

  useEffect(() => {
    accountingSuppliers();
    accountingCategories();
    setTimeout(() => setIndicators(), 0);
  }, [saleIndicators]);



  const dataWithLabels = data.map(item => ({ label: item.name, value: item.value, profit: item.profit }));

  const dataForChart = {
    labels: dataWithLabels.map(item => item.label),
    datasets: [{
      label: 'My Chart',
      data: dataWithLabels.map(item => item.value),
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 3,
    },
    ],
  };

  const dataForChart2 = {
    labels: dataWithLabels.map(item => item.label),
    datasets: [{
      label: 'Profits',
      data: dataWithLabels.map(item => item.profit),
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 3,
    },
    ],
  };
  const options = {
    animation: {
      duration: 100, // Установить продолжительность анимации на 500 миллисекунд
      easing: 'linear' // Установить значение параметра easing на "linear" для более быстрой анимации
    }, plugins: {
      legend: {
        position: 'bottom'
      }
    }
  };
  return (
    <div className='record'>
      <h1 className="record__titel" onClick={() => { console.log(saleIndicators, data) }}>{nameSection}</h1>
      <div className="record__content">
        <div className="record__list">
          <div className="record__header">{headerList.map((item, index) => <div key={index} className='record__head'>{item}</div>)}</div>
          <div className="record__catalog">
            {data.map((item, index) =>
              <div className='record__row' key={index}>
                <div className="record__cell">{item.name}</div>
                <div className="record__cell">{item.value} ₽</div>
                <div className="record__cell">{item.profit
                } ₽</div>
              </div>
            )}
          </div>
        </div>
        <div className="record__histograms">
          <div className="record__histogram">
            <div className='record__label' onClick={() => { setSelectedHistogramm(!selectedPie) }}>
              {selectedPie ?
                "Распредление по чистой прибыли"
                :
                "Распредление по выручке"
              }
            </div>
            <div className="record__pie">
              {selectedPie ?
                <Pie data={dataForChart} options={options} />
                :
                <Pie data={dataForChart2} options={options} />

              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Record