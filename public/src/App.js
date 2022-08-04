import React from 'react'
import {BrowserRouter,Routes,Route, Router} from 'react-router-dom';
import Login from './componets/Login/Login';
import Register from './componets/Register/Register';
import AddIncubator from './Pages/AddIncubator';
import AdminLogin from './componets/AdminLogin/AdminLogin'
import AdminHome from './componets/AdminHome/AdminHome'
import ManagePullRequst from './componets/AdminHome/AdminHome'
import ViewApplication from './componets/ViewApplication/ViewApplication'
import UserViewApplication from './componets/UserViewApplication/ViewApplication'
import Context from './Stor/TokenContext'

import Slots from './componets/Slots/Slot'
import Home from './Pages/Home'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <BrowserRouter>
    <Context>
    <Routes>
      <Route exact path='/register' element={<Register/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/AddIncubator' element={<AddIncubator/>}/>
      <Route exact path='/adminlogin' element={<AdminLogin/>}/>
      <Route path='/admin' element={<ManagePullRequst/>}/>
      <Route path='/admin/slots' element={<Slots/>}/>
      <Route path='/admin/viewApplication' element={<ViewApplication/>}/>
      <Route path='/viewApplication' element={<UserViewApplication/>}/>
    </Routes>
    </Context>
    </BrowserRouter>

  )
}

export default App