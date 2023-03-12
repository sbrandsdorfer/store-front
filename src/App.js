import './App.css';
import StoreHeader from './components/StoreHeader';
import Products from './components/Products';
import StoreFooter from './components/StoreFooter';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Checkout from './components/Checkout';

function App() {
  let [cartData, setCartData] = useState({});

  return (<main>
    <StoreHeader cartData={cartData}/>
    <Routes>
      <Route path='/' element={<Products cartData={cartData} setCartData={setCartData} />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
    <StoreFooter />
   </main>);
}

export default App;