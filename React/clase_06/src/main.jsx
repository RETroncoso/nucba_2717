import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalStyles from './styles/GlobalStyles'
import { ContextoProvider } from './context/MiContexto'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextoProvider>
      <App />
      <GlobalStyles/>
    </ContextoProvider>
    
  </React.StrictMode>,
)
