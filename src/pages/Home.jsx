import React from 'react'
import '../styles/Home.scss'
function Home() {
  return (
    <div className='home'>
      <div className="home__container">
        <div className="home__cards">
          <div className="home__card">Зарегистиривать продажу
          <img src="./assets/images/registration.png" alt="" className='card__image'/>
          </div>
          <div className="home__card">Категории
          <img src="./assets/images/clipboard.png" alt="" className='card__image'/>
          </div>
          <div className="home__card">Поставщики
          <img src="./assets/images/truck.png" alt="" className='card__image'/>
          </div>
          <div className="home__card">Товары
          <img src="./assets/images/boxes.png" alt="" className='card__image'/>
          </div>
          <div className="home__card">Отчеты
          <img src="./assets/images/report.png" alt="" className='card__image'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home