import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './assets/Pages/Home/Home.jsx'
import Charts from './assets/Component/DashboardCharts/Charts.jsx'
import Dashboard from './assets/Pages/LastTransaction/Dashboard.jsx'

import { Typelist } from './assets/Component/TypeList/TypeList.jsx'
import Choosetypelist from './assets/Component/TypeList/TypelistMapfull.jsx'
import Newaddbtn_ from './assets/Component/NewAddbtn_design/Newaddtn.jsx'

import TypelistmapFull from './assets/Component/TypeList/TypelistMapfull.jsx'
import CategoryDropdown, { CategoryDropdowncontent } from './assets/Component/Categorydropdown/CategoryDropdown.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
