import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home'
import { PayPage } from '../pages/pagos'



const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/pagos' element={<PayPage />} />
      </Routes>
    
    </BrowserRouter>
  )
}

export default AppRouter
