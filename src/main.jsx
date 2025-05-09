import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './assets/Pages/Home/Home.jsx'
import Charts from './assets/Component/DashboardCharts/Charts.jsx'
import Dashboard from './assets/Pages/LastTransaction/Dashboard.jsx'
import Dropdown from './assets/Component/AddBtn/Dropdowncustom.jsx'
import Addbtn from './assets/Component/AddBtn/AddBtn.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
