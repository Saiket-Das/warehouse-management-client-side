import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Pages/Public Pages/Home/Home';
import Inventory from './Components/Pages/Public Pages/Inventory/Inventory';
import Header from './Components/Shared/Header/Header';

function App() {
  return (
    <div className="App">

      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}>Home</Route>
        <Route path='/home' element={<Home></Home>}>Home</Route>
        <Route path='/inventory' element={<Inventory></Inventory>}>Imventory</Route>
      </Routes>
    </div>
  );
}

export default App;
