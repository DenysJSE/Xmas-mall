import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './Global.css'
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <App/>
    <ToastContainer
      position="bottom-center"
      autoClose={1000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable={false}
      pauseOnHover={false}
      theme="dark"
    />
  </>
)
