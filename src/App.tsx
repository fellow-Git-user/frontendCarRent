import './App.css'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router'
import CarRent from './pages/CarRent/CarRent.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import SingleCarRent from './pages/SingleCar/SingleCarRent.tsx'
import Users from './pages/Users/Users.tsx'
import SingleUserDisplay from './pages/SingleUser/SingleUserDisplay.tsx'
import CreateUserPage from './pages/CreateUser/CreateUserPage.tsx'
import LoginPage from './pages/LoginPage/LoginPage.tsx'
import RegisterPage from './pages/RegisterPage/RegisterPage.tsx'
import ProfilePage from './pages/ProfilePage/ProfilePage.tsx'
import LogoutButton from './components/buttons/logoutButton.tsx'
import React from 'react';
import HomePage from './pages/HomePage/HomePage.tsx';
import { useAuth } from './AuthContext.tsx';




function App() {
  const { token } = useAuth()
  console.log("🚀 ~ App ~ token:", token)


  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li> <NavLink to={'/home'}>Home</NavLink> </li>
          {!token && (
            <>
              <li> <NavLink to={'/home/login'}>login </NavLink> </li>
              <li> <NavLink to={'/home/register'}>register </NavLink> </li>
            </>
          )}
          <li> <NavLink to={'/home/profile'}> profile </NavLink> </li>
            {token && <li> <LogoutButton /> </li>}
          
        </ul>
      </nav>

      <Routes>
        <Route path='home'>
          <Route index element={<HomePage/>}/>
          <Route path="login" element={ <LoginPage />} />
          <Route path="register" element={ <RegisterPage />} />
          <Route path="profile" element={ <ProfilePage />} />
        </Route>

        <Route path='rent'>

          <Route path='car-renting' element={<CarRent/>}/>
          <Route path='car-renting/:id' element={<SingleCarRent />}/>

          <Route path='users' element={<Users />}/>
          
          <Route path='users/:id' element={<SingleUserDisplay />}/>
          <Route path='users/create' element={<CreateUserPage />}/>

        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
