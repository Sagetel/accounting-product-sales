import React from 'react'
import '../styles/pages/Home.scss'
import { Link } from 'react-router-dom'
function Home() {

  return (
    <div className='home'>
      <div className="home__container">
        <div className="home__cards">
          <div className="home__card">Зарегистиривать продажу
            <img src="./assets/images/registration.png" alt="" className='card__image' />
          </div>
          <Link to='/category'>
            <div className="home__card">
              Категории
              <img src="./assets/images/clipboard.png" alt="" className='card__image' />
            </div>
          </Link>
          <Link to='/suppliers'>
            <div className="home__card">Поставщики
              <img src="./assets/images/truck.png" alt="" className='card__image' />
            </div>
          </Link>
          <Link to='/products'>
            <div className="home__card">Товары
              <img src="./assets/images/boxes.png" alt="" className='card__image' />
            </div>
          </Link>
          <div className="home__card">Отчеты
            <img src="./assets/images/report.png" alt="" className='card__image' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home