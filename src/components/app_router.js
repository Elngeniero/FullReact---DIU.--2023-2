import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home'
import { PayPage } from '../pages/pagos'
import ReservaPage from '../pages/reserva'



const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/pagos' element={<PayPage />} />
        <Route path='/reserva' element={<ReservaPage />} />
      </Routes>
    
    </BrowserRouter>
  )
}

export default AppRouter
