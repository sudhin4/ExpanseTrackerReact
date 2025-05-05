import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './assets/Pages/Home/Home.jsx'
import Upcomingpayment from './assets/Component/UpcomingPayment/UpcomingPayment.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
