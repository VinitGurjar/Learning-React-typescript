import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  /*buildin component in react its purpose is to identify potentoial problem */
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
