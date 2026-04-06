  import { useState } from 'react'
  import './App.css'
  import Login from './Pages/login'
  import Register from './Pages/Register'
  import Home from './Pages/Home'
  import {BrowserRouter,Navigate,Route,Routes} from 'react-router-dom';


  function App() {
    const [count, setCount] = useState(0)

    return (
      <BrowserRouter>

        <Routes>

          <Route  path='/' element={<Navigate to = '/login' />}/>
          <Route  path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>} />
          <Route path='/home' element={<Home/>} />

        </Routes>
      
      
      </BrowserRouter>
    )
  }

  export default App
