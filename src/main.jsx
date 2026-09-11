import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


import React from 'react'
export default function Main({ currentTitle }) {
  let title = document.getElementById('title')
  title.textContent = currentTitle;
}
