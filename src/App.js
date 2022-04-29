import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Pages/Private Pages/Login pages/Login/Login';
import Home from './Components/Pages/Public Pages/Home/Home';
import CarDetails from './Components/Pages/Public Pages/Inventory/Car Details/CarDetails';
import Inventory from './Components/Pages/Public Pages/Inventory/Inventory';
import Header from './Components/Shared/Header/Header';
import Register from './Components/Pages/Private Pages/Login pages/Register/Register';

function App() {
  return (
    <div className="app">

      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}>Home</Route>
        <Route path='/home' element={<Home></Home>}>Home</Route>
        <Route path='/inventory' element={<Inventory></Inventory>}>Imventory</Route>

        <Route path='/inventory/:carId' element={<CarDetails></CarDetails>}>Imventory</Route>



        <Route path='/login' element={<Login></Login>}>Login</Route>
        <Route path='/register' element={<Register></Register>}>Login</Route>

      </Routes>


      <ToastContainer></ToastContainer>
    </div >
  );
}

export default App;
