import './App.css'
import Login from './pages/Login'

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
      <div className='min-w-[650] max-w-[1280px] m-0 bg-red-500'>
       <Login/>
       <ToastContainer
       position="top-right"
       autoClose={5000}
       hideProgressBar={false}
       newestOnTop={false}
       closeOnClick
       rtl={false}
       pauseOnFocusLoss
       draggable
       pauseOnHover
       theme="light"
       />
      </div>
  )
}

export default App
