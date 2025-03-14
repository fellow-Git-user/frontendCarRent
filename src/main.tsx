import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import CarRent from './pages/CarRent/CarRent.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import SingleCarRent from './pages/SingleCar/SingleCarRent.tsx'
import Users from './pages/Users/Users.tsx'
import SingleUserDisplay from './pages/SingleUser/SingleUserDisplay.tsx'
import CreateUserPage from './pages/CreateUser/CreateUserPage.tsx'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='rent'>
          <Route index element={<App/>}/>
          <Route path='car-renting' element={<CarRent/>}/>
          <Route path='car-renting/:id' element={<SingleCarRent />}/>

          <Route path='users' element={<Users />}/>
          <Route path='users/:id' element={<SingleUserDisplay />}/>
          <Route path='users/create' element={<CreateUserPage />}/>

        </Route>
      </Routes>
    </BrowserRouter>

  </StrictMode>,
)
