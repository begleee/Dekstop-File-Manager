import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PathProvider from './store/path-context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PathProvider initialPath="C:\">
      <App />
    </PathProvider>
  </StrictMode>,
)
