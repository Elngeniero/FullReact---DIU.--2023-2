import React from 'react'

import "./home.css"
import Noticia from '../components/Noticia'
import NavBar from '../components/nav_bar'
import PaymentApp from '../payment'

export const HomePage = () => {
  return (
    <div className='page'>
      <h1 className='Titulo'>Comunidad de vecinos</h1>
      <NavBar />
      <h2 className='Titulo'>Noticias</h2>
      <div className='Lista'>
      <Noticia titulo='Alerta: Corte de luz' fecha='22/10'/>
      <Noticia titulo='Aviso: Mañana hay corte de luz' fecha='21/10'/>
      <Noticia titulo='Aviso: ¿Problemas con la luz?' fecha='19/10'/>
      </div>
    </div>
  )
}

export default HomePage
