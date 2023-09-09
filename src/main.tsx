import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
// Toast message
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <BrowserRouter>
  <ToastContainer position='top-right'/>
    <App />
  </BrowserRouter>
  // </React.StrictMode>,
)
