import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

import moment from 'moment'
import 'moment/dist/locale/pt-br'

moment.locale('pt-br')

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
