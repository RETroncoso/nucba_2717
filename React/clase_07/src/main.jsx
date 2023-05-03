import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CountContextProvider } from './context/CountContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CountContextProvider>
      <App />
    </CountContextProvider>
    
  </React.StrictMode>,
)
