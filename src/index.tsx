import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import App from './pages/App'
import reportWebVitals from './reportWebVitals'
import './index.css'
import store from './state'
import { HashRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
