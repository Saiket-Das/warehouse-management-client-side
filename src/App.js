import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Pages/Private Pages/Login pages/Login/Login';
import Home from './Components/Pages/Public Pages/Home/Home';
import CarDetails from './Components/Pages/Public Pages/Inventory/Car Details/CarDetails';
import Inventory from './Components/Pages/Public Pages/Inventory/Inventory';
import Header from './Components/Shared/Header/Header';
import Register from './Components/Pages/Private Pages/Login pages/Register/Register';
import NotFound from './Components/Shared/Not Found/NotFound';
import RequireAuth from './Components/Pages/Private Pages/Login pages/Require Auth/RequireAuth';
import ManageItems from './Components/Pages/Private Pages/Manage Items/ManageItems';
import AddNewCar from './Components/Pages/Public Pages/Inventory/AddCar/AddNewCar';
import CheckOut from './Components/Pages/Private Pages/Checkout/Checkout'
import MyOrder from './Components/Pages/Private Pages/My Order List/MyOrder';
import MyItems from './Components/Pages/Private Pages/My Items/MyItems';

function App() {
  return (

    <div className="app">
      <Header></Header>

      <Routes>

        {/* PUBLIC ROUTE  */}
        <Route path='/' element={<Home></Home>}>Home</Route>
        <Route path='/home' element={<Home></Home>}>Home</Route>
        <Route path='/inventory' element={<Inventory></Inventory>}>Imventory</Route>
        <Route path='/inventory/:carId' element={<CarDetails></CarDetails>}>Imventory</Route>




        {/* PROTECTED ROUTE  */}
        <Route path='/manageItems' element={
          <RequireAuth>
            <ManageItems></ManageItems>
          </RequireAuth>}
        ></Route>

        <Route path='/addCar' element={
          <RequireAuth>
            <AddNewCar></AddNewCar>
          </RequireAuth>}
        ></Route>


        <Route path='/checkout/:carId' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>}
        ></Route>

        <Route path='/myOrderList' element={
          <RequireAuth>
            <MyOrder></MyOrder>
          </RequireAuth>}
        ></Route>

        <Route path='/myItems' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>}
        ></Route>


        {/* LOGIN ROUTE  */}
        <Route path='/login' element={<Login></Login>}>Login</Route>
        <Route path='/register' element={<Register></Register>}>Login</Route>



        <Route path='*' element={<NotFound></NotFound>}>Login</Route>

      </Routes>

      <ToastContainer />

    </div >
  );
}

export default App;
