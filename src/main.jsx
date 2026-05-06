import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store/store' // <--- Asegurate que este archivo exista en /store
import App from './App' // <--- Esto busca App.jsx en la carpeta src
import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)