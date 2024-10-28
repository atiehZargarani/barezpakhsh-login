import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import Login from './views/Login.jsx'
import "./assets/styles/sass/main.scss"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login />
  </StrictMode>,
)
