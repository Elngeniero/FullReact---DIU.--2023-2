import React from 'react'

import NavBar from '../components/nav_bar'
import PaymentApp from '../payment'
import SimpleForm from '../components/simpleForm'

export const PayPage = () => {
  return (
    <div className='page'>
      <h1 className='page__title'>Comunidad de vecinos</h1>
      <NavBar />
      <h2>Página de Pagos de la Comunidad</h2>
      <SimpleForm/>
    </div>
  )
}

export default PayPage
