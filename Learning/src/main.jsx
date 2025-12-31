import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ToggleText from './ToggleText.jsx'
import App from './App.jsx'
import Practice from './Practice.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Practice user="Bala"/>
    <ToggleText />
  </StrictMode>,
)
