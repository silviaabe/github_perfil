import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './global.css';

// import {PI as numeroPi, GTM_BRASIL} from './teste.js'
// import xpto from './nomes.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* {numeroPi}
    {GTM_BRASIL} */}
    <App />
  </React.StrictMode>,
)
