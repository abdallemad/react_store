import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'react-toastify/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import store from './features/store.js'
import { Provider } from 'react-redux'
import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <Provider store={store}>
    <ToastContainer position='top-center' autoClose={5000}  />
    <App />
  </Provider>
  </>,
)
