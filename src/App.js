
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Orders from './components/Orders/Orders';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Shipment from './components/Shipment/Shipment';
import Shop from './components/Shop/Shop';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <div>

<Header></Header>
<Routes>
  <Route exact path="/" element={<Shop></Shop>}></Route>
  <Route path="/shop" element={<Shop></Shop>}></Route>
  <Route path="/orders" element={<Orders></Orders>}></Route>
  <Route path="/inventory" element={

    <RequireAuth>
      <Inventory></Inventory>
    </RequireAuth>
  }></Route>
  <Route path="/shipment" element={
    <RequireAuth>
      <Shipment></Shipment>
    </RequireAuth>
  }></Route>
  <Route path="/about" element={<About></About>}></Route>
  <Route path="*" element={<NotFound></NotFound>}></Route>
  <Route path="/login" element={<Login></Login>}></Route>
  <Route path="/signup" element={<Signup></Signup>}></Route>
</Routes>





      {/* <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/orders' element={<Orders></Orders>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes> */}
    </div>
  );
}

export default App;
