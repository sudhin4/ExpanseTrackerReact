import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './assets/Pages/Home/Home.jsx'
import Upcomingpayment from './assets/Component/UpcomingPayment/UpcomingPayment.jsx'
import LastTransactionheading from './assets/Component/Lasttransaction/LastTransaction.jsx'
import { DataInLastTransaction } from './assets/Component/Lasttransaction/LastTransaction.jsx'
import MenuBar from './assets/Component/LeftTaskbar/MenuBar.jsx'
import Header from './assets/Component/Header/Header.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
