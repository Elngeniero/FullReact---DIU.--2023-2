import React from 'react'

import NavBar from '../components/nav_bar'

export const Noticia1Page = () => {
  return (
    <div className='page'>
      <h1 className='page__title'>Comunidad de vecinos</h1>
      <NavBar />
      <h2 className='Titulo'>Aviso: ¿Problemas con la luz?</h2>
    </div>
  )
}

export const Noticia2Page = () => {
  return (
    <div className='page'>
      <h1 className='page__title'>Comunidad de vecinos</h1>
      <NavBar />
      <h2 className='Titulo'>Aviso: Mañana hay corte de luz</h2>
    </div>
  )
}

export const Noticia3Page = () => {
  return (
    <div className='page'>
      <h1 className='page__title'>Comunidad de vecinos</h1>
      <NavBar />
      <h2 className='Titulo'>Alerta: Corte de luz</h2>
    </div>
  )
}

export default Noticia1Page

