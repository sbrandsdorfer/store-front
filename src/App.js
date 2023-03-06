import './App.css';
import StoreHeader from './components/StoreHeader';
import Products from './components/Products';
import StoreFooter from './components/StoreFooter';
import { useState } from 'react';

function App() {
  let [cartData, setCartData] = useState({});

  return (<main>
    <StoreHeader cartData={cartData}/>
    <Products cartData={cartData} setCartData={setCartData}/>
    <StoreFooter />
   </main>);
}

export default App;