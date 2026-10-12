
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import Profile from './Pages/Profile'
import Login from './Pages/Login'


function App() {
  return(
  <Routes>
    <Route path='/' element={<HomePage/>}/>
     <Route path='/login' element={<Login/>}/>
    <Route path='/profile' element={<Profile/>}/>
  </Routes>  
  )
}
export default App
